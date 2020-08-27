import Player from './Knight.js';
import Knight from './Knight.js';

export default class MainScene extends Phaser.Scene {

  constructor() {
    super('MainScene');
  }

  preload() {
    Knight.preload(this);
    this.load.image('tiles', 'assets/images/RPG Nature Tileset.png');
    this.load.tilemapTiledJSON('map', 'assets/images/map.json');
  }

  create() {
    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('RPG Nature Tileset', 'tiles', 32, 32, 0, 0);
    const layer1 = map.createStaticLayer('Tile Layer 1', tileset, 0, 0);
    const layer2 = map.createStaticLayer('Tile Layer 2', tileset, 0, 0);
    const layer3 = map.createStaticLayer('Tile Layer 3', tileset, 0, 0);
    layer1.setCollisionByProperty({ collides: true });
    layer3.setCollisionByProperty({ collides: true });
    this.matter.world.convertTilemapLayer(layer1);
    this.matter.world.convertTilemapLayer(layer3);
    this.player = new Knight({ scene: this, x: 100, y: 100, texture: 'knight', frame: 'eliteknight_idle_1' });
    const testPlayer = new Knight({ scene: this, x: 200, y: 200, texture: 'knight', frame: 'eliteknight_idle_1' });
  }

  update() {
    this.player.update();
  }
}