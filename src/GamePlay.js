GamePlayManager = {

    init: function() {
        // el juego escale en panalla
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        // alinear al centro el juego
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    // carga recursos
    preload: function() {
        // cargar img background
        game.load.image('background', '../assets/images/background.png');
        // utilizar sprites se carga primero (utilizando diciendo a phaser que es un sprite)
        // 84 la mitad en px de las dos partes, alto, 2 img en un sprite
        game.load.spritesheet('horse', '../assets/images/horse.png', 84, 156, 2);
    },
    // utiliza recursos
    create: function() {
        // se printa la imagen posicion 0/0 y nombre de la img cargada
        game.add.sprite(0, 0,'background');
        // añadimos el caballo de mar
        // ademas guardamos la instancia horse y que este dentro del objeto gameplaymanager
        //podemos guardar instancia de nuestro sprite
        var horse = new this.Horse(1);
        console.log(horse.frame)
        horse = game.add.sprite(0, 0, 'horse');
        horse.x = game.width/2;
        horse.y = game.height/2;



        // this.horse = game.add.sprite(0, 0, 'horse');
        // this.horse.frame = 0;
        // this.horse.x = game.width/2;
        // this.horse.y = game.height/2;

    },
    // frame a frame llama al metodo
    update: function() {

    },
    Horse: function (frame){
        this.frame = frame
    }
}

// en phaser guardamos la instancia de nuestro juergo
// pasando width, height y el tipo de render webgl (targeta video, canvas, auto-primero webgl y sino canvas-)
var game = new Phaser.Game(1136, 640, Phaser.CANVAS)

// añadimos estado nombre de instancia y lo asignamos a un ombeto
game.state.add('gameplay', GamePlayManager);
game.state.start('gameplay');