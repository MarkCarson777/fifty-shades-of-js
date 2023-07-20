const express = require("express");
const dotenv = require("dotenv");

const app = express();
const PORT = 8000;

dotenv.config();

// var spotify_client_id = process.env.SPOTIFY_CLIENT_ID
// var spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET

app.get("/auth/login", (req, res) => {});

app.get("/auth/callback", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
