// =====
// UTILS
// =====

function clearCanvas(ctx) 
{ 
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    g_bg.drawCenteredAt(ctx,ctx.canvas.width/2,ctx.canvas.height/2,0);
}

function fillCircle(ctx, x, y, r,fillStyle) 
{
    ctx.beginPath();
    var oldStyle = ctx.fillstyle;
    if(fillStyle)
        ctx.fillStyle = fillStyle;
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

function sgn(x)
{
    if(x>0) return 1;
    if(x<0) return -1;
    return 0;
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
        rightX > ARENA_WIDTH) {
            return false;
    }

    return true;
}

function distance( x1, y1, x2, y2 ){
    return (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}