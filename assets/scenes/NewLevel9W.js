
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel9W extends BaseScene {

	constructor() {
		super("NewLevel9W");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level9W");
		mapa.addTilesetImage("finalStage", "finalStage");

		// new_level9W
		const new_level9W = this.add.tilemap("new_level9W");
		new_level9W.addTilesetImage("finalStage", "finalStage");

		// bgLevel1
		const bgLevel1 = this.add.image(153, 110, "bgLevel1");

		// noCollide_1
		mapa.createLayer("NoCollide", ["finalStage"], 0, 0);

		// smallDoor
		const smallDoor = new SmallDoor(this, 143, 673);
		this.add.existing(smallDoor);

		// damagedDoor_instance_10000
		this.add.image(2449, 800, "propsNew", "damagedDoor instance 10000");

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["finalStage"], 0, 0);

		// layer
		const layer = mapa.createLayer("Collide", ["finalStage"], 0, 0);

		// collideFX_1
		new_level9W.createLayer("CollideFX", ["finalStage"], 0, 0);

		// platform2
		const platform2 = new Platform2(this, 2032, 800);
		this.add.existing(platform2);

		// platform1
		const platform1 = new Platform1(this, 2505, 400);
		this.add.existing(platform1);

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 2510, 321);
		this.add.existing(portalCannon_1);
		portalCannon_1.tintBottomLeft = 16700885;

		// portalCannon
		const portalCannon = new PortalCannon(this, 2510, 105);
		this.add.existing(portalCannon);
		portalCannon.angle = -90;
		portalCannon.tintBottomLeft = 16700885;

		// portalCannon_2
		const portalCannon_2 = new PortalCannon(this, 2096, 105);
		this.add.existing(portalCannon_2);
		portalCannon_2.angle = -135;
		portalCannon_2.tintBottomLeft = 16700885;

		// portalCannon_3
		const portalCannon_3 = new PortalCannon(this, 2000, 213);
		this.add.existing(portalCannon_3);
		portalCannon_3.angle = -58.00000000000006;
		portalCannon_3.tintBottomLeft = 16700885;

		// portalCannon_2_1
		const portalCannon_2_1 = new PortalCannon(this, 1741, 73);
		this.add.existing(portalCannon_2_1);
		portalCannon_2_1.angle = -135;
		portalCannon_2_1.tintBottomLeft = 16700885;

		// portalCannon_3_1
		const portalCannon_3_1 = new PortalCannon(this, 1620, 209);
		this.add.existing(portalCannon_3_1);
		portalCannon_3_1.angle = -45.00000000000006;
		portalCannon_3_1.tintBottomLeft = 16700885;

		// angrySpin
		const angrySpin = new AngrySpin(this, 1190, 111);
		this.add.existing(angrySpin);

		// portalCannon_4
		const portalCannon_4 = new PortalCannon(this, 1077, 139);
		this.add.existing(portalCannon_4);
		portalCannon_4.angle = -59.99999999999994;
		portalCannon_4.tintBottomLeft = 16700885;

		// portalCannon_2_1_1
		const portalCannon_2_1_1 = new PortalCannon(this, 907, 67);
		this.add.existing(portalCannon_2_1_1);
		portalCannon_2_1_1.angle = -135;
		portalCannon_2_1_1.tintBottomLeft = 16700885;

		// portalCannon_2_1_1_1
		const portalCannon_2_1_1_1 = new PortalCannon(this, 595, 58);
		this.add.existing(portalCannon_2_1_1_1);
		portalCannon_2_1_1_1.angle = -135;
		portalCannon_2_1_1_1.tintBottomLeft = 16700885;

		// portalCannon_3_1_1
		const portalCannon_3_1_1 = new PortalCannon(this, 784, 207);
		this.add.existing(portalCannon_3_1_1);
		portalCannon_3_1_1.angle = -45.00000000000006;
		portalCannon_3_1_1.tintBottomLeft = 16700885;

		// portalCannon_5
		const portalCannon_5 = new PortalCannon(this, 422, 237);
		this.add.existing(portalCannon_5);
		portalCannon_5.angle = -90;
		portalCannon_5.tintBottomLeft = 16700885;

		// portalCannon_6
		const portalCannon_6 = new PortalCannon(this, 55, 236);
		this.add.existing(portalCannon_6);
		portalCannon_6.tintBottomLeft = 16700885;

		// portalCannon_7
		const portalCannon_7 = new PortalCannon(this, 55, 56);
		this.add.existing(portalCannon_7);
		portalCannon_7.angle = 90;
		portalCannon_7.tintBottomLeft = 16700885;

		// portalCannon_8
		const portalCannon_8 = new PortalCannon(this, 223, 56);
		this.add.existing(portalCannon_8);
		portalCannon_8.angle = -180;
		portalCannon_8.tintBottomLeft = 16700885;

		// platform2_1
		const platform2_1 = new Platform2(this, 358, 660);
		this.add.existing(platform2_1);

		// platform1_1
		const platform1_1 = new Platform1(this, 830, 405);
		this.add.existing(platform1_1);

		// portalCannon_9
		const portalCannon_9 = new PortalCannon(this, 1094, 1107);
		this.add.existing(portalCannon_9);
		portalCannon_9.angle = 45;
		portalCannon_9.tintBottomLeft = 16700885;

		// portalCannon_10
		const portalCannon_10 = new PortalCannon(this, 1303, 897);
		this.add.existing(portalCannon_10);
		portalCannon_10.angle = 135;
		portalCannon_10.tintBottomLeft = 16700885;

		// catapulta
		const catapulta = new Catapulta(this, 1600, 1135);
		this.add.existing(catapulta);

		// portalCannon_11
		const portalCannon_11 = new PortalCannon(this, 1830, 415);
		this.add.existing(portalCannon_11);
		portalCannon_11.angle = -180;
		portalCannon_11.tintBottomLeft = 16700885;

		// platform1_2
		const platform1_2 = new Platform1(this, 1616, 1455);
		this.add.existing(platform1_2);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 128, 1450);
		this.add.existing(switchPanel);

		// energyStation
		const energyStation = new EnergyStation(this, 2447, 1013);
		this.add.existing(energyStation);

		// misile
		const misile = new Misile(this, 2650, 1416);
		this.add.existing(misile);

		// misile_1
		const misile_1 = new Misile(this, 2800, 1478);
		this.add.existing(misile_1);

		// platform1_3
		const platform1_3 = new Platform1(this, 1293, 1555);
		this.add.existing(platform1_3);

		// misile_2
		const misile_2 = new Misile(this, 2950, 1477);
		this.add.existing(misile_2);

		// misile_3
		const misile_3 = new Misile(this, 3100, 1416);
		this.add.existing(misile_3);

		// platform1_3_1
		const platform1_3_1 = new Platform1(this, 1068, 1455);
		this.add.existing(platform1_3_1);

		// platform1_3_2
		const platform1_3_2 = new Platform1(this, 783, 1556);
		this.add.existing(platform1_3_2);

		// platform1_3_3
		const platform1_3_3 = new Platform1(this, 499, 1457);
		this.add.existing(platform1_3_3);

		// player
		const player = new Player(this, 2441, 813);
		this.add.existing(player);

		// portalCannon_12
		const portalCannon_12 = new PortalCannon(this, 55, 1456);
		this.add.existing(portalCannon_12);
		portalCannon_12.tintBottomLeft = 16700885;

		// portalCannon_13
		const portalCannon_13 = new PortalCannon(this, 55, 1276);
		this.add.existing(portalCannon_13);
		portalCannon_13.angle = 90;
		portalCannon_13.tintBottomLeft = 16700885;

		// portalCannon_14
		const portalCannon_14 = new PortalCannon(this, 2530, 1276);
		this.add.existing(portalCannon_14);
		portalCannon_14.angle = -180;
		portalCannon_14.tintBottomLeft = 16700885;

		// portalCannon_14_1
		const portalCannon_14_1 = new PortalCannon(this, 2530, 1521);
		this.add.existing(portalCannon_14_1);
		portalCannon_14_1.angle = -90;
		portalCannon_14_1.tintBottomLeft = 16700885;

		// portalCannon_15
		const portalCannon_15 = new PortalCannon(this, 2110, 1521);
		this.add.existing(portalCannon_15);
		portalCannon_15.tintBottomLeft = 16700885;

		// portalCannon_16
		const portalCannon_16 = new PortalCannon(this, 2110, 1127);
		this.add.existing(portalCannon_16);
		portalCannon_16.angle = 90;
		portalCannon_16.tintBottomLeft = 16700885;

		// platform2_2
		const platform2_2 = new Platform2(this, 2070, 1059);
		this.add.existing(platform2_2);

		// lists
		const doors = [smallDoor]
		const switches = []
		const enemies = [angrySpin]
		const platforms = [platform2, platform1, platform2_1, platform1_1, platform1_2, platform1_3, platform1_3_1, platform1_3_2, platform2_2, platform1_3_3]
		const coins = []
		const catapultas = [catapulta]
		const revivingPods = []
		const tutorials = []

		// bgLevel1 (components)
		new FixedToCamera(bgLevel1);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel9X";

		// platform2 (prefab fields)
		platform2.distance = 400;
		platform2.timeTravel = 3500;

		// platform1 (prefab fields)
		platform1.isHorizontal = true;

		// portalCannon_1 (prefab fields)
		portalCannon_1.IsFirstCannon = true;

		// portalCannon_4 (prefab fields)
		portalCannon_4.IsFirstCannon = true;

		// platform2_1 (prefab fields)
		platform2_1.distance = 250;
		platform2_1.timeTravel = 3500;

		// platform1_1 (prefab fields)
		platform1_1.timeTravel = 5000;
		platform1_1.isHorizontal = true;

		// portalCannon_9 (prefab fields)
		portalCannon_9.IsFirstCannon = true;

		// catapulta (prefab fields)
		catapulta.power = 850;

		// portalCannon_11 (prefab fields)
		portalCannon_11.IsFirstCannon = true;

		// platform1_2 (prefab fields)
		platform1_2.timeTravel = 3000;
		platform1_2.isHorizontal = true;

		// platform1_3 (prefab fields)
		platform1_3.timeTravel = 3000;
		platform1_3.isHorizontal = true;

		// platform1_3_1 (prefab fields)
		platform1_3_1.timeTravel = 3000;
		platform1_3_1.isHorizontal = true;

		// platform1_3_2 (prefab fields)
		platform1_3_2.timeTravel = 3000;
		platform1_3_2.isHorizontal = true;

		// platform1_3_3 (prefab fields)
		platform1_3_3.timeTravel = 3000;
		platform1_3_3.isHorizontal = true;

		// portalCannon_12 (prefab fields)
		portalCannon_12.IsFirstCannon = true;

		// platform2_2 (prefab fields)
		platform2_2.distance = 140;
		platform2_2.timeTravel = 3500;

		this.layer = layer;
		this.angrySpin = angrySpin;
		this.player = player;
		this.mapa = mapa;
		this.new_level9W = new_level9W;
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

	/** @type {Phaser.Tilemaps.TilemapLayer} */
	layer;
	/** @type {AngrySpin} */
	angrySpin;
	/** @type {Player} */
	player;
	/** @type {SmallDoor[]} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {AngrySpin[]} */
	enemies;
	/** @type {Array<Platform2|Platform1>} */
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
