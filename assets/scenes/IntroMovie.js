
// You can write more code here

/* START OF COMPILED CODE */

class IntroMovie extends Phaser.Scene {

	constructor() {
		super("IntroMovie");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// black
		const black = this.add.image(0, 0, "black");
		black.setOrigin(0, 0);

		// skipVideo
		const skipVideo = this.add.image(258, 447, "skipVideo");

		this.black = black;
		this.skipVideo = skipVideo;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	black;
	/** @type {Phaser.GameObjects.Image} */
	skipVideo;

	/* START-USER-CODE */

	// Write your code here


	create() {

		//this.gotoLevel = "NewLevel1X";
		this.gotoLevel = this.game.playerData.level;


		this.editorCreate();
	

		var video = this.add.video(this.cameras.main.centerX, this.cameras.main.centerY, "pruebaVideo");

		video.autoplay=true;
		video.play();
		video.setOrigin(0.5,0.5);

		this.skipVideo.x=this.cameras.main.centerX;
		this.skipVideo.y=video.y+video.width/2;

		this.black.displayWidth=this.cameras.main.width;
		this.black.displayHeight=this.cameras.main.height;

		video.on('complete', function(video){
			this.scene.start(this.gotoLevel);

		}, this);

		this.sceneToGo = this.scene.get("InterludeMap");

		this.skipVideo.setInteractive().on('pointerdown',function(){


			this.sceneToGo.setLevel(this.gotoLevel,0,0,0,0,false); //nombre de la escena a cargar, casillero en el mapa para trasladarse y casillero donde debe partir
		this.sceneToGo.isMainScene = false;

		activeLeveles.forEach(level => {
		//	console.log(level);
			this.scene.remove(level)
		});

		activeLeveles=[];
		this.scene.start("InterludeMap");


		},this);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
