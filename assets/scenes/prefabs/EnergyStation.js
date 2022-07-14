
// You can write more code here

/* START OF COMPILED CODE */

class EnergyStation extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? -72);

		// energyStation
		const energyStation = scene.add.sprite(0, 72, "propsNew", "Symbol 7 instance 10000");
		this.add(energyStation);

		// pointerDown
		const pointerDown = new PointerDownBtn(scene, 2, 40);
		pointerDown.scaleX = 0.5;
		pointerDown.scaleY = 0.5;
		pointerDown.angle = -180;
		this.add(pointerDown);

		// enterText
		const enterText = scene.add.text(-24, 8, "", {});
		enterText.text = "ENTER";
		enterText.setStyle({ "align": "center" });
		this.add(enterText);

		// energyStation (components)
		new Physics(energyStation);
		const energyStationPhysicsBody = new PhysicsBody(energyStation);
		energyStationPhysicsBody.bodyY = 50;
		energyStationPhysicsBody.bodyHeight = 20;
		const energyStationStartAnimation = new StartAnimation(energyStation);
		energyStationStartAnimation.animationKey = "powerStationEmpty";

		this.energyStation = energyStation;
		this.pointerDown = pointerDown;
		this.enterText = enterText;

		/* START-USER-CTR-CODE */
		this.scene.events.on("update", () => this.update());
		this.scene.events.on("create", () => this.create());

		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Sprite} */
	energyStation;
	/** @type {PointerDownBtn} */
	pointerDown;
	/** @type {Phaser.GameObjects.Text} */
	enterText;

	/* START-USER-CODE */

	create(){

		this.initColliders();
		this.enterText.visible=false;
		this.downKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

		


		this.pointerDown.setInteractive().on('pointerdown', function(pointer, localX, localY, event){

			this.scene.player.wannaEnterPod = true;
		});


		this.pointerDown.visible = false;
		this.pointerDown.play("dedito", true);
	}

	initColliders(){
		this.scene.physics.add.overlap(this.scene.player, this.energyStation, this.prepareToEnter,false,this);
	}

	prepareToEnter(){
	

		if(!this.scene.player.isJetPackActive){

			this.downKey.on('down', function(){
			
				console.log("pressing enter")
				this.scene.player.wannaEnterPod = true;
	
			}, this)
			
			this.pointerDown.visible = true;
			this.enterText.visible=true;
			this.scene.player.canEnterPod = true;
		}

	}

	update(){

		if (this.energyStation.body.touching.none) {

			this.pointerDown.visible = false;
			this.enterText.visible=false;
		}

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
