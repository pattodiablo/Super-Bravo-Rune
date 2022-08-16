
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel2 extends BaseScene {

	constructor() {
		super("NewLevel2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level2");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// new_level2
		const new_level2 = this.add.tilemap("new_level2");
		new_level2.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

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
		const player = new Player(this, 80, 650);
		this.add.existing(player);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 397, 139);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 981, 629);
		this.add.existing(sampoShooter_1);

		// blobber_1
		const blobber_1 = new Blobber(this, 376, 240);
		this.add.existing(blobber_1);
		blobber_1.scaleX = 0.8472708286847896;
		blobber_1.scaleY = 0.8472708286847896;

		// wallLight
		this.add.image(417, 261, "wallLight");

		// lightBean
		this.add.image(417, 260, "lightBean");

		// powerPodium_1
		this.add.image(239, 327, "PowerPodium");

		// upgradeHalo_1
		const upgradeHalo_1 = new UpgradeHalo(this, 239, 342);
		this.add.existing(upgradeHalo_1);

		// portalCannon
		const portalCannon = new PortalCannon(this, 777, 620);
		this.add.existing(portalCannon);

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 786, 224);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = 91;

		// heart
		const heart = new Heart(this, 1174, 228);
		this.add.existing(heart);

		// catapulta
		const catapulta = new Catapulta(this, 81, 687);
		this.add.existing(catapulta);

		// sampoShooter_1_1
		const sampoShooter_1_1 = new SampoShooter(this, 655, 779);
		this.add.existing(sampoShooter_1_1);

		// portalCannon_2
		const portalCannon_2 = new PortalCannon(this, 1379, 588);
		this.add.existing(portalCannon_2);

		// catapulta_1
		const catapulta_1 = new Catapulta(this, 236, 814);
		this.add.existing(catapulta_1);
		catapulta_1.visible = true;

		// portalCannon_1_1
		const portalCannon_1_1 = new PortalCannon(this, 1387, 192);
		this.add.existing(portalCannon_1_1);
		portalCannon_1_1.angle = 91;

		// sideDoor
		const sideDoor = new SideDoor(this, 180, 675);
		this.add.existing(sideDoor);
		sideDoor.scaleX = 0.44228328314321896;
		sideDoor.scaleY = 0.44228328314321896;

		// blobber
		const blobber = new Blobber(this, 900, 749);
		this.add.existing(blobber);
		blobber.scaleX = 0.7942268240577769;
		blobber.scaleY = 0.7942268240577769;

		// stomper
		const stomper = new Stomper(this, 592, 513);
		this.add.existing(stomper);

		// upperTile
		const upperTile = new_level2.createLayer("upperTile", ["new_ciudad_tiles"], 0, 0);

		// spike
		const spike = new Spike(this, 904, 539);
		this.add.existing(spike);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter_1, sampoShooter, blobber_1, sampoShooter_1_1, stomper];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// upgradeHalo_1 (prefab fields)
		upgradeHalo_1.isCannonStrike = true;

		// portalCannon (prefab fields)
		portalCannon.IsFirstCannon = true;

		// portalCannon_2 (prefab fields)
		portalCannon_2.IsFirstCannon = true;

		// catapulta_1 (prefab fields)
		catapulta_1.power = 500;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.upperTile = upperTile;
		this.mapa = mapa;
		this.new_level2 = new_level2;
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
	new_level2;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<SampoShooter|Blobber|Stomper>} */
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
