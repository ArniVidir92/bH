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
					if(this.player.immuneCooldown > 0 
					   && this.player.immuneCooldown !== Player.prototype.immuneCooldown)
					{
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