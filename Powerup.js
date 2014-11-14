//=====================================================
// Class: Powerup
// Date : 28.October 2014
// Programmed by: FutureDevs
//=====================================================


/*----------------------
        Constructor
------------------------*/
function Powerup(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}

/*----------------------
    Instance Variables
------------------------*/

Powerup.prototype.radius = 15;
Powerup.prototype.cx = ARENA_WIDTH/2;
Powerup.prototype.cy = 0;
Powerup.prototype.vx = 0;
Powerup.prototype.vy = 5;
Powerup.prototype.isDead = false;

/*----------------------
        Update
------------------------*/

Powerup.prototype.update = function(du) {
	if(this.isDead) return;

	if(!isOnScreen(this)) {
		this.isDead = true;
		return;
	}

	// Remember my previous position
    var prevX = this.cx;
    var prevY = this.cy;
    
    // Compute my provisional new position (barring collisions)
    var nextX = prevX + this.xVel * du;
    var nextY = prevY + this.yVel * du;
    
    // Bounce off top and bottom edges
    if (nextY < 0 ||                             // top edge
        nextY > g_canvas.height) {               // bottom edge
        this.yVel *= -1;
    }

    // Reset if we fall off the left or right edges
    // ...by more than some arbitrary `margin`
    //
    var margin = 4 * this.radius;
    if (nextX < -margin || 
        nextX > g_canvas.width + margin) {
        this.reset();
    }

    // *Actually* update my position 
    // ...using whatever velocity I've ended up with
    //
    this.cx += this.vx * du;
    this.cy += this.vy * du;
}

/*----------------------
        Render
------------------------*/
Powerup.prototype.render = function(ctx) {
	if(this.isDead) return;
	g_powerup.drawCenteredAt(ctx, this.cx, this.cy, 0);
}