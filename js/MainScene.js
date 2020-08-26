import Player from './Player.js';

export default class MainScene extends Phaser.Scene {

  constructor() {
    super('MainScene');
  }

  preload() {
    Player.preload(this);
  }

  create() {
    console.log('create');
    this.player = new Player({ scene: this, x: 0, y: 0, texture: 'knight', frame: 'eliteknight_idle_1' });
    const testPlayer = new Player({ scene: this, x: 100, y: 100, texture: 'knight', frame: 'eliteknight_idle_1' });
  }

  update() {
    this.player.update();
  }
}