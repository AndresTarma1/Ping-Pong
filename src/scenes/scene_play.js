import Palas from "../gameObjects/palas.js";
class Scene_play extends Phaser.Scene {
    constructor(){
        super({key: "Scene_play"});
    }

    create(){

        let center_width = this.sys.game.config.width/2;
        let center_height = this.sys.game.config.height/2; 
        //Separador
        this.add.image( center_width, center_height, "separador");

        //palas
        this.izquierda = new Palas(this, 30, center_height, "izquierda");
        this.derecha = new Palas(this, center_width * 2 - 30, center_height, "derecha");

        //bola
        this.physics.world.setBoundsCollision(false, false, true, true);
        this.ball = this.physics.add.image(center_width, center_height, "ball");
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setVelocityX(-180);

        //fisicas
        this.physics.add.collider(this.ball, this.izquierda,this.chocaPala , null, this);
        this.physics.add.collider(this.ball, this.derecha,this.chocaPala , null, this);
    }

    chocaPala(){

    }
}

export default Scene_play;