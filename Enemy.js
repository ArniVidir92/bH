// A generic constructor which accepts an arbitrary descriptor object
function Enemy(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}

// Add these properties to the prototype, where they will server as
// shared defaults, in the absence of an instance-specific overrides.

Enemy.prototype.halfWidth = 25;
Enemy.prototype.halfHeight = 25;

Enemy.prototype.update = function (du) {
    if (g_keys[this.GO_UP]) {
        this.cy -= 5 * du;
    } else if (g_keys[this.GO_DOWN]) {
        this.cy += 5 * du;
    }
};

Enemy.prototype.render = function (ctx) {
    // (cx, cy) is the centre; must offset it for drawing
    ctx.fillRect(this.cx - this.halfWidth,
                 this.cy - this.halfHeight,
                 this.halfWidth * 2,
                 this.halfHeight * 2);
};

Enemy.prototype.collidesWith = function (prevX, prevY, 
                                          nextX, nextY, 
                                          r) {
    var EnemyEdge = this.cx;
    // Check X coords
    if ((nextX - r < EnemyEdge && prevX - r >= EnemyEdge) ||
        (nextX + r > EnemyEdge && prevX + r <= EnemyEdge)) {
        // Check Y coords
        if (nextY + r >= this.cy - this.halfHeight &&
            nextY - r <= this.cy + this.halfHeight) {
            // It's a hit!
            return true;
        }
    }
    // It's a miss!
    return false;
};