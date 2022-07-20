
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel0 extends BaseScene {

	constructor() {
		super("NewLevel0");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level0");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// new_level0
		const new_level0 = this.add.tilemap("new_level0");
		new_level0.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg1Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "bg1TileBG");
		tilespriteBG.setOrigin(0, 1);

		// handPointer
		const handPointer = new HandPointer(this, 688, 426);
		this.add.existing(handPointer);

		// nocollide2_1
		mapa.createLayer("nocollide2", ["new_ciudad_tiles"], 0, 0);

		// powerPodium
		this.add.image(176, 716, "PowerPodium");

		// nocollide
		mapa.createLayer("nocollide", ["new_ciudad_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("collide", ["new_ciudad_tiles"], 0, 0);

		// player
		const player = new Player(this, 87, 459);
		this.add.existing(player);

		// wallLight
		this.add.image(157, 331, "wallLight");

		// lightBean
		const lightBean = new LightBeam(this, 156, 331);
		this.add.existing(lightBean);

		// wallLight_1
		this.add.image(454, 330, "wallLight");

		// lightBean_1
		const lightBean_1 = new LightBeam(this, 453, 330);
		this.add.existing(lightBean_1);

		// posters
		const posters = this.add.image(524, 395, "posters");
		posters.scaleX = 0.6994818652849741;
		posters.scaleY = 0.6994818652849741;

		// wallLight_1_1
		this.add.image(698, 331, "wallLight");

		// lightBean_1_1
		const lightBean_1_1 = new LightBeam(this, 697, 331);
		this.add.existing(lightBean_1_1);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 405, 440);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 564, 119);
		this.add.existing(sampoShooter_1);

		// stomperShadow
		const stomperShadow = this.add.image(398, 165, "stomperShadow");
		stomperShadow.scaleX = 1.986758185657027;
		stomperShadow.scaleY = 0.4255454215441236;

		// stomper
		const stomper = new Stomper(this, 396, -40);
		this.add.existing(stomper);

		// upperTile
		const upperTile = new_level0.createLayer("upperTile", ["new_ciudad_tiles"], 0, 0);

		// heart
		const heart = new Heart(this, 181, 108);
		this.add.existing(heart);

		// catapulta
		const catapulta = new Catapulta(this, 1295, 775);
		this.add.existing(catapulta);

		// box
		const box = new Box(this, 643, 164);
		this.add.existing(box);

		// upgradeHalo
		const upgradeHalo = new UpgradeHalo(this, 176, 731);
		this.add.existing(upgradeHalo);

		// sideDoor
		const sideDoor = new SideDoor(this, 329, 739);
		this.add.existing(sideDoor);
		sideDoor.scaleX = 0.8354946468322224;
		sideDoor.scaleY = 0.8354946468322224;

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter, sampoShooter_1];
		const platforms = [];
		const coins = [];
		const catapultas = [];
		const revivingPods = [];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// upgradeHalo (prefab fields)
		upgradeHalo.isDoubleJump = true;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.upperTile = upperTile;
		this.mapa = mapa;
		this.new_level0 = new_level0;
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
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	upperTile;
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
	/** @type {Array<any>} */
	revivingPods;
	/** @type {Array<any>} */
	tutorials;

	/* START-USER-CODE */






	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
