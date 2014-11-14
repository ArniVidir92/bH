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
	this.enemy[low]=enemy;
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
	for (var j = 0; j < this.enemies.length; j++) 
		this.enemies[j].update(du);
	if(this.boss)
		this.boss.update();

	//console.log(this.bullets.length);

	//this.checkCollisions(du);

	this.updateTime(du)
}

/*----------------------
		Collision Stuff
------------------------*/



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
	for (var j = 0; j < this.enemies.length; j++) 
		this.enemies[j].render(ctx);
	if(this.boss)
		this.boss.render(ctx);
}