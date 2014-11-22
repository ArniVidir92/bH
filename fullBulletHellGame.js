function Sprite(image) {

    this.image=image;
}

Sprite.prototype.drawCenteredAt = function (ctx, cx, cy, rotation) {
    
    // This is how to implement default parameters...
    if (rotation === undefined) rotation = 0;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotation);
    ctx.translate(-cx, -cy);
    ctx.drawImage(this.image, cx-this.image.width/2, cy-this.image.height/2);
    ctx.restore();

};

Sprite.prototype.drawCenteredAtScaled = function (ctx, cx, cy, rotation, scale) {
    
    // This is how to implement default parameters...
    if (rotation === undefined) rotation = 0;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(scale, scale);
    ctx.rotate(rotation);
    ctx.translate(-cx, -cy);
    ctx.drawImage(this.image, cx-this.image.width/2, cy-this.image.height/2);
    ctx.restore();

};
var numberOfPreloadedImages = 30;
var g_audio1 = new Audio();
var g_audio1OldCurrentTime;

function preloadStuff_thenCall(completionCallback) {
	var cnt = 0;
//1. preload the background	
    var g_bgImage = new Image();
    
    g_bgImage.onload = function () {
        g_bg = new Sprite(g_bgImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_bgImage.src = "bhbg.png";

//2. preload the bullet  
    var g_bulletImage = new Image();
    
    g_bulletImage.onload = function () { 
        g_bullet = new Sprite(g_bulletImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_bulletImage.src = "sprites/bullet2.png";
    
//3. preload the enemy1 
    var g_enemy1Image = new Image();
    
    g_enemy1Image.onload = function () { 
        g_enemy1 = new Sprite(g_enemy1Image) ;
        isReady(++cnt,completionCallback);
    };
    
    g_enemy1Image.src = "sprites/enemymark1.png";

//4. preload the ship
    var g_shipImage = new Image();
    
    g_shipImage.onload = function () { 
        g_ship = new Sprite(g_shipImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_shipImage.src = "sprites/bhship.png";
//5. preload the blackknight
    var g_blackKnightImage = new Image();
    
    g_blackKnightImage.onload = function () { 
        g_blackKnight = new Sprite(g_blackKnightImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_blackKnightImage.src = "sprites/blackknight.png";

//6. preload the sidebar
    var g_sideImage = new Image();
    
    g_sideImage.onload = function () { 
        g_side = new Sprite(g_sideImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_sideImage.src = "sprites/sidebar.png";

//7. preload the powerup
    var g_powerupImage = new Image();
    
    g_powerupImage.onload = function () { 
        g_powerup = new Sprite(g_powerupImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_powerupImage.src = "sprites/powerup2.png";

//8. preload the powerup2
    var g_powerup2Image = new Image();
    
    g_powerup2Image.onload = function () { 
        g_powerup2 = new Sprite(g_powerup2Image) ;
        isReady(++cnt,completionCallback);
    };
    
    g_powerup2Image.src = "sprites/powerup1.png";
//9. preload the bullet2
    var g_bullet2Image = new Image();
    
    g_bullet2Image.onload = function () { 
        g_bullet2 = new Sprite(g_bullet2Image) ;
        isReady(++cnt,completionCallback);
    };
    
    g_bullet2Image.src = "sprites/bigbulletrad12.png";

//10. preload the xpbar
    var g_xpbarImage = new Image();
    
    g_xpbarImage.onload = function () { 
        g_xpbar = new Sprite(g_xpbarImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_xpbarImage.src = "sprites/xpbar.png";

//11. preload the xpbarbackground
    var g_xpbarbgImage = new Image();
    
    g_xpbarbgImage.onload = function () { 
        g_xpbarbg = new Sprite(g_xpbarbgImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_xpbarbgImage.src = "sprites/xpbarbackground.png";

//12. preload the chistmas carol enemy
    var g_cCarolImage = new Image();
    
    g_cCarolImage.onload = function () { 
        g_cCarol = new Sprite(g_cCarolImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_cCarolImage.src = "sprites/christmasCarolShip.png";

//13. preload bullet3
    var g_bullet3Image = new Image();
    
    g_bullet3Image.onload = function () { 
        g_bullet3 = new Sprite(g_bullet3Image) ;
        isReady(++cnt,completionCallback);
    };
    
    g_bullet3Image.src = "sprites/bullet3.png";

//14. preload spider boss
    var g_spiderImage = new Image();
    
    g_spiderImage.onload = function () { 
        g_spider = new Sprite(g_spiderImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_spiderImage.src = "sprites/spiderBoss.png";

//15. preload startscreen background 
    var g_startScreenImage = new Image();

    g_startScreenImage.onload = function() {
        g_startScreen = new Sprite(g_startScreenImage);
        isReady(++cnt,completionCallback);
    };

    g_startScreenImage.src = "sprites/background.png";

//16. preload startscreen button up
    var g_startScreenButtonUpImage = new Image();

    g_startScreenButtonUpImage.onload = function() {
        g_startScreenButtonUp = new Sprite(g_startScreenButtonUpImage);
        isReady(++cnt,completionCallback);
    };

    g_startScreenButtonUpImage.src = "sprites/buttonup.png";

//17. preload startscreen button down
    var g_startScreenButtonDownImage = new Image();

    g_startScreenButtonDownImage.onload = function() {
        g_startScreenButtonDown = new Sprite(g_startScreenButtonDownImage);
        isReady(++cnt,completionCallback);
    };

    g_startScreenButtonDownImage.src = "sprites/buttondown.png";

//18. preload the red enemy
    var g_redEnemyImage = new Image();

    g_redEnemyImage.onload = function() {
        g_redEnemy = new Sprite(g_redEnemyImage);
        isReady(++cnt,completionCallback);
    };

    g_redEnemyImage.src = "sprites/redenemy.png";

//19. preload the flappy boss
    var g_flappyImage = new Image();

    g_flappyImage.onload = function() {
        g_flappy = new Sprite(g_flappyImage);
        isReady(++cnt,completionCallback);
    };

    g_flappyImage.src = "sprites/flappyBird.png";

//20. preload spinner enemy
    var g_spinnerImage = new Image();

    g_spinnerImage.onload = function() {
        g_spinner = new Sprite(g_spinnerImage);
        isReady(++cnt,completionCallback);
    };

    g_spinnerImage.src = "sprites/spinninghell.png";

//21. preload goomba
    var g_pbbImage = new Image();

    g_pbbImage.onload = function() {
        g_pbb = new Sprite(g_pbbImage);
        isReady(++cnt,completionCallback);
    };

    g_pbbImage.src = "sprites/goomba.png";

//22. preload goomba2
    var g_rbbImage = new Image();

    g_rbbImage.onload = function() {
        g_rbb = new Sprite(g_rbbImage);
        isReady(++cnt,completionCallback);
    };

    g_rbbImage.src = "sprites/goomba2.png";

//23. gameover screen
    var g_gameOverImage = new Image();

    g_gameOverImage.onload = function() {
        g_sGameOver = new Sprite(g_gameOverImage);
        isReady(++cnt,completionCallback);
    };

    g_gameOverImage.src = "sprites/gameoverv20.png";

//24. gpreload background for level 2
    var g_bg2Image = new Image();

    g_bg2Image.onload = function() {
        g_bg2 = new Sprite(g_bg2Image);
        isReady(++cnt,completionCallback);
    };

    g_bg2Image.src = "sprites/bg2.png";

//25. gpreload background for level 3
    var g_bg3Image = new Image();

    g_bg3Image.onload = function() {
        g_bg3 = new Sprite(g_bg3Image);
        isReady(++cnt,completionCallback);
    };

    g_bg3Image.src = "sprites/backgroundlevel3.png";

//26. gpreload background for level 3
    var g_bg4Image = new Image();

    g_bg4Image.onload = function() {
        g_bg4 = new Sprite(g_bg4Image);
        isReady(++cnt,completionCallback);
    };

    g_bg4Image.src = "sprites/backgroundlevel4.png";

//27. gpreload background for level 3
    var g_bg5Image = new Image();

    g_bg5Image.onload = function() {
        g_bg5 = new Sprite(g_bg5Image);
        isReady(++cnt,completionCallback);
    };

    g_bg5Image.src = "sprites/backgroundlevel5.png";

//NOT PRELOADING:
//28. gpreload sound for level 1
    g_audio1 = new Audio("audio/BloodyTears.ogg");
        //g_audio1.play();
    //g_audio1.src = "audio/BloodyTears.ogg"
    g_audio1.oncanplaythrough = function() {
        isReady(++cnt, completionCallback);
    };

//29. preload for bullet 4
    var g_bullet4Image = new Image();

    g_bullet4Image.onload = function() {
        g_bullet4 = new Sprite(g_bullet4Image);
        isReady(++cnt,completionCallback);
    };

    g_bullet4Image.src = "sprites/bullet4.png";
 
 //29. preload for bullet 5
    var g_bullet5Image = new Image();

    g_bullet5Image.onload = function() {
        g_bullet5 = new Sprite(g_bullet5Image);
        isReady(++cnt,completionCallback);
    };

    g_bullet5Image.src = "sprites/bullet5.png";

}

function isReady(x,completionCallback)
{
    console.log(x);
    if(x>=numberOfPreloadedImages)
    {completionCallback();
    }
}
var particleManager = 
{ 
	aParticles:[],
	aStyles: { default: new Style({minVel:1, maxVel:4, minRad:4, maxRad:10, shapes:["circle"], colors:["white"], fadeStyle:1, minRate:2, maxRate:10})},
	particleCount:0
}



function Style(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}



particleManager.createStyle = function(name,mv,Mv,mr,Mr,aShapes,aColors,fs,mrate,Mrate)
{
	this.aStyles[name] = new Style({
		minVel: mv, 	
		maxVel: Mv, 
		minRad: mr, 
		maxRad: Mr, 
		shapes: aShapes, 
		colors: aColors, 
		fadeStyle: fs, 
		minRate: mrate, 
		maxRate: Mrate
	});
}

function Particle(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}

particleManager.createStyle("fire", 0, 3, 4, 15, ["circle"], ["red","orange","yellow","gray"], 1, 3, 6);
particleManager.createStyle("dots", 0, 3, 8, 10, ["square"], ["red","green","yellow","blue"], 1, 5, 10);
particleManager.createStyle("corruption", 0, 3, 1, 5, ["square"], ["red","black"], 1, 0.5, 1);


Particle.prototype.exists = true;
Particle.prototype.alpha  = 1;
Particle.prototype.health = 1;

particleManager.addParticle = function(x, y, vx, vy, shp, r, col, fadeStyle, fadeRate)
{
	this.aParticles[this.particleCount++] = new Particle({
	    cx: x,
		cy: y,
	    xVel: vx,
	    yVel: vy,
	    radius: r,
	    shape: shp,
	    color: col,
	    fade: fadeStyle,
	    rate: fadeRate
	});
}

particleManager.addSParticle = function(x,y,style,amount,colorOverwrite)
{
	if(amount===undefined) amount=1;
	if (style===null||style===undefined)
	{var sty = this.aStyles["default"];}
	else
	{var sty = this.aStyles[style];}
	if(colorOverwrite===undefined) {col=sty.colors} else {col = colorOverwrite;}
	
	
	for(var i=0;i<amount;i++)
	{
		var vel = sty.minVel+Math.random()*(sty.maxVel-sty.minVel);
		var theta = Math.random()*2*Math.PI;
		var shape = sty.shapes[Math.floor(Math.random()*sty.shapes.length)];
		var color = col[Math.floor(Math.random()*col.length)];
		var radius = sty.minRad+Math.random()*(sty.maxRad-sty.minRad);
		var fadeRate = sty.minRate+Math.random()*(sty.maxRate-sty.minRate);
		
		this.addParticle(x,y,vel*Math.cos(theta),-vel*Math.sin(theta),shape,radius,color,sty.fadeStyle,fadeRate);
	}
}

Particle.prototype.update = function (du) {

    this.cx += this.xVel*du;
    this.cy += this.yVel*du;

	if(this.fade===1)
	{
    	this.radius-=(this.rate/10)*du;
    	if(this.radius<0){this.exists=false;}
    }
    else if(this.fade===2)
    {
    	this.alpha -= (this.rate/100)*du;
    	if(this.alpha<0){this.exists=false;}
    }
    else if(this.fade===3)
    {
    	this.health -= (this.rate/100)*du;
    	if(this.health<0){this.exists=false;}
    }
};

Particle.prototype.render = function (ctx) 
{
	if(this.exists){
	ctx.fillStyle = this.color;
	ctx.globalAlpha = this.alpha;
    if(this.shape==="circle"){fillCircle(ctx, this.cx, this.cy, this.radius);}
    if(this.shape==="square"){ctx.fillRect(this.cx-this.radius, this.cy-this.radius, this.radius*2, this.radius*2);}
    ctx.globalAlpha=1;
    
}};

particleManager.update = function(du)
{
	for(var i=this.particleCount-1; i>=0; i--)
	{
		if(!this.aParticles[i].exists){this.remove(i);}
		else {this.aParticles[i].update(du);}
	}
}

particleManager.render = function(ctx)
{
	for(var i=this.particleCount-1; i>=0; i--)
	{
		this.aParticles[i].render(ctx);
	}
}

particleManager.remove = function(k)
{
	for(var i=0;i<this.particleCount;i++)
	{
		if(i>k){this.aParticles[i-1]=this.aParticles[i];}
	}
	this.particleCount-=1;
}

particleManager.clear = function()
{
	particleCount=0;
}

noParticlesExist = function()
{
	return (particleCount===0);
}

function fillCircle(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
}

var startScreen = {

	buttonX : 400,
	buttonY : 400,
	buttonWidth  : 440,
	buttonHeight : 100,

	offsetY : 0,

	visible : true,

	isVisible : function() {
		return this.visible;
	},

	update : function(du) {
		if(g_isGameStarted) {
			if(this.offsetY <= g_canvas.height) {
				this.offsetY += 100 / NOMINAL_UPDATE_INTERVAL * du;
			}
			else {
				if(g_audio1){
					g_audio1OldCurrentTime = 0;
					g_audio1.play();
					g_audio1.loop = true;
				}
				
				this.visible = false;
			}
		}
	},

	isOnStartButton : function() {
		return (g_mouseX < this.buttonX + this.buttonWidth/2 && 
				 g_mouseX > this.buttonX - this.buttonWidth/2 &&
				 g_mouseY > this.buttonY - this.buttonHeight/2 &&
				 g_mouseY < this.buttonY + this.buttonHeight/2);
	},

	render : function(ctx) {
		g_startScreen.drawCenteredAt(ctx, g_canvas.width/2, g_canvas.height/2, 0);

		if(this.isOnStartButton()) {
			g_startScreenButtonDown.drawCenteredAt(ctx, this.buttonX, this.buttonY, 0);
		}
		else {
			g_startScreenButtonUp.drawCenteredAt(ctx, this.buttonX, this.buttonY, 0);	
		}

	}
}
 var gameOverScreen = {

 	cx : 520/2,
 	cy : 300,

 	width : 400,
 	height : 120,

	isOnGameOver : function() {
		return (g_mouseX < this.cx + this.width/2 && 
				g_mouseX > this.cx - this.width/2 &&
				g_mouseY > this.cy - this.height/2 &&
				g_mouseY < this.cy + this.height/2);
	},

 	update : function(du) {
 		this.shadowBlur -= 1;
 	},

 	render : function(ctx) {
 		ctx.save();
 		if(this.isOnGameOver()) {
	 		ctx.shadowColor = "white";
	  	 	ctx.shadowOffsetX = 16;
	  		ctx.shadowOffsetY = 16;
	   		ctx.shadowBlur = 10;
 		}
 		g_sGameOver.drawCenteredAt(ctx, this.cx, this.cy, 0);
 		ctx.restore();
 	}
 }
var KEY_W = 'W'.charCodeAt(0);
var KEY_S = 'S'.charCodeAt(0);
var KEY_A = 'A'.charCodeAt(0);
var KEY_D = 'D'.charCodeAt(0);
var SPACEBAR = 32;
var BASE_SPEED = 5;
var SLOW_SPEED = 2;
var ARENA_WIDTH = 520;
var c_pi = Math.PI;
var c_fullCircle = 2 * c_pi;

var g_GameCanvas = 400;
var NOMINAL_UPDATE_INTERVAL = 16.666;

var SECS_TO_NOMINALS = 1000 / NOMINAL_UPDATE_INTERVAL;
// =====
// UTILS
// =====

function clearCanvas(ctx) 
{ 
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    if(levelManager.level===1)
        g_bg.drawCenteredAt(ctx,ctx.canvas.width/2,ctx.canvas.height/2,0);
    if(levelManager.level===2)
        g_bg2.drawCenteredAt(ctx,ctx.canvas.width/2,ctx.canvas.height/2,0);
    if(levelManager.level===3)
        g_bg3.drawCenteredAt(ctx,ctx.canvas.width/2,ctx.canvas.height/2,0);
    if(levelManager.level===4)
        g_bg4.drawCenteredAt(ctx,ctx.canvas.width/2,ctx.canvas.height/2,0);
    if(levelManager.level===5)
        g_bg5.drawCenteredAt(ctx,ctx.canvas.width/2,ctx.canvas.height/2,0);
}

function fillCircle(ctx, x, y, r,fillStyle) 
{
    ctx.beginPath();
    var oldStyle = ctx.fillstyle;
    if(fillStyle)
        ctx.fillStyle = fillStyle;
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = oldStyle;

}

function fillBox(ctx, x, y, w, h, style) 
{
    var oldStyle = ctx.fillStyle;
    ctx.fillStyle = style;
    ctx.fillRect(x, y, w, h);
    ctx.fillStyle = oldStyle;
}

function getLowestAvailable(array)
{
	for(var i in array)
		if(i.isDead)
			return i
	return array.length;
}

function sgn(x)
{
    if(x>0) return 1;
    if(x<0) return -1;
    return 0;
}

function isOnScreen(object) {
    var margin = 20;

    var topY = object.cy + margin;
    var bottomY = object.cy - margin;
    var leftX = object.cx + margin;
    var rightX = object.cx - margin;

    if(topY < 0 ||
        bottomY > g_canvas.height ||
        leftX < 0 || 
        rightX > ARENA_WIDTH) {
            return false;
    }

    return true;
}

function distance( x1, y1, x2, y2 ){
    return (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// =================
// KEYBOARD HANDLING
// =================

var g_keys = [];

function handleKeydown(evt) {
    g_keys[evt.keyCode] = true;
}

function handleKeyup(evt) {
    g_keys[evt.keyCode] = false;
}

// Inspects, and then clears, a key's state
//
// This allows a keypress to be "one-shot" e.g. for toggles
// ..until the auto-repeat kicks in, that is.
//
function eatKey(keyCode) {
    var isDown = g_keys[keyCode];
    g_keys[keyCode] = false;
    return isDown;
}

window.addEventListener("keydown", handleKeydown);
window.addEventListener("keyup", handleKeyup);
// ==============
// MOUSE HANDLING
// ==============

"use strict";

/* jshint browser: true, devel: true, globalstrict: true */

/*
0        1         2         3         4         5         6         7         8
12345678901234567890123456789012345678901234567890123456789012345678901234567890
*/

var g_mouseX = 0,
    g_mouseY = 0;

function handleMouse(evt) {
    
    g_mouseX = evt.clientX - g_canvas.offsetLeft;
    g_mouseY = evt.clientY - g_canvas.offsetTop;
    
    // If no button is being pressed, then bail
    var button = evt.buttons === undefined ? evt.which : evt.buttons;
    if (!button) return;
    
    if(startScreen.isOnStartButton()) {
    	g_isGameStarted = true;
    }

    if(g_gameOver && gameOverScreen.isOnGameOver()){
    	restart();
    }
//    entityManager.yoinkNearestShip(g_mouseX, g_mouseY);
}

// Handle "down" and "move" events the same way.
window.addEventListener("mousedown", handleMouse);
window.addEventListener("mousemove", handleMouse);
// ==============
// SideBar Stuff
// ==============

var sideBar = {
    startX: 520,
    startY: 0,
    witdh: 280,
    enemyScore: 50,
    xpHeight: 180,

    offsetX : 0,
    offsetY : 0,
};

sideBar.update = function (du) {
    if(this.offsetX != 0) {
        var dir = getRandomInt(0, 1) === 1 ? 1 : -1;
        var sign = this.offsetX < 0 ? -1 : 1;
        this.offsetX = (this.offsetX - sign) * dir;
    }
    if(this.offsetY != 0) {
        var dir = getRandomInt(0, 1) === 1 ? 1 : -1;
        var sign = this.offsetY < 0 ? -1 : 1;
        this.offsetY = (this.offsetY - sign) * dir;
    }
};

sideBar.reset = function () {
    score = 0;
};

sideBar.shake = function(health) {
    var dirX = getRandomInt(0, 1) === 1 ? 1 : -1;
    var dirY = getRandomInt(0, 1) === 1 ? 1 : -1;
    if (health <= 0) {
        this.offsetX = getRandomInt(70, 80) * dirX;
        this.offsetY = getRandomInt(70, 80) * dirY;
    }
    else {
        this.offsetX = getRandomInt(25, 30) * dirX;
        this.offsetY = getRandomInt(25, 30) * dirY;
    }
}

sideBar.render = function (ctx) {
    g_side.drawCenteredAt(ctx,this.startX + this.witdh/2,ctx.canvas.height/2,0);

    ctx.save();
    ctx.translate(this.offsetX, this.offsetY);
    this.renderScore(ctx);
    this.renderLevelText(ctx);
    this.renderXp(ctx);
    this.renderPlayerHealth(ctx);
    ctx.restore();
};

sideBar.renderXp = function(ctx){
    var coef = entityManager.player.xp / entityManager.player.xpMax;
    var w = 48, startX = 720, startY = 400;

    //fillBox(ctx,startX ,startY , w, this.xpHeight, "blue")
    g_xpbarbg.drawCenteredAt(ctx,startX,startY,0);
    fillBox(ctx, startX-24 , startY-90 + this.xpHeight, w, -coef * this.xpHeight, "red")
    g_xpbar.drawCenteredAt(ctx,startX,startY,0);
}

sideBar.renderScore = function(ctx){
    ctx.save()
    ctx.shadowColor = "white";
    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 4;
    ctx.shadowBlur = 15;
    ctx.fillStyle = "black";
    ctx.font="bold 28px Arial";  
    ctx.fillText("Score "+ score, 570, 50);
    ctx.restore();
}

sideBar.renderLevelText = function(ctx) {
    ctx.save()
    ctx.shadowColor = "white";
    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 4;
    ctx.shadowBlur = 15;
    var oldStyle = ctx.fillStyle;
    ctx.fillStyle = "black";
    ctx.font = "bold 28px Arial";
    ctx.fillText("Level " + levelManager.getLevel(), 570, 90);
    ctx.fillStyle = oldStyle;
    ctx.restore();
}

sideBar.renderPlayerHealth = function(ctx)
{
    var health = entityManager.player.health;
    var xCord = 553;
    var yCord = ctx.canvas.height - 50;

    for(var i = 0; i < health; i++)
    {   ctx.save();
        ctx.translate(xCord, yCord);
        ctx.scale(0.75, 0.75);
        ctx.translate(-xCord, -yCord);
        g_ship.drawCenteredAt(ctx,xCord,yCord,0);
        xCord += 23;
        ctx.restore();
    }
}
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
Boss.prototype.hitPointsMax = 10000;

Boss.prototype.timer1 = 0;
Boss.prototype.timer2 = 0;
Boss.prototype.timer3 = 0;
Boss.prototype.timer4 = 0;
Boss.prototype.timer5 = 0;

Boss.prototype.radius = 20;



Boss.prototype.types = {
    "Spider" : {
        "hitPoints" : 5000,
    },

    "Flappy" : {
        "hitPoints" : 15000,
    }
}

//Possible types are: Spider, Flappy ...

Boss.prototype.type = "Spider";

Boss.prototype.getPresets = function()
{
    if(this.type=="Spider")
    {
        this.hitPoints=Boss.prototype.types.Spider.hitPoints;
    }
    if(this.type=="Flappy")
    {
        this.hitPoints=Boss.prototype.types.Flappy.hitPoints;
    }
    this.hitPointsMax = this.hitPoints;
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
    this.timer4 += 0.016 * du;
    this.timer5 += 0.016 * du;

    if(this.type === "Spider") this.updateSpider(du);
    if(this.type === "Flappy") this.updateFlappy(du);
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
        levelManager.finishLevel();
}

Boss.prototype.collidesWith = function (object) {
    if( distance(this.cx, this.cy, object.cx, object.cy) < (object.radius + this.radius) * (object.radius + this.radius) ){
        this.hitPoints -= object.damage * 20;
        this.getDead();
        return true;
    }
    return false;
}

//======================================
//
//      Update Spider boss begins
//
//======================================

Boss.prototype.updateSpider = function (du)
{
    if(this.timer1 > 1.5)
    {
        var BT = "blue";
        if(this.hitPoints>1250)
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
            
            vx   : bvx*5,
            vy   : bvy*5,
            friendly : false,
            bulletType : "red"
        }));
    }



    if( this.hitPoints < 2500 && this.timer3 > 1.2)
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
    
    this.cx += this.vx * du;
    if(this.cx>this.ximit2)
        this.vx = -2;
    if(this.cx<this.ximit1)
        this.vx = 2;

}


//======================================
//
//      Update Spider boss ends
//
//======================================





//======================================
//
//      Update Flappy boss begins
//
//======================================

Boss.prototype.updateFlappy = function (du)
{
    if(this.hitPoints > 7500 && this.timer1 > 3.5)
    {
        this.timer1 = 0;
        for(var i=0; i<17; i++)
        {
            if(i!==8)
            entityManager.addBullet(new Bullet({
                cx : this.cx,
                cy : this.cy,
                
                vx   : -4+0.5*i,
                vy   : 3+(i%2==0)*2,
                xAcc : -((i>8)-0.5)/10,
                friendly : false,
                bulletType : "bigpurple"
            }));
        }
    }

    var length = Math.sqrt(Math.pow(this.cx-entityManager.player.cx,2)+Math.pow(this.cy-entityManager.player.cy,2));
    var bvx = (-this.cx+entityManager.player.cx)/length;
    var bvy = (-this.cy+entityManager.player.cy)/length;
    if(this.hitPoints > 7500 && this.timer2 > 1.2)
    {
        this.timer2 = 0;
        
        entityManager.addBullet(new Bullet({
            cx : this.cx,
            cy : this.cy,
            
            vx   : bvx*1,
            vy   : bvy*1,
            friendly : false,
            bulletType : "bigpurple"
        }));
    }

    if(this.hitPoints < 1500 && this.timer4 > 0.3)
    {
        this.timer4 = 0;
        
        entityManager.addBullet(new Bullet({
            cx : this.cx,
            cy : this.cy,
            
            vx   : bvx*6,
            vy   : bvy*6,
            friendly : false,
            bulletType : "bigpurple"
        }));
    }

    if(this.hitPoints < 7500 && this.timer2 > 0.4)
    {
        this.timer2 = 0;
        
        entityManager.addBullet(new Bullet({
            cx : this.cx,
            cy : this.cy,
            
            vx   : bvx*4,
            vy   : bvy*4,
            friendly : false,
            bulletType : "bigred"
        }));
    }


    if( this.hitPoints < 7500 && this.timer3 > 1.2)
    {
        var turnrad = 0.1 *440/(-this.cy+entityManager.player.cy);

        this.timer3 = 0;
        
        entityManager.addBullet(new Bullet({
            cx : this.cx,
            cy : this.cy,
            xAcc : -turnrad,
            vx   : 4,
            vy   : 40*turnrad,
            friendly : false,
            bulletType : "bigred"
        }));

        this.timer3 = 0;
        
        entityManager.addBullet(new Bullet({
            cx : this.cx,
            cy : this.cy,
            xAcc : turnrad,
            vx   : -4,
            vy   : 40*turnrad,
            friendly : false,
            bulletType : "bigred"
        }));
    }


    if(this.hitPoints < 7500 && this.timer1 > 3.5)
    {
        this.timer1 = 0;
        for(var i=0; i<17; i++)
        {
            if(i!==8)
            entityManager.addBullet(new Bullet({
                cx : this.cx,
                cy : this.cy,
                
                vx   : -4+0.5*i,
                vy   : 3+(i%2==0)*2,
                followSpeed : 0.1,
                friendly : false,
                bulletType : "bigred"
            }));
        }
    }


    
    this.cx += this.vx * du;
    if(this.cx>this.ximit2)
        this.vx = -1;
    if(this.cx<this.ximit1)
        this.vx = 1;

}


//======================================
//
//      Update Flappy boss ends
//
//======================================










/*----------------------
        Render
------------------------*/
Boss.prototype.render = function (ctx) {
    if( this.isDead ){return;}
    // (cx, cy) is the centre; must offset it for drawing
    ctx.save();

    if(this.type=="Spider") {
        g_spider.drawCenteredAt(ctx,this.cx,this.cy,0);
        var bossLifeWidth = (sideBar.startX-20) * this.hitPoints / Boss.prototype.types.Spider.hitPoints;
        fillBox(ctx, 10, 10, bossLifeWidth, 10, "red");        
    }

    if(this.type=="Flappy") {
        g_flappy.drawCenteredAt(ctx,this.cx,this.cy,0);
        var bossLifeWidth = (sideBar.startX-20) * this.hitPoints / Boss.prototype.types.Flappy.hitPoints;
        fillBox(ctx, 10, 10, bossLifeWidth, 10, "red");        
    }

    ctx.restore();
};
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
            bulletType : "green"
            
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
                bulletType : "red2"
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
                bulletType : "red2"
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
    g_spinner.drawCenteredAt(ctx,this.cx,this.cy,this.rotation);
    if(this.type === "BomberMan")
    g_redEnemy.drawCenteredAtScaled(ctx,this.cx,this.cy,0,this.scale);


    ctx.restore();
};
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
    if(this.bulletType=="red2")
    g_bullet4.drawCenteredAt(ctx,this.cx,this.cy,0);
    if(this.bulletType=="green")
    g_bullet5.drawCenteredAt(ctx,this.cx,this.cy,0);
    if(this.bulletType=="bigred")
    g_rbb.drawCenteredAt(ctx,this.cx,this.cy,0);
    if(this.bulletType=="bigpurple")
    g_pbb.drawCenteredAt(ctx,this.cx,this.cy,0);
    if(this.bulletType=="blue")
    g_bullet2.drawCenteredAt(ctx,this.cx,this.cy,0);
    //fillCircle(ctx, this.cx, this.cy, this.radius);
};
//=====================================================
// Class: Powerup
// Date : 28.October 2014
// Programmed by: FutureDevs
//=====================================================


/*----------------------
        Constructor
------------------------*/
function Powerup(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}

/*----------------------
    Instance Variables
------------------------*/

Powerup.prototype.radius = 15;
Powerup.prototype.cx = ARENA_WIDTH/2;
Powerup.prototype.cy = 0;
Powerup.prototype.vx = 0;
Powerup.prototype.vy = 5;
Powerup.prototype.isDead = false;

/*----------------------
        Update
------------------------*/

Powerup.prototype.update = function(du) {
	if(this.isDead) return;

	if(!isOnScreen(this)) {
		this.isDead = true;
		return;
	}

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

/*----------------------
        Render
------------------------*/
Powerup.prototype.render = function(ctx) {
	if(this.isDead) return;
	g_powerup.drawCenteredAt(ctx, this.cx, this.cy, 0);
}
//=====================================================
// Class: EntityManager
// Date : 28.October 2014
// Programmed by: FutureDevs
//=====================================================


/*----------------------
		Constructor
------------------------*/
function EntityManager(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}

/*----------------------
	Instance Variables
------------------------*/
EntityManager.prototype.player = null;
EntityManager.prototype.bullets = [];
EntityManager.prototype.enemies = [];
EntityManager.prototype.powerups = [];
EntityManager.prototype.boss = null;
EntityManager.prototype.timer = 0;


/*----------------------
	Add and initialize
------------------------*/
EntityManager.prototype.setPlayer = function(player)
{this.player=player;}

EntityManager.prototype.setBoss = function(boss)
{this.boss=boss;}

EntityManager.prototype.addBullet = function(bullet)
{
	var low = getLowestAvailable(this.bullets);
	this.bullets[low]=bullet;
}

EntityManager.prototype.addEnemy = function(enemy)
{
	var low = getLowestAvailable(this.enemies);
	this.enemies[low]=enemy;
}

EntityManager.prototype.addPowerup = function(powerup) 
{
	var low = getLowestAvailable(this.powerups);
	this.powerups[low]=powerup;
}

/*----------------------
		Update
------------------------*/
EntityManager.prototype.updateTime = function(du)
{
	this.timer += du;
}

EntityManager.prototype.update = function(du)
{
	if(this.player)
		this.player.update(du);

	for(var i=0; i< this.bullets.length; i++){
		this.bullets[i].update(du);
	}

	for (var j = 0; j < this.enemies.length; j++){
		this.enemies[j].update(du);
	}

	for (var k = 0; k < this.powerups.length; k++) {
		this.powerups[k].update(du);
	}

	if(this.boss)
		this.boss.update(du);

	this.checkCollisions(du);

	this.updateTime(du)
}

/*----------------------
		Collision Stuff
------------------------*/

EntityManager.prototype.checkCollisions = function(du){
	var bullet, enemy, powerup;
	for( var i = 0; i < this.bullets.length; i++){
		bullet = this.bullets[i];
		if( bullet.isDead ){}
		else{
			if( bullet.friendly ){
				for( var j = 0; j < this.enemies.length; j++ ){
					enemy = this.enemies[j];
					if( !enemy.isDead && enemy.collidesWith(bullet) ){
						this.bullets[i].isDead = true;
					}
				}
				if(!(this.boss===null) && !this.boss.isDead && this.boss.collidesWith(bullet)){
					this.bullets[i].isDead = true;
					}
			}else{
				if( this.player.collidesWith(bullet) ){
					if(this.player.immuneCooldown > 0){
						this.bullets[i].vy = -this.bullets[i].vy;
						this.bullets[i].friendly = true;
					}
					else {this.bullets[i].isDead = true;}
				}
			}
		}
	}
	for( var k = 0; k < this.enemies.length; k++){
		enemy = this.enemies[k];
		if( !enemy.isDead ){
			this.player.collidesWith(enemy);
		}
	}

	for(var h = 0; h < this.powerups.length; h++) {
		powerup = this.powerups[h];
		if(!powerup.isDead) {
			if(this.player.collidesWith(powerup)) {
				powerup.isDead = true;
			}
		}
	}
}

/*----------------------
		Render
------------------------*/
EntityManager.prototype.render = function(ctx)
{
	if(this.player)
		this.player.render(ctx);
	for(var i = 0; i < this.bullets.length; i++){
		this.bullets[i].render(ctx);
	}

	for (var j = 0; j < this.enemies.length; j++){
		this.enemies[j].render(ctx);
	}

	for (var k = 0; k < this.powerups.length; k++) {
		this.powerups[k].render(ctx);
	}

	if(this.boss)
		this.boss.render(ctx);
}
// ========
// MAINLOOP
// ========

// The mainloop is one big object with a fairly small public interface
// (e.g. init, iter, gameOver), and a bunch of private internal helper methods.
//
// The "private" members are identified as such purely by the naming convention
// of having them begin with a leading underscore. A more robust form of privacy,
// with genuine name-hiding *is* possible in JavaScript (via closures), but I 
// haven't adopted it here.
//
var g_main = {
    
    // "Frame Time" is a (potentially high-precision) frame-clock for animations
    _frameTime_ms : null,
    _frameTimeDelta_ms : null,

};

// Perform one iteration of the mainloop
g_main.iter = function (frameTime) {
    
    // Use the given frameTime to update all of our game-clocks
    this._updateClocks(frameTime);
    
    // Perform the iteration core to do all the "real" work
    this._iterCore(this._frameTimeDelta_ms);
    
    // Diagnostics, such as showing current timer values etc.
    this._debugRender(g_ctx);
    
    // Request the next iteration if needed
    if (!this._isGameOver) this._requestNextIteration();
};

g_main._updateClocks = function (frameTime) {
    
    // First-time initialisation
    if (this._frameTime_ms === null) this._frameTime_ms = frameTime;
    
    // Track frameTime and its delta
    this._frameTimeDelta_ms = frameTime - this._frameTime_ms;
    this._frameTime_ms = frameTime;
};

g_main._iterCore = function (dt) {
    
    // Handle QUIT
    if (requestedQuit()) {
        this.gameOver();
        return;
    }
    
    gatherInputs();
    update(dt);
    render(g_ctx);
};

g_main._isGameOver = false;

g_main.gameOver = function () {
    this._isGameOver = true;
    console.log("gameOver: quitting...");
};

// Simple voluntary quit mechanism
//
var KEY_QUIT = 'Q'.charCodeAt(0);
function requestedQuit() {
    return g_keys[KEY_QUIT];
}

// Annoying shim for cross-browser compat
window.requestAnimationFrame = 
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

// This needs to be a "global" function, for the "window" APIs to callback to
function mainIterFrame(frameTime) {
    g_main.iter(frameTime);
}

g_main._requestNextIteration = function () {
    window.requestAnimationFrame(mainIterFrame);
};

// Mainloop-level debug-rendering

var TOGGLE_TIMER_SHOW = 'T'.charCodeAt(0);

g_main._doTimerShow = false;

g_main._debugRender = function (ctx) {
    
    if (eatKey(TOGGLE_TIMER_SHOW)) this._doTimerShow = !this._doTimerShow;
    
    if (!this._doTimerShow) return;
    
    var y = 350;
    ctx.fillText('FT ' + this._frameTime_ms, 50, y+10);
    ctx.fillText('FD ' + this._frameTimeDelta_ms, 50, y+20);
    ctx.fillText('UU ' + g_prevUpdateDu, 50, y+30); 
    ctx.fillText('FrameSync ON', 50, y+40);
};

g_main.init = function () {
    
    // Grabbing focus is good, but it sometimes screws up jsfiddle,
    // so it's a risky option during "development"
    //
    //window.focus(true);

    this._requestNextIteration();
};
// GENERIC UPDATE LOGIC

// The "nominal interval" is the one that all of our time-based units are
// calibrated to e.g. a velocity unit is "pixels per nominal interval"
//
var NOMINAL_UPDATE_INTERVAL = 16.666;

// Dt means "delta time" and is in units of the timer-system (i.e. milliseconds)
//
var g_prevUpdateDt = null;

// Du means "delta u", where u represents time in multiples of our nominal interval
//
var g_prevUpdateDu = null;

// Track odds and evens for diagnostic / illustrative purposes
//
var g_isUpdateOdd = false;

// False if we are still on the start screen, true if in-game
//
var g_isGameStarted = false;

// True if game over
//
var g_gameOver = false;

function update(dt) {

    if(eatKey(KEY_START)) g_isGameStarted = true;
    
    // Get out if skipping (e.g. due to pause-mode)
    //
    if (shouldSkipUpdate()) return;

    // Remember this for later
    //
    var original_dt = dt;
    
    // Warn about very large dt values -- they may lead to error
    //
    if (dt > 200) {
        console.log("Big dt =", dt, ": CLAMPING TO NOMINAL");
        dt = NOMINAL_UPDATE_INTERVAL;
    }
    
    // If using variable time, divide the actual delta by the "nominal" rate,
    // giving us a conveniently scaled "du" to work with.
    //
    var du = (dt / NOMINAL_UPDATE_INTERVAL);
    
    updateSimulation(du);
    
    g_prevUpdateDt = original_dt;
    g_prevUpdateDu = du;
    
    g_isUpdateOdd = !g_isUpdateOdd;
}

// Togglable Pause Mode
//
var KEY_START = 13;
var KEY_PAUSE = 'P'.charCodeAt(0);
var KEY_STEP  = 'O'.charCodeAt(0);

var g_isUpdatePaused = false;

function shouldSkipUpdate() {
    if (eatKey(KEY_PAUSE)) {
        g_isUpdatePaused = !g_isUpdatePaused;
    }
    return g_isUpdatePaused && !eatKey(KEY_STEP);    
}
// GENERIC RENDERING

var g_doClear = true;
var g_doBox = false;
var g_undoBox = false;
var g_doFlipFlop = false;
var g_doRender = true;
var g_audioOn = true;

var g_frameCounter = 1;

var TOGGLE_CLEAR = 'C'.charCodeAt(0);
var TOGGLE_BOX = 'B'.charCodeAt(0);
var TOGGLE_UNDO_BOX = 'U'.charCodeAt(0);
var TOGGLE_FLIPFLOP = 'F'.charCodeAt(0);
var TOGGLE_RENDER = 'R'.charCodeAt(0);
var TOGGLE_MUTE = 'M'.charCodeAt(0);

function render(ctx) {
    
    // Process various option toggles
    //
    if (eatKey(TOGGLE_CLEAR)) g_doClear = !g_doClear;
    if (eatKey(TOGGLE_BOX)) g_doBox = !g_doBox;
    if (eatKey(TOGGLE_UNDO_BOX)) g_undoBox = !g_undoBox;
    if (eatKey(TOGGLE_FLIPFLOP)) g_doFlipFlop = !g_doFlipFlop;
    if (eatKey(TOGGLE_RENDER)) g_doRender = !g_doRender;
    if (eatKey(TOGGLE_MUTE)) g_audioOn = !g_audioOn;
    
    // I've pulled the clear out of `renderSimulation()` and into
    // here, so that it becomes part of our "diagnostic" wrappers
    //
    if (g_doClear) clearCanvas(ctx);
    
    // The main purpose of the box is to demonstrate that it is
    // always deleted by the subsequent "undo" before you get to
    // see it...
    //
    // i.e. double-buffering prevents flicker!
    //
    if (g_doBox) fillBox(ctx, 200, 200, 50, 50, "red");
    
    
    // The core rendering of the actual game / simulation
    //
    if (g_doRender) renderSimulation(ctx);
    
    
    // This flip-flip mechanism illustrates the pattern of alternation
    // between frames, which provides a crude illustration of whether
    // we are running "in sync" with the display refresh rate.
    //
    // e.g. in pathological cases, we might only see the "even" frames.
    //
    if (g_doFlipFlop) {
        var boxX = 250,
            boxY = g_isUpdateOdd ? 100 : 200;
        
        // Draw flip-flop box
        fillBox(ctx, boxX, boxY, 50, 50, "green");
        
        // Display the current frame-counter in the box...
        ctx.fillText(g_frameCounter % 1000, boxX + 10, boxY + 20);
        // ..and its odd/even status too
        var text = g_frameCounter % 2 ? "odd" : "even";
        ctx.fillText(text, boxX + 10, boxY + 40);
    }
    
    // Optional erasure of diagnostic "box",
    // to illustrate flicker-proof double-buffering
    //
    if (g_undoBox) ctx.clearRect(200, 200, 50, 50);
    
    ++g_frameCounter;
}
//=====================================================
// Class: LevelManager
// Date : 14. November 2014
// Programmed by: FutureDevs
//=====================================================


/*----------------------
		Constructor
------------------------*/
function LevelManager(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }

    this.init();
}


/*----------------------
	Instance Variables
------------------------*/
LevelManager.prototype.level = 1;
LevelManager.prototype.timer = 1;
LevelManager.prototype.atimers = [];
LevelManager.prototype.spiderBoss = new Boss({
    										cx 	  : 250,
    										cy 	  : 100,
    										type  : "Spider",
											});

LevelManager.prototype.flappyBoss = new Boss({
    										cx 	  : 250,
    										cy 	  : 100,
    										type  : "Flappy",
											});


LevelManager.prototype.blackKnights = {
    array 		: [],
    spawnNumber : 10,
    spawnTime   : 5,
    spawnTimer  : 0, 
};

LevelManager.prototype.grayKnights = {
    array 		: [],
    spawnNumber : 1,
    spawnTime   : 3,
    spawnTimer  : 0, 
};

LevelManager.prototype.christmasCarols = {
    array 		: [],
    spawnNumber : 2,
    spawnTime   : 4,
    spawnTimer  : 0, 
};

LevelManager.prototype.spinningHell = {
    array 		: [],
    spawnNumber : 1,
    spawnTime   : 5,
    spawnTimer  : 0, 
};

LevelManager.prototype.bomberMan = {
    array 		: [],
    spawnNumber : 2,
    spawnTime   : 3,
    spawnTimer  : 0, 
};

LevelManager.prototype.init = function()
{
	if(this.level === 1) this.initlevel1();
	if(this.level === 2) this.initlevel2();
	if(this.level === 3) this.initlevel3();
	if(this.level === 4) this.initlevel4();


	this.setTimers();
};

LevelManager.prototype.finishLevel = function()
{
	entityManager.player.health = 10;
	this.level++;
	this.atimers = [];
	this.init();	
}

LevelManager.prototype.setTimers = function()
{
	this.timer = 0;
	//Putting enemy objects in array for easy timers
	this.atimers[0] = this.blackKnights;
	this.atimers[1] = this.grayKnights;
	this.atimers[2] = this.christmasCarols;
	this.atimers[3] = this.bomberMan;
	this.atimers[4] = this.spinningHell;
}



LevelManager.prototype.spawnEnemies = function (Enemy)
{
	if(Enemy.array.length >= Enemy.spawnNumber)
	{
		var i = 0;
		while(i < Enemy.spawnNumber)
		{
			var bk = Enemy.array.pop();
			entityManager.addEnemy(bk);
			i++
		}
	}		
};

LevelManager.prototype.getLevel = function() {
	return this.level;
}

/*-----------------------
	Update loop
	aka levelbuilder
-----------------------*/
LevelManager.prototype.update = function(du)
{
    if(g_audio1){
       /* if(g_audio1.currentTime === 0){
            g_audio1.play();
            g_audio1.loop = true;
        }*/
        var tmp;
        tmp = g_audio1OldCurrentTime;
        if(!g_audioOn){
            g_audio1OldCurrentTime = g_audio1.currentTime;
            g_audio1.pause();
        }
        else if(g_audioOn){
            g_audio1.play();
            /*if(g_audio1.currentTime != 0){
                g_audio1.play();
            }*/
        }
    }
	
	this.updateTimers(du);
	for(var i = 0; i < this.atimers.length; i++)
	{
		if(this.atimers[i].spawnTimer > this.atimers[i].spawnTime)
		{
			this.atimers[i].spawnTimer = 0;
			this.spawnEnemies(this.atimers[i]);
		}
	}
	
	if(this.level === 1 && this.timer > 60) this.finishLevel();
	
	if(this.level === 2 && this.timer > 65) entityManager.setBoss(this.spiderBoss);

	if(this.level === 3 && this.timer > 60) this.finishLevel();
	
	if(this.level === 4 && this.timer > 80) entityManager.setBoss(this.flappyBoss);

};

LevelManager.prototype.updateTimers = function (du)
{
	this.timer += 0.016 * du;
	for(var i = 0; i < this.atimers.length; i++)
	{
		this.atimers[i].spawnTimer += 0.016 * du;
	}

};


/*----------------------------------------------------------------------
							Level Designer
-----------------------------------------------------------------------*/
LevelManager.prototype.initlevel1 = function()
{   
	var xCord = 20;
	for(var i = 0; i < 100; i++)
	{
    	var en = new Enemy({
    	cx 		: 	xCord,
    	cy 		: 	-5,
    	vx 		: 	3,
    	vy		:   1, 
    	type 	: 	"BlackKnight"
    	});

    	xCord += 45;
    	if(xCord > (20+(45*10))) xCord = 20;
 
    	this.blackKnights.array.push(en);
	}

    var xCords = [50, 470, 200, 300];
    var z = 0;
    for(var i = 0; i < 40; i++)
    {
        var en = new Enemy({
        cx      :   xCords[z],
        cy      :   -5,
        vx      :   3,
        vy      :   3, 
        type    :   "BomberMan"
        });

        z++;
        if(z > 3) z = 0;
        this.bomberMan.array.push(en);
    }


}


LevelManager.prototype.initlevel2 = function()
{
	/*--------------------------
		Creating Black Knights
	---------------------------*/
	var xCord = 20;
	for(var i = 0; i < 100; i++)
	{
    	var en = new Enemy({
    	cx 		: 	xCord,
    	cy 		: 	-5,
    	vx 		: 	3,
    	vy		:   1, 
    	type 	: 	"BlackKnight"
    	});

    	xCord += 45;
    	if(xCord > (20+(45*10))) xCord = 20;
 
    	this.blackKnights.array.push(en);
	}

	/*-----------------------------
		Creating Gray Knights  
	------------------------------*/
	for(var i = 0; i < 20; i++)
	{
    	var en = new Enemy({
    	cx 		: 	470,
    	cy 		: 	-5,
    	vx 		: 	0,
    	vy 		: 	1,
    	type	: 	"GrayKnight",

    	});
 
    	this.grayKnights.array.push(en);
	}

	/*-----------------------------
		Creating Christmas Carols
	------------------------------*/
	xCord = 30;
	for(var i = 0; i < 30; i++)
	{
    	var en = new Enemy({
    	cx 		: 	xCord,
    	cy 		: 	-5,
    	vx 		: 	0,
    	vy 		: 	1,
    	type	: 	"ChristmasCarol",

    	});
 		if(xCord === 30) xCord = g_GameCanvas - 30;
    	else xCord = 30;
    	this.christmasCarols.array.push(en);
	}
};




LevelManager.prototype.initlevel3 = function()
{
	/*--------------------------
		Creating Gray Knights
	---------------------------*/
	this.grayKnights.spawnNumber = 5;
	this.grayKnights.spawnTime = 3;

	var xCord = 20;
	for(var i = 0; i < 100; i++)
	{
    	var en = new Enemy({
    	cx 		: 	xCord,
    	cy 		: 	-5,
    	vx 		: 	3,
    	vy		:   1, 
    	type 	: 	"GrayKnight"
    	});

    	xCord += 45;
    	if(xCord > (20+(45*10))) xCord = 20;
 
    	this.grayKnights.array.push(en);
	}


	/*-----------------------------
		Creating Christmas Carols
	------------------------------*/
	
	for(var i = 0; i < 30; i++)
	{
		xCord = Math.floor((Math.random() * 380) + 100);
    	var en = new Enemy({
    	cx 		: 	xCord,
    	cy 		: 	-5,
    	vx 		: 	0,
    	vy 		: 	1,
    	type	: 	"ChristmasCarol",

    	});
    	this.christmasCarols.array.push(en);
	}

	/*--------------------------
		Creating Black Knights
	---------------------------*/
	xCord = 20;
	for(var i = 0; i < 100; i++)
	{
    	var en = new Enemy({
    	cx 		: 	xCord,
    	cy 		: 	-5,
    	vx 		: 	3,
    	vy		:   1, 
    	type 	: 	"BlackKnight"
    	});

    	xCord += 45;
    	if(xCord > (20+(45*10))) xCord = 20;
 
    	this.blackKnights.array.push(en);
	}

    this.bomberMan.spawnNumber = 3;
	/*--------------------------
		Creating Bombermen
	---------------------------*/
	var xCords = [50, 200, 350];
	var z = 0;
	for(var i = 0; i < 60; i++)
	{
    	var en = new Enemy({
    	cx 		: 	xCords[z],
    	cy 		: 	-5,
    	vx 		: 	3,
    	vy		:   1, 
    	type 	: 	"BomberMan"
    	});

    	z++
    	if(z > 2) z = 0;
 
    	this.bomberMan.array.push(en);
	}

};

LevelManager.prototype.initlevel4 = function()
{
	
	/*--------------------------
		Creating Spinninghells
	---------------------------*/
	for(var i = 0; i < 10; i++)
	{
    	var en = new Enemy({
    	cx 		: 	Enemy.originalCX ,
    	cy 		: 	-5, 
    	type 	: 	"SpinningHell"
    	});
 
    	this.spinningHell.array.push(en);
	}


	/*-----------------------------
		Creating Christmas Carols
	------------------------------*/
	this.christmasCarols.spawnNumber = 3;
	this.christmasCarols.spawnTime = 4;
	var xCords = [50, 200, 300];
	var z = 0;
	for(var i = 0; i < 60; i++)
	{
    	var en = new Enemy({
    	cx 		: 	xCords[z],
    	cy 		: 	-5,
    	vx 		: 	0,
    	vy 		: 	1,
    	type	: 	"ChristmasCarol",

    	});
    	z++;
    	if(z > 2) z = 0;
    	this.christmasCarols.array.push(en);
	}

	/*--------------------------
		Creating Black Knights
	---------------------------*/
	this.blackKnights.spawnNumber = 5;
	xCord = 20; 
	for(var i = 0; i < 50; i++)
	{
    	var en = new Enemy({
    	cx 		: 	xCord,
    	cy 		: 	-5,
    	vx 		: 	3,
    	vy		:   1, 
    	type 	: 	"BlackKnight"
    	});

    	xCord += 45;
    	if(xCord > (20+(45*10))) xCord = 20;
 
    	this.blackKnights.array.push(en);
	}

	/*--------------------------
		Creating Bombermen
	---------------------------*/
	this.bomberMan.spawnNumber = 2;
    xCords = [50, 350, 150, 250];
	z = 0;
	for(var i = 0; i < 40; i++)
	{
    	var en = new Enemy({
    	cx 		: 	xCords[z],
    	cy 		: 	-5,
    	vx 		: 	3,
    	vy		:   1, 
    	type 	: 	"BomberMan"
    	});

    	z++;
    	if(z > 3) z = 0;
 
    	this.bomberMan.array.push(en);
	}

	this.grayKnights.spawnNumber = 4;
	var xCord = 20;
	for(var i = 0; i < 100; i++)
	{
    	var en = new Enemy({
    	cx 		: 	xCord,
    	cy 		: 	-5,
    	vx 		: 	3,
    	vy		:   1, 
    	type 	: 	"GrayKnight"
    	});

    	xCord += 45;
    	if(xCord > (20+(45*10))) xCord = 20;
 
    	this.grayKnights.array.push(en);
	}

};
// "Crappy PONG" -- step by step
//
// Step 13: Simplify
/*

Supporting timer-events (via setInterval) *and* frame-events (via requestAnimationFrame)
adds significant complexity to the the code.

I can simplify things a little by focusing on the latter case only (which is the
superior mechanism of the two), so let's try doing that...

The "MAINLOOP" code, inside g_main, is much simplified as a result.

*/

"use strict";

/* jshint browser: true, devel: true, globalstrict: true */

var g_canvas = document.getElementById("myCanvas");
var g_ctx = g_canvas.getContext("2d");

var score = 0;

/*
0        1         2         3         4         5         6         7         8         9
123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
*/

var entityManager = new EntityManager();
var levelManager = new LevelManager();

// ============
// Player STUFF
// ============

// Player 1

var mainPlayer = new Player({
    cx : 250,
    cy : 500,
    
    GO_UP   : 38,
    GO_RIGHT: 39,
    GO_LEFT : 37,
    GO_DOWN : 40
});

entityManager.setPlayer(mainPlayer);

/*
-------------------------------------------------

                HOW TO SPAWN BOSS

------------------------------------------------
*/

/*
var mainBoss = new Boss({
    cx : 250,
    cy : 100,
    type: "Flappy"
});

entityManager.setBoss(mainBoss);
*/






//--------------------------

//Spawn an enemy

//--------------------------
/*
var enemy = new Enemy({
    
    type:"SpinningHell",
});

entityManager.addEnemy(enemy);
*/


// Player 2

var KEY_I = 'I'.charCodeAt(0);
var KEY_K = 'K'.charCodeAt(0);

var g_player2 = new Player({
    cx : 500,
    cy : 300,
    halfHeight: 300,
    halfWidth:2,
    
    GO_UP   : KEY_I,
    GO_DOWN : KEY_K
});


// =============
// RESTART
// =============
function restart() {
    location.reload();
/*    score = 0;
    levelManager = new LevelManager();
    entityManager = new EntityManager();
    g_gameOver = false;*/
}


// =============
// GATHER INPUTS
// =============

function gatherInputs() {
    // Nothing to do here!
    // The event handlers do everything we need for now.
}

// =================
// UPDATE SIMULATION
// =================

// We take a very layered approach here...
//
// The primary `update` routine handles generic stuff such as
// pausing, single-step, and time-handling.
//
// It then delegates the game-specific logic to `updateSimulation`


// GAME-SPECIFIC UPDATE LOGIC

function updateSimulation(du) {
    if(startScreen.isVisible()) {
        startScreen.update(du);
        if(!g_isGameStarted) return;
    }

    if(g_gameOver) {
        gameOverScreen.update(du);
        sideBar.update(du);
        return;
    }

    entityManager.update(du);
    particleManager.update(du);
    levelManager.update(du);
    //g_player2.update(du);
    sideBar.update(du);
}


// =================
// RENDER SIMULATION
// =================

// We take a very layered approach here...
//
// The primary `render` routine handles generic stuff such as
// the diagnostic toggles (including screen-clearing).
//
// It then delegates the game-specific logic to `gameRender`


// GAME-SPECIFIC RENDERING

function renderSimulation(ctx) {
    if(g_isGameStarted) {
        entityManager.render(ctx);
        particleManager.render(ctx);
        sideBar.render(ctx);
    }

    if(g_gameOver) {
        gameOverScreen.render(ctx);
    }

    if(startScreen.isVisible()) {
        ctx.save();
        ctx.translate(0, startScreen.offsetY);
        startScreen.render(ctx);
        ctx.restore();
    }
}

// Kick it off
function initMain()
{
   g_main.init(); 
}

preloadStuff_thenCall(initMain);