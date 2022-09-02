
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel19 extends BaseScene {

	constructor() {
		super("NewLevel19");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel19Pack", "assets/NewLevel19Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level19");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// new_level19
		const new_level19 = this.add.tilemap("new_level19");
		new_level19.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg2Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "bg3TileBG");
		tilespriteBG.setOrigin(0, 1);

		// nocollide2
		mapa.createLayer("nocollide2", ["new_ciudad_tiles"], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", ["new_ciudad_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("layer", ["new_ciudad_tiles"], 0, 0);

		// platform2
		const platform2 = new Platform2(this, 224, 648);
		this.add.existing(platform2);

		// player
		const player = new Player(this, 49, 648);
		this.add.existing(player);

		// upperTile
		const upperTile = new_level19.createLayer("upperTile", ["new_ciudad_tiles"], 0, 0);

		// BigBoss
		const bigBoss = new EnemyBody(this, 817, 593);
		this.add.existing(bigBoss);

		// card
		const card = new Card(this, 66, 47);
		this.add.existing(card);

		// powerPodium
		this.add.image(1424, 449, "PowerPodium");

		// upgradeHalo
		const upgradeHalo = new UpgradeHalo(this, 1424, 464);
		this.add.existing(upgradeHalo);

		// heart
		const heart = new Heart(this, 1299, 255);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 1297, 331);
		this.add.existing(heart_1);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [];
		const platforms = [platform2];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// platform2 (prefab fields)
		platform2.distance = 550;

		// upgradeHalo (prefab fields)
		upgradeHalo.isDoubleJump = true;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.upperTile = upperTile;
		this.bigBoss = bigBoss;
		this.mapa = mapa;
		this.new_level19 = new_level19;
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
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	upperTile;
	/** @type {EnemyBody} */
	bigBoss;
	/** @type {Phaser.Tilemaps.Tilemap} */
	mapa;
	/** @type {Phaser.Tilemaps.Tilemap} */
	new_level19;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<any>} */
	enemies;
	/** @type {Platform2[]} */
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
