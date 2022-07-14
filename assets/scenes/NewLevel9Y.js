
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel9Y extends BaseScene {

	constructor() {
		super("NewLevel9Y");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level9Y");
		mapa.addTilesetImage("finalStage", "finalStage");

		// new_level9Y
		const new_level9Y = this.add.tilemap("new_level9Y");
		new_level9Y.addTilesetImage("finalStage", "finalStage");

		// bg1Tile
		const bg1Tile = this.add.image(-596.0300445949957, 401.78302575478637, "bg1Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(-596.0300445949957, 401.78302575478637, 64, 64, "bg1TileBG");
		tilespriteBG.setOrigin(0, 1);

		// noCollide_1
		mapa.createLayer("NoCollide", ["finalStage"], 0, 0);

		// smallDoor
		const smallDoor = new SmallDoor(this, 1776, 355);
		this.add.existing(smallDoor);

		// damagedDoor_instance_10000
		this.add.image(144, 481, "propsNew", "damagedDoor instance 10000");

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["finalStage"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["finalStage"], 0, 0);

		// collideFX_1
		new_level9Y.createLayer("CollideFX", ["finalStage"], 0, 0);

		// backJetPackStation
		this.add.image(591, 223, "backJetPackStation");

		// supaJet
		const supaJet = new SupaJet(this, 592, 213);
		this.add.existing(supaJet);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 1549, 1770);
		this.add.existing(switchPanel);

		// energyStation
		const energyStation = new EnergyStation(this, 366, 1687);
		this.add.existing(energyStation);

		// sideDoorLocked
		const sideDoorLocked = new SideDoorLocked(this, 1626, 465);
		this.add.existing(sideDoorLocked);
		sideDoorLocked.tintTopLeft = 15612474;
		sideDoorLocked.tintTopRight = 15347503;
		sideDoorLocked.tintBottomLeft = 16218746;
		sideDoorLocked.tintBottomRight = 16490041;

		// toll
		const toll = new Toll(this, 1774, 280);
		this.add.existing(toll);

		// heart
		const heart = new Heart(this, 1834, 73);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 71, 63);
		this.add.existing(heart_1);

		// heart_2
		const heart_2 = new Heart(this, 144, 665);
		this.add.existing(heart_2);

		// heart_3
		const heart_3 = new Heart(this, 1774, 663);
		this.add.existing(heart_3);

		// cyberPigeon
		const cyberPigeon = new CyberPigeon(this, 188, 67);
		this.add.existing(cyberPigeon);

		// cyberPigeon_1
		const cyberPigeon_1 = new CyberPigeon(this, 864, 69);
		this.add.existing(cyberPigeon_1);

		// cyberPigeon_2
		const cyberPigeon_2 = new CyberPigeon(this, 1523, 69);
		this.add.existing(cyberPigeon_2);

		// misile
		const misile = new Misile(this, 1997, 674);
		this.add.existing(misile);

		// misile_1
		const misile_1 = new Misile(this, 2140, 930);
		this.add.existing(misile_1);

		// misile_2
		const misile_2 = new Misile(this, 2340, 1352);
		this.add.existing(misile_2);

		// misile_3
		const misile_3 = new Misile(this, 2091, 1623);
		this.add.existing(misile_3);

		// misileOff_instance_20000
		this.add.image(2550, 1470, "misile", "misileOff instance 20000");

		// misile_4
		const misile_4 = new Misile(this, 2729, 803);
		this.add.existing(misile_4);

		// misile_5
		const misile_5 = new Misile(this, 2927, 1173);
		this.add.existing(misile_5);

		// player
		const player = new Player(this, 147, 515);
		this.add.existing(player);

		// portalCannon
		const portalCannon = new PortalCannon(this, 333, 484);
		this.add.existing(portalCannon);
		portalCannon.angle = -180;
		portalCannon.tintBottomLeft = 16700885;

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 1564, 235);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = -89;
		portalCannon_1.tintBottomLeft = 16700885;

		// portalCannon_2
		const portalCannon_2 = new PortalCannon(this, 158, 236);
		this.add.existing(portalCannon_2);
		portalCannon_2.angle = -180;
		portalCannon_2.tintBottomLeft = 16700885;

		// portalCannon_3
		const portalCannon_3 = new PortalCannon(this, 500, 1718);
		this.add.existing(portalCannon_3);
		portalCannon_3.angle = 33;
		portalCannon_3.tintBottomLeft = 16700885;

		// portalCannon_4
		const portalCannon_4 = new PortalCannon(this, 1549, 1686);
		this.add.existing(portalCannon_4);
		portalCannon_4.tintBottomLeft = 16700885;

		// lists
		const doors = [smallDoor, sideDoorLocked]
		const switches = [switchPanel, toll]
		const enemies = []
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel9Z";

		// sideDoorLocked (prefab fields)
		sideDoorLocked.LockedBy = "2";
		sideDoorLocked.doorID = "2";

		// toll (prefab fields)
		toll.tollCost = 180;
		toll.LockId = "2";

		// portalCannon (prefab fields)
		portalCannon.IsFirstCannon = true;

		// portalCannon_1 (prefab fields)
		portalCannon_1.IsFirstCannon = true;

		// portalCannon_3 (prefab fields)
		portalCannon_3.IsFirstCannon = true;

		// portalCannon_4 (prefab fields)
		portalCannon_4.IsFirstCannon = true;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.supaJet = supaJet;
		this.player = player;
		this.mapa = mapa;
		this.new_level9Y = new_level9Y;
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
	/** @type {Array<SmallDoor|SideDoorLocked>} */
	doors;
	/** @type {Array<SwitchPanel|Toll>} */
	switches;
	/** @type {Array<any>} */
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
