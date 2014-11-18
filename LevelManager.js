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
    spawnNumber : 3,
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
{   g_audio1.play();
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
    for(var i = 0; i < 100; i++)
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