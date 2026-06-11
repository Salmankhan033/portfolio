import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Wallet extensions (e.g. MetaMask) inject scripts into every tab and may throw
// if the extension is missing or disconnected. This site does not use Web3.
function isWalletExtensionNoise(reason) {
  const message = String(reason?.message || reason || "");
  const stack = String(reason?.stack || "");
  return (
    /metamask/i.test(message) ||
    /extension not found/i.test(message) ||
    /failed to connect to metamask/i.test(message) ||
    /inpage\.js/.test(stack)
  );
}

window.addEventListener("unhandledrejection", (event) => {
  if (isWalletExtensionNoise(event.reason)) {
    event.preventDefault();
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
