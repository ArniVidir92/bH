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

LevelManager.prototype.blackKnights = {
    array 		: [],
    spawnNumber : 10,
    spawnTime   : 3,
    spawnTimer  : 0, 
};

LevelManager.prototype.grayKnights = {
    array 		: [],
    spawnNumber : 3,
    spawnTime   : 2,
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

    	xCord += 25;
    	if(xCord > (20+(25*10))) xCord = 20;
 
    	this.blackKnights.array.push(en);
	}

	/*-----------------------------
		Creating Christmas Carols 
	------------------------------*/
	for(var i = 0; i < 100; i++)
	{
    	var en = new Enemy({
    	cx : 0,
    	cy : 15,
    	vx : 4,
    	vy : 0,

    	});
 
    	this.grayKnights.array.push(en);
	}
}

/*
LevelManager.prototype.createEnemy = function (enemyArray)
{
	if(this.blackKnights.length >= 10)
	{
			var i = 0;
			while(i <= this.blacksInRow)
			{
				var bk = this.blackKnights.pop();
				entityManager.addEnemy(bk);
				i++
		}
	}	
}
*/
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
		if(this.grayKnights.array.length >= this.grayKnights.spawnNumber)
		{
			var i = 0;
			while(i <= this.grayKnights.spawnNumber)
			{
				var bk = this.grayKnights.array.pop();
				entityManager.addEnemy(bk);
				i++
			}
		}	
	}

	if(this.blackKnights.spawnTimer >= this.blackKnights.spawnTime)
	{	
		this.blackKnights.spawnTimer = 0;
		if(this.blackKnights.array.length >= this.blackKnights.spawnNumber)
		{
			var i = 0;
			while(i <= this.blackKnights.spawnNumber)
			{
				var bk = this.blackKnights.array.pop();
				entityManager.addEnemy(bk);
				i++
			}
		}	
	}

}

LevelManager.prototype.updateTimers = function (du)
{
	this.timer += 0.016 * du;
	this.blackKnights.spawnTimer += 0.016 * du;
	this.grayKnights.spawnTimer += 0.016 * du;

}