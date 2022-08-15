
// You can write more code here

/* START OF COMPILED CODE */

class DownFloor extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "newSupaAnimationsRune2", frame ?? "downFloor0000");

		this.setOrigin(0, 0);

		// this (components)
		new Physics(this);
		const thisStartAnimation = new StartAnimation(this);
		thisStartAnimation.animationKey = "downDoorAnim";

		/* START-USER-CTR-CODE */
		this.createEvent =	this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	create(){
		this.initColliders();
		this.body.immovable=true;
		this.body.checkCollision.down = false;

		}

		initColliders(){

			this.scene.physics.add.collider(this.scene.player, this);	
			

			this.scene.physics.add.collider(this.scene.enemies, this);	
		}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
