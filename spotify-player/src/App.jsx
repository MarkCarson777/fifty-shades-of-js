import { useState, useEffect } from "react";

import "./App.css";

export function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    async function getToken() {
      const response = await fetch("/token");
      console.log(response);
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();
  }, []);

  console.log("token", token);

  return <>Spotify Player</>;
}
