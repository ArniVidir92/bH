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

Enemy.prototype.radius = 20;




//Possible types are: BlackKnight, ...

Enemy.prototype.type = "BlackKnight";

Enemy.prototype.rememberResets = function () {
    this.reset_cx = this.cx;
    this.reset_cy = this.cy;
};

Enemy.prototype.rememberResets = function () {
 /*   if(this.type === "BlackKnight")
    {
        this.sprite = this.sprite || g_blackKnight;
    }*/
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
    if(this.type === "GrayKnight") this.updateGrayKnight(du);
};

Enemy.prototype.collidesWith = function (object) {
    if( distance(this.cx, this.cy, object.cx, object.cy) < (object.radius + this.radius) * (object.radius + this.radius) ){
        score += 50;
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
    if(this.timer > 1.5)
    {
        this.timer = 0;
        
        entityManager.addBullet(new Bullet({
            cx : this.cx,
            cy : this.cy,
            
            vx   : 0,
            vy   : 3,
            friendly : false,
            
        }));
    }

    this.cy += this.vy * du;

}

Enemy.prototype.updateGrayKnight = function (du)
{
    var length = Math.sqrt(Math.pow(this.cx-entityManager.player.cx,2)+Math.pow(this.cy-entityManager.player.cy,2));
    var bvx = (-this.cx+entityManager.player.cx)/length;
    var bvy = (-this.cy+entityManager.player.cy)/length;
    if(this.timer > 2.5)
    {
        this.timer = 0;
        
        entityManager.addBullet(new Bullet({
            cx : this.cx,
            cy : this.cy,
            
            vx   : bvx*2,
            vy   : bvy*2,
            friendly : false,
            
        }));
    }
    console.log("First cy");
    console.log(this.cy);
    this.cy += this.vy * du;
    console.log("Secon cy");
    console.log(this.cy);

}

/*----------------------
        Renderw
------------------------*/
Enemy.prototype.render = function (ctx) {
    if( this.isDead ){return;}
    // (cx, cy) is the centre; must offset it for drawing
    ctx.save();


 
    if(this.type=="GrayKnight")
    g_enemy1.drawCenteredAt(ctx,this.cx,this.cy,0);
    if(this.type=="BlackKnight")
    g_blackKnight.drawCenteredAt(ctx,this.cx,this.cy,0);


    ctx.restore();
};