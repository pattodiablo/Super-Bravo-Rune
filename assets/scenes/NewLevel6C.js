
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel6C extends BaseScene {

	constructor() {
		super("NewLevel6C");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level6C");
		mapa.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

		// new_level6C_1
		const new_level6C_1 = this.add.tilemap("new_level6C");
		new_level6C_1.addTilesetImage("Laboratorio_tiles", "Laboratorio_tiles");

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
		new_level6C_1.createLayer("CollideFX", ["Laboratorio_tiles"], 0, 0);

		// backJetPackStation
		this.add.image(225, 534, "backJetPackStation");

		// supaJet
		const supaJet = new SupaJet(this, 225, 526);
		this.add.existing(supaJet);

		// damagedDoor_instance_10000
		this.add.image(206, 351, "propsNew", "damagedDoor instance 10000");

		// player
		const player = new Player(this, 180, 389);
		this.add.existing(player);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 3119, 522);
		this.add.existing(switchPanel);

		// smallDoor
		const smallDoor = new SmallDoor(this, 3119, 99);
		this.add.existing(smallDoor);

		// sideDoorLocked
		const sideDoorLocked = new SideDoorLocked(this, 2943, 515);
		this.add.existing(sideDoorLocked);
		sideDoorLocked.scaleX = 0.77;
		sideDoorLocked.scaleY = 0.77;
		sideDoorLocked.tintTopLeft = 15612474;
		sideDoorLocked.tintTopRight = 15347503;
		sideDoorLocked.tintBottomLeft = 16218746;
		sideDoorLocked.tintBottomRight = 16490041;

		// toll
		const toll = new Toll(this, 3118, 402);
		this.add.existing(toll);

		// platform2
		const platform2 = new Platform2(this, 2856, 590);
		this.add.existing(platform2);

		// drone
		const drone = new Drone(this, 1760, 50);
		this.add.existing(drone);

		// drone_2
		const drone_2 = new Drone(this, 1057, 50);
		this.add.existing(drone_2);

		// cyberPigeon
		const cyberPigeon = new CyberPigeon(this, 70, 107);
		this.add.existing(cyberPigeon);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 825, 235);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1303, 521);
		this.add.existing(sampoShooter_1);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 2006, 104);
		this.add.existing(sampoShooter_2);

		// energyStation
		const energyStation = new EnergyStation(this, 2109, 42);
		this.add.existing(energyStation);

		// cyberPigeon_1
		const cyberPigeon_1 = new CyberPigeon(this, 2455, 109);
		this.add.existing(cyberPigeon_1);

		// energyStation_1
		const energyStation_1 = new EnergyStation(this, 63, 277);
		this.add.existing(energyStation_1);

		// backJetPackStation_1
		this.add.image(2108, 346, "backJetPackStation");

		// supaJet_1
		const supaJet_1 = new SupaJet(this, 2108, 338);
		this.add.existing(supaJet_1);

		// smallDoor_1
		const smallDoor_1 = new SmallDoor(this, 69, 420);
		this.add.existing(smallDoor_1);

		// symbol_30_instance_20000
		this.add.image(70, 512, "propsNew", "Symbol 30 instance 20000");

		// lists
		const doors = [smallDoor, sideDoorLocked]
		const switches = [switchPanel]
		const enemies = [drone, drone_2, cyberPigeon, sampoShooter, sampoShooter_1, sampoShooter_2, cyberPigeon_1]
		const platforms = [platform2]
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel6D";

		// sideDoorLocked (prefab fields)
		sideDoorLocked.LockedBy = "toll1";
		sideDoorLocked.doorID = "2";

		// toll (prefab fields)
		toll.tollCost = 100;
		toll.LockId = "toll1";

		// platform2 (prefab fields)
		platform2.distance = 310;
		platform2.timeTravel = 4000;

		// cyberPigeon (prefab fields)
		cyberPigeon.distance = 730;

		// sampoShooter (prefab fields)
		sampoShooter.travelDistance = 220;

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.travelDistance = 220;

		// sampoShooter_2 (prefab fields)
		sampoShooter_2.travelDistance = 220;

		// cyberPigeon_1 (prefab fields)
		cyberPigeon_1.distance = 600;

		// smallDoor_1 (prefab fields)
		smallDoor_1.goToLevel = "NewLevel5C";
		smallDoor_1.isLocked = false;
		smallDoor_1.showScore = false;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.supaJet = supaJet;
		this.player = player;
		this.cyberPigeon = cyberPigeon;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.sampoShooter_2 = sampoShooter_2;
		this.cyberPigeon_1 = cyberPigeon_1;
		this.supaJet_1 = supaJet_1;
		this.mapa = mapa;
		this.new_level6C_1 = new_level6C_1;
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
	/** @type {SupaJet} */
	supaJet;
	/** @type {Player} */
	player;
	/** @type {CyberPigeon} */
	cyberPigeon;
	/** @type {SampoShooter} */
	sampoShooter;
	/** @type {SampoShooter} */
	sampoShooter_1;
	/** @type {SampoShooter} */
	sampoShooter_2;
	/** @type {CyberPigeon} */
	cyberPigeon_1;
	/** @type {SupaJet} */
	supaJet_1;
	/** @type {Array<SmallDoor|SideDoorLocked>} */
	doors;
	/** @type {SwitchPanel[]} */
	switches;
	/** @type {Array<Drone|CyberPigeon|SampoShooter>} */
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
