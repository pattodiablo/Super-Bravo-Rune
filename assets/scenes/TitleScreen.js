
// You can write more code here

/* START OF COMPILED CODE */

class TitleScreen extends Phaser.Scene {

	constructor() {
		super("TitleScreen");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// red
		const red = this.add.sprite(0, 0, "red");
		red.setOrigin(0, 0);

		// newIntroBg
		const newIntroBg = this.add.image(160, 240, "newInroBg");

		// logo
		const logo = this.add.image(162, 102, "logo");
		logo.scaleX = 0;
		logo.scaleY = 0;

		// supaTitle
		const supaTitle = this.add.image(155, 248, "supaTitle");
		supaTitle.scaleX = 0;
		supaTitle.scaleY = 0;

		// playBtn
		const playBtn = this.add.image(161, 402, "playBtn");
		playBtn.scaleX = 0;
		playBtn.scaleY = 0;

		// logosMinisterio
		const logosMinisterio = this.add.image(162, 424, "logosMinisterio");
		logosMinisterio.scaleX = 0.7;
		logosMinisterio.scaleY = 0.7;

		// versionText
		const versionText = this.add.text(266, 464, "", {});
		versionText.text = "v.1.0";

		this.red = red;
		this.newIntroBg = newIntroBg;
		this.logo = logo;
		this.supaTitle = supaTitle;
		this.playBtn = playBtn;
		this.logosMinisterio = logosMinisterio;
		this.versionText = versionText;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Sprite} */
	red;
	/** @type {Phaser.GameObjects.Image} */
	newIntroBg;
	/** @type {Phaser.GameObjects.Image} */
	logo;
	/** @type {Phaser.GameObjects.Image} */
	supaTitle;
	/** @type {Phaser.GameObjects.Image} */
	playBtn;
	/** @type {Phaser.GameObjects.Image} */
	logosMinisterio;
	/** @type {Phaser.GameObjects.Text} */
	versionText;

	/* START-USER-CODE */

	create() {


		this.superbravo_splashscreen = this.sound.add('superbravo_splashscreen');
		this.superbravo_splashscreen.loop = true;
		this.superbravo_splashscreen.play();

		this.editorCreate();

		this.versionText.x=this.cameras.main.centerX+ window.innerWidth/2 - this.versionText.width;
		this.versionText.y=this.cameras.main.centerY + window.innerHeight/2 - this.versionText.height ;
		this.red.displayWidth=this.cameras.main.width;
		this.red.displayHeight=this.cameras.main.height;


		this.newIntroBg.x=this.cameras.main.centerX;
		this.newIntroBg.y = this.cameras.main.centerY-50;
		this.logo.x = this.cameras.main.centerX;
		this.logo.originalY = this.logo.y-200;
		this.logo.y=this.cameras.main.centerY-200;

		this.supaTitle.x =  this.cameras.main.centerX;
		this.supaTitle.originalY = this.supaTitle.y-60;
		this.supaTitle.y=this.cameras.main.centerY-60;

		this.playBtn.x=  this.cameras.main.centerX;
		this.playBtn.y= this.supaTitle.y + 150;

		this.logosMinisterio.x = this.cameras.main.centerX;

		this.logosMinisterio.y = this.playBtn.y+120;

		this.input.keyboard.on("keydown_ENTER", this.enterPressed, this);
		this.input.on("pointerdown", this.enterPressed, this);

		this.crearParticulas();

		var logointro = this.tweens.createTimeline();
		logointro.add({
			targets: this.logo,
			scale: 1.2,
			duration: 100,
			ease: 'Linear',
			repeat: 0

		});
		logointro.add({
			targets: this.logo,
			scale: 1,
			y:this.logo.y,
			duration: 100,
			ease: 'Linear',
			repeat: 0

		});
		logointro.add({
			targets: this.logo,

			y:this.logo.y-=10,
			duration: 2500,
			ease: 'Linear',
			repeat: -1,
			yoyo:true


		});


		logointro.play();


		var supaTitle = this.tweens.createTimeline();
		supaTitle.add({
			targets: this.supaTitle,
			scale: 1.2,
			duration: 100,
			ease: 'Linear',
			repeat: 0,
			delay:200

		});
		supaTitle.add({
			targets: this.supaTitle,
			scale: 1,
			duration: 100,
			ease: 'Linear',
			repeat: 0,


		});
		supaTitle.add({
			targets: this.supaTitle,
			scale: 1.1,
			duration: 2500,
			ease: 'Linear',
			repeat: -1,
			yoyo:true


		});


		supaTitle.play();


		var PlayBtn = this.tweens.createTimeline();
		PlayBtn.add({
			targets: this.playBtn,
			scale: 1.2,
			duration: 100,
			ease: 'Linear',
			repeat: 0,
			delay:300

		});
		PlayBtn.add({
			targets: this.playBtn,
			scale: 1,
			duration: 100,
			ease: 'Linear',
			repeat: 0

		});

		PlayBtn.add({
			targets: this.playBtn,
			scale: 1.2,
			duration: 500,
			ease: 'Linear',
			repeat: -1,
			yoyo:true


		});



		PlayBtn.play();

		this.sceneToGo = this.scene.get("InterludeMap");

	}


	crearParticulas() {

		this.particles3 = this.add.particles('inkDot');

		this.particles3.createEmitter({

			blendMode: 'MULTIPLY',

			quantity: 10,
			frequency: 200,
			scale: {start: 0, end: 1.5},
			rotate: { min: 0, max: 360 },
			angle: { min: 0, max: 360 },
			speed: 200	,
			gravityY: 0,
			x:this.cameras.main.centerX,
			y:this.cameras.main.centerY,
			lifespan: { min: 1000, max: 4000 },
			start: true
		});
		this.logo.depth = 2;
		this.playBtn.depth = 2;	
		this.supaTitle.depth = 2
		let zposition = this.supaTitle.depth - 1


		this.particles3.setDepth(zposition);



	}



	enterPressed() {
	//	console.log(this);


	//	 this.scene.start("IntroMovie");

	//	this.scene.start("NewLevel0");

		//this.scene.start(this.game.playerData.level);


	//	this.scene.remove(this.keys);

	var audioCtx = new AudioContext();
	audioCtx.resume();
//	console.log(audioCtx);
//this.sceneToGo.setLevel("NewLevel1X",0,0,0,0,false); //nombre de la escena a cargar, casillero en el mapa para trasladarse y casillero donde debe partir
this.sceneToGo.setLevel("IntroMovie",0,0,0,0,false); //nombre de la escena a cargar, casillero en el mapa para trasladarse y casillero donde debe partir
		this.sceneToGo.isMainScene = false;

		activeLeveles.forEach(level => {
		//	console.log(level);
			this.scene.remove(level)
		});

		activeLeveles=[];
		this.scene.start("InterludeMap");



	}





	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
