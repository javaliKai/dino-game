// alert("Hello From Script");
class GameScene extends Phaser.Scene {
  init() {}
  // load assets
  preload() {}
  // create game entities
  create() {}
  gameOver() {}
  spawnBird() {}
  generateBird(y) {}
  spawnPlant() {}
  generatePlant(scale) {}
  handleScore() {}
  animation() {}
  update() {}
  handleInput() {}
  updateGround() {}
  addBase(x) {}
  addTile(x, y) {}
}
class TitleScene extends Phaser.Scene {
  preload() {}
  create() {}

  addBase(x) {}
  addTile(x, y) {}
}
class RestartScene extends Phaser.Scene {
  preload() {}
  create() {}

  addBase(x) {}
  addTile(x, y) {}
}
let config = {
  width: 800,
  height: 500,
  backgroundColor: '0xffe6cc',
  type: Phaser.AUTO,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 0,
      },
      debug: false,
    },
  },
};
const game = new Phaser.Game(config);

game.scene.add('game', GameScene);
game.scene.add('title', TitleScene);
game.scene.add('restart', RestartScene);
// game.scene.start("game");
game.scene.start('title');
