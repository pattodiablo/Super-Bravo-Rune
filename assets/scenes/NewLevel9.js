
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel9 extends BaseScene {

	constructor() {
		super("NewLevel9");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel9Pack", "assets/NewLevel9Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level9");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// new_level9
		const new_level9 = this.add.tilemap("new_level9");
		new_level9.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

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
		const player = new Player(this, 102, 58);
		this.add.existing(player);

		// upperTile_1
		new_level9.createLayer("upperTile", [], 0, 0);

		// supaBomb
		const supaBomb = new SupaBomb(this, 897, 485);
		this.add.existing(supaBomb);

		// supaBomb_1
		const supaBomb_1 = new SupaBomb(this, 1152, 486);
		this.add.existing(supaBomb_1);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 486, 484);
		this.add.existing(sampoShooter);

		// supaBomb_2
		const supaBomb_2 = new SupaBomb(this, 681, 65);
		this.add.existing(supaBomb_2);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 506, 239);
		this.add.existing(sampoShooter_1);

		// catapulta
		const catapulta = new Catapulta(this, 736, 750);
		this.add.existing(catapulta);

		// misile
		const misile = new Misile(this, 1671, 213);
		this.add.existing(misile);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 917, 77);
		this.add.existing(sampoShooter_2);

		// angrySpin
		const angrySpin = new AngrySpin(this, 586, 737);
		this.add.existing(angrySpin);

		// heart
		const heart = new Heart(this, 66, 216);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 82, 753);
		this.add.existing(heart_1);

		// misile_Vertical
		const misile_Vertical = new Misile_Vertical(this, 1442, 924);
		this.add.existing(misile_Vertical);

		// angrySpin_1
		const angrySpin_1 = new AngrySpin(this, 1381, 767);
		this.add.existing(angrySpin_1);

		// heart_2
		const heart_2 = new Heart(this, 865, 217);
		this.add.existing(heart_2);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter_1, sampoShooter, sampoShooter_2, angrySpin, angrySpin_1];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level9 = new_level9;
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
	new_level9;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<SampoShooter|AngrySpin>} */
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
