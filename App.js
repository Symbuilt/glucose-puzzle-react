import React, { useState } from "react";
import Grid from "./Grid";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <h1>Glucose Puzzle: C₆H₁₂O₆</h1>
      <Grid />
    </div>
  );
}