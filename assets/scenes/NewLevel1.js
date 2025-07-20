
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel1 extends BaseScene {

	constructor() {
		super("NewLevel1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel1Pack", "assets/NewLevel1Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level1");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// new_level1
		const new_level1 = this.add.tilemap("new_level1");
		new_level1.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg1Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "bg1TileBG");
		tilespriteBG.setOrigin(0, 1);

		// nocollide
		mapa.createLayer("nocollide2", ["new_ciudad_tiles"], 0, 0);

		// nocollide_1
		mapa.createLayer("nocollide", [], 0, 0);

		// layer
		const layer = mapa.createLayer("layer", ["new_ciudad_tiles"], 0, 0);

		// player
		const player = new Player(this, 113, 723);
		this.add.existing(player);

		// powerPodium
		this.add.image(1524, 674, "PowerPodium");

		// upgradeHalo
		const upgradeHalo = new UpgradeHalo(this, 1525, 688);
		this.add.existing(upgradeHalo);

		// blobber
		const blobber = new Blobber(this, 553, 687);
		this.add.existing(blobber);
		blobber.scaleX = 0.8472708286847896;
		blobber.scaleY = 0.8472708286847896;

		// heart
		const heart = new Heart(this, 961, 593);
		this.add.existing(heart);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 891, 264);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1289, 374);
		this.add.existing(sampoShooter_1);

		// spikeHorizontal
		const spikeHorizontal = new SpikeHorizontal(this, 46, 237);
		this.add.existing(spikeHorizontal);
		spikeHorizontal.angle = 0;

		// blobber_1
		const blobber_1 = new Blobber(this, 1169, 687);
		this.add.existing(blobber_1);
		blobber_1.scaleX = 0.8472708286847896;
		blobber_1.scaleY = 0.8472708286847896;

		// wallLight
		this.add.image(962, 716, "wallLight");

		// lightBean
		this.add.image(962, 715, "lightBean");

		// upperTile
		const upperTile = new_level1.createLayer("upperTile", ["new_ciudad_tiles"], 0, 0);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [blobber, sampoShooter_1, sampoShooter, spikeHorizontal, blobber_1];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// upgradeHalo (prefab fields)
		upgradeHalo.isDoubleJump = true;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.upperTile = upperTile;
		this.mapa = mapa;
		this.new_level1 = new_level1;
		this.doors = doors;
		this.switches = switches;
		this.enemies = enemies;
		this.platforms = platforms;
		this.coins = coins;
		this.catapultas = catapultas;
		this.revivingPods = revivingPods;
		this.tutorials = tutorials;
		this.nextLevel = "NewLevel2";

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
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	upperTile;
	/** @type {Phaser.Tilemaps.Tilemap} */
	mapa;
	/** @type {Phaser.Tilemaps.Tilemap} */
	new_level1;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<Blobber|SampoShooter|SpikeHorizontal>} */
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
