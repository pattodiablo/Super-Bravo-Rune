
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel16 extends BaseScene {

	constructor() {
		super("NewLevel16");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel16Pack", "assets/NewLevel16Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level16");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// new_level16
		const new_level16 = this.add.tilemap("new_level16");
		new_level16.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

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
		const player = new Player(this, 179, 1395);
		this.add.existing(player);

		// upperTile_1
		new_level16.createLayer("upperTile", ["new_ciudad_tiles"], 0, 0);

		// angrySpin
		const angrySpin = new AngrySpin(this, 177, 1531);
		this.add.existing(angrySpin);

		// card
		const card = new Card(this, 482, 1092);
		this.add.existing(card);

		// platform1
		const platform1 = new Platform1(this, 690, 622);
		this.add.existing(platform1);

		// misile
		const misile = new Misile(this, 1044, 740);
		this.add.existing(misile);

		// portalCannon
		const portalCannon = new PortalCannon(this, 478, 61);
		this.add.existing(portalCannon);
		portalCannon.angle = 106;

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 480, 1376);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = 0;

		// powerPodium
		const powerPodium = this.add.image(126, 303, "PowerPodium");
		powerPodium.scaleX = 0.8474800561418956;
		powerPodium.scaleY = 0.8474800561418956;

		// upgradeHalo
		const upgradeHalo = new UpgradeHalo(this, 124, 311);
		this.add.existing(upgradeHalo);

		// card_1
		const card_1 = new Card(this, 816, 308);
		this.add.existing(card_1);

		// upgradeHalo_1
		const upgradeHalo_1 = new UpgradeHalo(this, 898, 846);
		this.add.existing(upgradeHalo_1);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 726, 110);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 206, 90);
		this.add.existing(sampoShooter_1);

		// drone
		const drone = new Drone(this, 363, 954);
		this.add.existing(drone);

		// drone_1
		const drone_1 = new Drone(this, 626, 952);
		this.add.existing(drone_1);

		// cyberPigeon
		const cyberPigeon = new CyberPigeon(this, 323, 666);
		this.add.existing(cyberPigeon);

		// heart
		const heart = new Heart(this, 179, 865);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 64, 520);
		this.add.existing(heart_1);

		// heart_2
		const heart_2 = new Heart(this, 479, 285);
		this.add.existing(heart_2);

		// supaBomb
		const supaBomb = new SupaBomb(this, 325, 1440);
		this.add.existing(supaBomb);

		// supaBomb_1
		const supaBomb_1 = new SupaBomb(this, 645, 1425);
		this.add.existing(supaBomb_1);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [angrySpin, sampoShooter, sampoShooter_1, cyberPigeon];
		const platforms = [platform1];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// angrySpin (prefab fields)
		angrySpin.travelDistance = 500;

		// card (prefab fields)
		card.timeExpires = 8000;

		// platform1 (prefab fields)
		platform1.distance = 800;
		platform1.timeTravel = 6000;
		platform1.isHorizontal = true;

		// portalCannon_1 (prefab fields)
		portalCannon_1.IsFirstCannon = true;

		// upgradeHalo (prefab fields)
		upgradeHalo.isCannonStrike = true;

		// card_1 (prefab fields)
		card_1.timeExpires = 5000;

		// upgradeHalo_1 (prefab fields)
		upgradeHalo_1.isDoubleJump = true;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level16 = new_level16;
		this.doors = doors;
		this.switches = switches;
		this.enemies = enemies;
		this.platforms = platforms;
		this.coins = coins;
		this.catapultas = catapultas;
		this.revivingPods = revivingPods;
		this.tutorials = tutorials;
		this.nextLevel = "NewLevel17";
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
	new_level16;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<AngrySpin|SampoShooter|CyberPigeon>} */
	enemies;
	/** @type {Platform1[]} */
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
