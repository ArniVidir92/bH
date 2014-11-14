// A generic constructor which accepts an arbitrary descriptor object
function Player(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}

// Add these properties to the prototype, where they will server as
// shared defaults, in the absence of an instance-specific overrides.

Player.prototype.halfWidth = 20;
Player.prototype.halfHeight = 20;

// Variables for keys on the keyboard
Player.prototype.GO_UP = 8;
Player.prototype.GO_DOWN = 8;
Player.prototype.GO_LEFT = 8;
Player.prototype.GO_RIGHT = 8;
Player.prototype.SHOOT = 32;
Player.prototype.GO_SLOW = 16;
Player.prototype.radius = 4;
Player.prototype.goingSlow = false;

Player.prototype.cooldown = 400 / NOMINAL_UPDATE_INTERVAL;
Player.prototype.level = 3;
Player.prototype.xp = 0;

Player.prototype.getSpeed = function()
{
    if(g_keys[this.GO_SLOW])
    {
        this.goingSlow=true;
        return SLOW_SPEED;
    }
    this.goingSlow=false;
    return BASE_SPEED;
}

Player.prototype.updateDirection = function(du, speed){

    if (g_keys[this.GO_UP]&&this.cy>this.halfHeight) {
        this.cy -= speed * du;
    } if (g_keys[this.GO_DOWN]&&this.cy<g_canvas.height-this.halfHeight) {
        this.cy += speed * du;
    } if (g_keys[this.GO_LEFT]&&this.cx>0+this.halfWidth) {
        this.cx -= speed * du;
    } if (g_keys[this.GO_RIGHT]&&this.cx<ARENA_WIDTH-this.halfWidth) {
        this.cx += speed * du;
    }
}

Player.prototype.shoot = function(){
    if(this.cooldown > 0) return;

    if(g_keys[this.SHOOT]){
        switch(this.level) {
            case 1 :
                this.cooldown = Player.prototype.cooldown;

                entityManager.addBullet(new Bullet({
                    cx : this.cx,
                    cy : this.cy,
                    
                    vx   : 0,
                    vy   : -7,
                    friendly : true,           
                }));
                break;

            case 2: 
                this.cooldown = Player.prototype.cooldown / 2;

                entityManager.addBullet(new Bullet({
                    cx : this.cx,
                    cy : this.cy,
                    
                    vx   : 0,
                    vy   : -7,
                    friendly : true,           
                }));
                break;

            case 3:
                this.cooldown = Player.prototype.cooldown / 1.5;

                var xVel = -4;

                for(var i = 0; i < 3; i++) {
                    entityManager.addBullet(new Bullet({
                        cx : this.cx,
                        cy : this.cy,
                        
                        vx   : xVel,
                        vy   : -7,
                        friendly : true,           
                    }));
                    xVel += 4;
                }
        }
    }
}

Player.prototype.update = function (du) {

    var speed = this.getSpeed();
    this.updateDirection(du, speed);
    if(this.cooldown > 0) this.cooldown -= du;
    this.shoot();

};

Player.prototype.render = function (ctx) {
    // (cx, cy) is the centre; must offset it for drawing
    ctx.fillStyle="white";
    /*ctx.fillRect(this.cx - this.halfWidth,
                 this.cy - this.halfHeight,
                 this.halfWidth * 2,
                 this.halfHeight * 2);*/
    g_ship.drawCenteredAt(ctx,this.cx,this.cy,0);
    if(this.goingSlow)
    fillCircle(ctx, this.cx, this.cy, this.radius,"red");
};

Player.prototype.collidesWith = function (object) {
    if( distance(this.cx, this.cy, object.cx, object.cy) < (object.radius + this.radius) * (object.radius + this.radius) ){
        console.log("Daudur!!!");
        return true;
    }
    return false;
};