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

Player.prototype.update = function (du) {
    if (g_keys[this.GO_UP]) {
        this.cy -= 5 * du;
    } if (g_keys[this.GO_DOWN]) {
        this.cy += 5 * du;
    } if (g_keys[this.GO_LEFT]) {
        this.cx -= 5 * du;
    } if (g_keys[this.GO_RIGHT]) {
        this.cx += 5 * du;
    }
};

Player.prototype.render = function (ctx) {
    // (cx, cy) is the centre; must offset it for drawing
    ctx.fillRect(this.cx - this.halfWidth,
                 this.cy - this.halfHeight,
                 this.halfWidth * 2,
                 this.halfHeight * 2);
};

Player.prototype.collidesWith = function (prevX, prevY, 
                                          nextX, nextY, 
                                          r) {
    var PlayerEdge = this.cx;
    // Check X coords
    if ((nextX - r < PlayerEdge && prevX - r >= PlayerEdge) ||
        (nextX + r > PlayerEdge && prevX + r <= PlayerEdge)) {
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