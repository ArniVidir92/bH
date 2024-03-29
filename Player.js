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
Player.prototype.bulletSpeed = -5;

Player.prototype.health = 10;
Player.prototype.immuneCooldown = 2000 / NOMINAL_UPDATE_INTERVAL;
Player.prototype.cooldown = 400 / NOMINAL_UPDATE_INTERVAL;
Player.prototype.secondaryCooldown = 2000 / NOMINAL_UPDATE_INTERVAL;
Player.prototype.level = 1;
Player.prototype.xp = 0;
Player.prototype.xpMax = 100;

Player.prototype.getSpeed = function(){
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
    if(this.cooldown < 0)
    {
        if(g_keys[this.SHOOT]){
            switch(this.level) {
                case 1 :
                    this.cooldown = Player.prototype.cooldown;
                    this.addBullet(this.cx, this.cy, 0, this.bulletSpeed);
                    break;

                case 2: 
                    this.cooldown = Player.prototype.cooldown / 2;
                    this.addBullet(this.cx, this.cy, 0, this.bulletSpeed);
                    break;

                case 3:
                    this.cooldown = Player.prototype.cooldown / 1.5;

                    var xVel = -4;

                    for(var i = 0; i < 3; i++) {
                        this.addBullet(this.cx, this.cy, xVel, this.bulletSpeed);
                        xVel += 4;
                    }
                    break;

                case 4:
                    this.cooldown = Player.prototype.cooldown / 1.5;

                    var xVel = -4;

                    for(var i = 0; i < 3; i++) {
                        this.addBullet(this.cx, this.cy, xVel, this.bulletSpeed*1.2);
                        xVel += 4;
                    }
                    break;

                case 5:
                    this.cooldown = Player.prototype.cooldown / 1.5;

                    var xVel = -6;

                    for (var i = 0; i < 5; i++) {
                        this.addBullet(this.cx, this.cy, xVel, this.bulletSpeed*1.2);
                        xVel += 3;
                    }
                    break;

                case 6:
                    this.cooldown = Player.prototype.cooldown / 2;

                    var xVel = -6;

                    for (var i = 0; i < 5; i++) {
                        this.addBullet(this.cx, this.cy, xVel, this.bulletSpeed*1.2);
                        xVel += 3;
                    }
                    break;
                case 7:
                    this.cooldown = Player.prototype.cooldown / 2.5;

                    var xVel = -6;

                    for (var i = 0; i < 5; i++) {
                        this.addBullet(this.cx, this.cy, xVel, this.bulletSpeed*1.2);
                        xVel += 3;
                    }
                    break;
                case 8:
                    this.cooldown = Player.prototype.cooldown / 2.5;

                    var xVel = -6;
                    this.addBullet(this.cx, this.cy, 1, this.bulletSpeed);
                    this.addBullet(this.cx, this.cy, -1, this.bulletSpeed);
                    for (var i = 0; i < 5; i++) {
                        this.addBullet(this.cx, this.cy, xVel, this.bulletSpeed*1.2);
                        xVel += 3;
                    }
                    break;
                case 9:
                    this.cooldown = Player.prototype.cooldown / 2.5;

                    var xVel = -5;
                    this.addBullet(this.cx, this.cy, 1, this.bulletSpeed*1.4);
                    this.addBullet(this.cx, this.cy, -1, this.bulletSpeed*1.4);
                    for (var i = 0; i < 5; i++) {
                        this.addBullet(this.cx, this.cy, xVel, this.bulletSpeed*1.2);
                        xVel += 2.5;
                    }
                    break;
                case 10:
                    this.cooldown = Player.prototype.cooldown / 2.5;

                    var xVel = -4;
                    this.addBullet(this.cx, this.cy, 1, this.bulletSpeed*1.4);
                    this.addBullet(this.cx, this.cy, -1, this.bulletSpeed*1.4);
                    for (var i = 0; i < 5; i++) {
                        this.addBullet(this.cx, this.cy, xVel, this.bulletSpeed*1.6);
                        xVel += 2;
                    }
                    break;
                default:
                    this.cooldown = Player.prototype.cooldown / (this.level/4);
                    var multiplier = Math.floor(this.level/5);
                    var xVel = -multiplier*2;
                    this.addBullet(this.cx, this.cy, 1, this.bulletSpeed*1.4);
                    this.addBullet(this.cx, this.cy, -1, this.bulletSpeed*1.4);
                    this.addBullet(this.cx, this.cy, 0, this.bulletSpeed*1.2);
                    this.addBullet(this.cx, this.cy, 0, this.bulletSpeed);
                    for (var i = 0; i < 1+multiplier*2; i++) {
                        this.addBullet(this.cx, this.cy, xVel, this.bulletSpeed*(this.level/7));
                        xVel += 2;
                    }
                    break;   
            }
            if(this.secondaryCooldown<0&&this.level>11)
            {
                this.secondaryCooldown = Player.prototype.secondaryCooldown;
                this.addBullet(this.cx, this.cy, 2, 0);
                this.addBullet(this.cx, this.cy, -2, 0);
            }
        }
    }
}

