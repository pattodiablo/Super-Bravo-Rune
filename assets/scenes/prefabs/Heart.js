
// You can write more code here

/* START OF COMPILED CODE */

class Heart extends Phaser.GameObjects.Sprite {
	
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture || "propsNew", frame !== undefined && frame !== null ? frame : "CORAZON 2.ai instance 10000");
		
		// this (components)
		new Physics(this);
		const thisStartAnimation = new StartAnimation(this);
		thisStartAnimation.animationKey = "heartPump";
		
		/* START-USER-CTR-CODE */
		this.createEvent = this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);
		/* END-USER-CTR-CODE */
	}
	
	/* START-USER-CODE */

	create(){
		this.scene.physics.add.overlap(this.scene.player, this, this.getHeart,false,this);

	}


	getHeart(player,heart){
		if(player.playerLife <  heart.scene.game.playerData.maxLife){
			player.playerLife++
			heart.scene.lifepanel.calcularBarrasEncendidas();
		}
	
		
		heart.scene.supa_pickupheart_01.play();
		
		heart.destroy();
	

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
