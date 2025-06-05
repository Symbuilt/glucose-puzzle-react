import React, { useState } from "react";
import Cell from "./Cell";
import { validateBoard, isGlucoseLine } from "./utils";

const initialBoard = Array(5).fill(null).map(() => Array(5).fill(""));

export default function Grid() {
  const [board, setBoard] = useState(initialBoard);
  const [counts, setCounts] = useState({ P: 0, ...Object.fromEntries(Array(8).fill(0).map((_, i) => [i, 0])) });

  const updateCell = (row, col, value) => {
    const current = board[row][col];
    if (current === value) return;
    if (value === "P" && counts["P"] >= 1) return;
    if (!["", "P"].includes(value) && counts[value] >= 4) return;

    const newBoard = board.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? value : cell))
    );

    const newCounts = { ...counts };
    if (current !== "") newCounts[current]--;
    if (value !== "") newCounts[value] = (newCounts[value] || 0) + 1;

    setBoard(newBoard);
    setCounts(newCounts);
  };

  const isValid = validateBoard(board);
  const glucoseMatch = isGlucoseLine(board);

  return (
    <div>
      <div className="grid">
        {board.map((row, i) =>
          row.map((cell, j) => (
            <Cell key={`${i}-${j}`} value={cell} onChange={(val) => updateCell(i, j, val)} />
          ))
        )}
      </div>
      <div className="status">
        <p>{isValid ? "✅ Valid so far!" : "❌ Check for duplicates or count limits"}</p>
        <p>{glucoseMatch ? "🧬 Glucose formula matched!" : "⏳ Keep going..."}</p>
      </div>
    </div>
  );
}