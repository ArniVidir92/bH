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

Powerup.prototype.cx = ARENA_WIDTH/2;
Powerup.prototype.cy = -20;
Powerup.prototype.vx = 5;
Powerup.prototype.vy = 5;
Powerup.prototype.isDead = false;

/*----------------------
        Update
------------------------*/
