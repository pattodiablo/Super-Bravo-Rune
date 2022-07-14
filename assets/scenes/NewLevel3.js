
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel3 extends BaseScene {

	constructor() {
		super("NewLevel3");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level3");
		mapa.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// new_level3
		const new_level3 = this.add.tilemap("new_level3");
		new_level3.addTilesetImage("Invernadero_tiles", "Invernadero_tiles");

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "invernaderoTile");
		tilespriteBG.setOrigin(0, 1);

		// noCollide
		mapa.createLayer("NoCollide", ["Invernadero_tiles"], 0, 0);

		// smallDoor
		const smallDoor = new SmallDoor(this, 1055, 39);
		this.add.existing(smallDoor);
		smallDoor.scaleX = 0.8;
		smallDoor.scaleY = 0.8;

		// noCollideFX_1
		mapa.createLayer("NoCollideFX", ["Invernadero_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["Invernadero_tiles"], 0, 0);

		// collideFX_1
		new_level3.createLayer("CollideFX", ["Invernadero_tiles"], 0, 1);

		// door
		const door = new Door(this, 784, 246);
		this.add.existing(door);

		// symbol_30_instance_20000
		this.add.image(757, 417, "propsNew", "Symbol 30 instance 20000");

		// symbol_19_instance_10000
		this.add.image(758, 367, "propsNew", "Symbol 19 instance 10000");

		// player
		const player = new Player(this, 802, 400);
		this.add.existing(player);

		// energyStation
		const energyStation = new EnergyStation(this, 801, 561);
		this.add.existing(energyStation);

		// portalCannon
		const portalCannon = new PortalCannon(this, 455, 637);
		this.add.existing(portalCannon);
		portalCannon.angle = 36;
		portalCannon.tintBottomLeft = 16700885;

		// catapulta
		const catapulta = new Catapulta(this, 604, 720);
		this.add.existing(catapulta);

		// catapulta_1
		const catapulta_1 = new Catapulta(this, 999, 720);
		this.add.existing(catapulta_1);

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 1142, 637);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = -39.99999999999994;
		portalCannon_1.tintBottomLeft = 16700885;

		// portalCannon_2
		const portalCannon_2 = new PortalCannon(this, 739, 125);
		this.add.existing(portalCannon_2);
		portalCannon_2.scaleX = 1;
		portalCannon_2.scaleY = 1;
		portalCannon_2.angle = -90;
		portalCannon_2.tintBottomLeft = 16700885;

		// portalCannon_2_1
		const portalCannon_2_1 = new PortalCannon(this, 861, 126);
		this.add.existing(portalCannon_2_1);
		portalCannon_2_1.scaleX = 1;
		portalCannon_2_1.scaleY = 1;
		portalCannon_2_1.angle = 90;
		portalCannon_2_1.tintBottomLeft = 16700885;

		// switchPanel
		const switchPanel = new SwitchPanel(this, 538, 161);
		this.add.existing(switchPanel);

		// symbol_20_instance_10000
		const symbol_20_instance_10000 = this.add.image(1048, 111, "propsNew", "Symbol 20 instance 10000");
		symbol_20_instance_10000.scaleX = 0.53;
		symbol_20_instance_10000.scaleY = 0.53;

		// a_instance_10000
		this.add.image(1064, 111, "propsNew", "a instance 10000");

		// textInfo
		const textInfo = new TextInfo(this, 657, 233);
		this.add.existing(textInfo);

		// textInfo_1
		const textInfo_1 = new TextInfo(this, 921, 565);
		this.add.existing(textInfo_1);

		// lists
		const doors = [door, smallDoor]
		const switches = [switchPanel]
		const enemies = []
		const platforms = []
		const coins = []
		const catapultas = [catapulta_1, catapulta]
		const revivingPods = []
		const tutorials = []

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel3A";

		// door (prefab fields)
		door.goToLevel = "NewLevel2";
		door.isLocked = false;

		// portalCannon (prefab fields)
		portalCannon.IsFirstCannon = true;

		// catapulta (prefab fields)
		catapulta.power = 550;

		// catapulta_1 (prefab fields)
		catapulta_1.power = 550;

		// portalCannon_1 (prefab fields)
		portalCannon_1.IsFirstCannon = true;

		// textInfo (prefab fields)
		textInfo.textToDisplay = "I need access to the upper floor. \nWhat should I do?";

		// textInfo_1 (prefab fields)
		textInfo_1.textToDisplay = "Supa Cannon may help.\n\nIf I can't afford it,\nI should go back to level 2, those catapults may be useful.";

		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level3 = new_level3;
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
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	layer;
	/** @type {Player} */
	player;
	/** @type {Array<Door|SmallDoor>} */
	doors;
	/** @type {SwitchPanel[]} */
	switches;
	/** @type {Array<any>} */
	enemies;
	/** @type {Array<any>} */
	platforms;
	/** @type {Array<any>} */
	coins;
	/** @type {Catapulta[]} */
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
