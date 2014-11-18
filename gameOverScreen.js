 var gameOverScreen = {

 	cx : 520/2,
 	cy : 300,

 	width : 400,
 	height : 120,

 	shadowRadius : 20,

	isOnGameOver : function() {
		return (g_mouseX < this.cx + this.width/2 && 
				g_mouseX > this.cx - this.width/2 &&
				g_mouseY > this.cy - this.height/2 &&
				g_mouseY < this.cy + this.height/2);
	},

 	update : function(du) {
 		this.shadowRadius -= 1;
 	},

 	render : function(ctx) {
 		ctx.save();
// 		ctx.shadowColor = "white";
//  	 	ctx.shadowOffsetX = 8;
//  		ctx.shadowOffsetY = 8;
//   		ctx.shadowBlur = this.shadowRadius;
 		g_sGameOver.drawCenteredAt(ctx, this.cx, this.cy, 0);
 		ctx.restore();
 	}
 }