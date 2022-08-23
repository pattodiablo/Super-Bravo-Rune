
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel14 extends BaseScene {

	constructor() {
		super("NewLevel14");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel14Pack", "assets/NewLevel14Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level14");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// new_level14
		const new_level14 = this.add.tilemap("new_level14");
		new_level14.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg2Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "bg3TileBG");
		tilespriteBG.setOrigin(0, 1);

		// nocollide2_1
		mapa.createLayer("nocollide2", ["new_ciudad_tiles"], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", [], 0, 0);

		// layer
		const layer = mapa.createLayer("layer", ["new_ciudad_tiles"], 0, 0);

		// player
		const player = new Player(this, 125, 627);
		this.add.existing(player);

		// upperTile_1
		new_level14.createLayer("upperTile", [], 0, 0);

		// supaBomb_1
		const supaBomb_1 = new SupaBomb(this, 485, 597);
		this.add.existing(supaBomb_1);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 425, 724);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1214, 761);
		this.add.existing(sampoShooter_1);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 572, 504);
		this.add.existing(enemyCreator);

		// card
		const card = new Card(this, 753, 156);
		this.add.existing(card);

		// powerPodium
		this.add.image(2083, 687, "PowerPodium");

		// upgradeHalo
		const upgradeHalo = new UpgradeHalo(this, 2084, 703);
		this.add.existing(upgradeHalo);

		// drone
		const drone = new Drone(this, 2007, 538);
		this.add.existing(drone);

		// misile
		const misile = new Misile(this, 2319, 684);
		this.add.existing(misile);

		// card_1
		const card_1 = new Card(this, 2165, 546);
		this.add.existing(card_1);

		// portalCannon_1
		const portalCannon_1 = new PortalCannon(this, 113, 433);
		this.add.existing(portalCannon_1);

		// portalCannon_2
		const portalCannon_2 = new PortalCannon(this, 108, 81);
		this.add.existing(portalCannon_2);
		portalCannon_2.angle = 90;

		// portalCannon_3
		const portalCannon_3 = new PortalCannon(this, 273, 85);
		this.add.existing(portalCannon_3);
		portalCannon_3.angle = -180;

		// portalCannon_4
		const portalCannon_4 = new PortalCannon(this, 269, 301);
		this.add.existing(portalCannon_4);
		portalCannon_4.angle = 90;

		// portalCannon_5
		const portalCannon_5 = new PortalCannon(this, 625, 303);
		this.add.existing(portalCannon_5);
		portalCannon_5.angle = 0;

		// portalCannon_6
		const portalCannon_6 = new PortalCannon(this, 626, 77);
		this.add.existing(portalCannon_6);
		portalCannon_6.angle = 90;

		// portalCannon
		const portalCannon = new PortalCannon(this, 1075, 304);
		this.add.existing(portalCannon);
		portalCannon.angle = 0;

		// card_2
		const card_2 = new Card(this, 1043, 70);
		this.add.existing(card_2);

		// portalCannon_7
		const portalCannon_7 = new PortalCannon(this, 1074, 167);
		this.add.existing(portalCannon_7);
		portalCannon_7.angle = 90;

		// drone_1
		const drone_1 = new Drone(this, 1431, 52);
		this.add.existing(drone_1);

		// activeZoneBoss
		const activeZoneBoss = new ActiveZoneBoss(this, 870, 406);
		this.add.existing(activeZoneBoss);
		activeZoneBoss.scaleX = 5.914072889592503;
		activeZoneBoss.scaleY = 5.070510206408815;
		activeZoneBoss.alpha = 0;

		// guardBoss
		const guardBoss = new GuardBoss(this, 1193, 519);
		this.add.existing(guardBoss);

		// drone_2
		const drone_2 = new Drone(this, 1086, 409);
		this.add.existing(drone_2);

		// card_3
		const card_3 = new Card(this, 2077, 427);
		this.add.existing(card_3);

		// portalCannon_8
		const portalCannon_8 = new PortalCannon(this, 2123, 350);
		this.add.existing(portalCannon_8);
		portalCannon_8.angle = -32.00000000000006;

		// portalCannon_9
		const portalCannon_9 = new PortalCannon(this, 1960, 80);
		this.add.existing(portalCannon_9);
		portalCannon_9.angle = -122;

		// misile_1
		const misile_1 = new Misile(this, 2366, 296);
		this.add.existing(misile_1);

		// blobber
		const blobber = new Blobber(this, 1793, 239);
		this.add.existing(blobber);

		// sideDoor
		const sideDoor = new SideDoor(this, 209, 622);
		this.add.existing(sideDoor);
		sideDoor.scaleX = 0.5803695227337756;
		sideDoor.scaleY = 0.5803695227337756;

		// heart
		const heart = new Heart(this, 2142, 88);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 1279, 635);
		this.add.existing(heart_1);

		// heart_2
		const heart_2 = new Heart(this, 1233, 309);
		this.add.existing(heart_2);

		// card_4
		const card_4 = new Card(this, 51, 514);
		this.add.existing(card_4);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter, sampoShooter_1, guardBoss];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [enemyCreator];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// card (prefab fields)
		card.timeExpires = 12000;

		// upgradeHalo (prefab fields)
		upgradeHalo.isCannonStrike = true;

		// portalCannon_1 (prefab fields)
		portalCannon_1.IsFirstCannon = true;

		// portalCannon (prefab fields)
		portalCannon.IsFirstCannon = true;

		// portalCannon_7 (prefab fields)
		portalCannon_7.IsFirstCannon = false;

		// activeZoneBoss (prefab fields)
		activeZoneBoss.isActive = true;
		activeZoneBoss.activateBoss = true;

		// guardBoss (prefab fields)
		guardBoss.ThingToDrop = "Coin";

		// card_3 (prefab fields)
		card_3.timeExpires = 4000;

		// portalCannon_8 (prefab fields)
		portalCannon_8.IsFirstCannon = true;

		// portalCannon_9 (prefab fields)
		portalCannon_9.IsFirstCannon = true;

		// blobber (prefab fields)
		blobber.veloBlobber = 200;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.guardBoss = guardBoss;
		this.mapa = mapa;
		this.new_level14 = new_level14;
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
	/** @type {GuardBoss} */
	guardBoss;
	/** @type {Phaser.Tilemaps.Tilemap} */
	mapa;
	/** @type {Phaser.Tilemaps.Tilemap} */
	new_level14;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<SampoShooter|GuardBoss>} */
	enemies;
	/** @type {Array<any>} */
	platforms;
	/** @type {Array<any>} */
	coins;
	/** @type {Array<any>} */
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
