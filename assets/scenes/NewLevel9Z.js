
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel9Z extends BaseScene {

	constructor() {
		super("NewLevel9Z");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level9Z");
		mapa.addTilesetImage("finalStage", "finalStage");

		// new_level9Z
		const new_level9Z = this.add.tilemap("new_level9Z");
		new_level9Z.addTilesetImage("finalStage", "finalStage");

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(-495.8880334074054, -226.5941042930633, 64, 64, "bg1TileBG");
		tilespriteBG.setOrigin(0, 1);

		// bg1Tile
		const bg1Tile = this.add.image(-495.8880334074054, -226.5941042930633, "bg1Tile");
		bg1Tile.setOrigin(0, 0);

		// noCollide_1
		mapa.createLayer("NoCollide", ["finalStage"], 0, 0);

		// damagedDoor_instance_10000
		this.add.image(143, 769, "propsNew", "damagedDoor instance 10000");

		// door
		const door = new Door(this, 1419, 6);
		this.add.existing(door);
		door.scaleX = 1.25;
		door.scaleY = 1.25;

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["finalStage"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["finalStage"], 0, 0);

		// collideFX_1
		new_level9Z.createLayer("CollideFX", ["finalStage"], 0, 0);

		// player
		const player = new Player(this, 132, 790);
		this.add.existing(player);

		// cyberPigeon
		const cyberPigeon = new CyberPigeon(this, 531, 68);
		this.add.existing(cyberPigeon);

		// cyberPigeon_1
		const cyberPigeon_1 = new CyberPigeon(this, 372, 211);
		this.add.existing(cyberPigeon_1);

		// cyberPigeon_2
		const cyberPigeon_2 = new CyberPigeon(this, 674, 144);
		this.add.existing(cyberPigeon_2);

		// cyberPigeon_3
		const cyberPigeon_3 = new CyberPigeon(this, 898, 76);
		this.add.existing(cyberPigeon_3);

		// cyberPigeon_4
		const cyberPigeon_4 = new CyberPigeon(this, 1107, 131);
		this.add.existing(cyberPigeon_4);

		// guardBoss
		const guardBoss = new GuardBoss(this, 915, 622);
		this.add.existing(guardBoss);

		// passCard
		const passCard = new PassCard(this, 144, 98);
		this.add.existing(passCard);

		// activeZoneBoss
		const activeZoneBoss = new ActiveZoneBoss(this, 613, 606);
		this.add.existing(activeZoneBoss);
		activeZoneBoss.scaleX = 3;
		activeZoneBoss.scaleY = 3;
		activeZoneBoss.alpha = 0;

		// lists
		const doors = [door]
		const switches = []
		const enemies = [guardBoss]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = []
		const tutorials = []

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// door (prefab fields)
		door.goToLevel = "NewLevel10Y";
		door.desde = 9;
		door.hasta = 10;

		// guardBoss (prefab fields)
		guardBoss.ThingToDrop = "SupaJet";

		// activeZoneBoss (prefab fields)
		activeZoneBoss.isActive = true;
		activeZoneBoss.activateBoss = true;

		this.tilespriteBG = tilespriteBG;
		this.bg1Tile = bg1Tile;
		this.layer = layer;
		this.player = player;
		this.guardBoss = guardBoss;
		this.activeZoneBoss = activeZoneBoss;
		this.mapa = mapa;
		this.new_level9Z = new_level9Z;
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

	/** @type {Phaser.GameObjects.TileSprite} */
	tilespriteBG;
	/** @type {Phaser.GameObjects.Image} */
	bg1Tile;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	layer;
	/** @type {Player} */
	player;
	/** @type {GuardBoss} */
	guardBoss;
	/** @type {ActiveZoneBoss} */
	activeZoneBoss;
	/** @type {Door[]} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {GuardBoss[]} */
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
