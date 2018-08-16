var AMOUNT_DIAMONDS = 30;

GamePlayManager = {
  init: function() {
    // el juego escale en panalla
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    // alinear al centro el juego
    game.scale.pageAlignHorizontally = true
    game.scale.pageAlignVertically = true

    this.flagFirstMouseDown = false
  },
  // carga recursos
  preload: function() {
    // cargar img background
    game.load.image("background", "../assets/images/background.png")
    // utilizar sprites se carga primero (utilizando diciendo a phaser que es un sprite)
    // 84 la mitad en px de las dos partes, alto, 2 img en un sprite
    game.load.spritesheet("horse", "../assets/images/horse.png", 84, 156, 2)

    game.load.spritesheet("diamonds", "../assets/images/diamonds.png", 81, 84, 4)

  },
  // utiliza recursos
  create: function() {
    // se printa la imagen posicion 0/0 y nombre de la img cargada
    game.add.sprite(0, 0, "background")
    // añadimos el caballo de mar
    // ademas guardamos la instancia horse y que este dentro del objeto gameplaymanager
    //podemos guardar instancia de nuestro sprite
    this.horse = game.add.sprite(0, 0, "horse")
    this.horse.frame = 0
    this.horse.x = game.width / 2
    this.horse.y = game.height / 2
    // centrar el anchor del sprite en el centro// se añade un ancla en el centro del sprite
    // como un punto, y todas las acciones del sprite se hacen a partir de ahi
    this.horse.anchor.setTo(0.5)

    // // podemos escalar tb
    // this.horse.scale.setTo(1,2)
    // // podemos setear el alpha
    // this.horse.alpha = 0; // invisible // 1 visible
    // this.horse.angle = 0; // seteamo el angulo

    // creamos un boton de inicio
    game.input.onDown.add(this.onTap, this)

    // guardamos en un array cada uno de los diamantes
    this.diamonds = [];
    for(var i=0; i < AMOUNT_DIAMONDS; i++) {
        // cargamos diamante
        var diamond = game.add.sprite(100, 100, "diamonds")
        // añadimos aleatoriamente cada 1 de los sprites (bolitas) // random
        diamond.frame = game.rnd.integerInRange(0,3);
        // añadimos una escala random
        diamond.scale.setTo(0.30 + game.rnd.frac())
        // añadimos el anchor en el centro
        diamond.anchor.setTo(0.5)
        // lo posicionamos entre esas dos posiciones aleatoriamente
        diamond.x = game.rnd.integerInRange(50, 1050)
        diamond.y = game.rnd.integerInRange(50, 600)


        this.diamonds.push(diamond)
        // this.diamonds[i] = diamond // otra forma de pushear los diamantes en el array
        // los diamantes se sobreponen, debemos calcular con wque no pase
        
    }
    console.log(this.diamonds)
  },
  onTap: function() {
    this.flagFirstMouseDown = true;
  },
  // frame a frame llama al metodo
  update: function() {
    if (this.flagFirstMouseDown) { // con el if hasta que no damos al botón el caballo no se mueve
      // calcular posicion del mouse
      var pointerX = game.input.x
      var pointerY = game.input.y
      // calcular distancia entre nuestro mouse y el ancla del caballo
      var distX = pointerX - this.horse.x
      var distY = pointerY - this.horse.y

      // orientar el caballo hacia la izquierda o hacia la derecha, eso lo sabemos si la pos del caballo es mayor
      // eso lo sabemos si la pos del caballo es mayor a la posicion del puntero
      if (distX > 0) {
        this.horse.scale.setTo(1, 1)
      } else {
        this.horse.scale.setTo(-1, 1)
      }

      //mover el horse se mueve en x solamente un porcentaje de la distancia para que vaya fluido
      this.horse.x += distX * 0.02
      this.horse.y += distY * 0.02
    }
  }
}

// en phaser guardamos la instancia de nuestro juergo
// pasando width, height y el tipo de render webgl (targeta video, canvas, auto-primero webgl y sino canvas-)
var game = new Phaser.Game(1136, 640, Phaser.CANVAS)

// añadimos estado nombre de instancia y lo asignamos a un ombeto
game.state.add("gameplay", GamePlayManager)
game.state.start("gameplay")
