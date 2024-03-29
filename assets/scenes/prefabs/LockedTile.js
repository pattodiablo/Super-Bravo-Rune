
// You can write more code here

/* START OF COMPILED CODE */

class LockedTile extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? -1, y ?? -2, texture || "newSupaAnimationsRune2", frame ?? "downFloorBlocked0000");

		this.setOrigin(0, 0);

		// this (components)
		new Physics(this);

		/* START-USER-CTR-CODE */
		this.createEvent =	this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	create(){
		this.initColliders();
		this.body.immovable=true;
	}

	initColliders(){

		this.scene.physics.add.collider(this.scene.player, this, this.checkIfDestroy);	

		this.scene.physics.add.collider(this.scene.enemies, this);	
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
