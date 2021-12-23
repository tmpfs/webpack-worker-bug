import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  console.log("App is rendering...");
  if (window.Worker) {
    console.log("Creating worker...");
    const worker = window.Worker
      ? new Worker(new URL("./worker.ts", import.meta.url))
      : null;

    return (
      <>
        <h1>Worker view</h1>
        <p>Sometimes a worker is instantiated twice, it may not be the first time the page loads. Refresh the page and inspect the console output.</p>
      </>
    );
  } else {
    return <p>Your browser does not support web workers.</p>;
  }
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("main")
);
