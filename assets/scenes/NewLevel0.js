
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel0 extends BaseScene {

	constructor() {
		super("NewLevel0");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level0");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg1Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "bg1TileBG");
		tilespriteBG.setOrigin(0, 1);

		// handPointer
		const handPointer = new HandPointer(this, 688, 426);
		this.add.existing(handPointer);

		// nocollide2_1
		mapa.createLayer("nocollide2", ["new_ciudad_tiles"], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", ["new_ciudad_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("collide", ["new_ciudad_tiles"], 0, 0);

		// player
		const player = new Player(this, 87, 459);
		this.add.existing(player);

		// wallLight
		this.add.image(157, 331, "wallLight");

		// lightBean
		const lightBean = new LightBeam(this, 156, 331);
		this.add.existing(lightBean);

		// wallLight_1
		this.add.image(454, 330, "wallLight");

		// lightBean_1
		const lightBean_1 = new LightBeam(this, 453, 330);
		this.add.existing(lightBean_1);

		// tuto1
		const tuto1 = this.add.image(255, 402, "tuto1");
		tuto1.scaleX = 0.7;
		tuto1.scaleY = 0.7;

		// posters
		const posters = this.add.image(524, 395, "posters");
		posters.scaleX = 0.6994818652849741;
		posters.scaleY = 0.6994818652849741;

		// wallLight_1_1
		this.add.image(698, 331, "wallLight");

		// lightBean_1_1
		const lightBean_1_1 = new LightBeam(this, 697, 331);
		this.add.existing(lightBean_1_1);

		// rocoPop
		this.add.image(1365, 428, "rocoPop");

		// poste
		const poste = new Poste(this, 88, 386);
		this.add.existing(poste);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [tuto1];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.doors = doors;
		this.switches = switches;
		this.enemies = enemies;
		this.platforms = platforms;
		this.coins = coins;
		this.catapultas = catapultas;
		this.revivingPods = revivingPods;
		this.tutorials = tutorials;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	bg1Tile;
	/** @type {Phaser.GameObjects.TileSprite} */
	tilespriteBG;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	layer;
	/** @type {Player} */
	player;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<any>} */
	enemies;
	/** @type {Array<any>} */
	platforms;
	/** @type {Array<any>} */
	coins;
	/** @type {Array<any>} */
	catapultas;
	/** @type {Array<any>} */
	revivingPods;
	/** @type {Phaser.GameObjects.Image[]} */
	tutorials;

	/* START-USER-CODE */






	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
