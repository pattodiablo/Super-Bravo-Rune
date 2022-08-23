
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel4 extends BaseScene {

	constructor() {
		super("NewLevel4");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel4Pack", "assets/NewLevel4Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level4");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// new_level4
		const new_level4 = this.add.tilemap("new_level4");
		new_level4.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg2Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "bg2TileBG");
		tilespriteBG.setOrigin(0, 1);

		// nocollide2_1
		mapa.createLayer("nocollide2", ["new_ciudad_tiles"], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", [], 0, 0);

		// layer
		const layer = mapa.createLayer("layer", ["new_ciudad_tiles"], 0, 0);

		// player
		const player = new Player(this, 852, 738);
		this.add.existing(player);

		// upperTile
		const upperTile = new_level4.createLayer("upperTile", ["new_ciudad_tiles"], 0, 1);

		// catapulta
		const catapulta = new Catapulta(this, 849, 787);
		this.add.existing(catapulta);

		// drone
		const drone = new Drone(this, 840, 77);
		this.add.existing(drone);

		// portalCannon
		const portalCannon = new PortalCannon(this, 382, 736);
		this.add.existing(portalCannon);

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 381, 102);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = 90;

		// portalCannon_1_1
		const portalCannon_1_1 = new PortalCannon(this, 1314, 612);
		this.add.existing(portalCannon_1_1);
		portalCannon_1_1.angle = -90;

		// portalCannon_2
		const portalCannon_2 = new PortalCannon(this, 1311, 736);
		this.add.existing(portalCannon_2);

		// upgradeHalo
		const upgradeHalo = new UpgradeHalo(this, 849, 577);
		this.add.existing(upgradeHalo);

		// powerPodium
		const powerPodium = this.add.image(849, 588, "PowerPodium");
		powerPodium.scaleX = 0.6582278481012658;
		powerPodium.scaleY = 0.6582278481012658;
		powerPodium.angle = -180;

		// heart
		const heart = new Heart(this, 74, 238);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 1073, 475);
		this.add.existing(heart_1);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 1177, 482);
		this.add.existing(sampoShooter);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 604, 378);
		this.add.existing(enemyCreator);

		// catapulta_1
		const catapulta_1 = new Catapulta(this, 144, 560);
		this.add.existing(catapulta_1);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [enemyCreator];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// portalCannon (prefab fields)
		portalCannon.IsFirstCannon = true;

		// portalCannon_1 (prefab fields)
		portalCannon_1.IsFirstCannon = false;

		// portalCannon_1_1 (prefab fields)
		portalCannon_1_1.IsFirstCannon = false;

		// portalCannon_2 (prefab fields)
		portalCannon_2.IsFirstCannon = true;

		// upgradeHalo (prefab fields)
		upgradeHalo.isCannonStrike = true;

		// catapulta_1 (prefab fields)
		catapulta_1.power = 500;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.upperTile = upperTile;
		this.mapa = mapa;
		this.new_level4 = new_level4;
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
	/** @type {Phaser.Tilemaps.Tilemap} */
	mapa;
	/** @type {Phaser.Tilemaps.Tilemap} */
	new_level4;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {SampoShooter[]} */
	enemies;
	/** @type {Array<any>} */
	platforms;
	/** @type {Array<any>} */
	coins;
	/** @type {Array<any>} */
	catapultas;
	/** @type {EnemyCreator[]} */
	revivingPods;
	/** @type {Array<any>} */
	tutorials;

	/* START-USER-CODE */






	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
