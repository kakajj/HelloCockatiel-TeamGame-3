<<<<<<< HEAD
var background
var platforms
=======
let keyW,keyA,keyS,keyD
let player
>>>>>>> Reward
class GameScene extends Phaser.Scene{

    constructor(){
        super({
            key: 'GameScene'
        })
    }

    preload(){
<<<<<<< HEAD
            this.load.image('sky','images/sky.png');
            this.load.image('glass','images/glass.png');
    }
    
    create(){
            background = this.add.image(0,0,'sky').setOrigin(0).setScale(3)
            platforms = this.physics.add.staticGroup();
=======
        this.load.image('Player','../../images/Gokuตัดเองจ้า.png',{frameWidth :384 ,frameHeight:216})

    }
    
    create(){
        player = this.physics.add.image(384,216,'Player').setSize(800,600).setScale(0.2).setCollideWorldBounds(true);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
>>>>>>> Reward

            platforms.create(300, 750, 'glass').setScale(3).refreshBody();
    }

    update(){
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