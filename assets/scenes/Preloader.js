
// You can write more code here

/* START OF COMPILED CODE */

class Preloader extends Phaser.Scene {

	constructor() {
		super("Preloader");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

	let	thispack = this.load.pack("asset-pack", "assets/asset-pack.json");
	console.log(thispack);
	}

	/** @returns {void} */
	editorCreate() {

		// loading
		const loading = this.add.image(144, 96, "loading");

		// weveanaLogo
		const weveanaLogo = this.add.sprite(147, 70, "weveanaLogo");

		// sBLogo
		const sBLogo = this.add.sprite(231, 247, "SBLogo");

		// loadingBorder
		const loadingBorder = this.add.sprite(15, 248, "loadingBorder");

		this.loading = loading;
		this.weveanaLogo = weveanaLogo;
		this.sBLogo = sBLogo;
		this.loadingBorder = loadingBorder;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	loading;
	/** @type {Phaser.GameObjects.Sprite} */
	weveanaLogo;
	/** @type {Phaser.GameObjects.Sprite} */
	sBLogo;
	/** @type {Phaser.GameObjects.Sprite} */
	loadingBorder;

	/* START-USER-CODE */

	preload() {		

		this.editorCreate();
		this.cameras.main.setBackgroundColor('#f20f4f')
		this.sBLogo.x=this.cameras.main.centerX;
		this.sBLogo.y=this.cameras.main.centerY-120;

		this.weveanaLogo.x=this.cameras.main.centerX;
		this.weveanaLogo.y=this.cameras.main.centerY+200;

		this.loading.x=this.cameras.main.centerX-this.loading.width/2;
		this.loading.y=this.cameras.main.centerY;
		this.loadingBorder.x=this.cameras.main.centerX;
		this.loadingBorder.y=this.cameras.main.centerY;

		this.loading.setOrigin(0,0.5);

		this.load.on(Phaser.Loader.Events.PROGRESS, p => {

			this.loading.scaleX = p;
		});		

		this.editorPreload();
	}

	doScore(){
		return 0;
	}

	create() {
		console.log(challengeNumber)
		switch(challengeNumber){
			case 1:
			var wichLevel="NewLevel0";
			break;

			case 2:
			var wichLevel="NewLevel1";
			break;

			case 3:
			var wichLevel="NewLevel2";
			break;

			case 4:
			var wichLevel="NewLevel3";
			break;
		
			case 5:
			var wichLevel="NewLevel4";
			break;


			case 6:
			var wichLevel="NewLevel5";
			break;


			case 7:
			var wichLevel="NewLevel6";
			break;

			case 8:
			var wichLevel="NewLevel7";
			break;

			case 9:
			var wichLevel="NewLevel8";
			break;

			case 10:
			var wichLevel="NewLevel9";
			break;

			case 11:
			var wichLevel="NewLevel110";
			break;

			case 12:
			var wichLevel="NewLevel11";
			break;

			case 13:
			var wichLevel="NewLevel12";
			break;

			case 14:
			var wichLevel="NewLevel13";
			break;

			case 15:
			var wichLevel="NewLevel14";
			break;

			case 16:
			var wichLevel="NewLevel15";
			break;

			case 17:
			var wichLevel="NewLevel16";
			break;

			case 18:
			var wichLevel="NewLevel17";
			break;

			case 19:
			var wichLevel="NewLevel18";
			break;

			case 20:
			var wichLevel="NewLevel19";
			break;


			case 21:
			var wichLevel="NewLevel20";
			break;

			default:
			
			var wichLevel="NewLevel0";

			break;
		}
	

	let quePasa =	this.scene.start(wichLevel);		
	console.log(quePasa);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
