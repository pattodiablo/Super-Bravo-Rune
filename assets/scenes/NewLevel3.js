
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
	preload() {

		this.load.pack("NewLevel3Pack", "assets/NewLevel3Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level3");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// new_level3
		const new_level3 = this.add.tilemap("new_level3");
		new_level3.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg2Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "bg2TileBG");
		tilespriteBG.setOrigin(0, 1);

		// player
		const player = new Player(this, 91, 599);
		this.add.existing(player);

		// nocollide
		mapa.createLayer("nocollide2", ["new_ciudad_tiles"], 0, 0);

		// nocollide_1
		mapa.createLayer("nocollide", ["new_ciudad_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("layer", ["new_ciudad_tiles"], 0, 0);

		// catapulta
		const catapulta = new Catapulta(this, 287, 436);
		this.add.existing(catapulta);

		// heart
		const heart = new Heart(this, 293, 606);
		this.add.existing(heart);

		// upperTile
		const upperTile = new_level3.createLayer("upperTile", ["new_ciudad_tiles"], 0, 0);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 430, 87);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1037, 648);
		this.add.existing(sampoShooter_1);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 1167, 538);
		this.add.existing(enemyCreator);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter, sampoShooter_1];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [enemyCreator];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// catapulta (prefab fields)
		catapulta.power = 700;

		// sampoShooter_1 (prefab fields)
		sampoShooter_1.RevivingPodID = "pod1";
		sampoShooter_1.EnemyID = 1;

		// enemyCreator (prefab fields)
		enemyCreator.creationTime = 3000;
		enemyCreator.enemyID = "1";

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.player = player;
		this.layer = layer;
		this.upperTile = upperTile;
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
		this.nextLevel = "NewLevel4";
		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	bg1Tile;
	/** @type {Phaser.GameObjects.TileSprite} */
	tilespriteBG;
	/** @type {Player} */
	player;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	layer;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	upperTile;
	/** @type {Phaser.Tilemaps.Tilemap} */
	mapa;
	/** @type {Phaser.Tilemaps.Tilemap} */
	new_level3;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {SampoShooter[]} */
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
