const matrixUtils = new Matrix();
const harry = new Harry();
const game = new Game();
const render = new Render();
const shoots = new Shoots();

const matrix = matrixUtils.getMatrix(7, 15);
let delay = 4000;
let loadingWidth = 0;
let score = 0;
let isReadyToShoot = false;
let isPlaying = true;


document.addEventListener('keydown', (event) => {
	if (event.key === 'ArrowLeft') {
		harry.moveHarry(event.key, matrix);
	}

	if (event.key === 'ArrowRight') {
		harry.moveHarry(event.key, matrix);
	}

	if (event.code === 'Space') {
		shoots.shoot();
	}

	if (event.code === 'Enter' && isReadyToShoot && isPlaying) {
		shoots.shootMine();
		game.updateScore();
		loadingWidth = 0;
	}

	if (event.code === 'Enter' && !isPlaying) {
		game.startGame();
	}
});

render.renderAll();

const renderFieldInterval = setInterval(() => {
	render.renderField();
}, delay);

const renderBombInterval = setInterval(() => {
	render.renderBomb();
}, 1000);
