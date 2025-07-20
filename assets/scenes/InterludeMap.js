
// You can write more code here

/* START OF COMPILED CODE */

class InterludeMap extends Phaser.Scene {

	constructor() {
		super("InterludeMap");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// red
		const red = this.add.sprite(0, 0, "energyPanel_doubleJump");
		red.scaleX = 0.4285714285714286;
		red.scaleY = 0.4285714285714286;
		red.setOrigin(0, 0);

		// interludeBg
		const interludeBg = this.add.image(0, 0, "interludeBg_1");

		// jumpingSupa
		const jumpingSupa = this.add.sprite(174, 341, "jumpingSupa");
		jumpingSupa.setOrigin(0.5, 0);

		// spot
		const spot = this.add.image(177, 392, "spot");

		// star2
		const star2 = new StarEarn(this, 166, 120);
		this.add.existing(star2);

		// hangOn
		const hangOn = this.add.sprite(240, 291, "hangOn");

		// nextBtn
		const nextBtn = this.add.sprite(166, 387, "nextBtn");
		nextBtn.scaleX = 0;
		nextBtn.scaleY = 0;

		// titleText
		const titleText = this.add.text(169, 68, "", {});
		titleText.setOrigin(0.5, 0);
		titleText.text = "Well done";

		// star3
		const star3 = new StarEarn(this, 260, 128);
		this.add.existing(star3);

		// star1
		const star1 = new StarEarn(this, 70, 128);
		this.add.existing(star1);

		this.red = red;
		this.interludeBg = interludeBg;
		this.jumpingSupa = jumpingSupa;
		this.spot = spot;
		this.star2 = star2;
		this.hangOn = hangOn;
		this.nextBtn = nextBtn;
		this.titleText = titleText;
		this.star3 = star3;
		this.star1 = star1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Sprite} */
	red;
	/** @type {Phaser.GameObjects.Image} */
	interludeBg;
	/** @type {Phaser.GameObjects.Sprite} */
	jumpingSupa;
	/** @type {Phaser.GameObjects.Image} */
	spot;
	/** @type {StarEarn} */
	star2;
	/** @type {Phaser.GameObjects.Sprite} */
	hangOn;
	/** @type {Phaser.GameObjects.Sprite} */
	nextBtn;
	/** @type {Phaser.GameObjects.Text} */
	titleText;
	/** @type {StarEarn} */
	star3;
	/** @type {StarEarn} */
	star1;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();


