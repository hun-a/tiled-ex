export default class Player extends Phaser.Physics.Matter.Sprite {

  constructor(data) {
    const { scene, x, y, texture, frame } = data;
    super(scene.matter.world, x, y, texture, frame);
    this.scene.add.existing(this);
  }

  static preload(scene) {
    scene.load.atlas('knight', 'assets/images/knight.png', 'assets/images/knight_atlas.json');
    scene.load.animation('knight_anim', 'assets/images/knight_anim.json');
  }

  get velocity() {
    return this.body.velocity;
  }

  update() {
    console.log('update');
    const speed = 2.5;
    let playerVelocity = new Phaser.Math.Vector2();

    if (this.inputKeys.left.isDown) {
      playerVelocity.x = -1;
    } else if (this.inputKeys.right.isDown) {
      playerVelocity.x = 1;
    }
    
    if (this.inputKeys.up.isDown) {
      playerVelocity.y = -1;
    } else if (this.inputKeys.down.isDown) {
      playerVelocity.y = 1;
    }

    playerVelocity.normalize();
    playerVelocity.scale(speed);
    this.setVelocity(playerVelocity.x, playerVelocity.y);

    if (Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1) {
      this.anims.play('knight_walk', true);
    } else {
      this.anims.play('knight_idle', true);
    }
  }
}