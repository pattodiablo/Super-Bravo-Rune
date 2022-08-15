
// You can write more code here

/* START OF COMPILED CODE */

class EnemyHead extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// EnemyHead
		const enemyHead = scene.add.sprite(0, 0, "sector1");
		this.add(enemyHead);

		// EnemyHeadProtected
		const enemyHeadProtected = scene.add.image(0, 0, "Sector4");
		this.add(enemyHeadProtected);

		// crakedHead
		const crakedHead = scene.add.sprite(0, 0, "crakedHead");
		crakedHead.visible = false;
		this.add(crakedHead);

		// supaHead
		const supaHead = scene.add.sprite(0, 0, "supaHead");
		supaHead.visible = false;
		this.add(supaHead);

		// badEyes
		const badEyes = scene.add.sprite(0, 16, "BADEYES");
		badEyes.scaleX = 0.23064940474962847;
		badEyes.scaleY = 0.23064940474962847;
		this.add(badEyes);

		// enemyHeadProtected (components)
		new Physics(enemyHeadProtected);

		this.enemyHead = enemyHead;
		this.enemyHeadProtected = enemyHeadProtected;
		this.crakedHead = crakedHead;
		this.supaHead = supaHead;
		this.badEyes = badEyes;

		/* START-USER-CTR-CODE */
		this.createEvent =	this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);

		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Sprite} */
	enemyHead;
	/** @type {Phaser.GameObjects.Image} */
	enemyHeadProtected;
	/** @type {Phaser.GameObjects.Sprite} */
	crakedHead;
	/** @type {Phaser.GameObjects.Sprite} */
	supaHead;
	/** @type {Phaser.GameObjects.Sprite} */
	badEyes;

	/* START-USER-CODE */

	create(){
		this.initColliders();
		this.protectionLife = 6;
		this.isAhit=false;
		this.enemyHead.visible=false;
		this.badEyes.visible=false;
		this.healt = 4;
		this.finalLife = 8;
		this.canDamage = false;
		this.isHeadDamaged2 = false;
		this.isDestroyed=false;
	}


	initColliders(){
		this.scene.physics.add.overlap(this.scene.player, this.enemyHeadProtected, this.killPlayer,null,this);	

	}


	killPlayer(){

		if(this.enemyHeadProtected.body.touching.up && this.scene.player.isDropping){
			this.damageRobot();

		}

	}

	flashEyes(){
		//console.log("flashing eyes");
		this.badEyes.visible=true;

		this.flashinEyes = this.scene.tweens.createTimeline();
		this.flashinEyes.add({
			targets: this.badEyes,
			scale: 0.3,
			duration: 200,
			ease: 'Linear',
			repeat: 5,
			yoyo:true,
			callbackScope: this,
			onComplete: function () {
				this.badEyes.visible=false;
			}

		});

		this.flashinEyes.play();

	}

	damageRobot(){
		if(!this.isDestroyed){
			if(!this.isAhit){

				if(this.canDamage){
					this.healt--;
					if(this.healt<=0){
						this.healt=-1;
						if(!this.isHeadDamaged2){
							this.replaceHead2();
							this.isHeadDamaged2=true;
						}

						this.finalLife--;
						if(this.finalLife<=0){

							this.finalDamage();
						}

					}
				//	console.log('vida cabeza '+this.healt);
				}
				else {
					// mina
					const mina = new Mina(this.scene, this.scene.player.x, this.scene.player.y+60);
					this.scene.add.existing(mina);
				}
			//	console.log("trying damage");
				this.scene.cameras.main.shake(500,0.03);
				this.isAhit=true;
				this.scene.bossguard_hurt01.play();

				this.reloadtimer = this.scene.time.addEvent({
					delay: 3000,                // ms
					callback: function(){
						this.isAhit=false;
					},
					//args: [],
					callbackScope: this,
					loop: false
				});


			}
		}


	}

	finalDamage(){
		this.isDestroyed=true
		this.scene.player.body.enable=false;
		this.scene.cameras.main.shake(500,0.08);
		this.supaHead.setTint(0xD20011, 0xD25011, 0xD20011, 0xD20011);

		this.reloadtimer = this.scene.time.addEvent({
			delay: 3000,                // ms
			callback: function(){
				this.scene.cameras.main.fadeOut(1000,255,255,255);
			},
			//args: [],
			callbackScope: this,
			loop: false
		});


		this.scene.cameras.main.once('camerafadeoutcomplete', function (camera) {
			this.scene.game.playerData.gotCard = false;

			this.scene.scene.remove(this.scene.keys);
			var sceneToGo = this.scene.scene.get("NewLevel20");
			console.log(sceneToGo);

			sceneToGo.passedTime=this.scene.initialTime;
			
			activeLeveles.forEach(level => {
				this.scene.scene.remove(level)
			});

			activeLeveles=[];
			this.scene.scene.start("NewLevel20",this.scene.initialTime);

		},this);


		this.ExplodingTimer = this.scene.time.addEvent({
			delay: 200,                // ms
			callback: function(){
				this.randomXPos = Math.random()*(this.x+this.scene.cameras.main.worldView.x-this.x+this.scene.cameras.main.worldView.x-100)+this.scene.cameras.main.worldView.x-100;

				this.randomYPos = Math.random()*(this.scene.cameras.main.height-this.scene.cameras.main.height-200)+this.scene.cameras.main.height-200;	

				const explotion = new Explotion(this.scene, this.randomXPos, this.randomYPos );
				this.scene.add.existing(explotion);		
				explotion.emit("prefab-awake");

			},
			//args: [],
			callbackScope: this,
			repeat: 18,

		});

	}

	replaceHead(){
		this.crakedHead.visible = true;
		this.enemyHeadProtected.visible = false;
		this.scene.finalboss_crystalcrack_01.play();

	}
	replaceHead2(){

		this.scene.bigBoss.etapa++;

		this.supaHead.visible = true;
		this.crakedHead.visible = false;
		this.enemyHeadProtected.visible = false;

		this.ExplodingTimer = this.scene.time.addEvent({
			delay: 200,                // ms
			callback: function(){
				this.randomXPos = Math.random()*(this.scene.player.x-this.scene.player.x-50)+this.scene.player.x-50;

				this.randomYPos = Math.random()*(this.scene.cameras.main.height-this.scene.cameras.main.height-200)+this.scene.cameras.main.height-200;	

			//	console.log('Explosion en X: '+this.randomXPos + ' Explosion en Y: '+ this.randomYPos);
				const explotion = new Explotion(this.scene, this.randomXPos, this.randomYPos );
				this.scene.add.existing(explotion);		
				explotion.emit("prefab-awake");
				this.scene.finalboss_minedestroy_01.play();

			},
			//args: [],
			callbackScope: this,
			repeat: 12,

		});


		// idle0000
		const idle0000 = new Traverso(this.scene, 160, -29);
		this.scene.add.existing(idle0000);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
