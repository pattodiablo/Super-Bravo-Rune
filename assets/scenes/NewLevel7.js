
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
	preload() {

		this.load.pack("NewLevel7Pack", "assets/NewLevel7Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level7");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// new_level7
		const new_level7 = this.add.tilemap("new_level7");
		new_level7.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg2Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "bg3TileBG");
		tilespriteBG.setOrigin(0, 1);

		// nocollide2_1
		mapa.createLayer("nocollide2", ["new_ciudad_tiles"], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", ["new_ciudad_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("layer", ["new_ciudad_tiles"], 0, 0);

		// player
		const player = new Player(this, 134, 679);
		this.add.existing(player);

		// upperTile_1
		new_level7.createLayer("upperTile", ["new_ciudad_tiles"], 0, 0);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 365, 676);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 713, 668);
		this.add.existing(sampoShooter_1);

		// sampoShooter_1_1
		const sampoShooter_1_1 = new SampoShooter(this, 1011, 668);
		this.add.existing(sampoShooter_1_1);

		// sampoShooter_1_1_1
		const sampoShooter_1_1_1 = new SampoShooter(this, 1213, 656);
		this.add.existing(sampoShooter_1_1_1);

		// cart
		const cart = new Cart(this, 1456, 659);
		this.add.existing(cart);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 204, 535);
		this.add.existing(enemyCreator);

		// enemyCreator_1
		const enemyCreator_1 = new EnemyCreator(this, 718, 536);
		this.add.existing(enemyCreator_1);

		// enemyCreator_1_1
		const enemyCreator_1_1 = new EnemyCreator(this, 1237, 535);
		this.add.existing(enemyCreator_1_1);

		// platform1
		const platform1 = new Platform1(this, 327, 212);
		this.add.existing(platform1);

		// platform1_1
		const platform1_1 = new Platform1(this, 842, 212);
		this.add.existing(platform1_1);

		// portalCannon
		const portalCannon = new PortalCannon(this, 1480, 590);
		this.add.existing(portalCannon);

		// powerPodium
		this.add.image(1216, 195, "PowerPodium");

		// upgradeHalo
		const upgradeHalo = new UpgradeHalo(this, 1216, 211);
		this.add.existing(upgradeHalo);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter, sampoShooter_1_1, sampoShooter_1, sampoShooter_1_1_1];
		const platforms = [platform1, platform1_1];
		const coins = [];
		const catapultas = [];
		const revivingPods = [enemyCreator_1_1, enemyCreator_1, enemyCreator];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.RevivingPodID = "pod2";

		// sampoShooter_1_1 (prefab fields)
		sampoShooter_1_1.RevivingPodID = "pod3";

		// sampoShooter_1_1_1 (prefab fields)
		sampoShooter_1_1_1.RevivingPodID = "pod2";

		// enemyCreator (prefab fields)
		enemyCreator.creationTime = 3000;

		// enemyCreator_1 (prefab fields)
		enemyCreator_1.creationTime = 3000;
		enemyCreator_1.PodID = "pod2";

		// enemyCreator_1_1 (prefab fields)
		enemyCreator_1_1.creationTime = 3000;
		enemyCreator_1_1.PodID = "pod3";

		// platform1 (prefab fields)
		platform1.distance = 170;
		platform1.timeTravel = 4000;
		platform1.isHorizontal = true;

		// platform1_1 (prefab fields)
		platform1_1.distance = 210;
		platform1_1.timeTravel = 4000;
		platform1_1.isHorizontal = true;

		// portalCannon (prefab fields)
		portalCannon.IsFirstCannon = true;

		// upgradeHalo (prefab fields)
		upgradeHalo.isCannonStrike = true;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
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
	/** @type {Phaser.Tilemaps.Tilemap} */
	mapa;
	/** @type {Phaser.Tilemaps.Tilemap} */
	new_level7;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {SampoShooter[]} */
	enemies;
	/** @type {Platform1[]} */
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
