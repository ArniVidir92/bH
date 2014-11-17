//=====================================================
// Class: Enemy
// Date : 28.October 2014
// Programmed by: FutureDevs
//=====================================================


/*----------------------
        Constructor
------------------------*/
function Bullet(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
    this.getPresets();
}

/*----------------------
    Instance Variables
------------------------*/
Bullet.prototype.radius = 5;
Bullet.prototype.cx = 100;
Bullet.prototype.cy = 150;
Bullet.prototype.vx = 5;
Bullet.prototype.vy = 5;
Bullet.prototype.xAcc = 0;
Bullet.prototype.followSpeed = 0;
Bullet.prototype.damage = 5;
Bullet.prototype.isDead = false;
Bullet.prototype.friendly = false;
Bullet.prototype.bulletType = "normal"; //normal, red, blue



Bullet.prototype.getPresets = function()
{
    if(this.bulletType=="blue")
        this.radius = 12;
}

/*----------------------
        Update
------------------------*/
Bullet.prototype.update = function (du){

    if( this.isDead ){return;}

    if(!isOnScreen(this)) {
        this.isDead = true;
        return;
    }

    this.vx += this.xAcc*du;
    this.vx += this.followSpeed*du*sgn(entityManager.player.cx-this.cx);

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

Bullet.prototype.reset = function () {
    this.cx = 300;
    this.cy = 100;
    this.vx = -5;
    this.vy = 4;
};

/*----------------------
        Render
------------------------*/
Bullet.prototype.render = function (ctx) {
    if( this.isDead ){return;}
    if(this.bulletType=="normal")
    g_bullet3.drawCenteredAt(ctx,this.cx,this.cy,0);
    if(this.bulletType=="red")
    g_bullet.drawCenteredAt(ctx,this.cx,this.cy,0);
    if(this.bulletType=="bigred")
    g_bullet.drawCenteredAt(ctx,this.cx,this.cy,0);
    if(this.bulletType=="bigpurple")
    g_bullet.drawCenteredAt(ctx,this.cx,this.cy,0);
    if(this.bulletType=="blue")
    g_bullet2.drawCenteredAt(ctx,this.cx,this.cy,0);
    //fillCircle(ctx, this.cx, this.cy, this.radius);
};