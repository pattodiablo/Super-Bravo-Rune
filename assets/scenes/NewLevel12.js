
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel12 extends BaseScene {

	constructor() {
		super("NewLevel12");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level12");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// new_level12
		const new_level12 = this.add.tilemap("new_level12");
		new_level12.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

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
		const player = new Player(this, 132, 734);
		this.add.existing(player);

		// upperTile_1
		new_level12.createLayer("upperTile", ["new_ciudad_tiles"], 0, 0);

		// alert_instance_10000
		this.add.image(907, 736, "misile", "alert instance 10000");

		// supaBomb
		const supaBomb = new SupaBomb(this, 497, 757);
		this.add.existing(supaBomb);

		// supaBomb_1
		const supaBomb_1 = new SupaBomb(this, 846, 699);
		this.add.existing(supaBomb_1);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 1139, 761);
		this.add.existing(sampoShooter);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 1280, 658);
		this.add.existing(enemyCreator);

		// enemyCreator_1
		const enemyCreator_1 = new EnemyCreator(this, 1324, 410);
		this.add.existing(enemyCreator_1);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1102, 540);
		this.add.existing(sampoShooter_1);

		// angrySpin
		const angrySpin = new AngrySpin(this, 377, 533);
		this.add.existing(angrySpin);

		// drone
		const drone = new Drone(this, 278, 218);
		this.add.existing(drone);

		// misile
		const misile = new Misile(this, 1688, 92);
		this.add.existing(misile);

		// proxySpyke
		const proxySpyke = new ProxySpyke(this, 849, 206);
		this.add.existing(proxySpyke);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 671, 93);
		this.add.existing(sampoShooter_2);

		// enemyCreator_2
		const enemyCreator_2 = new EnemyCreator(this, 1243, 38);
		this.add.existing(enemyCreator_2);

		// squareDoor_instancia_10000
		const squareDoor_instancia_10000 = new InvisibleTile(this, 181, 728);
		this.add.existing(squareDoor_instancia_10000);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter, sampoShooter_1, angrySpin, misile, sampoShooter_2];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [enemyCreator, enemyCreator_2];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// sampoShooter_2 (prefab fields)
		sampoShooter_2.RevivingPodID = "pod2";

		// enemyCreator_2 (prefab fields)
		enemyCreator_2.PodID = "pod2";

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level12 = new_level12;
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
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<SampoShooter|AngrySpin|Misile>} */
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
