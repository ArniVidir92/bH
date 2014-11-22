function pumbax(image) {

    this.image=image;
}

pumbax.prototype.drawCenteredAt = function (pumbbb, pumbah, pumbai, rotation) {
    
    // This is how to implement default parameters...
    if (rotation === undefined) rotation = 0;
    pumbbb.save();
    pumbbb.translate(pumbah, pumbai);
    pumbbb.rotate(rotation);
    pumbbb.translate(-pumbah, -pumbai);
    pumbbb.drawImage(this.image, pumbah-this.image.width/2, pumbai-this.image.height/2);
    pumbbb.restore();

};

pumbax.prototype.drawCenteredAtScaled = function (pumbbb, pumbah, pumbai, rotation, scale) {
    
    // This is how to implement default parameters...
    if (rotation === undefined) rotation = 0;
    pumbbb.save();
    pumbbb.translate(pumbah, pumbai);
    pumbbb.scale(scale, scale);
    pumbbb.rotate(rotation);
    pumbbb.translate(-pumbah, -pumbai);
    pumbbb.drawImage(this.image, pumbah-this.image.width/2, pumbai-this.image.height/2);
    pumbbb.restore();

};
var numberOfPreloadedImages = 30;
var g_audio1 = new Audio();
var g_audio1OldCurrentTime;

    function preloadStuff_thenCall(completionCallback) {
    var cnt = 0;
//1. preload the background 
    var g_bgImage = new Image();
    
    g_bgImage.onload = function () {
        g_bg = new pumbax(g_bgImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_bgImage.src = "bhbg.png";

//2. preload the bullet  
    var g_bulletImage = new Image();
    
    g_bulletImage.onload = function () { 
        g_bullet = new pumbax(g_bulletImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_bulletImage.src = "sprites/bullet2.png";
    
//3. preload the enemy1 
    var g_enemy1Image = new Image();
    
    g_enemy1Image.onload = function () { 
        g_enemy1 = new pumbax(g_enemy1Image) ;
        isReady(++cnt,completionCallback);
    };
    
    g_enemy1Image.src = "sprites/enemymark1.png";

//4. preload the ship
    var g_shipImage = new Image();
    
    g_shipImage.onload = function () { 
        g_ship = new pumbax(g_shipImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_shipImage.src = "sprites/bhship.png";
//5. preload the blackknight
    var g_blackKnightImage = new Image();
    
    g_blackKnightImage.onload = function () { 
        g_blackKnight = new pumbax(g_blackKnightImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_blackKnightImage.src = "sprites/blackknight.png";

//6. preload the sidebar
    var g_sideImage = new Image();
    
    g_sideImage.onload = function () { 
        g_side = new pumbax(g_sideImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_sideImage.src = "sprites/sidebar.png";

//7. preload the powerup
    var g_powerupImage = new Image();
    
    g_powerupImage.onload = function () { 
        g_powerup = new pumbax(g_powerupImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_powerupImage.src = "sprites/powerup2.png";

//8. preload the powerup2
    var g_powerup2Image = new Image();
    
    g_powerup2Image.onload = function () { 
        g_powerup2 = new pumbax(g_powerup2Image) ;
        isReady(++cnt,completionCallback);
    };
    
    g_powerup2Image.src = "sprites/powerup1.png";
//9. preload the bullet2
    var g_bullet2Image = new Image();
    
    g_bullet2Image.onload = function () { 
        g_bullet2 = new pumbax(g_bullet2Image) ;
        isReady(++cnt,completionCallback);
    };
    
    g_bullet2Image.src = "sprites/bigbulletrad12.png";

//10. preload the xpbar
    var g_xpbarImage = new Image();
    
    g_xpbarImage.onload = function () { 
        g_xpbar = new pumbax(g_xpbarImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_xpbarImage.src = "sprites/xpbar.png";

//11. preload the xpbarbackground
    var g_xpbarbgImage = new Image();
    
    g_xpbarbgImage.onload = function () { 
        g_xpbarbg = new pumbax(g_xpbarbgImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_xpbarbgImage.src = "sprites/xpbarbackground.png";

//12. preload the chistmas carol enemy
    var g_cCarolImage = new Image();
    
    g_cCarolImage.onload = function () { 
        g_cCarol = new pumbax(g_cCarolImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_cCarolImage.src = "sprites/christmasCarolShip.png";

//13. preload bullet3
    var g_bullet3Image = new Image();
    
    g_bullet3Image.onload = function () { 
        g_bullet3 = new pumbax(g_bullet3Image) ;
        isReady(++cnt,completionCallback);
    };
    
    g_bullet3Image.src = "sprites/bullet3.png";

//14. preload spider boss
    var g_spiderImage = new Image();
    
    g_spiderImage.onload = function () { 
        g_spider = new pumbax(g_spiderImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_spiderImage.src = "sprites/spiderBoss.png";

//15. preload startscreen background 
    var g_startScreenImage = new Image();

    g_startScreenImage.onload = function() {
        g_startScreen = new pumbax(g_startScreenImage);
        isReady(++cnt,completionCallback);
    };

    g_startScreenImage.src = "sprites/background.png";

//16. preload startscreen button up
    var g_startScreenButtonUpImage = new Image();

    g_startScreenButtonUpImage.onload = function() {
        g_startScreenButtonUp = new pumbax(g_startScreenButtonUpImage);
        isReady(++cnt,completionCallback);
    };

    g_startScreenButtonUpImage.src = "sprites/buttonup.png";

//17. preload startscreen button down
    var g_startScreenButtonDownImage = new Image();

    g_startScreenButtonDownImage.onload = function() {
        g_startScreenButtonDown = new pumbax(g_startScreenButtonDownImage);
        isReady(++cnt,completionCallback);
    };

    g_startScreenButtonDownImage.src = "sprites/buttondown.png";

//18. preload the red enemy
    var g_redEnemyImage = new Image();

    g_redEnemyImage.onload = function() {
        g_redEnemy = new pumbax(g_redEnemyImage);
        isReady(++cnt,completionCallback);
    };

    g_redEnemyImage.src = "sprites/redenemy.png";

//19. preload the flappy boss
    var g_flappyImage = new Image();

    g_flappyImage.onload = function() {
        g_flappy = new pumbax(g_flappyImage);
        isReady(++cnt,completionCallback);
    };

    g_flappyImage.src = "sprites/flappyBird.png";

//20. preload spinner enemy
    var g_spinnerImage = new Image();

    g_spinnerImage.onload = function() {
        g_spinner = new pumbax(g_spinnerImage);
        isReady(++cnt,completionCallback);
    };

    g_spinnerImage.src = "sprites/spinninghell.png";

//21. preload goomba
    var g_pbbImage = new Image();

    g_pbbImage.onload = function() {
        g_pbb = new pumbax(g_pbbImage);
        isReady(++cnt,completionCallback);
    };

    g_pbbImage.src = "sprites/goomba.png";

//22. preload goomba2
    var g_rbbImage = new Image();

    g_rbbImage.onload = function() {
        g_rbb = new pumbax(g_rbbImage);
        isReady(++cnt,completionCallback);
    };

    g_rbbImage.src = "sprites/goomba2.png";

//23. gameover screen
    var g_gameOverImage = new Image();

    g_gameOverImage.onload = function() {
        g_sGameOver = new pumbax(g_gameOverImage);
        isReady(++cnt,completionCallback);
    };

    g_gameOverImage.src = "sprites/gameoverv20.png";

//24. gpreload background for level 2
    var g_bg2Image = new Image();

    g_bg2Image.onload = function() {
        g_bg2 = new pumbax(g_bg2Image);
        isReady(++cnt,completionCallback);
    };

    g_bg2Image.src = "sprites/bg2.png";

//25. gpreload background for level 3
    var g_bg3Image = new Image();

    g_bg3Image.onload = function() {
        g_bg3 = new pumbax(g_bg3Image);
        isReady(++cnt,completionCallback);
    };

    g_bg3Image.src = "sprites/backgroundlevel3.png";

//26. gpreload background for level 3
    var g_bg4Image = new Image();

    g_bg4Image.onload = function() {
        g_bg4 = new pumbax(g_bg4Image);
        isReady(++cnt,completionCallback);
    };

    g_bg4Image.src = "sprites/backgroundlevel4.png";

//27. gpreload background for level 3
    var g_bg5Image = new Image();

    g_bg5Image.onload = function() {
        g_bg5 = new pumbax(g_bg5Image);
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
        g_bullet4 = new pumbax(g_bullet4Image);
        isReady(++cnt,completionCallback);
    };

    g_bullet4Image.src = "sprites/bullet4.png";
 
 //29. preload for bullet 5
    var g_bullet5Image = new Image();

    g_bullet5Image.onload = function() {
        g_bullet5 = new pumbax(g_bullet5Image);
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
var pumbcbManager = 
{ 
	apumbags:[],
	aStyles: { default: new Style({minVel:1, mapumbaq:4, minRad:4, maxRad:10, shapes:["circle"], colors:["white"], fadeStyle:1, minRate:2, maxRate:10})},
	pumbcbCount:0
}



function Style(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}



pumbcbManager.createStyle = function(name,mv,Mv,mr,Mr,aShapes,aColors,fs,mrate,Mrate)
{
	this.aStyles[name] = new Style({
		minVel: mv, 	
		mapumbaq: Mv, 
		minRad: mr, 
		maxRad: Mr, 
		shapes: aShapes, 
		colors: aColors, 
		fadeStyle: fs, 
		minRate: mrate, 
		maxRate: Mrate
	});
}

function pumbag(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}

pumbcbManager.createStyle("fire", 0, 3, 4, 15, ["circle"], ["red","orange","yellow","gray"], 1, 3, 6);
pumbcbManager.createStyle("dots", 0, 3, 8, 10, ["square"], ["red","green","yellow","blue"], 1, 5, 10);
pumbcbManager.createStyle("corruption", 0, 3, 1, 5, ["square"], ["red","black"], 1, 0.5, 1);


pumbag.prototype.exists = true;
pumbag.prototype.alpha  = 1;
pumbag.prototype.pumbba = 1;

pumbcbManager.addpumbag = function(x, y, pumbas, pumbat, shp, r, col, fadeStyle, fadeRate)
{
	this.apumbags[this.pumbcbCount++] = new pumbag({
	    pumbah: x,
		pumbai: y,
	    pumbaq: pumbas,
	    pumbar: pumbat,
	    radius: r,
	    shape: shp,
	    color: col,
	    fade: fadeStyle,
	    rate: fadeRate
	});
}

pumbcbManager.addSpumbag = function(x,y,style,pumbao,colorOverwrite)
{
	if(pumbao===undefined) pumbao=1;
	if (style===null||style===undefined)
	{var sty = this.aStyles["default"];}
	else
	{var sty = this.aStyles[style];}
	if(colorOverwrite===undefined) {col=sty.colors} else {col = colorOverwrite;}
	
	
	for(var i=0;i<pumbao;i++)
	{
		var vel = sty.minVel+Math.random()*(sty.mapumbaq-sty.minVel);
		var theta = Math.random()*2*Math.PI;
		var shape = sty.shapes[Math.floor(Math.random()*sty.shapes.length)];
		var color = col[Math.floor(Math.random()*col.length)];
		var radius = sty.minRad+Math.random()*(sty.maxRad-sty.minRad);
		var fadeRate = sty.minRate+Math.random()*(sty.maxRate-sty.minRate);
		
		this.addpumbag(x,y,vel*Math.cos(theta),-vel*Math.sin(theta),shape,radius,color,sty.fadeStyle,fadeRate);
	}
}

pumbag.prototype.pumbac = function (du) {

    this.pumbah += this.pumbaq*du;
    this.pumbai += this.pumbar*du;

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
    	this.pumbba -= (this.rate/100)*du;
    	if(this.pumbba<0){this.exists=false;}
    }
};

pumbag.prototype.pumbap = function (pumbbb) 
{
	if(this.exists){
	pumbbb.fillStyle = this.color;
	pumbbb.globalAlpha = this.alpha;
    if(this.shape==="circle"){fillCircle(pumbbb, this.pumbah, this.pumbai, this.radius);}
    if(this.shape==="square"){pumbbb.fillRect(this.pumbah-this.radius, this.pumbai-this.radius, this.radius*2, this.radius*2);}
    pumbbb.globalAlpha=1;
    
}};

pumbcbManager.pumbac = function(du)
{
	for(var i=this.pumbcbCount-1; i>=0; i--)
	{
		if(!this.apumbags[i].exists){this.remove(i);}
		else {this.apumbags[i].pumbac(du);}
	}
}

pumbcbManager.pumbap = function(pumbbb)
{
	for(var i=this.pumbcbCount-1; i>=0; i--)
	{
		this.apumbags[i].pumbap(pumbbb);
	}
}

pumbcbManager.remove = function(k)
{
	for(var i=0;i<this.pumbcbCount;i++)
	{
		if(i>k){this.apumbags[i-1]=this.apumbags[i];}
	}
	this.pumbcbCount-=1;
}

pumbcbManager.clear = function()
{
	pumbcbCount=0;
}

nopumbagsExist = function()
{
	return (pumbcbCount===0);
}

function fillCircle(pumbbb, x, y, r) {
    pumbbb.beginPath();
    pumbbb.arc(x, y, r, 0, Math.PI * 2);
    pumbbb.fill();
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

	pumbac : function(du) {
		if(g_isGameStarted) {
			if(this.offsetY <= g_canvas.height) {
				this.offsetY += 100 / pumbe * du;
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

	pumbap : function(pumbbb) {
		g_startScreen.drawCenteredAt(pumbbb, g_canvas.width/2, g_canvas.height/2, 0);

		if(this.isOnStartButton()) {
			g_startScreenButtonDown.drawCenteredAt(pumbbb, this.buttonX, this.buttonY, 0);
		}
		else {
			g_startScreenButtonUp.drawCenteredAt(pumbbb, this.buttonX, this.buttonY, 0);	
		}

	}
}
 var gameOverScreen = {

 	pumbah : 520/2,
 	pumbai : 300,

 	width : 400,
 	height : 120,

	isOnGameOver : function() {
		return (g_mouseX < this.pumbah + this.width/2 && 
				g_mouseX > this.pumbah - this.width/2 &&
				g_mouseY > this.pumbai - this.height/2 &&
				g_mouseY < this.pumbai + this.height/2);
	},

 	pumbac : function(du) {
 		this.shadowBlur -= 1;
 	},

 	pumbap : function(pumbbb) {
 		pumbbb.save();
 		if(this.isOnGameOver()) {
	 		pumbbb.shadowColor = "white";
	  	 	pumbbb.shadowOffsetX = 16;
	  		pumbbb.shadowOffsetY = 16;
	   		pumbbb.shadowBlur = 10;
 		}
 		g_sGameOver.drawCenteredAt(pumbbb, this.pumbah, this.pumbai, 0);
 		pumbbb.restore();
 	}
 }
var CLOW = 'W'.charCodeAt(0);
var CLOS = 'S'.charCodeAt(0);
var CLOA = 'A'.charCodeAt(0);
var CLOD = 'D'.charCodeAt(0);
var SPACEBAR = 32;
var pumbda = 5;
var pumbdb = 2;
var pumbdc = 520;
var c_pi = Math.PI;
var c_fullCircle = 2 * c_pi;

var g_GameCanvas = 400;
var pumbe = 16.666;

var SECS_TO_NOMINALS = 1000 / pumbe;
// =====
// UTILS
// =====

function clearCanvas(pumbbb) 
{ 
    pumbbb.clearRect(0, 0, pumbbb.canvas.width, pumbbb.canvas.height);
    if(pumbajManager.pumbaj===1)
        g_bg.drawCenteredAt(pumbbb,pumbbb.canvas.width/2,pumbbb.canvas.height/2,0);
    if(pumbajManager.pumbaj===2)
        g_bg2.drawCenteredAt(pumbbb,pumbbb.canvas.width/2,pumbbb.canvas.height/2,0);
    if(pumbajManager.pumbaj===3)
        g_bg3.drawCenteredAt(pumbbb,pumbbb.canvas.width/2,pumbbb.canvas.height/2,0);
    if(pumbajManager.pumbaj===4)
        g_bg4.drawCenteredAt(pumbbb,pumbbb.canvas.width/2,pumbbb.canvas.height/2,0);
    if(pumbajManager.pumbaj===5)
        g_bg5.drawCenteredAt(pumbbb,pumbbb.canvas.width/2,pumbbb.canvas.height/2,0);
}

function fillCircle(pumbbb, x, y, r,fillStyle) 
{
    pumbbb.beginPath();
    var oldStyle = pumbbb.fillstyle;
    if(fillStyle)
        pumbbb.fillStyle = fillStyle;
    pumbbb.arc(x, y, r, 0, Math.PI * 2);
    pumbbb.fill();
    pumbbb.fillStyle = oldStyle;

}

function fillBox(pumbbb, x, y, w, h, style) 
{
    var oldStyle = pumbbb.fillStyle;
    pumbbb.fillStyle = style;
    pumbbb.fillRect(x, y, w, h);
    pumbbb.fillStyle = oldStyle;
}

function getLowestAvailable(array)
{
	for(var i in array)
		if(i.pumbay)
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

    var topY = object.pumbai + margin;
    var bottomY = object.pumbai - margin;
    var leftX = object.pumbah + margin;
    var rightX = object.pumbah - margin;

    if(topY < 0 ||
        bottomY > g_canvas.height ||
        leftX < 0 || 
        rightX > pumbdc) {
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

var pumbbd = [];

function handleKeydown(evt) {
    pumbbd[evt.keyCode] = true;
}

function handleKeyup(evt) {
    pumbbd[evt.keyCode] = false;
}

// Inspects, and then clears, a key's state
//
// This allows a keypress to be "one-shot" e.g. for toggles
// ..until the auto-repeat kicks in, that is.
//
function eatKey(keyCode) {
    var isDown = pumbbd[keyCode];
    pumbbd[keyCode] = false;
    return isDown;
}

window.addEventListener("keydown", handleKeydown);
window.addEventListener("keyup", handleKeyup);
// ==============
// MOUSE HANDLING
// ==============

"use strict";



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

var pumbbc = {
    startX: 520,
    startY: 0,
    witdh: 280,
    enemypumbau: 50,
    xpHeight: 180,

    offsetX : 0,
    offsetY : 0,
};

pumbbc.pumbac = function (du) {
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

pumbbc.reset = function () {
    pumbab = 0;
};

pumbbc.shake = function(pumbba) {
    var dirX = getRandomInt(0, 1) === 1 ? 1 : -1;
    var dirY = getRandomInt(0, 1) === 1 ? 1 : -1;
    if (pumbba <= 0) {
        this.offsetX = getRandomInt(70, 80) * dirX;
        this.offsetY = getRandomInt(70, 80) * dirY;
    }
    else {
        this.offsetX = getRandomInt(25, 30) * dirX;
        this.offsetY = getRandomInt(25, 30) * dirY;
    }
}

pumbbc.pumbap = function (pumbbb) {
    g_side.drawCenteredAt(pumbbb,this.startX + this.witdh/2,pumbbb.canvas.height/2,0);

    pumbbb.save();
    pumbbb.translate(this.offsetX, this.offsetY);
    this.pumbappumbau(pumbbb);
    this.pumbappumbakText(pumbbb);
    this.pumbapXp(pumbbb);
    this.pumbappumbadHealth(pumbbb);
    pumbbb.restore();
};

pumbbc.pumbapXp = function(pumbbb){
    var coef = entityManager.pumbal.xp / entityManager.pumbal.xppumban;
    var w = 48, startX = 720, startY = 400;

    //fillBox(pumbbb,startX ,startY , w, this.xpHeight, "blue")
    g_xpbarbg.drawCenteredAt(pumbbb,startX,startY,0);
    fillBox(pumbbb, startX-24 , startY-90 + this.xpHeight, w, -coef * this.xpHeight, "red")
    g_xpbar.drawCenteredAt(pumbbb,startX,startY,0);
}

pumbbc.pumbappumbau = function(pumbbb){
    pumbbb.save()
    pumbbb.shadowColor = "white";
    pumbbb.shadowOffsetX = 4;
    pumbbb.shadowOffsetY = 4;
    pumbbb.shadowBlur = 15;
    pumbbb.fillStyle = "black";
    pumbbb.font="bold 28px Arial";  
    pumbbb.fillText("S"+"c"+"o"+"r"+"e "+ pumbab, 570, 50);
    pumbbb.restore();
}

pumbbc.pumbappumbakText = function(pumbbb) {
    pumbbb.save()
    pumbbb.shadowColor = "white";
    pumbbb.shadowOffsetX = 4;
    pumbbb.shadowOffsetY = 4;
    pumbbb.shadowBlur = 15;
    var oldStyle = pumbbb.fillStyle;
    pumbbb.fillStyle = "black";
    pumbbb.font = "bold 28px Arial";
    pumbbb.fillText("L"+"e"+"v"+"e"+"l " + pumbajManager.getpumbak(), 570, 90);
    pumbbb.fillStyle = oldStyle;
    pumbbb.restore();
}

pumbbc.pumbappumbadHealth = function(pumbbb)
{
    var pumbba = entityManager.pumbal.pumbba;
    var xCord = 553;
    var yCord = pumbbb.canvas.height - 50;

    for(var i = 0; i < pumbba; i++)
    {   pumbbb.save();
        pumbbb.translate(xCord, yCord);
        pumbbb.scale(0.75, 0.75);
        pumbbb.translate(-xCord, -yCord);
        g_ship.drawCenteredAt(pumbbb,xCord,yCord,0);
        xCord += 23;
        pumbbb.restore();
    }
}
// A generic constructor which accepts an arbitrary descriptor object
function pumbad(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}

// Add these properties to the prototype, where they will server as
// shared defaults, in the absence of an instance-specific overrides.

pumbad.prototype.pumbbi = 20;
pumbad.prototype.pumbbj = 20;

// Variables for keys on the keyboard
pumbad.prototype.GO_UP = 8;
pumbad.prototype.GO_DOWN = 8;
pumbad.prototype.GO_LEFT = 8;
pumbad.prototype.GO_RIGHT = 8;
pumbad.prototype.SHOOT = 32;
pumbad.prototype.GO_SLOW = 16;
pumbad.prototype.radius = 4;
pumbad.prototype.goingSlow = false;
pumbad.prototype.bulletSpeed = -5;

pumbad.prototype.pumbba = 10;
pumbad.prototype.immunepumbbg = 2000 / pumbe;
pumbad.prototype.pumbae = 400 / pumbe;
pumbad.prototype.secondarypumbbg = 2000 / pumbe;
pumbad.prototype.pumbaj = 1;
pumbad.prototype.xp = 0;
pumbad.prototype.xppumban = 100;

pumbad.prototype.getSpeed = function(){
    if(pumbbd[this.GO_SLOW])
    {
        this.goingSlow=true;
        return pumbdb;
    }
    this.goingSlow=false;
    return pumbda;
}

pumbad.prototype.pumbacDirection = function(du, pumbbe){

    if (pumbbd[this.GO_UP]&&this.pumbai>this.pumbbj) {
        this.pumbai -= pumbbe * du;
    } if (pumbbd[this.GO_DOWN]&&this.pumbai<g_canvas.height-this.pumbbj) {
        this.pumbai += pumbbe * du;
    } if (pumbbd[this.GO_LEFT]&&this.pumbah>0+this.pumbbi) {
        this.pumbah -= pumbbe * du;
    } if (pumbbd[this.GO_RIGHT]&&this.pumbah<pumbdc-this.pumbbi) {
        this.pumbah += pumbbe * du;
    }
}

pumbad.prototype.shoot = function(){
    if(this.pumbae < 0)
    {
        if(pumbbd[this.SHOOT]){
            switch(this.pumbaj) {
                case 1 :
                    this.pumbae = pumbad.prototype.pumbae;
                    this.addpumbaf(this.pumbah, this.pumbai, 0, this.bulletSpeed);
                    break;

                case 2: 
                    this.pumbae = pumbad.prototype.pumbae / 2;
                    this.addpumbaf(this.pumbah, this.pumbai, 0, this.bulletSpeed);
                    break;

                case 3:
                    this.pumbae = pumbad.prototype.pumbae / 1.5;

                    var pumbaq = -4;

                    for(var i = 0; i < 3; i++) {
                        this.addpumbaf(this.pumbah, this.pumbai, pumbaq, this.bulletSpeed);
                        pumbaq += 4;
                    }
                    break;

                case 4:
                    this.pumbae = pumbad.prototype.pumbae / 1.5;

                    var pumbaq = -4;

                    for(var i = 0; i < 3; i++) {
                        this.addpumbaf(this.pumbah, this.pumbai, pumbaq, this.bulletSpeed*1.2);
                        pumbaq += 4;
                    }
                    break;

                case 5:
                    this.pumbae = pumbad.prototype.pumbae / 1.5;

                    var pumbaq = -6;

                    for (var i = 0; i < 5; i++) {
                        this.addpumbaf(this.pumbah, this.pumbai, pumbaq, this.bulletSpeed*1.2);
                        pumbaq += 3;
                    }
                    break;

                case 6:
                    this.pumbae = pumbad.prototype.pumbae / 2;

                    var pumbaq = -6;

                    for (var i = 0; i < 5; i++) {
                        this.addpumbaf(this.pumbah, this.pumbai, pumbaq, this.bulletSpeed*1.2);
                        pumbaq += 3;
                    }
                    break;
                case 7:
                    this.pumbae = pumbad.prototype.pumbae / 2.5;

                    var pumbaq = -6;

                    for (var i = 0; i < 5; i++) {
                        this.addpumbaf(this.pumbah, this.pumbai, pumbaq, this.bulletSpeed*1.2);
                        pumbaq += 3;
                    }
                    break;
                case 8:
                    this.pumbae = pumbad.prototype.pumbae / 2.5;

                    var pumbaq = -6;
                    this.addpumbaf(this.pumbah, this.pumbai, 1, this.bulletSpeed);
                    this.addpumbaf(this.pumbah, this.pumbai, -1, this.bulletSpeed);
                    for (var i = 0; i < 5; i++) {
                        this.addpumbaf(this.pumbah, this.pumbai, pumbaq, this.bulletSpeed*1.2);
                        pumbaq += 3;
                    }
                    break;
                case 9:
                    this.pumbae = pumbad.prototype.pumbae / 2.5;

                    var pumbaq = -5;
                    this.addpumbaf(this.pumbah, this.pumbai, 1, this.bulletSpeed*1.4);
                    this.addpumbaf(this.pumbah, this.pumbai, -1, this.bulletSpeed*1.4);
                    for (var i = 0; i < 5; i++) {
                        this.addpumbaf(this.pumbah, this.pumbai, pumbaq, this.bulletSpeed*1.2);
                        pumbaq += 2.5;
                    }
                    break;
                case 10:
                    this.pumbae = pumbad.prototype.pumbae / 2.5;

                    var pumbaq = -4;
                    this.addpumbaf(this.pumbah, this.pumbai, 1, this.bulletSpeed*1.4);
                    this.addpumbaf(this.pumbah, this.pumbai, -1, this.bulletSpeed*1.4);
                    for (var i = 0; i < 5; i++) {
                        this.addpumbaf(this.pumbah, this.pumbai, pumbaq, this.bulletSpeed*1.6);
                        pumbaq += 2;
                    }
                    break;
                default:
                    this.pumbae = pumbad.prototype.pumbae / (this.pumbaj/4);
                    var pumbbf = Math.floor(this.pumbaj/5);
                    var pumbaq = -pumbbf*2;
                    this.addpumbaf(this.pumbah, this.pumbai, 1, this.bulletSpeed*1.4);
                    this.addpumbaf(this.pumbah, this.pumbai, -1, this.bulletSpeed*1.4);
                    this.addpumbaf(this.pumbah, this.pumbai, 0, this.bulletSpeed*1.2);
                    this.addpumbaf(this.pumbah, this.pumbai, 0, this.bulletSpeed);
                    for (var i = 0; i < 1+pumbbf*2; i++) {
                        this.addpumbaf(this.pumbah, this.pumbai, pumbaq, this.bulletSpeed*(this.pumbaj/7));
                        pumbaq += 2;
                    }
                    break;   
            }
            if(this.secondarypumbbg<0&&this.pumbaj>11)
            {
                this.secondarypumbbg = pumbad.prototype.secondarypumbbg;
                this.addpumbaf(this.pumbah, this.pumbai, 2, 0);
                this.addpumbaf(this.pumbah, this.pumbai, -2, 0);
            }
        }
    }
}

pumbad.prototype.addpumbaf = function(pumbah, pumbai, pumbas, pumbat) {
    entityManager.addpumbaf(new pumbaf({
        pumbah : pumbah,
        pumbai : pumbai,
        
        pumbas : pumbas,
        pumbat : pumbat,
        pumbbm : true,           
    }));
}

pumbad.prototype.pumbac = function (du) {
    //FixMe  Just temporary for laughs
    if(this.pumbba < 1)
    {
        pumbcbManager.addSpumbag(this.pumbah,this.pumbai,"corruption",30);
        return;
    }


    var pumbbe = this.getSpeed();
    this.pumbacDirection(du, pumbbe);
    if(this.pumbae > 0) this.pumbae -= du;
    if(this.secondarypumbbg > 0) this.secondarypumbbg -= du;
    if(this.immunepumbbg > 0) this.immunepumbbg -= du;
    this.shoot();



};



pumbad.prototype.pumbblWith = function (object) {
    if( distance(this.pumbah, this.pumbai, object.pumbah, object.pumbai) < (object.radius + this.radius) * (object.radius + this.radius) ){
        if( Object.getPrototypeOf(object) === pumbfb.prototype ){
            this.xp += 10/this.pumbaj;
            this.pumbacpumbak();
            console.log("powerup");
        }
        else if(this.immunepumbbg <= 0)
        {
            this.immunepumbbg = pumbad.prototype.immunepumbbg;
            console.log("Daudur!!!");
            this.pumbba -= 1;
            pumbbc.shake(this.pumbba); //FIXME kannski

            if(this.pumbba <= 0) {
                g_gameOver = true;
            }
        }
        return true;
    }
    return false;
};

pumbad.prototype.pumbacpumbak = function(){
    if(this.xp > this.xppumban){
        this.pumbaj += 1;
        this.xp = 0;
    }
}

pumbad.prototype.pumbap = function (pumbbb) {
    // (pumbah, pumbai) is the centre; must offset it for drawing
    pumbbb.fillStyle="white";
    g_ship.drawCenteredAt(pumbbb,this.pumbah,this.pumbai,0);
    
    if(this.immunepumbbg > 0)
    {
        pumbbb.beginPath();
        pumbbb.arc(this.pumbah,this.pumbai,7*this.radius,0,2*Math.PI);
        pumbbb.strokeStyle = "green";
        pumbbb.lineWidth="5";
        pumbbb.stroke();
    }

    if(this.goingSlow)
    fillCircle(pumbbb, this.pumbah, this.pumbai, this.radius,"red");
    pumbbb.fillStyle="white";

    for(var i = 0; i < 3; i++) {
        var color = getRandomInt(0, 1) === 0 ? "red" : "orange";
        pumbcbManager.addpumbag(this.pumbah-i, this.pumbai + this.pumbbj, 0, 1, "circle", 2, color, 1, 1);
        pumbcbManager.addpumbag(this.pumbah+i, this.pumbai + this.pumbbj, 0, 1, "circle", 2, color, 1, 1);
    }
};
//=====================================================
// Class: pumbaa
// Date : 10.November 2014
// Programmed by: FutureDevs
//=====================================================



function pumbaa(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }

    this.getPresets();
    this.rememberResets();
}

pumbaa.prototype.pumbbi = 50;
pumbaa.prototype.pumbbj = 50;
pumbaa.prototype.pumbay = false;
pumbaa.prototype.hitPoints = 4;
pumbaa.prototype.pumbah = 20;
pumbaa.prototype.pumbai = 0;
pumbaa.prototype.pumbas = 2;
pumbaa.prototype.pumbat = 0;
pumbaa.prototype.pumbab = 5000;
pumbaa.prototype.rotation = 0;
pumbaa.prototype.ximit1 = 100;
pumbaa.prototype.ximit2 = 400;
pumbaa.prototype.hitPointspumban = 10000;

pumbaa.prototype.pumbbh1 = 0;
pumbaa.prototype.pumbbh2 = 0;
pumbaa.prototype.pumbbh3 = 0;
pumbaa.prototype.pumbbh4 = 0;
pumbaa.prototype.pumbbh5 = 0;

pumbaa.prototype.radius = 20;



pumbaa.prototype.types = {
    "Spider" : {
        "hitPoints" : 5000,
    },

    "Flappy" : {
        "hitPoints" : 15000,
    }
}

//Possible types are: Spider, Flappy ...

pumbaa.prototype.type = "Spider";

pumbaa.prototype.getPresets = function()
{
    if(this.type=="Spider")
    {
        this.hitPoints=pumbaa.prototype.types.Spider.hitPoints;
    }
    if(this.type=="Flappy")
    {
        this.hitPoints=pumbaa.prototype.types.Flappy.hitPoints;
    }
    this.hitPointspumban = this.hitPoints;
}

pumbaa.prototype.rememberResets = function () {
    this.reset_pumbah = this.pumbah;
    this.reset_pumbai = this.pumbai;
};

pumbaa.prototype.rememberResets = function () {

};

pumbaa.prototype.pumbac = function (du) {

    if( this.pumbay ){return;}


    if(!isOnScreen(this)) {
        this.pumbay = true;
        return;
    }

  


    this.pumbbh1 += 0.016 * du;
    this.pumbbh2 += 0.016 * du;
    this.pumbbh3 += 0.016 * du;
    this.pumbbh4 += 0.016 * du;
    this.pumbbh5 += 0.016 * du;

    if(this.type === "Spider") this.pumbacSpider(du);
    if(this.type === "Flappy") this.pumbacFlappy(du);
};

pumbaa.prototype.getDead = function()
{
    if(this.hitPoints>0) return;
        pumbab += this.pumbab;
        this.pumbay = true;
        entityManager.addpumbfb(new pumbfb({
            pumbah : this.pumbah,
            pumbai : this.pumbai,

            pumbas : 0,
            pumbat : this.pumbat * 4,
        }));
        pumbcbManager.addSpumbag(this.pumbah,this.pumbai,"fire",30);
        pumbajManager.finishpumbak();
}

pumbaa.prototype.pumbblWith = function (object) {
    if( distance(this.pumbah, this.pumbai, object.pumbah, object.pumbai) < (object.radius + this.radius) * (object.radius + this.radius) ){
        this.hitPoints -= object.damage * 20;
        this.getDead();
        return true;
    }
    return false;
}

//======================================
//
//      Update Spider pumbfh begins
//
//======================================

pumbaa.prototype.pumbacSpider = function (du)
{
    if(this.pumbbh1 > 1.5)
    {
        var BT = "blue";
        if(this.hitPoints>1250)
            BT = "red";


        this.pumbbh1 = 0;
        for(var i=0; i<17; i++)
        {
            entityManager.addpumbaf(new pumbaf({
                pumbah : this.pumbah,
                pumbai : this.pumbai,
                
                pumbas   : -4+0.5*i,
                pumbat   : 3+(i%2==0)*2,
                pumbbm : false,
                pumbbn : BT
            }));
        }
    }

    var length = Math.sqrt(Math.pow(this.pumbah-entityManager.pumbal.pumbah,2)+Math.pow(this.pumbai-entityManager.pumbal.pumbai,2));
    var bpumbas = (-this.pumbah+entityManager.pumbal.pumbah)/length;
    var bpumbat = (-this.pumbai+entityManager.pumbal.pumbai)/length;
    if(this.pumbbh2 > 0.3)
    {
        this.pumbbh2 = 0;
        
        entityManager.addpumbaf(new pumbaf({
            pumbah : this.pumbah,
            pumbai : this.pumbai,
            
            pumbas   : bpumbas*5,
            pumbat   : bpumbat*5,
            pumbbm : false,
            pumbbn : "red"
        }));
    }



    if( this.hitPoints < 2500 && this.pumbbh3 > 1.2)
    {
        var turnrad = 0.1 *440/(-this.pumbai+entityManager.pumbal.pumbai);

        this.pumbbh3 = 0;
        
        entityManager.addpumbaf(new pumbaf({
            pumbah : this.pumbah,
            pumbai : this.pumbai,
            xAcc : -turnrad,
            pumbas   : 4,
            pumbat   : 6,
            pumbbm : false,
            pumbbn : "blue"
        }));

        this.pumbbh3 = 0;
        
        entityManager.addpumbaf(new pumbaf({
            pumbah : this.pumbah,
            pumbai : this.pumbai,
            xAcc : turnrad,
            pumbas   : -4,
            pumbat   : 6,
            pumbbm : false,
            pumbbn : "blue"
        }));
    }
    
    this.pumbah += this.pumbas * du;
    if(this.pumbah>this.ximit2)
        this.pumbas = -2;
    if(this.pumbah<this.ximit1)
        this.pumbas = 2;

}


//======================================
//
//      Update Spider pumbfh ends
//
//======================================





//======================================
//
//      Update Flappy pumbfh begins
//
//======================================

pumbaa.prototype.pumbacFlappy = function (du)
{
    if(this.hitPoints > 7500 && this.pumbbh1 > 3.5)
    {
        this.pumbbh1 = 0;
        for(var i=0; i<17; i++)
        {
            if(i!==8)
            entityManager.addpumbaf(new pumbaf({
                pumbah : this.pumbah,
                pumbai : this.pumbai,
                
                pumbas   : -4+0.5*i,
                pumbat   : 3+(i%2==0)*2,
                xAcc : -((i>8)-0.5)/10,
                pumbbm : false,
                pumbbn : "bigpurple"
            }));
        }
    }

    var length = Math.sqrt(Math.pow(this.pumbah-entityManager.pumbal.pumbah,2)+Math.pow(this.pumbai-entityManager.pumbal.pumbai,2));
    var bpumbas = (-this.pumbah+entityManager.pumbal.pumbah)/length;
    var bpumbat = (-this.pumbai+entityManager.pumbal.pumbai)/length;
    if(this.hitPoints > 7500 && this.pumbbh2 > 1.2)
    {
        this.pumbbh2 = 0;
        
        entityManager.addpumbaf(new pumbaf({
            pumbah : this.pumbah,
            pumbai : this.pumbai,
            
            pumbas   : bpumbas*1,
            pumbat   : bpumbat*1,
            pumbbm : false,
            pumbbn : "bigpurple"
        }));
    }

    if(this.hitPoints < 1500 && this.pumbbh4 > 0.3)
    {
        this.pumbbh4 = 0;
        
        entityManager.addpumbaf(new pumbaf({
            pumbah : this.pumbah,
            pumbai : this.pumbai,
            
            pumbas   : bpumbas*6,
            pumbat   : bpumbat*6,
            pumbbm : false,
            pumbbn : "bigpurple"
        }));
    }

    if(this.hitPoints < 7500 && this.pumbbh2 > 0.4)
    {
        this.pumbbh2 = 0;
        
        entityManager.addpumbaf(new pumbaf({
            pumbah : this.pumbah,
            pumbai : this.pumbai,
            
            pumbas   : bpumbas*4,
            pumbat   : bpumbat*4,
            pumbbm : false,
            pumbbn : "bigred"
        }));
    }


    if( this.hitPoints < 7500 && this.pumbbh3 > 1.2)
    {
        var turnrad = 0.1 *440/(-this.pumbai+entityManager.pumbal.pumbai);

        this.pumbbh3 = 0;
        
        entityManager.addpumbaf(new pumbaf({
            pumbah : this.pumbah,
            pumbai : this.pumbai,
            xAcc : -turnrad,
            pumbas   : 4,
            pumbat   : 40*turnrad,
            pumbbm : false,
            pumbbn : "bigred"
        }));

        this.pumbbh3 = 0;
        
        entityManager.addpumbaf(new pumbaf({
            pumbah : this.pumbah,
            pumbai : this.pumbai,
            xAcc : turnrad,
            pumbas   : -4,
            pumbat   : 40*turnrad,
            pumbbm : false,
            pumbbn : "bigred"
        }));
    }


    if(this.hitPoints < 7500 && this.pumbbh1 > 3.5)
    {
        this.pumbbh1 = 0;
        for(var i=0; i<17; i++)
        {
            if(i!==8)
            entityManager.addpumbaf(new pumbaf({
                pumbah : this.pumbah,
                pumbai : this.pumbai,
                
                pumbas   : -4+0.5*i,
                pumbat   : 3+(i%2==0)*2,
                followSpeed : 0.1,
                pumbbm : false,
                pumbbn : "bigred"
            }));
        }
    }


    
    this.pumbah += this.pumbas * du;
    if(this.pumbah>this.ximit2)
        this.pumbas = -1;
    if(this.pumbah<this.ximit1)
        this.pumbas = 1;

}


//======================================
//
//      Update Flappy pumbfh ends
//
//======================================











pumbaa.prototype.pumbap = function (pumbbb) {
    if( this.pumbay ){return;}
    // (pumbah, pumbai) is the centre; must offset it for drawing
    pumbbb.save();

    if(this.type=="Spider") {
        g_spider.drawCenteredAt(pumbbb,this.pumbah,this.pumbai,0);
        var pumbfhLifeWidth = (pumbbc.startX-20) * this.hitPoints / pumbaa.prototype.types.Spider.hitPoints;
        fillBox(pumbbb, 10, 10, pumbfhLifeWidth, 10, "red");        
    }

    if(this.type=="Flappy") {
        g_flappy.drawCenteredAt(pumbbb,this.pumbah,this.pumbai,0);
        var pumbfhLifeWidth = (pumbbc.startX-20) * this.hitPoints / pumbaa.prototype.types.Flappy.hitPoints;
        fillBox(pumbbb, 10, 10, pumbfhLifeWidth, 10, "red");        
    }

    pumbbb.restore();
};
//=====================================================
// Class: pumbfa
// Date : 28.October 2014
// Programmed by: FutureDevs
//=====================================================



function pumbfa(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }

    this.getPresets();
    this.rememberResets();
}


pumbfa.prototype.pumbbi = 50;
pumbfa.prototype.pumbbj = 40;
pumbfa.prototype.pumbay = false;
pumbfa.prototype.hitPoints = 4;
pumbfa.prototype.pumbah = 20;
pumbfa.prototype.pumbai = 0;
pumbfa.prototype.pumbas = 3;
pumbfa.prototype.pumbat = 1;
pumbfa.prototype.pumbab = 50;
pumbfa.prototype.rotation = 0;
pumbfa.prototype.scale = 1;
pumbfa.prototype.dScale = 0.4;

pumbfa.prototype.pumbbh = 0;

pumbfa.prototype.radius = 20;

pumbfa.prototype.originalCX = 0;




//Possible types are: BlackKnight, GrayKnight ...

pumbfa.prototype.type = "BlackKnight";

pumbfa.prototype.getPresets = function()
{
    if(this.type=="ChristmasCarol")
    {
        this.hitPoints=20;
        this.pumbab=249;
    }
    if(this.type=="GrayKnight")
        this.pumbab=125
    if(this.type === "SpinningHell"){
        this.pumbab=100;
        this.originalCX = 400;
        this.pumbat = 2;
        this.pumbai = -5;
    }
    if(this.type === "BomberMan"){
        this.pumbab = 200;
        this.pumbai = -5;
        this.hitPoints = 25;
    }

}

pumbfa.prototype.rememberResets = function () {
    this.reset_pumbah = this.pumbah;
    this.reset_pumbai = this.pumbai;
};

pumbfa.prototype.rememberResets = function () {

};

pumbfa.prototype.pumbac = function (du) {

    if( this.pumbay ){return;}


    if(!isOnScreen(this)) {
        this.pumbay = true;
        return;
    }

    this.pumbbh += 0.016 * du;

    if(this.type === "BlackKnight") this.pumbacBlackKnight(du);
    if(this.type === "GrayKnight") this.pumbacGrayKnight(du);
    if(this.type === "ChristmasCarol") this.pumbacChristmasCarol(du);
    if(this.type === "SpinningHell") this.pumbacSpinningHell(du);
    if(this.type === "BomberMan") this.pumbacBomberMan(du);
};

pumbfa.prototype.getDead = function()
{
    if(this.hitPoints>0) return;
        pumbab += this.pumbab;
        this.pumbay = true;
        if(this.type === "BomberMan") this.generateBomberManpumbafs();
        entityManager.addpumbfb(new pumbfb({
            pumbah : this.pumbah,
            pumbai : this.pumbai,

            pumbas : 0,
            pumbat : this.pumbat * 4,
        }));
        pumbcbManager.addSpumbag(this.pumbah,this.pumbai,"fire",30);
}

pumbfa.prototype.pumbblWith = function (object) {
    if( distance(this.pumbah, this.pumbai, object.pumbah, object.pumbai) < (object.radius + this.radius) * (object.radius + this.radius) ){
        this.hitPoints -= object.damage;
        this.getDead();
        return true;
    }
    return false;
}

pumbfa.prototype.pumbacBlackKnight = function (du)
{
    if(this.pumbbh > 1.5)
    {
        this.pumbbh = 0;
        
        entityManager.addpumbaf(new pumbaf({
            pumbah : this.pumbah,
            pumbai : this.pumbai,
            
            pumbas   : 0,
            pumbat   : 3,
            pumbbm : false,
            pumbbn : "red"
        }));
    }

    this.pumbai += this.pumbat * du;

}

pumbfa.prototype.pumbacGrayKnight = function (du)
{
    var length = Math.sqrt(Math.pow(this.pumbah-entityManager.pumbal.pumbah,2)+Math.pow(this.pumbai-entityManager.pumbal.pumbai,2));
    var bpumbas = (-this.pumbah+entityManager.pumbal.pumbah)/length;
    var bpumbat = (-this.pumbai+entityManager.pumbal.pumbai)/length;
    if(this.pumbbh > 2.5)
    {
        this.pumbbh = 0;
        
        entityManager.addpumbaf(new pumbaf({
            pumbah : this.pumbah,
            pumbai : this.pumbai,
            
            pumbas   : bpumbas*2,
            pumbat   : bpumbat*2,
            pumbbm : false,
            pumbbn : "red"
        }));
    }

    this.pumbai += this.pumbat * du;

}

pumbfa.prototype.pumbacChristmasCarol = function (du)
{
    var length = Math.sqrt(Math.pow(this.pumbah-entityManager.pumbal.pumbah,2)+Math.pow(this.pumbai-entityManager.pumbal.pumbai,2));
    var bpumbas = (-this.pumbah+entityManager.pumbal.pumbah)/length;
    var bpumbat = (-this.pumbai+entityManager.pumbal.pumbai)/length;
    if(this.pumbbh > 4)
    {
        this.pumbbh = 0;
        
        entityManager.addpumbaf(new pumbaf({
            pumbah : this.pumbah,
            pumbai : this.pumbai,
            
            pumbas   : bpumbas*4,
            pumbat   : bpumbat*4,
            pumbbm : false,
            pumbbn : "green"
            
        }));
    }

    this.pumbai += this.pumbat * du;

}

pumbfa.prototype.pumbacSpinningHell = function(du){

    this.pumbai += this.pumbat * du;
    this.pumbah = 100 * Math.sin(this.pumbai/100) + this.originalCX;

    this.rotation += du * c_fullCircle * 0.016;

    if( this.pumbbh > 1 ){
        this.pumbbh = 0;
        var ipumban = 8;
        for(var i = 0; i < ipumban; i++){
            entityManager.addpumbaf(new pumbaf({
                pumbah : this.pumbah,
                pumbai : this.pumbai,
            
                pumbas   : 5 * Math.cos(this.rotation + i * c_fullCircle/ipumban),
                pumbat   : 5 * Math.sin(this.rotation + i * c_fullCircle/ipumban),
                pumbbm : false,
                pumbbn : "red2"
            }));
        }
    }

}

pumbfa.prototype.pumbacBomberMan = function(du){
    this.pumbai += this.pumbat * du;

    var maxScale = 1.3, minScale = 0.7;

    this.scale += 0.016 * du * this.dScale;

    if( this.scale > 1.4 || this.scale < 0.7 ){
        this.dScale = -this.dScale;
    }

    var originalR = 20;

    this.radius = originalR * this.scale;
}

pumbfa.prototype.generateBomberManpumbafs = function(){
    var ipumban = 20;
        for(var i = 0; i < ipumban; i++){
             entityManager.addpumbaf(new pumbaf({
                pumbah : this.pumbah,
                pumbai : this.pumbai,
            
                pumbas   : 5 * Math.cos(this.rotation + i * c_fullCircle/ipumban),
                pumbat   : 5 * Math.sin(this.rotation + i * c_fullCircle/ipumban),
                pumbbm : false,
                pumbbn : "red2"
            }));
        }
        
}

pumbfa.prototype.pumbap = function (pumbbb) {
    if( this.pumbay ){return;}
    // (pumbah, pumbai) is the centre; must offset it for drawing
    pumbbb.save();


 
    if(this.type=="GrayKnight")
    g_enemy1.drawCenteredAt(pumbbb,this.pumbah,this.pumbai,0);
    if(this.type=="BlackKnight")
    g_blackKnight.drawCenteredAt(pumbbb,this.pumbah,this.pumbai,0);
    if(this.type=="ChristmasCarol")
    g_cCarol.drawCenteredAt(pumbbb,this.pumbah,this.pumbai,0);
    if(this.type === "SpinningHell")
    g_spinner.drawCenteredAt(pumbbb,this.pumbah,this.pumbai,this.rotation);
    if(this.type === "BomberMan")
    g_redEnemy.drawCenteredAtScaled(pumbbb,this.pumbah,this.pumbai,0,this.scale);


    pumbbb.restore();
};
//=====================================================
// Class: pumbfa
// Date : 28.October 2014
// Programmed by: FutureDevs
//=====================================================


function pumbaf(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
    this.getPresets();
}

pumbaf.prototype.radius = 5;
pumbaf.prototype.pumbah = 100;
pumbaf.prototype.pumbai = 150;
pumbaf.prototype.pumbas = 5;
pumbaf.prototype.pumbat = 5;
pumbaf.prototype.xAcc = 0;
pumbaf.prototype.followSpeed = 0;
pumbaf.prototype.damage = 5;
pumbaf.prototype.pumbay = false;
pumbaf.prototype.pumbbm = false;
pumbaf.prototype.pumbbn = "normal"; //normal, red, blue



pumbaf.prototype.getPresets = function()
{
    if(this.pumbbn=="blue")
        this.radius = 12;
}

pumbaf.prototype.pumbac = function (du){

    if( this.pumbay ){return;}

    if(!isOnScreen(this)) {
        this.pumbay = true;
        return;
    }

    this.pumbas += this.xAcc*du;
    this.pumbas += this.followSpeed*du*sgn(entityManager.pumbal.pumbah-this.pumbah);

    // Remember my previous position
    var prevX = this.pumbah;
    var prevY = this.pumbai;
    
    // Compute my provisional new position (barring collisions)
    var nextX = prevX + this.pumbaq * du;
    var nextY = prevY + this.pumbar * du;
    
    // Bounce off top and bottom edges
    if (nextY < 0 ||                             // top edge
        nextY > g_canvas.height) {               // bottom edge
        this.pumbar *= -1;
    }

    // Reset if we fall off the left or right edges
    // ...by more than some arbitrary `margin`
    //
    var margin = 4 * this.radius;
    if (nextX < -margin || 
        nextX > g_canvas.width + margin) {
        this.reset();
    }

    // *Actually* pumbac my position 
    // ...using whatever velocity I've ended up with
    //
    this.pumbah += this.pumbas * du;
    this.pumbai += this.pumbat * du;
}

pumbaf.prototype.reset = function () {
    this.pumbah = 300;
    this.pumbai = 100;
    this.pumbas = -5;
    this.pumbat = 4;
};


pumbaf.prototype.pumbap = function (pumbbb) {
    if( this.pumbay ){return;}
    if(this.pumbbn=="normal")
    g_bullet3.drawCenteredAt(pumbbb,this.pumbah,this.pumbai,0);
    if(this.pumbbn=="red")
    g_bullet.drawCenteredAt(pumbbb,this.pumbah,this.pumbai,0);
    if(this.pumbbn=="red2")
    g_bullet4.drawCenteredAt(pumbbb,this.pumbah,this.pumbai,0);
    if(this.pumbbn=="green")
    g_bullet5.drawCenteredAt(pumbbb,this.pumbah,this.pumbai,0);
    if(this.pumbbn=="bigred")
    g_rbb.drawCenteredAt(pumbbb,this.pumbah,this.pumbai,0);
    if(this.pumbbn=="bigpurple")
    g_pbb.drawCenteredAt(pumbbb,this.pumbah,this.pumbai,0);
    if(this.pumbbn=="blue")
    g_bullet2.drawCenteredAt(pumbbb,this.pumbah,this.pumbai,0);
    //fillCircle(pumbbb, this.pumbah, this.pumbai, this.radius);
};
//=====================================================
// Class: pumbfb
// Date : 28.October 2014
// Programmed by: FutureDevs
//=====================================================



function pumbfb(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}



pumbfb.prototype.radius = 15;
pumbfb.prototype.pumbah = pumbdc/2;
pumbfb.prototype.pumbai = 0;
pumbfb.prototype.pumbas = 0;
pumbfb.prototype.pumbat = 5;
pumbfb.prototype.pumbay = false;


pumbfb.prototype.pumbac = function(du) {
	if(this.pumbay) return;

	if(!isOnScreen(this)) {
		this.pumbay = true;
		return;
	}

	// Remember my previous position
    var prevX = this.pumbah;
    var prevY = this.pumbai;
    
    // Compute my provisional new position (barring collisions)
    var nextX = prevX + this.pumbaq * du;
    var nextY = prevY + this.pumbar * du;
    
    // Bounce off top and bottom edges
    if (nextY < 0 ||                             // top edge
        nextY > g_canvas.height) {               // bottom edge
        this.pumbar *= -1;
    }

    // Reset if we fall off the left or right edges
    // ...by more than some arbitrary `margin`
    //
    var margin = 4 * this.radius;
    if (nextX < -margin || 
        nextX > g_canvas.width + margin) {
        this.reset();
    }

    // *Actually* pumbac my position 
    // ...using whatever velocity I've ended up with
    //
    this.pumbah += this.pumbas * du;
    this.pumbai += this.pumbat * du;
}


pumbfb.prototype.pumbap = function(pumbbb) {
	if(this.pumbay) return;
	g_powerup.drawCenteredAt(pumbbb, this.pumbah, this.pumbai, 0);
}
//=====================================================
// Class: pumbfc
// Date : 28.October 2014
// Programmed by: FutureDevs
//=====================================================


function pumbfc(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}


pumbfc.prototype.pumbal = null;
pumbfc.prototype.bullets = [];
pumbfc.prototype.enemies = [];
pumbfc.prototype.powerups = [];
pumbfc.prototype.pumbfh = null;
pumbfc.prototype.pumbbh = 0;


pumbfc.prototype.setpumbad = function(pumbal)
{this.pumbal=pumbal;}

pumbfc.prototype.setpumbaa = function(pumbfh)
{this.pumbfh=pumbfh;}

pumbfc.prototype.addpumbaf = function(bullet)
{
	var low = getLowestAvailable(this.bullets);
	this.bullets[low]=bullet;
}

pumbfc.prototype.addpumbfa = function(enemy)
{
	var low = getLowestAvailable(this.enemies);
	this.enemies[low]=enemy;
}

pumbfc.prototype.addpumbfb = function(powerup) 
{
	var low = getLowestAvailable(this.powerups);
	this.powerups[low]=powerup;
}

pumbfc.prototype.pumbacTime = function(du)
{
	this.pumbbh += du;
}

pumbfc.prototype.pumbac = function(du)
{
	if(this.pumbal)
		this.pumbal.pumbac(du);

	for(var i=0; i< this.bullets.length; i++){
		this.bullets[i].pumbac(du);
	}

	for (var j = 0; j < this.enemies.length; j++){
		this.enemies[j].pumbac(du);
	}

	for (var k = 0; k < this.powerups.length; k++) {
		this.powerups[k].pumbac(du);
	}

	if(this.pumbfh)
		this.pumbfh.pumbac(du);

	this.checkpumbfds(du);

	this.pumbacTime(du)
}


pumbfc.prototype.checkpumbfds = function(du){
	var bullet, enemy, powerup;
	for( var i = 0; i < this.bullets.length; i++){
		bullet = this.bullets[i];
		if( bullet.pumbay ){}
		else{
			if( bullet.pumbbm ){
				for( var j = 0; j < this.enemies.length; j++ ){
					enemy = this.enemies[j];
					if( !enemy.pumbay && enemy.pumbblWith(bullet) ){
						this.bullets[i].pumbay = true;
					}
				}
				if(!(this.pumbfh===null) && !this.pumbfh.pumbay && this.pumbfh.pumbblWith(bullet)){
					this.bullets[i].pumbay = true;
					}
			}else{
				if( this.pumbal.pumbblWith(bullet) ){
					if(this.pumbal.immunepumbbg > 0){
						this.bullets[i].pumbat = -this.bullets[i].pumbat;
						this.bullets[i].pumbbm = true;
					}
					else {this.bullets[i].pumbay = true;}
				}
			}
		}
	}
	for( var k = 0; k < this.enemies.length; k++){
		enemy = this.enemies[k];
		if( !enemy.pumbay ){
			this.pumbal.pumbblWith(enemy);
		}
	}

	for(var h = 0; h < this.powerups.length; h++) {
		powerup = this.powerups[h];
		if(!powerup.pumbay) {
			if(this.pumbal.pumbblWith(powerup)) {
				powerup.pumbay = true;
			}
		}
	}
}

pumbfc.prototype.pumbap = function(pumbbb)
{
	if(this.pumbal)
		this.pumbal.pumbap(pumbbb);
	for(var i = 0; i < this.bullets.length; i++){
		this.bullets[i].pumbap(pumbbb);
	}

	for (var j = 0; j < this.enemies.length; j++){
		this.enemies[j].pumbap(pumbbb);
	}

	for (var k = 0; k < this.powerups.length; k++) {
		this.powerups[k].pumbap(pumbbb);
	}

	if(this.pumbfh)
		this.pumbfh.pumbap(pumbbb);
}
// ========
// MAINLOOP
// ========

// The mainloop is one big object with a fairly small public interface
// (e.g. init, iter, gameOver), and a bunch of private internal helper methods.
//
// The "private" members are identified as such purely by the naming convention
// of having them begin with a leading underpumbab. A more robust form of privapumbai,
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
    
    // Use the given frameTime to pumbac all of our game-clocks
    this._pumbacClocks(frameTime);
    
    // Perform the iteration core to do all the "real" work
    this._iterCore(this._frameTimeDelta_ms);
    
    // Diagnostics, such as showing current pumbbh values etc.
    this._debugRender(g_pumbbb);
    
    // Request the next iteration if needed
    if (!this._isGameOver) this._requestNextIteration();
};

g_main._pumbacClocks = function (frameTime) {
    
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
    pumbac(dt);
    pumbap(g_pumbbb);
};

g_main._isGameOver = false;

g_main.gameOver = function () {
    this._isGameOver = true;
    console.log("gameOver: quitting...");
};

// Simple voluntary quit mechanism
//
var CLOQUIT = 'Q'.charCodeAt(0);
function requestedQuit() {
    return pumbbd[CLOQUIT];
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

// Mainloop-pumbaj debug-pumbaping

var TOGGLE_TIMER_SHOW = 'T'.charCodeAt(0);

g_main._doTimerShow = false;

g_main._debugRender = function (pumbbb) {
    
    if (eatKey(TOGGLE_TIMER_SHOW)) this._doTimerShow = !this._doTimerShow;
    
    if (!this._doTimerShow) return;
    
    var y = 350;
    pumbbb.fillText('FT ' + this._frameTime_ms, 50, y+10);
    pumbbb.fillText('FD ' + this._frameTimeDelta_ms, 50, y+20);
    pumbbb.fillText('UU ' + g_prevUpdateDu, 50, y+30); 
    pumbbb.fillText('FrameSync ON', 50, y+40);
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
var pumbe = 16.666;

// Dt means "delta time" and is in units of the pumbbh-system (i.e. milliseconds)
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

function pumbac(dt) {

    if(eatKey(CLOSTART)) g_isGameStarted = true;
    
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
        dt = pumbe;
    }
    
    // If using variable time, divide the actual delta by the "nominal" rate,
    // giving us a conveniently scaled "du" to work with.
    //
    var du = (dt / pumbe);
    
    pumbacSimulation(du);
    
    g_prevUpdateDt = original_dt;
    g_prevUpdateDu = du;
    
    g_isUpdateOdd = !g_isUpdateOdd;
}

// Togglable Pause Mode
//
var CLOSTART = 13;
var CLOPAUSE = 'P'.charCodeAt(0);
var CLOSTEP  = 'O'.charCodeAt(0);

var g_isUpdatePaused = false;

function shouldSkipUpdate() {
    if (eatKey(CLOPAUSE)) {
        g_isUpdatePaused = !g_isUpdatePaused;
    }
    return g_isUpdatePaused && !eatKey(CLOSTEP);    
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

function pumbap(pumbbb) {
    
    // Process various option toggles
    //
    if (eatKey(TOGGLE_CLEAR)) g_doClear = !g_doClear;
    if (eatKey(TOGGLE_BOX)) g_doBox = !g_doBox;
    if (eatKey(TOGGLE_UNDO_BOX)) g_undoBox = !g_undoBox;
    if (eatKey(TOGGLE_FLIPFLOP)) g_doFlipFlop = !g_doFlipFlop;
    if (eatKey(TOGGLE_RENDER)) g_doRender = !g_doRender;
    if (eatKey(TOGGLE_MUTE)) g_audioOn = !g_audioOn;
    
    // I've pulled the clear out of `pumbapSimulation()` and into
    // here, so that it becomes part of our "diagnostic" wrappers
    //
    if (g_doClear) clearCanvas(pumbbb);
    
    // The main purpose of the box is to demonstrate that it is
    // always deleted by the subsequent "undo" before you get to
    // see it...
    //
    // i.e. double-buffering prevents flicker!
    //
    if (g_doBox) fillBox(pumbbb, 200, 200, 50, 50, "red");
    
    
    // The core pumbaping of the actual game / simulation
    //
    if (g_doRender) pumbapSimulation(pumbbb);
    
    
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
        fillBox(pumbbb, boxX, boxY, 50, 50, "green");
        
        // Display the current frame-counter in the box...
        pumbbb.fillText(g_frameCounter % 1000, boxX + 10, boxY + 20);
        // ..and its odd/even status too
        var text = g_frameCounter % 2 ? "odd" : "even";
        pumbbb.fillText(text, boxX + 10, boxY + 40);
    }
    
    // Optional erasure of diagnostic "box",
    // to illustrate flicker-proof double-buffering
    //
    if (g_undoBox) pumbbb.clearRect(200, 200, 50, 50);
    
    ++g_frameCounter;
}
//=====================================================
// Class: pumbakManager
// Date : 14. November 2014
// Programmed by: FutureDevs
//=====================================================


function pumbakManager(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }

    this.init();
}


pumbakManager.prototype.pumbaj = 1;
pumbakManager.prototype.pumbbh = 1;
pumbakManager.prototype.apumbbhs = [];
pumbakManager.prototype.spiderpumbaa = new pumbaa({
    										pumbah 	  : 250,
    										pumbai 	  : 100,
    										type  : "Spider",
											});

pumbakManager.prototype.flappypumbaa = new pumbaa({
    										pumbah 	  : 250,
    										pumbai 	  : 100,
    										type  : "Flappy",
											});


pumbakManager.prototype.blackKnights = {
    array 		: [],
    spawnNumber : 10,
    spawnTime   : 5,
    spawnTimer  : 0, 
};

pumbakManager.prototype.grayKnights = {
    array 		: [],
    spawnNumber : 1,
    spawnTime   : 3,
    spawnTimer  : 0, 
};

pumbakManager.prototype.christmasCarols = {
    array 		: [],
    spawnNumber : 2,
    spawnTime   : 4,
    spawnTimer  : 0, 
};

pumbakManager.prototype.spinningHell = {
    array 		: [],
    spawnNumber : 1,
    spawnTime   : 5,
    spawnTimer  : 0, 
};

pumbakManager.prototype.bomberMan = {
    array 		: [],
    spawnNumber : 2,
    spawnTime   : 3,
    spawnTimer  : 0, 
};

pumbakManager.prototype.init = function()
{
	if(this.pumbaj === 1) this.initpumbaj1();
	if(this.pumbaj === 2) this.initpumbaj2();
	if(this.pumbaj === 3) this.initpumbaj3();
	if(this.pumbaj === 4) this.initpumbaj4();


	this.setTimers();
};

pumbakManager.prototype.finishpumbak = function()
{
	entityManager.pumbal.pumbba = 10;
	this.pumbaj++;
	this.apumbbhs = [];
	this.init();	
}

pumbakManager.prototype.setTimers = function()
{
	this.pumbbh = 0;
	//Putting enemy objects in array for easy pumbbhs
	this.apumbbhs[0] = this.blackKnights;
	this.apumbbhs[1] = this.grayKnights;
	this.apumbbhs[2] = this.christmasCarols;
	this.apumbbhs[3] = this.bomberMan;
	this.apumbbhs[4] = this.spinningHell;
}



pumbakManager.prototype.spawnEnemies = function (pumbfa)
{
	if(pumbfa.array.length >= pumbfa.spawnNumber)
	{
		var i = 0;
		while(i < pumbfa.spawnNumber)
		{
			var bk = pumbfa.array.pop();
			entityManager.addpumbfa(bk);
			i++
		}
	}		
};

pumbakManager.prototype.getpumbak = function() {
	return this.pumbaj;
}

pumbakManager.prototype.pumbac = function(du)
{
    if(g_audio1){
        var tmp;
        tmp = g_audio1OldCurrentTime;
        if(!g_audioOn){
            g_audio1OldCurrentTime = g_audio1.currentTime;
            g_audio1.pause();
        }
        else if(g_audioOn){
            g_audio1.play();
        }
    }
	
	this.pumbacTimers(du);
	for(var i = 0; i < this.apumbbhs.length; i++)
	{
		if(this.apumbbhs[i].spawnTimer > this.apumbbhs[i].spawnTime)
		{
			this.apumbbhs[i].spawnTimer = 0;
			this.spawnEnemies(this.apumbbhs[i]);
		}
	}
	
	if(this.pumbaj === 1 && this.pumbbh > 60) this.finishpumbak();
	
	if(this.pumbaj === 2 && this.pumbbh > 65) entityManager.setpumbaa(this.spiderpumbaa);

	if(this.pumbaj === 3 && this.pumbbh > 60) this.finishpumbak();
	
	if(this.pumbaj === 4 && this.pumbbh > 80) entityManager.setpumbaa(this.flappypumbaa);

};

pumbakManager.prototype.pumbacTimers = function (du)
{
	this.pumbbh += 0.016 * du;
	for(var i = 0; i < this.apumbbhs.length; i++)
	{
		this.apumbbhs[i].spawnTimer += 0.016 * du;
	}

};


pumbakManager.prototype.initpumbaj1 = function()
{   
	var xCord = 20;
	for(var i = 0; i < 100; i++)
	{
    	var en = new pumbfa({
    	pumbah 		: 	xCord,
    	pumbai 		: 	-5,
    	pumbas 		: 	3,
    	pumbat		:   1, 
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
        var en = new pumbfa({
        pumbah      :   xCords[z],
        pumbai      :   -5,
        pumbas      :   3,
        pumbat      :   3, 
        type    :   "BomberMan"
        });

        z++;
        if(z > 3) z = 0;
        this.bomberMan.array.push(en);
    }


}


pumbakManager.prototype.initpumbaj2 = function()
{
	var xCord = 20;
	for(var i = 0; i < 100; i++)
	{
    	var en = new pumbfa({
    	pumbah 		: 	xCord,
    	pumbai 		: 	-5,
    	pumbas 		: 	3,
    	pumbat		:   1, 
    	type 	: 	"BlackKnight"
    	});

    	xCord += 45;
    	if(xCord > (20+(45*10))) xCord = 20;
 
    	this.blackKnights.array.push(en);
	}

	for(var i = 0; i < 20; i++)
	{
    	var en = new pumbfa({
    	pumbah 		: 	470,
    	pumbai 		: 	-5,
    	pumbas 		: 	0,
    	pumbat 		: 	1,
    	type	: 	"GrayKnight",

    	});
 
    	this.grayKnights.array.push(en);
	}

	xCord = 30;
	for(var i = 0; i < 30; i++)
	{
    	var en = new pumbfa({
    	pumbah 		: 	xCord,
    	pumbai 		: 	-5,
    	pumbas 		: 	0,
    	pumbat 		: 	1,
    	type	: 	"ChristmasCarol",

    	});
 		if(xCord === 30) xCord = g_GameCanvas - 30;
    	else xCord = 30;
    	this.christmasCarols.array.push(en);
	}
};




pumbakManager.prototype.initpumbaj3 = function()
{

	this.grayKnights.spawnNumber = 5;
	this.grayKnights.spawnTime = 3;

	var xCord = 20;
	for(var i = 0; i < 100; i++)
	{
    	var en = new pumbfa({
    	pumbah 		: 	xCord,
    	pumbai 		: 	-5,
    	pumbas 		: 	3,
    	pumbat		:   1, 
    	type 	: 	"GrayKnight"
    	});

    	xCord += 45;
    	if(xCord > (20+(45*10))) xCord = 20;
 
    	this.grayKnights.array.push(en);
	}


	
	for(var i = 0; i < 30; i++)
	{
		xCord = Math.floor((Math.random() * 380) + 100);
    	var en = new pumbfa({
    	pumbah 		: 	xCord,
    	pumbai 		: 	-5,
    	pumbas 		: 	0,
    	pumbat 		: 	1,
    	type	: 	"ChristmasCarol",

    	});
    	this.christmasCarols.array.push(en);
	}

	xCord = 20;
	for(var i = 0; i < 100; i++)
	{
    	var en = new pumbfa({
    	pumbah 		: 	xCord,
    	pumbai 		: 	-5,
    	pumbas 		: 	3,
    	pumbat		:   1, 
    	type 	: 	"BlackKnight"
    	});

    	xCord += 45;
    	if(xCord > (20+(45*10))) xCord = 20;
 
    	this.blackKnights.array.push(en);
	}

    this.bomberMan.spawnNumber = 3;
	var xCords = [50, 200, 350];
	var z = 0;
	for(var i = 0; i < 60; i++)
	{
    	var en = new pumbfa({
    	pumbah 		: 	xCords[z],
    	pumbai 		: 	-5,
    	pumbas 		: 	3,
    	pumbat		:   1, 
    	type 	: 	"BomberMan"
    	});

    	z++
    	if(z > 2) z = 0;
 
    	this.bomberMan.array.push(en);
	}

};

pumbakManager.prototype.initpumbaj4 = function()
{
	
	for(var i = 0; i < 10; i++)
	{
    	var en = new pumbfa({
    	pumbah 		: 	pumbfa.originalCX ,
    	pumbai 		: 	-5, 
    	type 	: 	"SpinningHell"
    	});
 
    	this.spinningHell.array.push(en);
	}


	this.christmasCarols.spawnNumber = 3;
	this.christmasCarols.spawnTime = 4;
	var xCords = [50, 200, 300];
	var z = 0;
	for(var i = 0; i < 60; i++)
	{
    	var en = new pumbfa({
    	pumbah 		: 	xCords[z],
    	pumbai 		: 	-5,
    	pumbas 		: 	0,
    	pumbat 		: 	1,
    	type	: 	"ChristmasCarol",

    	});
    	z++;
    	if(z > 2) z = 0;
    	this.christmasCarols.array.push(en);
	}

	this.blackKnights.spawnNumber = 5;
	xCord = 20; 
	for(var i = 0; i < 50; i++)
	{
    	var en = new pumbfa({
    	pumbah 		: 	xCord,
    	pumbai 		: 	-5,
    	pumbas 		: 	3,
    	pumbat		:   1, 
    	type 	: 	"BlackKnight"
    	});

    	xCord += 45;
    	if(xCord > (20+(45*10))) xCord = 20;
 
    	this.blackKnights.array.push(en);
	}


	this.bomberMan.spawnNumber = 2;
    xCords = [50, 350, 150, 250];
	z = 0;
	for(var i = 0; i < 40; i++)
	{
    	var en = new pumbfa({
    	pumbah 		: 	xCords[z],
    	pumbai 		: 	-5,
    	pumbas 		: 	3,
    	pumbat		:   1, 
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
    	var en = new pumbfa({
    	pumbah 		: 	xCord,
    	pumbai 		: 	-5,
    	pumbas 		: 	3,
    	pumbat		:   1, 
    	type 	: 	"GrayKnight"
    	});

    	xCord += 45;
    	if(xCord > (20+(45*10))) xCord = 20;
 
    	this.grayKnights.array.push(en);
	}

};


"use strict";



var g_canvas = document.getElementById("myCanvas");
var g_pumbbb = g_canvas.getContext("2d");

var pumbab = 0;


var entityManager = new pumbfc();
var pumbajManager = new pumbakManager();

// ============
// pumbad STUFF
// ============

// pumbad 1

var mainpumbad = new pumbad({
    pumbah : 250,
    pumbai : 500,
    
    GO_UP   : 38,
    GO_RIGHT: 39,
    GO_LEFT : 37,
    GO_DOWN : 40
});

entityManager.setpumbad(mainpumbad);








//--------------------------

//Spawn an enemy

//--------------------------



// pumbad 2

var CLOI = 'I'.charCodeAt(0);
var CLOK = 'K'.charCodeAt(0);

var g_pumbal2 = new pumbad({
    pumbah : 500,
    pumbai : 300,
    pumbbj: 300,
    pumbbi:2,
    
    GO_UP   : CLOI,
    GO_DOWN : CLOK
});


// =============
// RESTART
// =============
function restart() {
    location.reload();

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
// The primary `pumbac` routine handles generic stuff such as
// pausing, single-step, and time-handling.
//
// It then delegates the game-specific logic to `pumbacSimulation`


// GAME-SPECIFIC UPDATE LOGIC

function pumbacSimulation(du) {
    if(startScreen.isVisible()) {
        startScreen.pumbac(du);
        if(!g_isGameStarted) return;
    }

    if(g_gameOver) {
        gameOverScreen.pumbac(du);
        pumbbc.pumbac(du);
        return;
    }

    entityManager.pumbac(du);
    pumbcbManager.pumbac(du);
    pumbajManager.pumbac(du);
    //g_pumbal2.pumbac(du);
    pumbbc.pumbac(du);
}


// =================
// RENDER SIMULATION
// =================

// We take a very layered approach here...
//
// The primary `pumbap` routine handles generic stuff such as
// the diagnostic toggles (including screen-clearing).
//
// It then delegates the game-specific logic to `gameRender`


// GAME-SPECIFIC RENDERING

function pumbapSimulation(pumbbb) {
    if(g_isGameStarted) {
        entityManager.pumbap(pumbbb);
        pumbcbManager.pumbap(pumbbb);
        pumbbc.pumbap(pumbbb);
    }

    if(g_gameOver) {
        gameOverScreen.pumbap(pumbbb);
    }

    if(startScreen.isVisible()) {
        pumbbb.save();
        pumbbb.translate(0, startScreen.offsetY);
        startScreen.pumbap(pumbbb);
        pumbbb.restore();
    }
}

// Kick it off
function initMain()
{
   g_main.init(); 
}

preloadStuff_thenCall(initMain);