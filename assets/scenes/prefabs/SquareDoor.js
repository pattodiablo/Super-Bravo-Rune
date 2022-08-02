
// You can write more code here

/* START OF COMPILED CODE */

class SquareDoor extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "newSupaAnimationsRune2", frame ?? "squareDoor instancia 10000");

		this.setOrigin(0, 0);

		// this (components)
		new Physics(this);

		/* START-USER-CTR-CODE */
		this.createEvent =	this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);
		/* END-USER-CTR-CODE */
	}

	/** @type {boolean} */
	willClose = true;

	/* START-USER-CODE */

	create(){

		this.initColliders();
		this.body.immovable=true;
		this.isClosed =  true;
		this.wannaOpen=false;
		this.openningDelay = 500;
	}

	initColliders(){

		this.scene.physics.add.collider(this.scene.player, this, this.isPlayerOver);	
		this.scene.physics.add.collider(this.scene.enemies, this);	
	}

	isPlayerOver(player,door){

		if(!door.wannaOpen){

			door.oppeningDoor = door.scene.time.addEvent({
				delay: door.openningDelay,                // ms
				callback: function(){

					this.openningAnim = this.play("squareDoorOpen",true);
					this.openningAnim.once('animationcomplete', () => {
						this.body.enable=false;

						if(this.willClose){


							this.closingDoor = this.scene.time.addEvent({
								delay: this.openningDelay,                // ms
								callback: function(){
				
									this.closingAnim = this.play("squareDoorClose",true);
									this.closingAnim.once('animationcomplete', () => {
										this.body.enable=true;
										this.wannaOpen=false;
				
									});
				
								},
								//args: [],
								callbackScope: door,
								loop: false
							});
							
						}

					});

				},
				//args: [],
				callbackScope: door,
				loop: false
			});

			door.wannaOpen=true;
		}

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
