
// You can write more code here

/* START OF COMPILED CODE */

class SupaWalkAnim extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "tutorials", frame ?? "walk instancia 10000");

		// this (components)
		const thisStartAnimation = new StartAnimation(this);
		thisStartAnimation.animationKey = "supaWalkAnim";
		new FixedToCamera(this);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
