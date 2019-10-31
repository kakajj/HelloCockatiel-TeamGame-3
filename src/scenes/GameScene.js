let bg
let player
let keyW,keyA,keyS,keyD
class GameScene extends Phaser.Scene{

    constructor(){
        super({
            key: 'GameScene'
        })
    }

    preload(){
            this.load.image('bg','..images/sky.png')
            this.load.image('player','../images/Gokuตัดเองจ้า.png')
    }
    
    create(){
        bg = this.add.tileSprite(0, 0, 384, 216, 'bg').setOrigin(0, 0).setSize(800, 600).setScale(2.8)
        player = this.physics.add.image(384, 216, 'player').setSize(400, 300).setScale(0.2).setCollideWorldBounds(true)
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    }

    update(){
        bg.tilePositionX -= 1
        {
            if (keyA.isDown) {
                player.setVelocityX(-500)
            } else if (keyD.isDown) {
                player.setVelocityX(500)
            } else if (keyS.isDown) {
                player.setVelocityY(+330)
            } if (keyW.isDown) {
                player.setVelocityY(-330)
            }
        }
    }

}
export default GameScene