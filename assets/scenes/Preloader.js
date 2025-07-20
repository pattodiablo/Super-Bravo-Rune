
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
		
		this.load.pack("asset-pack", "assets/new-asset-pack.json");
	
	}

	/** @returns {void} */
	editorCreate() {

		// loading
		const loading = this.add.image(144, 96, "loading");

		// weveanaLogo
		const weveanaLogo = this.add.sprite(147, 70, "weveanaLogo");

		// sBLogo
		const sBLogo = this.add.sprite(231, 247, "icon");

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
		
		this.wichLevel = "NewLevel0";
		console.log("mapId " + mapId)
		switch(mapId){

			case 1:
				this.wichLevel="NewLevel0";
			break;

			case 2:
				this.wichLevel="NewLevel1";
			break;

			case 3:
				this.wichLevel="NewLevel2";
			break;

			case 4:
				this.wichLevel="NewLevel3";
			break;

			case 5:
				this.wichLevel="NewLevel4";
			break;

			case 6:
			this.wichLevel="NewLevel5";
			break;


			case 7:
			this.wichLevel="NewLevel6";
			break;


			case 8:
			this.wichLevel="NewLevel7";
			break;

			case 9:
			this.wichLevel="NewLevel8";
			break;

			case 10:
			this.wichLevel="NewLevel9";
			break;

			case 11:
			this.wichLevel="NewLevel10";
			break;

			case 12:
			this.wichLevel="NewLevel11";
			break;

			case 13:
			this.wichLevel="NewLevel12";
			break;

			case 14:
			this.wichLevel="NewLevel13";
			break;

			case 15:
			this.wichLevel="NewLevel14";
			break;

			case 16:
			this.wichLevel="NewLevel15";
			break;

			case 17:
			this.wichLevel="NewLevel16";
			break;

			case 18:
			this.wichLevel="NewLevel17";
			break;

			case 19:
			this.wichLevel="NewLevel18";
			break;

			case 20:
			this.wichLevel="NewLevel19";
			break;




			default:
		

			this.wichLevel="NewLevel0";


			break;
		}
		this.isPreloaded = 	this.load.sceneFile(this.wichLevel, 'assets/scenes/'+this.wichLevel+'.js');	

		this.editorCreate();
		this.cameras.main.setBackgroundColor('#f20f4f')
		this.sBLogo.x=this.cameras.main.centerX;
		this.sBLogo.y=this.cameras.main.centerY-60;

		this.weveanaLogo.x=this.cameras.main.centerX;
		this.weveanaLogo.y=this.cameras.main.centerY+120;

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



		this.scene.start(this.wichLevel);		

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
