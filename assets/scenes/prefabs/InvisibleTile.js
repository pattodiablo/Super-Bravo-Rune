
// You can write more code here

/* START OF COMPILED CODE */

class InvisibleTile extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "newSupaAnimationsRune2", frame ?? "squareDoor instancia 10000");

		this.setOrigin(0, 0);

		// this (components)
		new Physics(this);
		const thisStartAnimation = new StartAnimation(this);
		thisStartAnimation.animationKey = "invisible1";

		/* START-USER-CTR-CODE */
		this.createEvent =	this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	create(){
		
		this.body.immovable=true;
		this.body.enable=false
		this.initColliders();
	
	}

	initColliders(){
		
		this.scene.physics.add.collider(this.scene.player, this, this.checkIfenabled);	

		this.scene.physics.add.collider(this.scene.enemies, this);	
	}

	checkIfenabled(player,wall){


	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
