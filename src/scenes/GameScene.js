let player
class GameScene extends Phaser.Scene{

    constructor(){
        super({
            key: 'GameScene'
        })
    }

    preload(){
        this.load.image('Player','../../images/Gokuตัดเองจ้า.png',{frameWidth :384 ,frameHeight:216})

    }
    
    create(){
         player = this.physics.add.image(384,216,'Player').setScale(0.3).setSize(0.3)

    }

    update(delta, time){
         
    }

}
export default GameScene