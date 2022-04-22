class Render {
  renderAll() {
    const indexes = matrixUtils.getRandomIndexes();
    const game = document.querySelector('#app');
    const gameField = document.createElement('div');
    gameField.classList.add('harry-potter');

    for (let y = 0; y < matrix.length; y++) {
      const rowElement = document.createElement('div');
      rowElement.classList.add('row');

      for (let x = 0; x < matrix[y].length; x++) {
        const cell = matrix[y][x];
        const imgElement = document.createElement('img');
        imgElement.draggable = false;
        imgElement.oncontextmenu = () => false;
        imgElement.setAttribute('id', cell.id);
        rowElement.append(imgElement);

        indexes.forEach((index) => {
          matrix[0][index].isVolan = true;
        });

        if (y === 14 && x === 3) {
          cell.isHarry = true;
          imgElement.src = './assets/harry.png';
        }

        if (cell.isVolan) {
          imgElement.src = './assets/volan.png';
        }
      }

      gameField.append(rowElement);
    }

    const gameUtils = document.createElement('div');
    gameUtils.classList.add('utils');

    const gameScore = document.createElement('div');
    gameScore.classList.add('score');
    gameScore.textContent = '0 points';

    const gameBomb = document.createElement('div');
    gameBomb.classList.add('bomb');
    gameBomb.textContent = 'bomb';

    const loader = document.createElement('div');
    loader.classList.add('loader');

    const loading = document.createElement('div');
    loading.classList.add('loading');

    loader.append(loading);
    gameBomb.append(loader);
    gameUtils.append(gameBomb);
    gameUtils.append(gameScore);

    game.append(gameField);
    game.append(gameUtils);
  }

  renderBomb() {
    const loading = document.querySelector('.loading');
    const bomb = document.querySelector('.bomb');

    if (loadingWidth < 40) {
      loadingWidth += 4;
      loading.style.width = loadingWidth + 'px';
      isReadyToShoot = false;
      bomb.style.backgroundColor = '#773838';
    } else {
      isReadyToShoot = true;
      bomb.style.backgroundColor = '#A55B5B';
    }
  }

  renderPopup(score) {
    const body = document.querySelector('body');
    const popup = document.createElement('div');
    popup.classList.add('popup');

    const popupCard = document.createElement('div');
    popupCard.classList.add('popup__card');

    const popupTitle = document.createElement('h1');
    popupTitle.classList.add('popup__title');
    popupTitle.textContent = `your score: ${score}`;

    const popupDescription = document.createElement('p');
    popupDescription.classList.add('popup__description');
    popupDescription.textContent = 'press ENTER to restart the game';

    popupCard.append(popupTitle);
    popupCard.append(popupDescription);
    popup.append(popupCard);
    body.append(popup);
  }

  renderField() {
    const app = document.querySelector('#app');
    let gameField = document.querySelector('.harry-potter');
    const arrayOfCells = [];

    // очищаем игровое поле
    gameField.innerHTML = '';
    const arrayOfindexes = matrixUtils.getRandomIndexes();

    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x].isVolan) {
          arrayOfCells.push(matrix[y][x]);
        }
      }
    }

    // смена флагов
    for (let i = arrayOfCells.length - 1; i >= 0; i--) {
      arrayOfCells[i].isVolan = false;
      if (arrayOfCells[i].y === 13) {
        game.gameOver();
      }
      matrix[arrayOfCells[i].y + 1][arrayOfCells[i].x].isVolan = true;
    }

    arrayOfindexes.forEach((index) => {
      matrix[0][index].isVolan = true;
    });

    // создаем на основании новых флагов новую доску
    gameField = this.uploadField(gameField);

    app.append(gameField);
  }

  uploadField(gameField) {
    for (let y = 0; y < matrix.length; y++) {
      const rowElement = document.createElement('div');
      rowElement.classList.add('row');

      for (let x = 0; x < matrix[y].length; x++) {
        const cell = matrix[y][x];
        const imgElement = document.createElement('img');
        imgElement.draggable = false;
        imgElement.oncontextmenu = () => false;
        imgElement.setAttribute('id', cell.id);
        rowElement.append(imgElement);

        if (cell.isVolan) {
          imgElement.src = './assets/volan.png';
          continue;
        }

        if (cell.isHarry) {
          imgElement.src = './assets/harry.png';
          continue;
        }
      }

      gameField.append(rowElement);
    }

    return gameField;
  }
}
