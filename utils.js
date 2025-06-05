export function validateBoard(board) {
  const rows = board;
  const cols = board[0].map((_, i) => board.map(row => row[i]));
  const diagonals = [
    board.map((r, i) => r[i]),
    board.map((r, i) => r[board.length - 1 - i])
  ];

  const check = (line) => {
    const nums = line.filter(x => x !== "" && x !== "P");
    return new Set(nums).size === nums.length;
  };

  return [...rows, ...cols, ...diagonals].every(check);
}

export function isGlucoseLine(board) {
  const lines = [
    ...board,
    ...board[0].map((_, i) => board.map(row => row[i])),
    [0, 1, 2, 3, 4].map(i => board[i][i]),
    [0, 1, 2, 3, 4].map(i => board[i][4 - i])
  ];

  for (let line of lines) {
    const nums = line.filter(x => x !== "P" && x !== "").map(Number);
    if (nums.length === 5 && nums[0] + nums[1] === 6 && nums[2] + nums[3] === 12 && nums[4] === 6) {
      return true;
    }
  }
  return false;
}