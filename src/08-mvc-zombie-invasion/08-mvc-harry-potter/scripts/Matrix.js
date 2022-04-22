class Matrix {
  getRandomIndexes() {
    const array = [];
    const amount = Math.random() * (6 - 2) + 2;

    for (let i = 0; i < amount; i++) {
      const index = Math.floor(Math.random() * (7 - 0) + 0);

      if (!array.includes(index)) {
        array.push(index);
      }
    }

    return array;
  }

  getMatrix(columns, rows) {
    const matrix = [];
    let idCounter = 1;

    for (let y = 0; y < rows; y++) {
      const row = [];
      for (let x = 0; x < columns; x++) {
        row.push({
          id: idCounter++,
          x,
          y,
          isVolan: false,
          isHarry: false,
        });
      }

      matrix.push(row);
    }

    return matrix;
  }

  getCell(matrix, y, x) {
    if (!matrix[y] || !matrix[y][x]) return false;

    return matrix[y][x];
  }

  getAroundCells(matrix, y, x) {
    const cells = [];

    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        if (dx === 0 && dy === 0) {
          continue;
        }

        const cell = this.getCell(matrix, y + dy, x + dx);

        if (cell) {
          cells.push(cell);
        }
      }
    }

    return cells;
  }
}
