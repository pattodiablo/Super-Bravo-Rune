
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel8 extends BaseScene {

	constructor() {
		super("NewLevel8");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level8");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// new_level8
		const new_level8 = this.add.tilemap("new_level8");
		new_level8.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

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
		const player = new Player(this, 102, 613);
		this.add.existing(player);

		// upperTile_1
		new_level8.createLayer("upperTile", ["new_ciudad_tiles"], 0, 0);

		// catapulta
		const catapulta = new Catapulta(this, 101, 645);
		this.add.existing(catapulta);

		// drone
		const drone = new Drone(this, 572, 153);
		this.add.existing(drone);

		// drone_1
		const drone_1 = new Drone(this, 323, 150);
		this.add.existing(drone_1);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 652, 297);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1305, 216);
		this.add.existing(sampoShooter_1);

		// supaBomb
		const supaBomb = new SupaBomb(this, 871, 630);
		this.add.existing(supaBomb);

		// supaBomb_1
		const supaBomb_1 = new SupaBomb(this, 1333, 626);
		this.add.existing(supaBomb_1);

		// upgradeHalo
		const upgradeHalo = new UpgradeHalo(this, 444, 241);
		this.add.existing(upgradeHalo);

		// powerPodium
		this.add.image(444, 225, "PowerPodium");

		// sideDoor
		const sideDoor = new SideDoor(this, 788, 208);
		this.add.existing(sideDoor);
		sideDoor.scaleX = 0.5910282977920605;
		sideDoor.scaleY = 0.5910282977920605;

		// sideDoor_1
		const sideDoor_1 = new SideDoor(this, 1004, 210);
		this.add.existing(sideDoor_1);
		sideDoor_1.scaleX = 0.5910282977920605;
		sideDoor_1.scaleY = 0.5910282977920605;

		// proxySpyke
		const proxySpyke = new ProxySpyke(this, 1179, 310);
		this.add.existing(proxySpyke);

		// proxySpyke_1
		const proxySpyke_1 = new ProxySpyke(this, 1308, 310);
		this.add.existing(proxySpyke_1);

		// proxySpyke_2
		const proxySpyke_2 = new ProxySpyke(this, 1418, 310);
		this.add.existing(proxySpyke_2);

		// misile
		const misile = new Misile(this, 1673, 60);
		this.add.existing(misile);

		// sideDoorLocked
		const sideDoorLocked = new SideDoorLocked(this, 700, 590);
		this.add.existing(sideDoorLocked);
		sideDoorLocked.scaleX = 0.9292104734495517;
		sideDoorLocked.scaleY = 0.9292104734495517;

		// toll
		const toll = new Toll(this, 751, 463);
		this.add.existing(toll);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter, sampoShooter_1, proxySpyke_2, proxySpyke_1, proxySpyke, misile];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// upgradeHalo (prefab fields)
		upgradeHalo.isDoubleJump = true;

		// sideDoor (prefab fields)
		sideDoor.isLocked = true;

		// toll (prefab fields)
		toll.tollCost = 90;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level8 = new_level8;
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
	/** @type {Array<SampoShooter|ProxySpyke|Misile>} */
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
