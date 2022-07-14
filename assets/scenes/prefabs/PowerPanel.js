
// You can write more code here

/* START OF COMPILED CODE */

class PowerPanel extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -119, y ?? -1);

		// powersPanel
		const powersPanel = scene.add.sprite(119, 1, "powersPanel");
		this.add(powersPanel);

		// energyPanel_doubleJump
		const energyPanel_doubleJump = scene.add.sprite(19, -8, "energyPanel_doubleJump");
		this.add(energyPanel_doubleJump);

		// energyPanel_cannonStrike
		const energyPanel_cannonStrike = scene.add.sprite(120, -6, "energyPanel_cannonStrike");
		this.add(energyPanel_cannonStrike);

		// energyPanel_jetpack
		const energyPanel_jetpack = scene.add.sprite(206, 1, "energyPanel_jetpack");
		this.add(energyPanel_jetpack);

		// selector
		const selector = scene.add.sprite(117, -4, "energyPanel_selector");
		this.add(selector);

		this.energyPanel_doubleJump = energyPanel_doubleJump;
		this.energyPanel_cannonStrike = energyPanel_cannonStrike;
		this.energyPanel_jetpack = energyPanel_jetpack;
		this.selector = selector;

		/* START-USER-CTR-CODE */

		this.scene.events.on("create", () => this.create());
		this.scene.events.on("update", () => this.update());
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Sprite} */
	energyPanel_doubleJump;
	/** @type {Phaser.GameObjects.Sprite} */
	energyPanel_cannonStrike;
	/** @type {Phaser.GameObjects.Sprite} */
	energyPanel_jetpack;
	/** @type {Phaser.GameObjects.Sprite} */
	selector;

	/* START-USER-CODE */
	create(){
	
		this.wannaEnablePower=false;
		this.downKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
		this.downKey.on('down', function(){
		
			if(this.scene.isPowerPanelEnabled ){
				
				if(this.selectorDefault==0){

					if(this.energyPanel_cannonStrike.alpha==1){
						this.scene.biteBtn.enablePower();
					}else{
						
					}
				}

				if(this.selectorDefault==1){

					console.log("try to activate jetpack")
				}

			
			}
		
			
			
		
		}, this)

		this.energyPanel_doubleJump.alpha=0.2;
		this.energyPanel_cannonStrike.alpha=0.2;
		this.energyPanel_jetpack.alpha=0.2;
		this.powerPanelOptions=["cannon","jetpack"];
		this.selectorDefault=0;

		var selectorAnim = this.scene.tweens.createTimeline();

		selectorAnim.add({
			targets: this.selector,
			scale: 1.1,
			callbackScope: this,
			duration: 500,
			ease: 'Linear',
			yoyo:true,
			repeat: -1

		});

		selectorAnim.play();

	}

	checkPowersEnabled(){

		if(this.scene.game.playerData.doubleJump){
			this.energyPanel_doubleJump.alpha=1;
		}

	
	}

	update(){

		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
