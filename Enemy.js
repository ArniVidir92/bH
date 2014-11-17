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

    this.getPresets();
    this.rememberResets();
}

/*----------------------
    Instance Variables
------------------------*/
Enemy.prototype.halfWidth = 50;
Enemy.prototype.halfHeight = 40;
Enemy.prototype.isDead = false;
Enemy.prototype.hitPoints = 4;
Enemy.prototype.cx = 20;
Enemy.prototype.cy = 0;
Enemy.prototype.vx = 3;
Enemy.prototype.vy = 1;
Enemy.prototype.score = 50;
Enemy.prototype.rotation = 0;
Enemy.prototype.scale = 1;
Enemy.prototype.dScale = 0.4;

Enemy.prototype.timer = 0;

Enemy.prototype.radius = 20;

Enemy.prototype.originalCX = 0;




//Possible types are: BlackKnight, GrayKnight ...

Enemy.prototype.type = "BlackKnight";

Enemy.prototype.getPresets = function()
{
    if(this.type=="ChristmasCarol")
    {
        this.hitPoints=20;
        this.score=249;
    }
    if(this.type=="GrayKnight")
        this.score=125
    if(this.type === "SpinningHell"){
        this.score=100;
        this.originalCX = 400;
        this.vy = 2;
        this.cy = -5;
    }
    if(this.type === "BomberMan"){
        this.score = 200;
        this.cy = -5;
        this.vy = 0.5;
        this.hitPoints = 25;
    }

}

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
    if(this.type === "ChristmasCarol") this.updateChristmasCarol(du);
    if(this.type === "SpinningHell") this.updateSpinningHell(du);
    if(this.type === "BomberMan") this.updateBomberMan(du);
};

Enemy.prototype.getDead = function()
{
    if(this.hitPoints>0) return;
        score += this.score;
        this.isDead = true;
        if(this.type === "BomberMan") this.generateBomberManBullets();
        entityManager.addPowerup(new Powerup({
            cx : this.cx,
            cy : this.cy,

            vx : 0,
            vy : this.vy * 4,
        }));
        particleManager.addSParticle(this.cx,this.cy,"fire",30);
}

Enemy.prototype.collidesWith = function (object) {
    if( distance(this.cx, this.cy, object.cx, object.cy) < (object.radius + this.radius) * (object.radius + this.radius) ){
        this.hitPoints -= object.damage;
        this.getDead();
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
            bulletType : "red"
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
            bulletType : "red"
        }));
    }

    this.cy += this.vy * du;

}

Enemy.prototype.updateChristmasCarol = function (du)
{
    var length = Math.sqrt(Math.pow(this.cx-entityManager.player.cx,2)+Math.pow(this.cy-entityManager.player.cy,2));
    var bvx = (-this.cx+entityManager.player.cx)/length;
    var bvy = (-this.cy+entityManager.player.cy)/length;
    if(this.timer > 4)
    {
        this.timer = 0;
        
        entityManager.addBullet(new Bullet({
            cx : this.cx,
            cy : this.cy,
            
            vx   : bvx*4,
            vy   : bvy*4,
            friendly : false,
            
        }));
    }

    this.cy += this.vy * du;

}

Enemy.prototype.updateSpinningHell = function(du){

    this.cy += this.vy * du;
    this.cx = 100 * Math.sin(this.cy/100) + this.originalCX;

    this.rotation += du * c_fullCircle * 0.016;

    if( this.timer > 1 ){
        this.timer = 0;
        var iMax = 8;
        for(var i = 0; i < iMax; i++){
            entityManager.addBullet(new Bullet({
                cx : this.cx,
                cy : this.cy,
            
                vx   : 5 * Math.cos(this.rotation + i * c_fullCircle/iMax),
                vy   : 5 * Math.sin(this.rotation + i * c_fullCircle/iMax),
                friendly : false,
            }));
        }
    }

}

Enemy.prototype.updateBomberMan = function(du){
    this.cy += this.vy * du;

    var maxScale = 1.3, minScale = 0.7;

    this.scale += 0.016 * du * this.dScale;

    if( this.scale > 1.4 || this.scale < 0.7 ){
        this.dScale = -this.dScale;
    }

    var originalR = 20;

    this.radius = originalR * this.scale;
}

Enemy.prototype.generateBomberManBullets = function(){
    var iMax = 20;
        for(var i = 0; i < iMax; i++){
             entityManager.addBullet(new Bullet({
                cx : this.cx,
                cy : this.cy,
            
                vx   : 5 * Math.cos(this.rotation + i * c_fullCircle/iMax),
                vy   : 5 * Math.sin(this.rotation + i * c_fullCircle/iMax),
                friendly : false,
            }));
        }
        
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
    if(this.type=="ChristmasCarol")
    g_cCarol.drawCenteredAt(ctx,this.cx,this.cy,0);
    if(this.type === "SpinningHell")
    g_cCarol.drawCenteredAt(ctx,this.cx,this.cy,this.rotation);
    if(this.type === "BomberMan")
    g_cCarol.drawCenteredAtScaled(ctx,this.cx,this.cy,0,this.scale);


    ctx.restore();
};