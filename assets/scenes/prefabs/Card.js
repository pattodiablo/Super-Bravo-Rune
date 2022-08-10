
// You can write more code here

/* START OF COMPILED CODE */

class Card extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "newSupaAnimationsRune2", frame ?? "card instancia 10000");

		// this (components)
		new Physics(this);
		const thisStartAnimation = new StartAnimation(this);
		thisStartAnimation.animationKey = "smallcard";

		/* START-USER-CTR-CODE */
		this.createEvent =	this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	timeExpires = 4000;

	/* START-USER-CODE */

	create(){






		this.initColliders();
		this.body.immovable=true;
		var dropabit = this.scene.tweens.createTimeline();
		dropabit.add({
			targets: this,
			y: this.y+5,
			duration: 500,
			ease: 'Linear',
			yoyo: true,
			repeat: -1

		});

		dropabit.play();
	}

	initColliders(){

		this.scene.physics.add.overlap(this.scene.player, this, this.getCard,false,this);	

	}

	getCard(player,card){

		this.scene.envi_grabcard01.play();
		this.scene.enableAllBlocked(this);
		this.visible=false;
		this.body.enable=false;

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
