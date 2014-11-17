
var startScreen = {

	buttonX : 400,
	buttonY : 400,
	buttonWidth  : 440,
	buttonHeight : 100,

	isOnStartButton : function() {
		return (g_mouseX < this.buttonX + this.buttonWidth/2 && 
				 g_mouseX > this.buttonX - this.buttonWidth/2 &&
				 g_mouseY > this.buttonY - this.buttonHeight/2 &&
				 g_mouseY < this.buttonY + this.buttonHeight/2);
	},

	render : function(ctx) {
		g_startScreen.drawCenteredAt(ctx, g_canvas.width/2, g_canvas.height/2, 0);

		if(this.isOnStartButton()) {
			g_startScreenButtonDown.drawCenteredAt(ctx, this.buttonX, this.buttonY, 0);
		}
		else {
			g_startScreenButtonUp.drawCenteredAt(ctx, this.buttonX, this.buttonY, 0);	
		}

	}
}