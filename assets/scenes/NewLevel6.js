
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
	preload() {

		this.load.pack("NewLevel6Pack", "assets/NewLevel6Pack.json");
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
		const bg1Tile = this.add.image(0, 0, "bg2Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "bg3TileBG");
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
		const upperTile = new_level6.createLayer("upperTile", ["new_ciudad_tiles"], 0, 0);

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
		this.add.image(2508, 643, "misile", "alert instance 10000");

		// toll
		const toll = new Toll(this, 1217, 398);
		this.add.existing(toll);

		// supaBomb
		const supaBomb = new SupaBomb(this, 765, 678);
		this.add.existing(supaBomb);

		// supaBomb_1
		const supaBomb_1 = new SupaBomb(this, 966, 379);
		this.add.existing(supaBomb_1);

		// supaBomb_1_1
		const supaBomb_1_1 = new SupaBomb(this, 1955, 242);
		this.add.existing(supaBomb_1_1);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 563, 659);
		this.add.existing(sampoShooter);

		// proxySpyke
		const proxySpyke = new ProxySpyke(this, 768, 204);
		this.add.existing(proxySpyke);

		// proxySpyke_1_1
		const proxySpyke_1_1 = new ProxySpyke(this, 399, 621);
		this.add.existing(proxySpyke_1_1);

		// supaBomb_1_1_1
		const supaBomb_1_1_1 = new SupaBomb(this, 1788, 726);
		this.add.existing(supaBomb_1_1_1);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1041, 695);
		this.add.existing(sampoShooter_1);

		// sampoShooter_1_1
		const sampoShooter_1_1 = new SampoShooter(this, 1982, 705);
		this.add.existing(sampoShooter_1_1);

		// drone
		const drone = new Drone(this, 584, 217);
		this.add.existing(drone);

		// activeZoneBoss
		const activeZoneBoss = new ActiveZoneBoss(this, 2858, 541);
		this.add.existing(activeZoneBoss);
		activeZoneBoss.scaleX = 9.656250296739685;
		activeZoneBoss.scaleY = 6.064623131946276;
		activeZoneBoss.alpha = 0;

		// guardBoss
		const guardBoss = new GuardBoss(this, 3059, 657);
		this.add.existing(guardBoss);

		// alert_instance_10000_1_1_1_1_1_1
		this.add.image(3048, 552, "misile", "alert instance 10000");

		// drone_1
		const drone_1 = new Drone(this, 3063, 55);
		this.add.existing(drone_1);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [supaBomb_1_1, supaBomb_1, supaBomb, sampoShooter, sampoShooter_1_1, sampoShooter_1, guardBoss];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// upgradeHalo (prefab fields)
		upgradeHalo.isDoubleJump = true;

		// toll (prefab fields)
		toll.tollCost = 20;

		// sampoShooter (prefab fields)
		sampoShooter.bulletEnable = false;
		sampoShooter.travelDistance = 100;

		// sampoShooter_1_1 (prefab fields)
		sampoShooter_1_1.travelDistance = 120;

		// activeZoneBoss (prefab fields)
		activeZoneBoss.isActive = true;
		activeZoneBoss.activateBoss = true;

		// guardBoss (prefab fields)
		guardBoss.ThingToDrop = "Coin";

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.upperTile = upperTile;
		this.guardBoss = guardBoss;
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
	/** @type {GuardBoss} */
	guardBoss;
	/** @type {Phaser.Tilemaps.Tilemap} */
	mapa;
	/** @type {Phaser.Tilemaps.Tilemap} */
	new_level6;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<SupaBomb|SampoShooter|GuardBoss>} */
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
