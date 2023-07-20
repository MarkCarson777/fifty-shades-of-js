const express = require("express");
const dotenv = require("dotenv");

const app = express();
const PORT = 8000;

dotenv.config();

// var spotify_client_id = process.env.SPOTIFY_CLIENT_ID
// var spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET
const spotify_client_id = process.env.SPOTIFY_CLIENT_ID;

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let text = "";

  for (var i = 0; i < length; i++) {
    text += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return text;
}

app.get("/auth/login", (req, res) => {
  var scope =
    "streaming \
               user-read-email \
               user-read-private";

  var state = generateRandomString(16);

  var auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: spotify_client_id,
    scope: scope,
    redirect_uri: "http://localhost:5173/auth/callback",
    state: state,
  });

  res.redirect(
    "https://accounts.spotify.com/authorize/?" +
      auth_query_parameters.toString()
  );
});

app.get("/auth/callback", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
