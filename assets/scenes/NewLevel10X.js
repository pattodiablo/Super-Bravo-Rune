
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel10X extends BaseScene {

	constructor() {
		super("NewLevel10X");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level10X");
		mapa.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// new_level10X
		const new_level10X = this.add.tilemap("new_level10X");
		new_level10X.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "NewtechBg");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "Final_Stage_Back");
		tilespriteBG.setOrigin(0, 1);

		// noCollide
		const noCollide = mapa.createLayer("NoCollide", ["Invernadero_tiles"], 0, 0);

		// noCollideFX
		const noCollideFX = mapa.createLayer("NoCollideFX", [], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["Invernadero_tiles"], 0, 0);

		// player
		const player = new Player(this, 802, 668);
		this.add.existing(player);

		// BigBoss
		const bigBoss = new EnemyBody(this, 785, 531);
		this.add.existing(bigBoss);

		// collideFX
		const collideFX = new_level10X.createLayer("CollideFX", ["Invernadero_tiles"], 0, 0);

		// lists
		const doors = []
		const switches = []
		const enemies = []
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.noCollide = noCollide;
		this.noCollideFX = noCollideFX;
		this.layer = layer;
		this.player = player;
		this.bigBoss = bigBoss;
		this.collideFX = collideFX;
		this.mapa = mapa;
		this.new_level10X = new_level10X;
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
	noCollide;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	noCollideFX;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	layer;
	/** @type {Player} */
	player;
	/** @type {EnemyBody} */
	bigBoss;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	collideFX;
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
	/** @type {Array<any>} */
	tutorials;

	/* START-USER-CODE */






	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
