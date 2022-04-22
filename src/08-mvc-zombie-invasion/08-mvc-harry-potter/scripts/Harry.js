class Harry {
  findHarry(matrix) {
    let harryCell = null;

    for (let x = 0; x < 7; x++) {
      if (matrix[14][x].isHarry) {
        harryCell = matrix[14][x];
        continue;
      }
    }

    return harryCell;
  }

  moveHarry(key, matrix) {
    const gameField = document.querySelector('.harry-potter');
    const lastRow = gameField.lastChild;
    let harryCell = matrix[14][3];

    gameField.removeChild(lastRow);

    if (!harryCell.isHarry) {
      for (let x = 0; x < 7; x++) {
        matrix[14][x].isHarry
          ? (harryCell = matrix[14][x])
          : (harryCell = harryCell);
      }
    }

    if (key === 'ArrowLeft' && harryCell.x !== 0) {
      harryCell.isHarry = false;
      matrix[14][harryCell.x - 1].isHarry = true;
    }

    if (key === 'ArrowRight' && harryCell.x !== 6) {
      harryCell.isHarry = false;
      matrix[14][harryCell.x + 1].isHarry = true;
    }

    const rowElement = document.createElement('div');
    rowElement.classList.add('row');

    for (let x = 0; x < 7; x++) {
      const cell = matrix[14][x];
      const imgElement = document.createElement('img');
      imgElement.draggable = false;
      imgElement.oncontextmenu = () => false;
      imgElement.setAttribute('id', cell.id);
      rowElement.append(imgElement);

      if (cell.isHarry) {
        imgElement.src = './assets/harry.png';
      }

      gameField.append(rowElement);
    }
  }
}
