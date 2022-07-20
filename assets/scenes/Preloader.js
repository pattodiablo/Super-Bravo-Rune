
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

		this.load.pack("asset-pack", "assets/asset-pack.json");
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

		switch(challengeNumber){
			case 1:
			var wichLevel="NewLevel0";
			break;

			case 2:
			var wichLevel="NewLevel0A";
			break;
		
			default:
			
			var wichLevel="NewLevel0";

			break;
		}
	

		this.scene.start(wichLevel);		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
