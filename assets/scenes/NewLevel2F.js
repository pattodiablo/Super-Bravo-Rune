
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel2F extends BaseScene {

	constructor() {
		super("NewLevel2F");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level2F");
		mapa.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// new_level2F
		const new_level2F = this.add.tilemap("new_level2F");
		new_level2F.addTilesetImage("new_buildingTiles", "new_buildingTiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg1Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "bg1TileBG");
		tilespriteBG.setOrigin(0, 1);

		// noCollide
		mapa.createLayer("NoCollide", ["new_buildingTiles"], 0, 0);

		// noCollideFX_1
		mapa.createLayer("NoCollideFX", ["new_buildingTiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["new_buildingTiles"], 0, 0);

		// collideFX_1
		new_level2F.createLayer("CollideFX", ["new_buildingTiles"], 0, 0);

		// player
		const player = new Player(this, 560, 403);
		this.add.existing(player);

		// smallDoor
		const smallDoor = new SmallDoor(this, 560, -61);
		this.add.existing(smallDoor);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 1056, 964);
		this.add.existing(switchPanel);

		// platform2_1
		const platform2_1 = new Platform2(this, 55, 1100);
		this.add.existing(platform2_1);
		platform2_1.scaleX = 0.75;
		platform2_1.scaleY = 0.75;

		// platform2_1_1
		const platform2_1_1 = new Platform2(this, 265, 1100);
		this.add.existing(platform2_1_1);
		platform2_1_1.scaleX = 0.75;
		platform2_1_1.scaleY = 0.75;

		// platform2_1_1_1
		const platform2_1_1_1 = new Platform2(this, 852, 1100);
		this.add.existing(platform2_1_1_1);
		platform2_1_1_1.scaleX = 0.75;
		platform2_1_1_1.scaleY = 0.75;

		// platform2_1_1_2
		const platform2_1_1_2 = new Platform2(this, 456, 1100);
		this.add.existing(platform2_1_1_2);
		platform2_1_1_2.scaleX = 0.75;
		platform2_1_1_2.scaleY = 0.75;

		// platform2_1_1_2_1
		const platform2_1_1_2_1 = new Platform2(this, 663, 1100);
		this.add.existing(platform2_1_1_2_1);
		platform2_1_1_2_1.scaleX = 0.75;
		platform2_1_1_2_1.scaleY = 0.75;

		// blobber
		const blobber = new Blobber(this, 915, 430);
		this.add.existing(blobber);

		// blobber_1
		const blobber_1 = new Blobber(this, 115, 431);
		this.add.existing(blobber_1);

		// drone
		const drone = new Drone(this, 422, 182);
		this.add.existing(drone);

		// drone_1
		const drone_1 = new Drone(this, 698, 182);
		this.add.existing(drone_1);

		// heart
		const heart = new Heart(this, 496, 211);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 621, 211);
		this.add.existing(heart_1);

		// heart_2
		const heart_2 = new Heart(this, 558, 211);
		this.add.existing(heart_2);

		// platform2_2
		const platform2_2 = new Platform2(this, 321, 400);
		this.add.existing(platform2_2);

		// platform2_2_1
		const platform2_2_1 = new Platform2(this, 802, 400);
		this.add.existing(platform2_2_1);

		// lists
		const doors = [smallDoor]
		const switches = [switchPanel]
		const enemies = [blobber, blobber_1]
		const platforms = [platform2_1, platform2_1_1, platform2_1_1_1, platform2_1_1_2_1, platform2_1_1_2, platform2_2_1, platform2_2]
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel2G";

		// platform2_1 (prefab fields)
		platform2_1.distance = 320;
		platform2_1.timeTravel = 4000;

		// platform2_1_1 (prefab fields)
		platform2_1_1.distance = 320;
		platform2_1_1.timeTravel = 4000;

		// platform2_1_1_1 (prefab fields)
		platform2_1_1_1.distance = 320;
		platform2_1_1_1.timeTravel = 4000;

		// platform2_1_1_2 (prefab fields)
		platform2_1_1_2.distance = 481;
		platform2_1_1_2.timeTravel = 4500;

		// platform2_1_1_2_1 (prefab fields)
		platform2_1_1_2_1.distance = 481;
		platform2_1_1_2_1.timeTravel = 4500;

		// blobber (prefab fields)
		blobber.travelDistance = 90;

		// blobber_1 (prefab fields)
		blobber_1.travelDistance = 90;

		// platform2_2 (prefab fields)
		platform2_2.distance = 255;
		platform2_2.timeTravel = 3500;

		// platform2_2_1 (prefab fields)
		platform2_2_1.distance = 255;
		platform2_2_1.timeTravel = 3500;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level2F = new_level2F;
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
	/** @type {SmallDoor[]} */
	doors;
	/** @type {SwitchPanel[]} */
	switches;
	/** @type {Blobber[]} */
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