		this.showSupa();
		this.nextBtn.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
			this.scene.start(this.levelTogo);
		},this);

	//	this.calculateStars();
		this.gotoLevel();




		this.interludeBg.x = this.cameras.main.centerX;
		this.interludeBg.y = this.cameras.main.centerY;

		this.jumpingSupa.x =  this.cameras.main.centerX;
		this.jumpingSupa.y =  this.cameras.main.height+200;

		this.star1.x = this.cameras.main.centerX - 80;
		this.star1.y = this.cameras.main.centerY - 120;

		this.star2.x = this.cameras.main.centerX;
		this.star2.y = this.cameras.main.centerY - 140;

		this.star3.x = this.cameras.main.centerX + 80;
		this.star3.y = this.cameras.main.centerY - 120;

		this.titleText.x = this.cameras.main.centerY - 145;

		this.spot.x = this.cameras.main.centerX+20;
		this.spot.y = this.cameras.main.centerY+ 200;

		this.nextBtn.x = this.cameras.main.centerX ;
		this.nextBtn.y = this.cameras.main.centerY+ 200;

		this.hangOn.x = this.cameras.main.centerX+120 ;
		this.hangOn.y = this.cameras.main.centerY+ 80;

		this.titleText.x = this.cameras.main.centerX;
		this.titleText.y = this.cameras.main.centerY-200;



	//	this.totalRings.visible=false;
		//this.energyText.visible=false;
	}

	calculateStars(){

	//this.totalRings.text=this.coinscollected;
	var totalEstrellasganadasRate = this.coinscollected/this.totalCoins;

	var Ponderacion = Math.abs(totalEstrellasganadasRate*10-this.game.playerData.timesDead)/10;
/*
	console.log('Star Rate '+ totalEstrellasganadasRate);
	console.log('veces mori: '+ this.game.playerData.timesDead)
	console.log('Ponderacion '+Ponderacion);
*/
		if(Ponderacion>0.3){
			var timer = this.scene.scene.time.addEvent({
				delay: 500,                // ms
				callback: function(){this.star1.tunrOnStar();
				this.titleText.text="WELL DONE";
				},
				//args: [],
				callbackScope: this,

			});

		}
		if(Ponderacion>0.6){
			var timer = this.scene.scene.time.addEvent({
				delay: 1000,                // ms
				callback: function(){this.star2.tunrOnStar();
					this.titleText.text="GREAT";
				},
				//args: [],
				callbackScope: this,

			});
		}
		if(Ponderacion>0.9){
			var timer = this.scene.scene.time.addEvent({
				delay: 1500,                // ms
				callback: function(){this.star3.tunrOnStar();
					this.titleText.text="EXCELLENT";
				},
				//args: [],
				callbackScope: this,

			});
		}

		this.game.playerData.timesDead = 0;
		updatear(this.game.playerData);
	}

	showSupa(){

		this.cameras.main.fadeIn(0);
	}

	setLevel(level,destino,partida,coinscollected,totalCoins,delayScreen){

		this.levelTogo = level;
		this.pinOnMap = destino;
		this.partida = partida;
		this.coinscollected = coinscollected;
		this.totalCoins = totalCoins;
		this.delayScreen=delayScreen;

	//	console.log("delayScreen " + this.delayScreen);
	}
	preload(){
		var sceneasCargadas = [];

		this.scene.manager.scenes.forEach(scena => {

			sceneasCargadas.push(scena.scene.key)
		});
		var estaLaScena = sceneasCargadas.includes(this.levelTogo);
		if(!estaLaScena){

			if(this.levelTogo!==""){

				this.load.sceneFile(this.levelTogo, 'assets/scenes/'+this.levelTogo+'.js');	
			}else{
				this.load.sceneFile(this.levelTogo, 'assets/scenes/'+"NewLevel0.js");
			}

		}

	}



	gotoLevel(){
console.log("entro a gotoLevel	");


		var sceneToGo = this.scene.get(this.levelTogo);
		sceneToGo.isMainScene = false;	

	//console.log("delayS " + this.delayScreen)
		if(!this.delayScreen){

			this.interludeBg.visible = false;
			this.star1.visible=false;
			this.star2.visible=false;
			this.star3.visible=false;
			this.titleText.visible=false;
		//	this.energyText.visible=false;
			this.jumpingSupa.visible=false;
			this.nextBtn.visible=false;
			this.hangOn.visible=false;
		//	this.totalRings.visible=false;
			this.spot.visible=false;

			var timer = this.scene.scene.time.addEvent({
					delay: 500,                // ms
					callback: function(){
						this.scene.start(this.levelTogo);
					},
					//args: [],
					callbackScope: this,
					loop: true
				});
		}
		else{

		this.red.displayWidth=this.cameras.main.width;
		this.red.displayHeight=this.cameras.main.height;
			this.game.playerData.timesDead = 0;
			updatear(this.game.playerData);
		}


		this.jumpingSupa.y = 638;
	//	console.log("estoy cambiando de nivel")
		this.interludeBg.alpha=0;

		var showBg = this.scene.scene.tweens.createTimeline();
		showBg.add({
		targets: this.interludeBg,
		alpha: 1,
		duration: 500,
		callbackScope: this,
		ease: 'Linear',

		});


		showBg.play();


		var showSupa = this.scene.scene.tweens.createTimeline();
		showSupa.add({
			targets: this.jumpingSupa,
			y: this.cameras.main.height+200,
			duration: 600,
			callbackScope: this,
			ease: 'Linear',

			});


		showSupa.add({
			targets: this.jumpingSupa,
			y:  this.cameras.main.height/2-60,
			duration: 300,
			callbackScope: this,
			ease: 'Linear',

			});

		showSupa.add({
			targets: this.jumpingSupa,
			scale: 1.1,
			duration: 3000,
			yoyo:true,
			repeat:-1,
			ease: 'Linear',

			});



		showSupa.play();


		var scalebtn = this.scene.scene.tweens.createTimeline();

		scalebtn.add({
			targets: this.nextBtn,
			scale:0,
			duration: 1000,
			ease: 'Linear',

			});


		scalebtn.add({
		targets: this.nextBtn,
		scale:1.1,
		duration: 100,
		ease: 'Linear',

		});

		scalebtn.add({
			targets: this.nextBtn,
			scale:1,
			duration: 100,
			ease: 'Linear',

			});

			scalebtn.add({
				targets: this.nextBtn,
				scale:1.1,
				duration: 500,
				ease: 'Linear',
				yoyo:true,
				repeat: -1

				});



				scalebtn.play();
//	this.scene.start(this.levelTogo);

	}




	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
