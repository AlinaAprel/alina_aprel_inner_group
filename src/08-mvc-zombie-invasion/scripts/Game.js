class Game {
  startGame() {
    location.reload();
  }

  gameOver() {
    render.renderPopup(score);
    clearInterval(renderFieldInterval);
    clearInterval(renderBombInterval);
    document.querySelector('#app').style.display = 'none';
    document.querySelector('.popup').style.display = 'block';
    isPlaying = false;
  }

  updateScore() {
    const gameUtils = document.querySelector('.utils');
    const gameScore = document.querySelector('.score');
    gameScore.innerHtml = '';

    score += 10;
    gameScore.textContent = `score: ${score}`;

    if (score % 200 === 0 && delay > 1000) {
      delay -= delay * 0.1;
      console.log(delay);
    }

    gameUtils.append(gameScore);
  }
}
