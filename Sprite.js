function Sprite(image) {

    this.image=image;
}

Sprite.prototype.drawCenteredAt = function (ctx, cx, cy, rotation) {
    
    // This is how to implement default parameters...
    if (rotation === undefined) rotation = 0;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotation);
    ctx.translate(-cx, -cy);
    ctx.drawImage(this.image, cx-this.image.width/2, cy-this.image.height/2);
    ctx.restore();

};

Sprite.prototype.drawCenteredAtScaled = function (ctx, cx, cy, rotation, scale) {
    
    // This is how to implement default parameters...
    if (rotation === undefined) rotation = 0;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(scale, scale);
    ctx.rotate(rotation);
    ctx.translate(-cx, -cy);
    ctx.drawImage(this.image, cx-this.image.width/2, cy-this.image.height/2);
    ctx.restore();

};