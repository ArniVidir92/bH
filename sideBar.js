// ==============
// SideBar Stuff
// ==============

var sideBar = {
    startX: 520,
    startY: 0,
    witdh: 280,
    enemyScore: 50,
    xpHeight: 180 
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
    var w = 48, startX = 700, startY = 400;

    //fillBox(ctx,startX ,startY , w, this.xpHeight, "blue")
    g_xpbarbg.drawCenteredAt(ctx,startX,startY,0);
    fillBox(ctx, startX-24 , startY-90 + this.xpHeight, w, -coef * this.xpHeight, "red")
    g_xpbar.drawCenteredAt(ctx,startX,startY,0);
}

sideBar.renderScore = function(ctx){
    var oldStyle = ctx.fillStyle;
    ctx.fillStyle
    ctx.font="bold 28px Arial";        
    ctx.fillText("Score "+ score, 570, 50);
}
