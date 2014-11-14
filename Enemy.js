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

    this.rememberResets();
}

/*----------------------
    Instance Variables
------------------------*/
Enemy.prototype.halfWidth = 10;
Enemy.prototype.halfHeight = 10;
Enemy.prototype.isDead = false;
Enemy.prototype.cx = 20;
Enemy.prototype.cy = 0;
Enemy.prototype.vx = 3;
Enemy.prototype.vy = 1;
Enemy.prototype.timer = 0;

Enemy.prototype.type = "BlackKnight";

Enemy.prototype.rememberResets = function () {
    this.reset_cx = this.cx;
    this.reset_cy = this.cy;
};


/*----------------------
        Update
------------------------*/
Enemy.prototype.update = function (du) {

  

    if(!isOnScreen(this)) {
        this.isDead = true;
        return;
    }

  
/*
    this.vx = Math.cos(this.timer / c_fullCircle);
    this.vy = Math.sin(this.timer / c_fullCircle);
    this.cx += this.vx * du;
    this.cy += this.vy * du;*/

    this.timer += 0.016 * du;

    if(this.type === "BlackKnight") this.updateBlackKnight(du);
};

Enemy.prototype.updateBlackKnight = function (du)
{
    if(this.timer > 5)
    {
        this.timer = 0;
        
        entityManager.addBullet(new Bullet({
            cx : this.cx,
            cy : this.cy,
            
            vx   : 0,
            vy   : 10,
            friendly : true,
            
        }));
    }

    //this.cx += this.vx * du;
    this.cy += this.vy * du;

   /* if(this.cx + 2*this.halfWidth > g_GameCanvas
        || this.cx - 2*this.halfWidth < 0) 
    {
        this.vx = -this.vx;
    }*/

    if(this.cy > this.reset_cy + 10 || this.cy < this.reset_cy - 10)
    {
        this.vy = -this.vy;
    }

}

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
    ctx.fillStyle = "black";
    ctx.fillRect(this.cx - this.halfWidth,
                 this.cy - this.halfHeight,
                 this.halfWidth * 2,
                 this.halfHeight * 2);
};