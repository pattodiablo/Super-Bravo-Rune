
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel15 extends BaseScene {

	constructor() {
		super("NewLevel15");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level15");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// new_level15
		const new_level15 = this.add.tilemap("new_level15");
		new_level15.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg1Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "bg1TileBG");
		tilespriteBG.setOrigin(0, 1);

		// nocollide2_1
		mapa.createLayer("nocollide2", ["new_ciudad_tiles"], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", [], 0, 0);

		// layer
		const layer = mapa.createLayer("layer", ["new_ciudad_tiles"], 0, 0);

		// player
		const player = new Player(this, 133, 448);
		this.add.existing(player);

		// upperTile_1
		new_level15.createLayer("upperTile", [], 0, 0);

		// card
		const card = new Card(this, 831, 383);
		this.add.existing(card);

		// powerPodium
		const powerPodium = this.add.image(1541, 630, "PowerPodium");
		powerPodium.scaleX = 0.8367216303631883;
		powerPodium.scaleY = 0.8367216303631883;

		// upgradeHalo
		const upgradeHalo = new UpgradeHalo(this, 1542, 640);
		this.add.existing(upgradeHalo);

		// misile
		const misile = new Misile(this, 1770, 447);
		this.add.existing(misile);

		// misile_1
		const misile_1 = new Misile(this, 1733, 174);
		this.add.existing(misile_1);

		// supaBomb
		const supaBomb = new SupaBomb(this, 388, 323);
		this.add.existing(supaBomb);

		// supaBomb_1
		const supaBomb_1 = new SupaBomb(this, 662, 161);
		this.add.existing(supaBomb_1);

		// supaBomb_2
		const supaBomb_2 = new SupaBomb(this, 979, 426);
		this.add.existing(supaBomb_2);

		// supaBomb_3
		const supaBomb_3 = new SupaBomb(this, 1273, 301);
		this.add.existing(supaBomb_3);

		// heart
		const heart = new Heart(this, 396, 154);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 1381, 19);
		this.add.existing(heart_1);

		// heart_2
		const heart_2 = new Heart(this, 828, 614);
		this.add.existing(heart_2);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// card (prefab fields)
		card.timeExpires = 10000;

		// upgradeHalo (prefab fields)
		upgradeHalo.isDoubleJump = true;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level15 = new_level15;
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
	/** @type {Phaser.Tilemaps.Tilemap} */
	mapa;
	/** @type {Phaser.Tilemaps.Tilemap} */
	new_level15;
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
