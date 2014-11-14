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
Enemy.prototype.rotation = 0;

Enemy.prototype.timer = 0;
Enemy.prototype.radius = 10;


Enemy.prototype.type = "BlackKnight";

Enemy.prototype.rememberResets = function () {
    this.reset_cx = this.cx;
    this.reset_cy = this.cy;
};


/*----------------------
        Update
------------------------*/
Enemy.prototype.update = function (du) {

    if( this.isDead ){return;}


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

Enemy.prototype.collidesWith = function (object) {
    if( distance(this.cx, this.cy, object.cx, object.cy) < (object.radius + this.radius) * (object.radius + this.radius) ){
        this.isDead = true;
        entityManager.addPowerup(new Powerup({
            cx : this.cx,
            cy : this.cy,

            vx : 0,
            vy : this.vy * 4,
        }));
        return true;
    }
    return false;
}
Enemy.prototype.updateBlackKnight = function (du)
{
    if(this.timer > 5)
    {
        this.timer = 0;
        
        entityManager.addBullet(new Bullet({
            cx : this.cx,
            cy : this.cy,
            
            vx   : 0,
            vy   : 2,
            friendly : false,
            
        }));
    }

    this.cy += this.vy * du;

}

/*----------------------
        Render
------------------------*/
Enemy.prototype.render = function (ctx) {
    if( this.isDead ){return;}
    // (cx, cy) is the centre; must offset it for drawing
    ctx.save();

    g_enemy1.drawCenteredAt(ctx,this.cx,this.cy,0);

    ctx.restore();
};