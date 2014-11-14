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
Player.prototype.radius = 2;

Player.prototype.getSpeed = function()
{
    if(g_keys[this.GO_SLOW])
        return SLOW_SPEED;
    return BASE_SPEED;
}

Player.prototype.updateDirection = function(du, speed){

    if (g_keys[this.GO_UP]&&this.cy>this.halfHeight) {
        this.cy -= speed * du;
    } if (g_keys[this.GO_DOWN]&&this.cy<600-this.halfHeight) {
        this.cy += speed * du;
    } if (g_keys[this.GO_LEFT]&&this.cx>0+this.halfWidth) {
        this.cx -= speed * du;
    } if (g_keys[this.GO_RIGHT]&&this.cx<520-this.halfWidth) {
        this.cx += speed * du;
    }
}

Player.prototype.shoot = function(){
    if(g_keys[this.SHOOT]){
        entityManager.addBullet(new Bullet({
            cx : this.cx,
            cy : this.cy,
            
            vx   : 0,
            vy   : -7,
            friendly : true,
            
        }));

    }
    particleManager.addSParticle(this.cx,this.cy,"corruption",1);
}

Player.prototype.update = function (du) {

    var speed = this.getSpeed();
    this.updateDirection(du, speed);
    this.shoot();

};

Player.prototype.render = function (ctx) {
    // (cx, cy) is the centre; must offset it for drawing
    ctx.fillStyle="white";
    ctx.fillRect(this.cx - this.halfWidth,
                 this.cy - this.halfHeight,
                 this.halfWidth * 2,
                 this.halfHeight * 2);
    fillCircle(ctx, this.cx, this.cy, this.radius);
};

Player.prototype.collidesWith = function (object) {
    
};