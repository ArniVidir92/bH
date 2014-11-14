// =====
// UTILS
// =====

function clearCanvas(ctx) 
{ 
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
    g_bg.drawCenteredAt(ctx,ctx.canvas.width/2,ctx.canvas.height/2,0);
}

function fillCircle(ctx, x, y, r) 
{
    ctx.beginPath();
    var oldStyle = ctx.fillstyle;
    ctx.fillStyle = "#FF0000";
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = oldStyle;

}

function fillBox(ctx, x, y, w, h, style) 
{
    var oldStyle = ctx.fillStyle;
    ctx.fillStyle = style;
    ctx.fillRect(x, y, w, h);
    ctx.fillStyle = oldStyle;
}

function getLowestAvailable(array)
{
	for(var i in array)
		if(i.isDead)
			return i
	return array.length;
}

function isOnScreen(object) {
    var margin = 20;

    var topY = object.cy + margin;
    var bottomY = object.cy - margin;
    var leftX = object.cx + margin;
    var rightX = object.cx - margin;

    if(topY < 0 ||
        bottomY > g_canvas.height ||
        leftX < 0 || 
        rightX > g_canvas.width) {
            return false;
    }

    return true;
}