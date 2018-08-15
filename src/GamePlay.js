
GamePlayManager = {

    init: function() {

    },
    // carga recursos
    preload: function() {

    },
    // utiliza recursos
    create: function() {

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