
// You can write more code here

/* START OF COMPILED CODE */

class gameOverScene extends Phaser.Scene {

	constructor() {
		super("gameOverScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// gameOverScreen
		const gameOverScreen = this.add.image(0, 0, "gameOver");

		this.gameOverScreen = gameOverScreen;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	gameOverScreen;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.cameras.main.fadeIn(2000);
		this.superbravo_gameover = this.sound.add('superbravo_gameover');
		this.superbravo_gameover.loop = false;
		this.superbravo_gameover.play();


		this.reloadtimer = this.time.addEvent({
			delay: 3000,                // ms
			callback: function(){
			//	location.reload();

			//	this.scene.remove(this.scene.keys);
				var sceneToGo = this.scene.get("InterludeMap");

				sceneToGo.setLevel("TitleScreen",0,0,0,0,false); //nombre de la escena a cargar, casillero en el mapa para trasladarse y casillero donde debe partir
				sceneToGo.isMainScene = false;

				activeLeveles.forEach(level => {
					
					this.scene.remove(level)
				});

				activeLeveles=[];
				this.scene.start("InterludeMap");

			},
			//args: [],
			callbackScope: this,
			loop: false
		});



		this.gameOverScreen.x=this.cameras.main.centerX;
		this.gameOverScreen.y=this.cameras.main.centerY;
	}

	setLevel(level,destino,partida,coinscollected,totalCoins,delayScreen){

		this.levelTogo = level;
		this.pinOnMap = destino;
		this.partida = partida;
		this.coinscollected = coinscollected;
		this.totalCoins = totalCoins;
		this.delayScreen=delayScreen;

	
	}





	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
