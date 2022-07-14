
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel7 extends BaseScene {

	constructor() {
		super("NewLevel7");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level7");
		mapa.addTilesetImage("Servidores_tiles", "Servidores_tiles");

		// new_level7
		const new_level7 = this.add.tilemap("new_level7");
		new_level7.addTilesetImage("Servidores_tiles", "Servidores_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "NewtechBg");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "NewTechBg2");
		tilespriteBG.setOrigin(0, 1);

		// noCollide_1
		mapa.createLayer("NoCollide", ["Servidores_tiles"], 0, 0);

		// smallDoor
		const smallDoor = new SmallDoor(this, 112, 131);
		this.add.existing(smallDoor);

		// mainDoor0000
		const mainDoor0000 = this.add.image(959, 248, "propsNew", "mainDoor0000");
		mainDoor0000.scaleX = 1.22;
		mainDoor0000.scaleY = 1.22;

		// l_instance_10000
		this.add.image(88, 221, "propsNew", "l instance 10000");

		// symbol_23_instance_10000
		const symbol_23_instance_10000 = this.add.image(135, 221, "propsNew", "Symbol 23 instance 10000");
		symbol_23_instance_10000.scaleX = 0.55;
		symbol_23_instance_10000.scaleY = 0.55;

		// symbol_30_instance_20000
		const symbol_30_instance_20000 = this.add.image(113, 301, "propsNew", "Symbol 30 instance 20000");
		symbol_30_instance_20000.scaleX = 0.8;
		symbol_30_instance_20000.scaleY = 0.8;

		// v_instance_10000
		this.add.image(101, 221, "propsNew", "v instance 10000");

		// l_instance_10000_1
		this.add.image(115, 221, "propsNew", "l instance 10000");

		// noCollideFX
		mapa.createLayer("NoCollideFX", ["Servidores_tiles"], 0, 0);

		// energyStation
		const energyStation = new EnergyStation(this, 1856, 23);
		this.add.existing(energyStation);

		// layer
		const layer = mapa.createLayer("Collide", ["Servidores_tiles"], 0, 0);

		// collideFX_1
		new_level7.createLayer("CollideFX", ["Servidores_tiles"], 0, 0);

		// player
		const player = new Player(this, 958, 271);
		this.add.existing(player);

		// switchPanel
		const switchPanel = new SwitchPanel(this, 271, 266);
		this.add.existing(switchPanel);

		// heart
		const heart = new Heart(this, 111, 420);
		this.add.existing(heart);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 370, 293);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 220, 621);
		this.add.existing(sampoShooter_1);

		// enemyBarrel
		const enemyBarrel = new EnemyBarrel(this, 212, 408);
		this.add.existing(enemyBarrel);

		// sampoShooter_1_1
		const sampoShooter_1_1 = new SampoShooter(this, 630, 622);
		this.add.existing(sampoShooter_1_1);

		// sampoShooter_1_1_1
		const sampoShooter_1_1_1 = new SampoShooter(this, 1040, 625.9682813460751);
		this.add.existing(sampoShooter_1_1_1);

		// sampoShooter_1_1_1_1
		const sampoShooter_1_1_1_1 = new SampoShooter(this, 1450, 627.2370252459555);
		this.add.existing(sampoShooter_1_1_1_1);

		// misile
		const misile = new Misile(this, 2140, 760);
		this.add.existing(misile);

		// gotoLevelWall
		const gotoLevelWall = new GotoLevelWall(this, 1945, 804);
		this.add.existing(gotoLevelWall);
		gotoLevelWall.tintTopLeft = 16535632;
		gotoLevelWall.tintTopRight = 16479605;
		gotoLevelWall.tintBottomLeft = 10683396;
		gotoLevelWall.tintBottomRight = 16257554;

		// misile_1
		const misile_1 = new Misile(this, 1968, 881);
		this.add.existing(misile_1);

		// misile_2
		const misile_2 = new Misile(this, 2044, 811);
		this.add.existing(misile_2);

		// wallLight
		this.add.image(1837, 720, "wallLight");

		// wallLight_1
		this.add.image(1456, 720, "wallLight");

		// wallLight_2
		this.add.image(1071, 720, "wallLight");

		// wallLight_3
		this.add.image(688, 720, "wallLight");

		// wallLight_4
		this.add.image(303, 720, "wallLight");

		// lightBeam
		const lightBeam = new LightBeam(this, 302, 720);
		this.add.existing(lightBeam);

		// lightBeam_1
		const lightBeam_1 = new LightBeam(this, 688, 720);
		this.add.existing(lightBeam_1);

		// lightBeam_2
		const lightBeam_2 = new LightBeam(this, 1072, 720);
		this.add.existing(lightBeam_2);

		// lightBeam_3
		const lightBeam_3 = new LightBeam(this, 1456, 720);
		this.add.existing(lightBeam_3);

		// lightBeam_4
		const lightBeam_4 = new LightBeam(this, 1837, 720);
		this.add.existing(lightBeam_4);

		// angrySpin
		const angrySpin = new AngrySpin(this, 748, 201);
		this.add.existing(angrySpin);

		// lists
		const doors = [smallDoor]
		const switches = [switchPanel]
		const enemies = [sampoShooter, sampoShooter_1, sampoShooter_1_1, sampoShooter_1_1_1, sampoShooter_1_1_1_1, angrySpin]
		const platforms = []
		const coins = []
		const catapultas = []
		const revivingPods = [enemyBarrel]
		const tutorials = []

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// smallDoor (prefab fields)
		smallDoor.goToLevel = "NewLevel6";

		// sampoShooter (prefab fields)
		sampoShooter.RevivingPodID = "pod0";
		sampoShooter.travelDistance = 400;

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.travelDistance = 400;

		// sampoShooter_1_1 (prefab fields)
		sampoShooter_1_1.travelDistance = 400;

		// sampoShooter_1_1_1 (prefab fields)
		sampoShooter_1_1_1.travelDistance = 400;

		// sampoShooter_1_1_1_1 (prefab fields)
		sampoShooter_1_1_1_1.travelDistance = 400;

		// gotoLevelWall (prefab fields)
		gotoLevelWall.gotoLevelName = "NewLevel7A";

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.sampoShooter = sampoShooter;
		this.sampoShooter_1 = sampoShooter_1;
		this.sampoShooter_1_1 = sampoShooter_1_1;
		this.sampoShooter_1_1_1 = sampoShooter_1_1_1;
		this.sampoShooter_1_1_1_1 = sampoShooter_1_1_1_1;
		this.gotoLevelWall = gotoLevelWall;
		this.mapa = mapa;
		this.new_level7 = new_level7;
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
	/** @type {SampoShooter} */
	sampoShooter;
	/** @type {SampoShooter} */
	sampoShooter_1;
	/** @type {SampoShooter} */
	sampoShooter_1_1;
	/** @type {SampoShooter} */
	sampoShooter_1_1_1;
	/** @type {SampoShooter} */
	sampoShooter_1_1_1_1;
	/** @type {GotoLevelWall} */
	gotoLevelWall;
	/** @type {SmallDoor[]} */
	doors;
	/** @type {SwitchPanel[]} */
	switches;
	/** @type {Array<SampoShooter|AngrySpin>} */
	enemies;
	/** @type {Array<any>} */
	platforms;
	/** @type {Array<any>} */
	coins;
	/** @type {Array<any>} */
	catapultas;
	/** @type {EnemyBarrel[]} */
	revivingPods;
	/** @type {Array<any>} */
	tutorials;

	/* START-USER-CODE */






	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
