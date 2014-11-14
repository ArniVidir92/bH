//=====================================================
// Class: Enemy
// Date : 28.October 2014
// Programmed by: FutureDevs
//=====================================================


/*----------------------
        Constructor
------------------------*/
function Enemy(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}

/*----------------------
    Instance Variables
------------------------*/
Enemy.prototype.halfWidth = 25;
Enemy.prototype.halfHeight = 25;
Enemy.prototype.isDead = false;
Enemy.prototype.cx = 0;
Enemy.prototype.cy = g_canvas.height * 0.8;
Enemy.prototype.vx = 3;
Enemy.prototype.vy = 0;
Enemy.prototype.timer = 0;


/*----------------------
        Update
------------------------*/
Enemy.prototype.update = function (du) {
    if(!isOnScreen(this)) {
        this.isDead = true;
        return;
    }

    this.timer += du;
    this.vx = Math.cos(this.timer / c_fullCircle);
    this.vy = Math.sin(this.timer / c_fullCircle);
    this.cx += this.vx * du;
    this.cy += this.vy * du;
};

Enemy.prototype.collidesWith = function (prevX, prevY, 
                                          nextX, nextY, 
                                          r) {
    var EnemyEdge = this.cx;
    // Check X coords
    if ((nextX - r < EnemyEdge && prevX - r >= EnemyEdge) ||
        (nextX + r > EnemyEdge && prevX + r <= EnemyEdge)) {
        // Check Y coords
        if (nextY + r >= this.cy - this.halfHeight &&
            nextY - r <= this.cy + this.halfHeight) {
            // It's a hit!
            return true;
        }
    }
    // It's a miss!
    return false;
};

/*----------------------
        Render
------------------------*/
Enemy.prototype.render = function (ctx) {
    // (cx, cy) is the centre; must offset it for drawing
    ctx.fillRect(this.cx - this.halfWidth,
                 this.cy - this.halfHeight,
                 this.halfWidth * 2,
                 this.halfHeight * 2);
};