
// You can write more code here

/* START OF COMPILED CODE */

class infoButton extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "info", frame);

		// this (components)
		new FixedToCamera(this);

		/* START-USER-CTR-CODE */
		this.createEvent =	this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	create(){

		this.x=this.scene.player.x;
		this.y = this.scene.cameras.main.y+this.scene.player.y/2;
		this.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
			this.scene.handleInfoPanels();
		},this);

		var blink = this.scene.tweens.createTimeline();
		blink.add({
			targets: this,
			alpha: 0.2,
			duration: 100,
			onComplete: function(){

				this.gotoPosition();

			},
			callbackScope: this,
			ease: 'Linear',
			yoyo:true,
			repeat: 24

		});

		blink.play();

	}

	gotoPosition(){
		var goto = this.scene.tweens.createTimeline();
		goto.add({
			targets: this,
			x: 40,
			y:this.scene.coinDisplay.y+50,
			duration: 500,
			onComplete: function(){



			},
			ease: 'Linear',

			repeat: 0

		},this);

		goto.play();

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
