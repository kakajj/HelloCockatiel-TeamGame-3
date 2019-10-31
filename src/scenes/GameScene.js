var background
var platforms
class GameScene extends Phaser.Scene{

    constructor(){
        super({
            key: 'GameScene'
        })
    }

    preload(){
            this.load.image('sky','images/sky.png');
            this.load.image('glass','images/glass.png');
    }
    
    create(){
            background = this.add.image(0,0,'sky').setOrigin(0).setScale(3)
            platforms = this.physics.add.staticGroup();

            platforms.create(300, 750, 'glass').setScale(3).refreshBody();
    }

    update(delta, time){
         
    }

}
export default GameScene