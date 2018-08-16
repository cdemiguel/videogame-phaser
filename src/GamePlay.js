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
        this.horse = game.add.sprite(0, 0, 'horse');
        this.horse.frame = 0;
        this.horse.x = game.width/2;
        this.horse.y = game.height/2;
        // centrar el anchor del sprite en el centro// se añade un ancla en el centro del sprite
        // como un punto, y todas las acciones del sprite se hacen a partir de ahi
        this.horse.anchor.setTo(0,5);
        // // podemos escalar tb 
        // this.horse.scale.setTo(1,2)
        // // podemos setear el alpha
        // this.horse.alpha = 0; // invisible // 1 visible
    },
    // frame a frame llama al metodo
    update: function() {

    }
}

// en phaser guardamos la instancia de nuestro juergo
// pasando width, height y el tipo de render webgl (targeta video, canvas, auto-primero webgl y sino canvas-)
var game = new Phaser.Game(1136, 640, Phaser.CANVAS)

// añadimos estado nombre de instancia y lo asignamos a un ombeto
game.state.add('gameplay', GamePlayManager);
game.state.start('gameplay');