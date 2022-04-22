class Shoots {
  shoot() {
    const app = document.querySelector('#app');
    let gameField = document.querySelector('.harry-potter');
    gameField.innerHTML = '';
    let harryCell = harry.findHarry(matrix);
    let isKill = false;

    for (let y = 14; y >= 0; y--) {
      if (matrix[y][harryCell.x].isVolan) {
        matrix[y][harryCell.x].isVolan = false;
        isKill = true;
        game.updateScore();
        break;
      }
    }

    if (isKill) {
      gameField = render.uploadField(gameField);
      app.append(gameField);
    } else {
      render.renderField();
    }
  }

  shootMine() {
    const app = document.querySelector('#app');
    let gameField = document.querySelector('.harry-potter');
    let harryCell = harry.findHarry(matrix);
    let volanCell = null;
    let aroundCells = null;
    let isExist = false;

    for (let y = 14; y >= 0; y--) {
      if (matrix[y][harryCell.x].isVolan) {
        volanCell = matrix[y][harryCell.x];
        volanCell.isVolan = false;
        isExist = true;
        break;
      }
    }

    if (isExist) {
      gameField.innerHTML = '';
      aroundCells = matrixUtils.getAroundCells(
        matrix,
        volanCell.y,
        volanCell.x
      );

      aroundCells.forEach((cell) => {
        if (cell.isVolan) {
          cell.isVolan = false;
          game.updateScore();
        }
      });

      gameField = render.uploadField(gameField);
      app.append(gameField);
    }
  }
}
