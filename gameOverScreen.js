 var gameOverScreen = {

 	cx : 520/2,
 	cy : 300,

 	width : 400,
 	height : 120,

	isOnGameOver : function() {
		return (g_mouseX < this.cx + this.width/2 && 
				g_mouseX > this.cx - this.width/2 &&
				g_mouseY > this.cy - this.height/2 &&
				g_mouseY < this.cy + this.height/2);
	},

 	update : function(du) {
 		this.shadowBlur -= 1;
 	},

 	render : function(ctx) {
 		ctx.save();
 		if(this.isOnGameOver()) {
	 		ctx.shadowColor = "white";
	  	 	ctx.shadowOffsetX = 16;
	  		ctx.shadowOffsetY = 16;
	   		ctx.shadowBlur = 10;
 		}
 		g_sGameOver.drawCenteredAt(ctx, this.cx, this.cy, 0);
 		ctx.restore();
 	}
 }