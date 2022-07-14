
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel1E extends BaseScene {

	constructor() {
		super("NewLevel1E");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level1E");
		mapa.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// NewLevel_1E
		const newLevel_1E = this.add.tilemap("new_level1E");
		newLevel_1E.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg1Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "bg1TileBG");
		tilespriteBG.setOrigin(0, 1);

		// noCollide1_1
		mapa.createLayer("NoCollide1", ["new_buildingTiles"], 0, 0);

		// noCollide
		mapa.createLayer("NoCollide", ["new_buildingTiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["new_buildingTiles"], 0, 0);

		// blobber
		const blobber = new Blobber(this, 250, 337);
		this.add.existing(blobber);

		// blobber_1
		const blobber_1 = new Blobber(this, 590, 336);
		this.add.existing(blobber_1);

		// blobber_1_1
		const blobber_1_1 = new Blobber(this, 847, 338);
		this.add.existing(blobber_1_1);

		// blobber_1_2
		const blobber_1_2 = new Blobber(this, 1103, 336);
		this.add.existing(blobber_1_2);

		// collideFX_1
		newLevel_1E.createLayer("CollideFX", ["new_buildingTiles"], 1, 0);

		// smallDoor
		const smallDoor = new SmallDoor(this, 1168, 674);
		this.add.existing(smallDoor);

		// player
		const player = new Player(this, 88, 815);
		this.add.existing(player);

		// handPointer
		const handPointer = new HandPointer(this, 244, 828);
		this.add.existing(handPointer);

		// catapulta
		const catapulta = new Catapulta(this, 239, 722);
		this.add.existing(catapulta);

		// catapulta_1
		const catapulta_1 = new Catapulta(this, 754, 582);
		this.add.existing(catapulta_1);

		// catapulta_1_1
		const catapulta_1_1 = new Catapulta(this, 1010, 584);
		this.add.existing(catapulta_1_1);

		// smallDoor_1
		const smallDoor_1 = new SmallDoor(this, 64, 483);
		this.add.existing(smallDoor_1);

		// sideDoorLocked
		const sideDoorLocked = new SideDoorLocked(this, 367, 209);
		this.add.existing(sideDoorLocked);
		sideDoorLocked.tintTopLeft = 15612474;
		sideDoorLocked.tintTopRight = 15347503;
		sideDoorLocked.tintBottomLeft = 16218746;
		sideDoorLocked.tintBottomRight = 16490041;

		// toll
		const toll = new Toll(this, 406, 274);
		this.add.existing(toll);

		// cyberPigeon
		const cyberPigeon = new CyberPigeon(this, 441, 113);
		this.add.existing(cyberPigeon);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 440, 572);
		this.add.existing(sampoShooter);

		// box
		const box = new Box(this, 363, 593);
		this.add.existing(box);

		// heart
		const heart = new Heart(this, 753, 116);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 1009, 114);
		this.add.existing(heart_1);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 1168, 259);
		this.add.existing(switchPanel);

		// wallLight
		this.add.image(559, 713, "wallLight");

		// wallLight_1
		this.add.image(817, 713, "wallLight");

		// lightBeam
		const lightBeam = new LightBeam(this, 557, 714);
		this.add.existing(lightBeam);

		// lightBeam_1
		const lightBeam_1 = new LightBeam(this, 816, 714);
		this.add.existing(lightBeam_1);

		// drone
		const drone = new Drone(this, 953, 690);
		this.add.existing(drone);

		// lists
		const doors = []
		const switches = [switchPanel]
		const enemies = [blobber, blobber_1, blobber_1_2, blobber_1_1, sampoShooter]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// blobber (prefab fields)
		blobber.travelDistance = 150;
		blobber.veloBlobber = 50;

		// blobber_1 (prefab fields)
		blobber_1.travelDistance = 70;
		blobber_1.veloBlobber = 50;

		// blobber_1_1 (prefab fields)
		blobber_1_1.travelDistance = 70;
		blobber_1_1.veloBlobber = 50;

		// blobber_1_2 (prefab fields)
		blobber_1_2.travelDistance = 70;
		blobber_1_2.veloBlobber = 50;

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel1F";

		// catapulta (prefab fields)
		catapulta.power = 400;

		// catapulta_1 (prefab fields)
		catapulta_1.power = 750;

		// catapulta_1_1 (prefab fields)
		catapulta_1_1.power = 800;

		// smallDoor_1 (prefab fields)
		smallDoor_1.goToLevel = "NewLevel1X";
		smallDoor_1.doorID = "2";
		smallDoor_1.isLocked = false;

		// toll (prefab fields)
		toll.tollCost = 300;

		// cyberPigeon (prefab fields)
		cyberPigeon.distance = 1000;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.blobber = blobber;
		this.blobber_1 = blobber_1;
		this.blobber_1_1 = blobber_1_1;
		this.blobber_1_2 = blobber_1_2;
		this.player = player;
		this.sampoShooter = sampoShooter;
		this.mapa = mapa;
		this.newLevel_1E = newLevel_1E;
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
	/** @type {Blobber} */
	blobber;
	/** @type {Blobber} */
	blobber_1;
	/** @type {Blobber} */
	blobber_1_1;
	/** @type {Blobber} */
	blobber_1_2;
	/** @type {Player} */
	player;
	/** @type {SampoShooter} */
	sampoShooter;
	/** @type {Array<any>} */
	doors;
	/** @type {SwitchPanel[]} */
	switches;
	/** @type {Array<Blobber|SampoShooter>} */
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