Player.prototype.addBullet = function(cx, cy, vx, vy) {
    entityManager.addBullet(new Bullet({
        cx : cx,
        cy : cy,
        
        vx : vx,
        vy : vy,
        friendly : true,           
    }));
}

Player.prototype.update = function (du) {
    //FixMe  Just temporary for laughs
    if(this.health < 1)
    {
        particleManager.addSParticle(this.cx,this.cy,"corruption",30);
        return;
    }


    var speed = this.getSpeed();
    this.updateDirection(du, speed);
    if(this.cooldown > 0) this.cooldown -= du;
    if(this.secondaryCooldown > 0) this.secondaryCooldown -= du;
    if(this.immuneCooldown > 0) this.immuneCooldown -= du;
    this.shoot();



};



Player.prototype.collidesWith = function (object) {
    if( distance(this.cx, this.cy, object.cx, object.cy) < (object.radius + this.radius) * (object.radius + this.radius) ){
        if( Object.getPrototypeOf(object) === Powerup.prototype ){
            this.xp += 10/this.level;
            this.updateLevel();
            console.log("powerup");
        }
        else if(this.immuneCooldown <= 0)
        {
            this.immuneCooldown = Player.prototype.immuneCooldown;
            console.log("Daudur!!!");
            this.health -= 1;
            sideBar.shake(this.health); //FIXME kannski

            if(this.health <= 0) {
                g_gameOver = true;
            }
        }
        return true;
    }
    return false;
};

Player.prototype.updateLevel = function(){
    if(this.xp > this.xpMax){
        this.level += 1;
        this.xp = 0;
    }
}

Player.prototype.render = function (ctx) {
    // (cx, cy) is the centre; must offset it for drawing
    ctx.fillStyle="white";
    /*ctx.fillRect(this.cx - this.halfWidth,
                 this.cy - this.halfHeight,
                 this.halfWidth * 2,
                 this.halfHeight * 2);*/
    g_ship.drawCenteredAt(ctx,this.cx,this.cy,0);
    
    if(this.immuneCooldown > 0)
    {
        ctx.beginPath();
        ctx.arc(this.cx,this.cy,7*this.radius,0,2*Math.PI);
        ctx.strokeStyle = "green";
        ctx.lineWidth="5";
        ctx.stroke();
    }

    if(this.goingSlow)
    fillCircle(ctx, this.cx, this.cy, this.radius,"red");
    ctx.fillStyle="white";

    for(var i = 0; i < 3; i++) {
        var color = getRandomInt(0, 1) === 0 ? "red" : "orange";
        particleManager.addParticle(this.cx-i, this.cy + this.halfHeight, 0, 1, "circle", 2, color, 1, 1);
        particleManager.addParticle(this.cx+i, this.cy + this.halfHeight, 0, 1, "circle", 2, color, 1, 1);
    }
};