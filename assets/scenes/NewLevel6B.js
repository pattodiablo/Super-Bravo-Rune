
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel6B extends BaseScene {

	constructor() {
		super("NewLevel6B");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level6B");
		mapa.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

		// new_level6B
		const new_level6B = this.add.tilemap("new_level6B");
		new_level6B.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "LabBg");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "LabNewBg");
		tilespriteBG.setOrigin(0, 1);

		// noCollide_1
		mapa.createLayer("NoCollide", ["Laboratorio_tiles"], 0, 0);

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["Laboratorio_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["Laboratorio_tiles"], 0, 0);

		// collideFX_1
		new_level6B.createLayer("CollideFX", ["Laboratorio_tiles"], 0, 0);

		// damagedDoor_instance_10000
		this.add.image(176, 225, "propsNew", "damagedDoor instance 10000");

		// player
		const player = new Player(this, 178, 243);
		this.add.existing(player);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 127, 1416);
		this.add.existing(switchPanel);

		// smallDoor
		const smallDoor = new SmallDoor(this, 944, 2049);
		this.add.existing(smallDoor);

		// energyStation
		const energyStation = new EnergyStation(this, 1024, 25);
		this.add.existing(energyStation);

		// platform1
		const platform1 = new Platform1(this, 672, 2312);
		this.add.existing(platform1);

		// drone
		const drone = new Drone(this, 576, 1494);
		this.add.existing(drone);

		// blobber
		const blobber = new Blobber(this, 160, 754);
		this.add.existing(blobber);

		// cyberPigeon
		const cyberPigeon = new CyberPigeon(this, 160, 1982);
		this.add.existing(cyberPigeon);

		// platform1_1
		const platform1_1 = new Platform1(this, 422, 2195);
		this.add.existing(platform1_1);

		// portalCannon
		const portalCannon = new PortalCannon(this, 1049, 2180);
		this.add.existing(portalCannon);
		portalCannon.tintBottomLeft = 16700885;

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 1053, 1701);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = -86;
		portalCannon_1.tintBottomLeft = 16700885;

		// portalCannon_2
		const portalCannon_2 = new PortalCannon(this, 775, 1682);
		this.add.existing(portalCannon_2);
		portalCannon_2.angle = 167;
		portalCannon_2.tintBottomLeft = 16700885;

		// lists
		const doors = [smallDoor]
		const switches = [switchPanel]
		const enemies = [blobber, cyberPigeon]
		const platforms = [platform1, platform1_1]
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel6C";

		// platform1 (prefab fields)
		platform1.distance = 600;
		platform1.timeTravel = 4000;
		platform1.isHorizontal = true;

		// blobber (prefab fields)
		blobber.travelDistance = 840;
		blobber.veloBlobber = 50;

		// cyberPigeon (prefab fields)
		cyberPigeon.distance = 840;

		// platform1_1 (prefab fields)
		platform1_1.distance = 600;
		platform1_1.timeTravel = 4000;
		platform1_1.isHorizontal = true;

		// portalCannon (prefab fields)
		portalCannon.IsFirstCannon = true;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.blobber = blobber;
		this.cyberPigeon = cyberPigeon;
		this.mapa = mapa;
		this.new_level6B = new_level6B;
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
	/** @type {Blobber} */
	blobber;
	/** @type {CyberPigeon} */
	cyberPigeon;
	/** @type {SmallDoor[]} */
	doors;
	/** @type {SwitchPanel[]} */
	switches;
	/** @type {Array<Blobber|CyberPigeon>} */
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
