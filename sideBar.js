// ==============
// SideBar Stuff
// ==============

var sideBar = {
    startX: 520,
    startY: 0,
    witdh: 280,
    enemyScore: 50,
    xpHeight: 100
};

sideBar.update = function (du) {

};

sideBar.reset = function () {
    score = 0;
};

sideBar.render = function (ctx) {
    g_side.drawCenteredAt(ctx,this.startX + this.witdh/2,ctx.canvas.height/2,0);
    this.renderScore(ctx);
    this.renderXp(ctx);
};

sideBar.renderXp = function(ctx){
    var coef = entityManager.player.xp / entityManager.player.xpMax;
    var w = 30, startX = 700, startY = 400;

    fillBox(ctx,startX ,startY , w, this.xpHeight, "blue")
    fillBox(ctx, startX , startY + this.xpHeight, w, -coef * this.xpHeight, "red")
}

sideBar.renderScore = function(ctx){
    var oldStyle = ctx.fillStyle;
    ctx.fillStyle
    ctx.font="bold 28px Arial";        
    ctx.fillText("Score "+ score, 570, 50);
}
