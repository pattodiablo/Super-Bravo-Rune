
// You can write more code here

/* START OF COMPILED CODE */

class NewLevel11 extends BaseScene {

	constructor() {
		super("NewLevel11");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("NewLevel11Pack", "assets/NewLevel11Pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mapa
		const mapa = this.add.tilemap("new_level11");
		mapa.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// new_level11
		const new_level11 = this.add.tilemap("new_level11");
		new_level11.addTilesetImage("new_ciudad_tiles", "new_ciudad_tiles");

		// bg1Tile
		const bg1Tile = this.add.image(0, 0, "bg2Tile");
		bg1Tile.setOrigin(0, 0);

		// tilespriteBG
		const tilespriteBG = this.add.tileSprite(0, 0, 64, 64, "bg2TileBG");
		tilespriteBG.setOrigin(0, 1);

		// nocollide2_1
		mapa.createLayer("nocollide2", ["new_ciudad_tiles"], 0, 0);

		// nocollide
		mapa.createLayer("nocollide", ["new_ciudad_tiles"], 0, 0);

		// layer
		const layer = mapa.createLayer("layer", ["new_ciudad_tiles"], 0, 0);

		// player
		const player = new Player(this, 118, 747);
		this.add.existing(player);

		// upperTile_1
		new_level11.createLayer("upperTile", ["new_ciudad_tiles"], 0, 0);

		// card
		const card = new Card(this, 1441, 88);
		this.add.existing(card);

		// upgradeHalo
		const upgradeHalo = new UpgradeHalo(this, 430, 448);
		this.add.existing(upgradeHalo);

		// powerPodium
		const powerPodium = this.add.image(430, 434, "PowerPodium");
		powerPodium.scaleX = 0.8230650637827029;
		powerPodium.scaleY = 0.8230650637827029;

		// catapulta
		const catapulta = new Catapulta(this, 617, 496);
		this.add.existing(catapulta);

		// sideDoorLocked
		const sideDoorLocked = new SideDoorLocked(this, 544, 465);
		this.add.existing(sideDoorLocked);
		sideDoorLocked.scaleX = 0.5674976596138621;
		sideDoorLocked.scaleY = 0.5674976596138621;

		// toll
		const toll = new Toll(this, 159, 496);
		this.add.existing(toll);

		// heart
		const heart = new Heart(this, 66, 229);
		this.add.existing(heart);

		// heart_1
		const heart_1 = new Heart(this, 1040, 596);
		this.add.existing(heart_1);

		// sampoShooter
		const sampoShooter = new SampoShooter(this, 783, 488);
		this.add.existing(sampoShooter);

		// sampoShooter_1
		const sampoShooter_1 = new SampoShooter(this, 1274, 480);
		this.add.existing(sampoShooter_1);

		// sampoShooter_2
		const sampoShooter_2 = new SampoShooter(this, 804, 96);
		this.add.existing(sampoShooter_2);

		// supaBomb
		const supaBomb = new SupaBomb(this, 1067, 452);
		this.add.existing(supaBomb);

		// supaBomb_1
		const supaBomb_1 = new SupaBomb(this, 839, 322);
		this.add.existing(supaBomb_1);

		// angrySpin
		const angrySpin = new AngrySpin(this, 1167, 726);
		this.add.existing(angrySpin);

		// drone
		const drone = new Drone(this, 1331, 564);
		this.add.existing(drone);

		// drone_1
		const drone_1 = new Drone(this, 1307, 184);
		this.add.existing(drone_1);

		// blobber
		const blobber = new Blobber(this, 541, 561);
		this.add.existing(blobber);

		// supaBomb_2
		const supaBomb_2 = new SupaBomb(this, 375, 118);
		this.add.existing(supaBomb_2);

		// platform2
		const platform2 = new Platform2(this, 1194, 222);
		this.add.existing(platform2);

		// enemyCreator
		const enemyCreator = new EnemyCreator(this, 888, 58);
		this.add.existing(enemyCreator);

		// lists
		const doors = [];
		const switches = [];
		const enemies = [sampoShooter, sampoShooter_1, sampoShooter_2, angrySpin, blobber];
		const platforms = [platform2];
		const coins = [];
		const catapultas = [];
		const revivingPods = [enemyCreator];
		const tutorials = [];

		// tilespriteBG (components)
		new FixedToCamera(tilespriteBG);

		// upgradeHalo (prefab fields)
		upgradeHalo.isDoubleJump = true;

		// catapulta (prefab fields)
		catapulta.power = 600;

		// toll (prefab fields)
		toll.tollCost = 20;

		this.bg1Tile = bg1Tile;
		this.tilespriteBG = tilespriteBG;
		this.layer = layer;
		this.player = player;
		this.mapa = mapa;
		this.new_level11 = new_level11;
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
	new_level11;
	/** @type {Array<any>} */
	doors;
	/** @type {Array<any>} */
	switches;
	/** @type {Array<SampoShooter|AngrySpin|Blobber>} */
	enemies;
	/** @type {Platform2[]} */
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
