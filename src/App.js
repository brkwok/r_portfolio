import React from "react";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Error from "./routes/Error";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Home />
    </main>
  );
}
