
// You can write more code here

/* START OF COMPILED CODE */

class Destroyable extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "newSupaAnimationsRune2", frame ?? "destroyable0000");

		this.setOrigin(0, 0);

		// this (components)
		new Physics(this);
		const thisStartAnimation = new StartAnimation(this);
		thisStartAnimation.animationKey = "destroyableIdle";

		/* START-USER-CTR-CODE */
		this.createEvent =	this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);
	
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	create(){
		this.initColliders();
		this.body.immovable=true;
		this.blockLife=3;
		this.isHitted=false;

	
			this.scene.coins.push("destroyableCoin");
			this.scene.coinText.text++;
		
	}

	initColliders(){

		this.scene.physics.add.collider(this.scene.player, this, this.checkIfDestroy);	

		this.scene.physics.add.collider(this.scene.enemies, this);	
	}


	checkIfDestroy(player,platform){

		if(player.isDropping && !this.isHitted){
			platform.blockLife--;
			console.log(platform.blockLife);
			platform.scene.samposhooter_destroy_01.play();


			switch(platform.blockLife){

				case 2:
					platform.play("destroyable2",true)
					this.isHitted=false;
					break;
				case 1:
					this.elimiteAnim  = platform.play("destroyable1",true)

					this.elimiteAnim.once('animationcomplete', () => {
						const explotion = new Explotion(platform.scene, platform.x+platform.width/2, platform.y+platform.height/2);
						platform.scene.add.existing(explotion);		
						explotion.emit("prefab-awake");
						const coin = new Coin(platform.scene, platform.x, platform.y);
						platform.scene.add.existing(coin);
						platform.destroy();
						
		
					});

					this.isHitted=false;
					break;
				
				default:
					this.blockLife=3;
					this.isHitted=false;
					platform.play("destroyableIdle",true)
					break;

			}

		

			var dropabit = platform.scene.tweens.createTimeline();
			dropabit.add({
				targets: platform,
				y: platform.y+5,
				duration: 100,
				ease: 'Linear',
				yoyo: true,
				repeat: 0
	
			});
	
			dropabit.play();
		}
		
		
	}

	

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
