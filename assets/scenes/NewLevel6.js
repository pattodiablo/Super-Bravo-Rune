
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel6 extends BaseScene {

	constructor() {
		super("NewLevel6");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level6");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// new_level6
		const new_level6 = this.add.tilemap("new_level6");
		new_level6.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg1Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "bg1TileBG");
		tilespriteBG.setOrigin(0, 1);

		// nocollide2_1
		mapa.createLayer("nocollide2", ["new_ciudad_tiles"], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", ["new_ciudad_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("layer", ["new_ciudad_tiles"], 0, 0);

		// player
		const player = new Player(this, 144, 707);
		this.add.existing(player);

		// upperTile
		const upperTile = new_level6.createLayer("upperTile", [], 0, 0);

		// catapulta
		const catapulta = new Catapulta(this, 79, 495);
		this.add.existing(catapulta);

		// upgradeHalo
		const upgradeHalo = new UpgradeHalo(this, 672, 241);
		this.add.existing(upgradeHalo);

		// powerPodium
		this.add.image(672, 225, "PowerPodium");

		// sideDoorLocked
		const sideDoorLocked = new SideDoorLocked(this, 1473, 109);
		this.add.existing(sideDoorLocked);

		// alert_instance_10000
		this.add.image(1114, 676, "misile", "alert instance 10000");

		// alert_instance_10000_1
		this.add.image(1898, 672, "misile", "alert instance 10000");

		// alert_instance_10000_1_1
		this.add.image(1716, 672, "misile", "alert instance 10000");

		// alert_instance_10000_1_1_1
		this.add.image(1295, 667, "misile", "alert instance 10000");

		// alert_instance_10000_1_1_1_1
		this.add.image(2283, 671, "misile", "alert instance 10000");

		// alert_instance_10000_1_1_1_1_1
		this.add.image(2522, 671, "misile", "alert instance 10000");

		// toll
		const toll = new Toll(this, 1217, 398);
		this.add.existing(toll);

		// mechaPirana
		const mechaPirana = new MechaPirana(this, 740, 692);
		this.add.existing(mechaPirana);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [mechaPirana];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// upgradeHalo (prefab fields)
		upgradeHalo.isDoubleJump = true;

		// mechaPirana (prefab fields)
		mechaPirana.travelDistance = 200;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.upperTile = upperTile;
		this.mapa = mapa;
		this.new_level6 = new_level6;
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
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {MechaPirana[]} */
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
