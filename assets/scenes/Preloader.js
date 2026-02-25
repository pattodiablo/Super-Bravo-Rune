
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
		const DEFAULT_LEVEL = "NewLevel0";
		const MAX_LEVEL_NUMBER = 20;

		const readSavedLevel = () => {
			if (typeof window === "undefined" || !window.localStorage) {
				return null;
			}
			try {
				return window.localStorage.getItem("lastCompletedLevel");
			} catch (err) {
				return null;
			}
		};

		const computeNextLevelKey = (levelKey) => {
			if (typeof levelKey !== "string" || !levelKey.length) {
				return null;
			}
			const match = levelKey.match(/(\d+)(?!.*\d)/);
			if (!match) {
				return null;
			}
			const currentNumber = parseInt(match[1], 10);
			if (Number.isNaN(currentNumber)) {
				return null;
			}
			const nextNumber = currentNumber + 1;
			if (nextNumber < 0 || nextNumber > MAX_LEVEL_NUMBER) {
				return null;
			}
			return `NewLevel${nextNumber}`;
		};

		const resolveLevelFromMapId = () => {
			switch (mapId) {
				case 1:
					return "NewLevel0";
				case 2:
					return "NewLevel1";
				case 3:
					return "NewLevel2";
				case 4:
					return "NewLevel3";
				case 5:
					return "NewLevel4";
				case 6:
					return "NewLevel5";
				case 7:
					return "NewLevel6";
				case 8:
					return "NewLevel7";
				case 9:
					return "NewLevel8";
				case 10:
					return "NewLevel9";
				case 11:
					return "NewLevel10";
				case 12:
					return "NewLevel11";
				case 13:
					return "NewLevel12";
				case 14:
					return "NewLevel13";
				case 15:
					return "NewLevel14";
				case 16:
					return "NewLevel15";
				case 17:
					return "NewLevel16";
				case 18:
					return "NewLevel17";
				case 19:
					return "NewLevel18";
				case 20:
					return "NewLevel19";
				default:
					return DEFAULT_LEVEL;
			}
		};

		const savedLevel = readSavedLevel();
		const resumeLevel = computeNextLevelKey(savedLevel);
		this.wichLevel = resumeLevel || resolveLevelFromMapId();
		this.isPreloaded = 	this.load.sceneFile(this.wichLevel, 'assets/scenes/'+this.wichLevel+'.js');	

		this.editorCreate();
		this.cameras.main.setBackgroundColor('#f20f4f')
		this.sBLogo.x=this.cameras.main.centerX;
		this.sBLogo.y=this.cameras.main.centerY-60;

		this.weveanaLogo.x=this.cameras.main.centerX;
		this.weveanaLogo.y=this.cameras.main.centerY+160;

		this.loading.x=this.cameras.main.centerX-this.loading.width/2;
		this.loading.y=this.cameras.main.centerY+100;
		this.loadingBorder.x=this.cameras.main.centerX;
		this.loadingBorder.y=this.cameras.main.centerY+100;

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
