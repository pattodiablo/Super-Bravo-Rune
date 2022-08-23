
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel13 extends BaseScene {

	constructor() {
		super("NewLevel13");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel13Pack", "assets/NewLevel13Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level13");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// new_level13
		const new_level13 = this.add.tilemap("new_level13");
		new_level13.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

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
		const player = new Player(this, 70, 442);
		this.add.existing(player);

		// upperTile_1
		new_level13.createLayer("upperTile", [], 0, 0);

		// card
		const card = new Card(this, 1509, 519);
		this.add.existing(card);

		// powerPodium
		const powerPodium = this.add.image(1513, 112, "PowerPodium");
		powerPodium.scaleX = 0.8378636521685839;
		powerPodium.scaleY = 0.8378636521685839;

		// upgradeHalo
		const upgradeHalo = new UpgradeHalo(this, 1514, 124);
		this.add.existing(upgradeHalo);

		// portalCannon
		const portalCannon = new PortalCannon(this, 1276, 29);
		this.add.existing(portalCannon);
		portalCannon.angle = -90;

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 230, 28);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = -180;

		// card_1
		const card_1 = new Card(this, 237, 232);
		this.add.existing(card_1);

		// platform2
		const platform2 = new Platform2(this, 805, 431);
		this.add.existing(platform2);

		// alert_instance_10000
		this.add.image(89, 486, "misile", "alert instance 10000");

		// cyberPigeon
		const cyberPigeon = new CyberPigeon(this, 1153, 155);
		this.add.existing(cyberPigeon);

		// drone
		const drone = new Drone(this, 856, 279);
		this.add.existing(drone);

		// heart
		const heart = new Heart(this, 803, 383);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 800, 102);
		this.add.existing(heart_1);

		// supaBomb
		const supaBomb = new SupaBomb(this, 375, 200);
		this.add.existing(supaBomb);

		// supaBomb_1
		const supaBomb_1 = new SupaBomb(this, 1264, 716);
		this.add.existing(supaBomb_1);

		// supaBomb_2
		const supaBomb_2 = new SupaBomb(this, 338, 711);
		this.add.existing(supaBomb_2);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [cyberPigeon];
		const platforms = [platform2];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// upgradeHalo (prefab fields)
		upgradeHalo.isCannonStrike = true;

		// portalCannon (prefab fields)
		portalCannon.IsFirstCannon = true;

		// card_1 (prefab fields)
		card_1.timeExpires = 10000;

		// platform2 (prefab fields)
		platform2.distance = 150;
		platform2.timeTravel = 3000;

		// cyberPigeon (prefab fields)
		cyberPigeon.distance = 150;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level13 = new_level13;
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
	new_level13;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {CyberPigeon[]} */
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
