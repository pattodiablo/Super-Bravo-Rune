
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel9X extends BaseScene {

	constructor() {
		super("NewLevel9X");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level9X");
		mapa.addTilesetImage("finalStage", "finalStage");

		// new_level9X
		const new_level9X = this.add.tilemap("new_level9X");
		new_level9X.addTilesetImage("finalStage", "finalStage");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg1Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "bg1TileBG");
		tilespriteBG.setOrigin(0, 1);

		// noCollide_1
		mapa.createLayer("NoCollide", ["finalStage"], 0, 0);

		// damagedDoor_instance_10000
		this.add.image(1456, 2241, "propsNew", "damagedDoor instance 10000");

		// smallDoor
		const smallDoor = new SmallDoor(this, 1456, 3);
		this.add.existing(smallDoor);

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["finalStage"], 0, 0);

		// stomper
		const stomper = new Stomper(this, 338, 661);
		this.add.existing(stomper);

		// stomper_1
		const stomper_1 = new Stomper(this, 625, 661);
		this.add.existing(stomper_1);

		// stomper_2
		const stomper_2 = new Stomper(this, 945, 661);
		this.add.existing(stomper_2);

		// stomper_3
		const stomper_3 = new Stomper(this, 1264, 661);
		this.add.existing(stomper_3);

		// mechaPirana
		const mechaPirana = new MechaPirana(this, 852, 2555);
		this.add.existing(mechaPirana);

		// mechaPirana_1
		const mechaPirana_1 = new MechaPirana(this, 1201, 2555);
		this.add.existing(mechaPirana_1);

		// mechaPirana_2
		const mechaPirana_2 = new MechaPirana(this, 493, 2555);
		this.add.existing(mechaPirana_2);

		// layer
		const layer = mapa.createLayer("Collide", ["finalStage"], 0, 0);

		// collideFX_1
		new_level9X.createLayer("CollideFX", ["finalStage"], 0, 0);

		// player
		const player = new Player(this, 1455, 2276);
		this.add.existing(player);

		// cart
		const cart = new Cart(this, 127, 446);
		this.add.existing(cart);

		// sideDoorLocked
		const sideDoorLocked = new SideDoorLocked(this, 263, 402);
		this.add.existing(sideDoorLocked);
		sideDoorLocked.tintTopLeft = 15612474;
		sideDoorLocked.tintTopRight = 15347503;
		sideDoorLocked.tintBottomLeft = 16218746;
		sideDoorLocked.tintBottomRight = 16490041;

		// toll
		const toll = new Toll(this, 364, 463);
		this.add.existing(toll);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 79, 139);
		this.add.existing(switchPanel);

		// catapulta
		const catapulta = new Catapulta(this, 1525, 849);
		this.add.existing(catapulta);

		// platform1
		const platform1 = new Platform1(this, 1182, 2322);
		this.add.existing(platform1);

		// platform1_1
		const platform1_1 = new Platform1(this, 1517, 2500);
		this.add.existing(platform1_1);

		// heart
		const heart = new Heart(this, 1511, 2443);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 1411, 2440);
		this.add.existing(heart_1);

		// portalCannon
		const portalCannon = new PortalCannon(this, 145, 2473);
		this.add.existing(portalCannon);
		portalCannon.tintBottomLeft = 16700885;

		// platform1_1_1
		const platform1_1_1 = new Platform1(this, 744, 2391);
		this.add.existing(platform1_1_1);

		// platform1_1_1_1
		const platform1_1_1_1 = new Platform1(this, 394, 2510);
		this.add.existing(platform1_1_1_1);

		// platform1_1_1_2
		const platform1_1_1_2 = new Platform1(this, 1067, 2509);
		this.add.existing(platform1_1_1_2);

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 143, 1600);
		this.add.existing(portalCannon_1);
		portalCannon_1.angle = 90;
		portalCannon_1.tintBottomLeft = 16700885;

		// portalCannon_2
		const portalCannon_2 = new PortalCannon(this, 296, 1600);
		this.add.existing(portalCannon_2);
		portalCannon_2.angle = -180;
		portalCannon_2.tintBottomLeft = 16700885;

		// energyStation
		const energyStation = new EnergyStation(this, 431, 1912);
		this.add.existing(energyStation);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 410, 837);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 694, 834);
		this.add.existing(sampoShooter_1);

		// sampoShooter_1_1
		const sampoShooter_1_1 = new SampoShooter(this, 1019, 834);
		this.add.existing(sampoShooter_1_1);

		// sampoShooter_1_2
		const sampoShooter_1_2 = new SampoShooter(this, 1339, 831);
		this.add.existing(sampoShooter_1_2);

		// catapulta_1
		const catapulta_1 = new Catapulta(this, 1486, 2035);
		this.add.existing(catapulta_1);

		// platform2
		const platform2 = new Platform2(this, 590, 1960);
		this.add.existing(platform2);

		// platform2_1
		const platform2_1 = new Platform2(this, 942, 1960);
		this.add.existing(platform2_1);

		// platform2_1_1
		const platform2_1_1 = new Platform2(this, 1295, 1960);
		this.add.existing(platform2_1_1);

		// misile
		const misile = new Misile(this, 1661, 1921);
		this.add.existing(misile);

		// misile_1
		const misile_1 = new Misile(this, 1899, 1833);
		this.add.existing(misile_1);

		// misile_2
		const misile_2 = new Misile(this, 1756, 1771);
		this.add.existing(misile_2);

		// misile_3
		const misile_3 = new Misile(this, 1994, 1700);
		this.add.existing(misile_3);

		// misile_4
		const misile_4 = new Misile(this, 2130, 1511);
		this.add.existing(misile_4);

		// misile_5
		const misile_5 = new Misile(this, 2295, 1588);
		this.add.existing(misile_5);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 287, 935);
		this.add.existing(enemyCreator);

		// enemyCreator_1
		const enemyCreator_1 = new EnemyCreator(this, 607, 935);
		this.add.existing(enemyCreator_1);

		// enemyCreator_1_1
		const enemyCreator_1_1 = new EnemyCreator(this, 927, 935);
		this.add.existing(enemyCreator_1_1);

		// sampoShooter_1_1_1
		const sampoShooter_1_1_1 = new SampoShooter(this, 289, 1360);
		this.add.existing(sampoShooter_1_1_1);

		// sampoShooter_1_1_1_1
		const sampoShooter_1_1_1_1 = new SampoShooter(this, 427, 1360);
		this.add.existing(sampoShooter_1_1_1_1);

		// sampoShooter_1_1_1_1_1
		const sampoShooter_1_1_1_1_1 = new SampoShooter(this, 606, 1360);
		this.add.existing(sampoShooter_1_1_1_1_1);

		// sampoShooter_1_1_1_1_1_1
		const sampoShooter_1_1_1_1_1_1 = new SampoShooter(this, 750, 1360);
		this.add.existing(sampoShooter_1_1_1_1_1_1);

		// sampoShooter_1_1_1_1_1_1_1
		const sampoShooter_1_1_1_1_1_1_1 = new SampoShooter(this, 926, 1360);
		this.add.existing(sampoShooter_1_1_1_1_1_1_1);

		// sampoShooter_1_1_1_1_1_1_1_1
		const sampoShooter_1_1_1_1_1_1_1_1 = new SampoShooter(this, 1081, 1360);
		this.add.existing(sampoShooter_1_1_1_1_1_1_1_1);

		// catapulta_2
		const catapulta_2 = new Catapulta(this, 142, 1388);
		this.add.existing(catapulta_2);

		// lists
		const doors = [sideDoorLocked, smallDoor]
		const switches = [switchPanel]
		const enemies = [mechaPirana, sampoShooter, sampoShooter_1, sampoShooter_1_2, sampoShooter_1_1, sampoShooter_1_1_1, sampoShooter_1_1_1_1, sampoShooter_1_1_1_1_1, sampoShooter_1_1_1_1_1_1, sampoShooter_1_1_1_1_1_1_1, sampoShooter_1_1_1_1_1_1_1_1]
		const platforms = [platform1, platform1_1, platform1_1_1, platform1_1_1_1, platform1_1_1_2, platform2, platform2_1, platform2_1_1]
		const coins = []
		const catapultas = [catapulta]
		const revivingPods = [enemyCreator_1_1, enemyCreator_1, enemyCreator]
		const tutorials = []

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel9Y";

		// stomper (prefab fields)
		stomper.retardo = 2000;

		// stomper_2 (prefab fields)
		stomper_2.retardo = 4000;

		// stomper_3 (prefab fields)
		stomper_3.retardo = 3000;

		// sideDoorLocked (prefab fields)
		sideDoorLocked.LockedBy = "2";
		sideDoorLocked.doorID = "2";

		// toll (prefab fields)
		toll.tollCost = 100;
		toll.LockId = "2";

		// catapulta (prefab fields)
		catapulta.power = 900;

		// platform1 (prefab fields)
		platform1.isHorizontal = true;

		// platform1_1 (prefab fields)
		platform1_1.timeTravel = 3000;
		platform1_1.isHorizontal = true;

		// portalCannon (prefab fields)
		portalCannon.IsFirstCannon = true;

		// platform1_1_1 (prefab fields)
		platform1_1_1.timeTravel = 3000;
		platform1_1_1.isHorizontal = true;

		// platform1_1_1_1 (prefab fields)
		platform1_1_1_1.timeTravel = 3000;
		platform1_1_1_1.isHorizontal = true;

		// platform1_1_1_2 (prefab fields)
		platform1_1_1_2.timeTravel = 2000;
		platform1_1_1_2.isHorizontal = true;

		// sampoShooter (prefab fields)
		sampoShooter.RevivingPodID = "pod4";
		sampoShooter.travelDistance = 150;

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.RevivingPodID = "pod4";
		sampoShooter_1.travelDistance = 150;

		// sampoShooter_1_1 (prefab fields)
		sampoShooter_1_1.RevivingPodID = "pod4";
		sampoShooter_1_1.travelDistance = 150;

		// sampoShooter_1_2 (prefab fields)
		sampoShooter_1_2.RevivingPodID = "pod4";
		sampoShooter_1_2.travelDistance = 150;

		// platform2 (prefab fields)
		platform2.distance = 300;

		// platform2_1 (prefab fields)
		platform2_1.distance = 300;

		// platform2_1_1 (prefab fields)
		platform2_1_1.distance = 300;

		// enemyCreator_1 (prefab fields)
		enemyCreator_1.PodID = "pod2";

		// enemyCreator_1_1 (prefab fields)
		enemyCreator_1_1.PodID = "pod3";

		// sampoShooter_1_1_1 (prefab fields)
		sampoShooter_1_1_1.travelDistance = 150;

		// sampoShooter_1_1_1_1 (prefab fields)
		sampoShooter_1_1_1_1.travelDistance = 150;

		// sampoShooter_1_1_1_1_1 (prefab fields)
		sampoShooter_1_1_1_1_1.RevivingPodID = "pod2";
		sampoShooter_1_1_1_1_1.travelDistance = 150;

		// sampoShooter_1_1_1_1_1_1 (prefab fields)
		sampoShooter_1_1_1_1_1_1.RevivingPodID = "pod2";
		sampoShooter_1_1_1_1_1_1.travelDistance = 150;

		// sampoShooter_1_1_1_1_1_1_1 (prefab fields)
		sampoShooter_1_1_1_1_1_1_1.RevivingPodID = "pod3";
		sampoShooter_1_1_1_1_1_1_1.travelDistance = 150;

		// sampoShooter_1_1_1_1_1_1_1_1 (prefab fields)
		sampoShooter_1_1_1_1_1_1_1_1.RevivingPodID = "pod3";
		sampoShooter_1_1_1_1_1_1_1_1.travelDistance = 150;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.mechaPirana = mechaPirana;
		this.mechaPirana_1 = mechaPirana_1;
		this.layer = layer;
		this.player = player;
		this.cart = cart;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.sampoShooter_1_1 = sampoShooter_1_1;
		this.sampoShooter_1_2 = sampoShooter_1_2;
		this.sampoShooter_1_1_1 = sampoShooter_1_1_1;
		this.sampoShooter_1_1_1_1 = sampoShooter_1_1_1_1;
		this.sampoShooter_1_1_1_1_1 = sampoShooter_1_1_1_1_1;
		this.sampoShooter_1_1_1_1_1_1 = sampoShooter_1_1_1_1_1_1;
		this.sampoShooter_1_1_1_1_1_1_1 = sampoShooter_1_1_1_1_1_1_1;
		this.sampoShooter_1_1_1_1_1_1_1_1 = sampoShooter_1_1_1_1_1_1_1_1;
		this.mapa = mapa;
		this.new_level9X = new_level9X;
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
	/** @type {MechaPirana} */
	mechaPirana;
	/** @type {MechaPirana} */
	mechaPirana_1;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	layer;
	/** @type {Player} */
	player;
	/** @type {Cart} */
	cart;
	/** @type {SampoShooter} */
	sampoShooter;
	/** @type {SampoShooter} */
	sampoShooter_1;
	/** @type {SampoShooter} */
	sampoShooter_1_1;
	/** @type {SampoShooter} */
	sampoShooter_1_2;
	/** @type {SampoShooter} */
	sampoShooter_1_1_1;
	/** @type {SampoShooter} */
	sampoShooter_1_1_1_1;
	/** @type {SampoShooter} */
	sampoShooter_1_1_1_1_1;
	/** @type {SampoShooter} */
	sampoShooter_1_1_1_1_1_1;
	/** @type {SampoShooter} */
	sampoShooter_1_1_1_1_1_1_1;
	/** @type {SampoShooter} */
	sampoShooter_1_1_1_1_1_1_1_1;
	/** @type {Array<SideDoorLocked|SmallDoor>} */
	doors;
	/** @type {SwitchPanel[]} */
	switches;
	/** @type {Array<MechaPirana|SampoShooter>} */
	enemies;
	/** @type {Array<Platform1|Platform2>} */
	platforms;
	/** @type {Array<any>} */
	coins;
	/** @type {Catapulta[]} */
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
