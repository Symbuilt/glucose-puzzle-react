import React from "react";

export default function Cell({ value, onChange }) {
  const handleClick = () => {
    const options = ["", ...Array(8).fill().map((_, i) => i.toString()), "P"];
    const index = options.indexOf(value);
    const next = options[(index + 1) % options.length];
    onChange(next);
  };

  return (
    <div className="cell" onClick={handleClick}>
      {value}
    </div>
  );
}