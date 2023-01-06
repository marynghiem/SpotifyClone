import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";

function App() {
  useEffect(() => {
    const token = getTokenFromUrl();
    console.log("I HAVE A TOKEN:", token);
  }, []);

  return (
    <div className="app">
      {/* Spotify Logo*/}
      {/* Login with spotify button*/}
      <Login />
    </div>
  );
}

export default App;
