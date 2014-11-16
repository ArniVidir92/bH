//=====================================================
// Class: Boss
// Date : 10.November 2014
// Programmed by: FutureDevs
//=====================================================


/*----------------------
        Constructor
------------------------*/
function Boss(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }

    this.getPresets();
    this.rememberResets();
}

/*----------------------
    Instance Variables
------------------------*/
Boss.prototype.halfWidth = 10;
Boss.prototype.halfHeight = 10;
Boss.prototype.isDead = false;
Boss.prototype.hitPoints = 4;
Boss.prototype.cx = 20;
Boss.prototype.cy = 0;
Boss.prototype.vx = 3;
Boss.prototype.vy = 1;
Boss.prototype.score = 50;
Boss.prototype.rotation = 0;

Boss.prototype.timer = 0;

Boss.prototype.radius = 20;




//Possible types are: Spider ...

Boss.prototype.type = "Spider";

Boss.prototype.getPresets = function()
{
    if(this.type=="Spider")
    {
        this.hitPoints=200;
    }
}

Boss.prototype.rememberResets = function () {
    this.reset_cx = this.cx;
    this.reset_cy = this.cy;
};

Boss.prototype.rememberResets = function () {
 /*   if(this.type === "Spider")
    {
        this.sprite = this.sprite || g_blackKnight;
    }*/
};
/*----------------------
        Update
------------------------*/
Boss.prototype.update = function (du) {

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

    if(this.type === "Spider") this.updateSpider(du);
};

Boss.prototype.getDead = function()
{
    if(this.hitPoints>0) return;
        score += this.score;
        this.isDead = true;
        entityManager.addPowerup(new Powerup({
            cx : this.cx,
            cy : this.cy,

            vx : 0,
            vy : this.vy * 4,
        }));
        particleManager.addSParticle(this.cx,this.cy,"fire",30);
}

Boss.prototype.collidesWith = function (object) {
    if( distance(this.cx, this.cy, object.cx, object.cy) < (object.radius + this.radius) * (object.radius + this.radius) ){
        this.hitPoints -= object.damage;
        this.getDead();
        return true;
    }
    return false;
}

Boss.prototype.updateSpider = function (du)
{
    if(this.timer > 1.5)
    {
        this.timer = 0;
        
        entityManager.addBullet(new Bullet({
            cx : this.cx,
            cy : this.cy,
            
            vx   : 0,
            vy   : 3,
            friendly : false,
            bulletType : "red"
        }));
    }

    this.cy += this.vy * du;

}


/*----------------------
        Render
------------------------*/
Boss.prototype.render = function (ctx) {
    if( this.isDead ){return;}
    // (cx, cy) is the centre; must offset it for drawing
    ctx.save();


 
    if(this.type=="GrayKnight")
    g_enemy1.drawCenteredAt(ctx,this.cx,this.cy,0);
    if(this.type=="Spider")
    g_blackKnight.drawCenteredAt(ctx,this.cx,this.cy,0);
    if(this.type=="ChristmasCarol")
    g_cCarol.drawCenteredAt(ctx,this.cx,this.cy,0);


    ctx.restore();
};