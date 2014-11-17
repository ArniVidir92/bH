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
Boss.prototype.halfWidth = 50;
Boss.prototype.halfHeight = 50;
Boss.prototype.isDead = false;
Boss.prototype.hitPoints = 4;
Boss.prototype.cx = 20;
Boss.prototype.cy = 0;
Boss.prototype.vx = 2;
Boss.prototype.vy = 0;
Boss.prototype.score = 5000;
Boss.prototype.rotation = 0;
Boss.prototype.ximit1 = 100;
Boss.prototype.ximit2 = 400;

Boss.prototype.timer1 = 0;
Boss.prototype.timer2 = 0;
Boss.prototype.timer3 = 0;

Boss.prototype.radius = 20;




//Possible types are: Spider ...

Boss.prototype.type = "Spider";

Boss.prototype.getPresets = function()
{
    if(this.type=="Spider")
    {
        this.hitPoints=400;
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
    this.vx = Math.cos(this.timer1 / c_fullCircle);
    this.vy = Math.sin(this.timer1 / c_fullCircle);
    this.cx += this.vx * du;
    this.cy += this.vy * du;*/

    this.timer1 += 0.016 * du;
    this.timer2 += 0.016 * du;
    this.timer3 += 0.016 * du;

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
    if(this.timer1 > 1.5)
    {
        var BT = "blue";
        if(this.hitPoints>140)
            BT = "red";


        this.timer1 = 0;
        for(var i=0; i<17; i++)
        {
            entityManager.addBullet(new Bullet({
                cx : this.cx,
                cy : this.cy,
                
                vx   : -4+0.5*i,
                vy   : 3+(i%2==0)*2,
                friendly : false,
                bulletType : BT
            }));
        }
    }

    var length = Math.sqrt(Math.pow(this.cx-entityManager.player.cx,2)+Math.pow(this.cy-entityManager.player.cy,2));
    var bvx = (-this.cx+entityManager.player.cx)/length;
    var bvy = (-this.cy+entityManager.player.cy)/length;
    if(this.timer2 > 0.3)
    {
        this.timer2 = 0;
        
        entityManager.addBullet(new Bullet({
            cx : this.cx,
            cy : this.cy,
            
            vx   : bvx*7,
            vy   : bvy*7,
            friendly : false,
            bulletType : "red"
        }));
    }



    if( this.hitPoints < 200 && this.timer3 > 1.2)
    {
        var turnrad = 0.1 *440/(-this.cy+entityManager.player.cy);

        this.timer3 = 0;
        
        entityManager.addBullet(new Bullet({
            cx : this.cx,
            cy : this.cy,
            xAcc : -turnrad,
            vx   : 4,
            vy   : 6,
            friendly : false,
            bulletType : "blue"
        }));

        this.timer3 = 0;
        
        entityManager.addBullet(new Bullet({
            cx : this.cx,
            cy : this.cy,
            xAcc : turnrad,
            vx   : -4,
            vy   : 6,
            friendly : false,
            bulletType : "blue"
        }));
    }
    
    /*this.cx += this.vx * du;
    if(this.cx>this.ximit2)
        this.vx = -2;
    if(this.cx<this.ximit1)
        this.vx = 2;*/

}


/*----------------------
        Render
------------------------*/
Boss.prototype.render = function (ctx) {
    if( this.isDead ){return;}
    // (cx, cy) is the centre; must offset it for drawing
    ctx.save();

    if(this.type=="Spider")
    g_spider.drawCenteredAt(ctx,this.cx,this.cy,0);


    ctx.restore();
};