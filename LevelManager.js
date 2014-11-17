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
LevelManager.prototype.timer = 1;
LevelManager.prototype.atimers = [];
LevelManager.prototype.mainBoss = new Boss({
    										cx : 250,
    										cy : 100,
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


LevelManager.prototype.init = function()
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


	//Putting enemy objects in array for easy timers
	this.atimers[0] = this.blackKnights;
	this.atimers[1] = this.grayKnights;
	this.atimers[2] = this.christmasCarols;
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
}

/*-----------------------
	Update loop
	aka levelbuilder
-----------------------*/
LevelManager.prototype.update = function(du)
{
	
	this.updateTimers(du);
	if(this.grayKnights.spawnTimer > this.grayKnights.spawnTime)
	{
		this.grayKnights.spawnTimer = 0;
		this.spawnEnemies(this.grayKnights);	
	}

	if(this.blackKnights.spawnTimer >= this.blackKnights.spawnTime)
	{	
		this.blackKnights.spawnTimer = 0;
		this.spawnEnemies(this.blackKnights);
	}
	if(this.christmasCarols.spawnTimer >= this.christmasCarols.spawnTime)
	{	
		this.christmasCarols.spawnTimer = 0;
		this.spawnEnemies(this.christmasCarols);
	}
	if(this.timer > 60) entityManager.setBoss(this.mainBoss);

}

LevelManager.prototype.updateTimers = function (du)
{
	this.timer += 0.016 * du;
	for(var i = 0; i < this.atimers.length; i++)
	{
		this.atimers[i].spawnTimer += 0.016 * du;
	}

}