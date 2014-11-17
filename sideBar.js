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