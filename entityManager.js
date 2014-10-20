var entityManager = {
    bikes:[],
    powerUps:[],
    dots:[],
    dotsAreMagnets: {on: false, x: 0, y: 0},
    dotsOn : true,
    pUTypes : ["speed","slow","cutLines","magnet"],
    minimumPlayers : 2
}

entityManager.update = function(du){
    this.isGameOver();
    for(var i=0;i<this.bikes.length;i++)
    if(this.bikes[i].update(du)===-1){ this.remObject(this.bikes,i); i--;}

    for(var i=0;i<this.powerUps.length;i++)
    if(this.powerUps[i].update(du)===-1){ this.remObject(this.powerUps,i); i--; }
    if(!this.powerUps.length){
        this.generatePowerUps();
    }

    for(var i=0;i<this.dots.length;i++) {
        if(this.dots[i].update(du)===-1) { this.remObject(this.dots,i); i--; }
    }

    if(control.getMode() !== "TRON"  && !this.dots.length){
        this.generateDots();
    }
}

entityManager.render = function(ctx){
    control.renderScore(ctx);
    for(var i=0;i<this.bikes.length;i++)
    this.bikes[i].render(ctx);
    for(var i=0;i<this.powerUps.length;i++)
    this.powerUps[i].render(ctx);
    for(var i=0;i<this.dots.length;i++)
    this.dots[i].render(ctx);
}

entityManager.collidesWith = function(b,nextX,nextY){
    this.collidesWithPowerUps(b);
    this.collidesWithDots(b);
    if(this.collidesWithMap(b,nextX, nextY)) {return true;}
    for(var i=0; i<this.bikes.length; i++){
        if(b.collidesWith(this.bikes[i],nextX,nextY)){
            return true;
        }
    }
    return false;
}

entityManager.collidesWithMap = function(b,nx,ny){
    var lines=map.lines;
    for(var i=0; i<lines.length; i++){
        if(rectLineCollision(b.cx,b.cy,nx,ny,b.halfWidth*2,b.halfHeight*2,
            lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2)){
            return true;
        }
    }
    return false;
}

entityManager.collidesWithDots = function(b){
    var dot;
    for(var i=0; i<this.dots.length; i++) {
        dot=this.dots[i];
        if(rectRectCollision(dot.cx, dot.cy, dot.width, dot.height,
            b.cx,b.cy,b.halfWidth*2,b.halfHeight*2)){

            if (g_useSounds) sounds.play("dot");
            this.dots[i].status= -1;

            switch (control.getMode())
            {
                case "Time Attack":
                    b.addTime(this.bikes.length * this.dots[i].width * 50 / NOMINAL_UPDATE_INTERVAL);
                    break;
                default:
                    b.increaseTail(this.dots[i].width * 10);
            }
            particleManager.addSParticle(this.dots[i].cx, this.dots[i].cy, "dots", 40);
            control.updateScore(b.player, this.dots[i].width * 10);
            return;
        }
    }
}

entityManager.collidesWithPowerUps = function(b){
    var powerUp;
    for(var i=0; i<this.powerUps.length; i++) {
        powerUp=this.powerUps[i];
        if(rectRectCollision(powerUp.cx, powerUp.cy, powerUp.width, powerUp.height,
            b.cx,b.cy,b.halfWidth*2,b.halfHeight*2)){

            this.powerUps[i].status= -1;
            b.setPowerUp(this.powerUps[i].type);
            return;
        }
    }
}

entityManager.generateBike = function(descr){
    this.bikes.push(new Bike(descr));
}

entityManager.generateDots = function(){
    var max=20, min=10, wh, minCount = 10, maxCount = 15;
    var count=randomRange(minCount, maxCount);
    for(var i=0; i<count; i++){
        // Setting side lengths
        wh = randomRange(min, max);
        safeP = this.aSafePlaceToSpawn(wh, wh);
        this.dots[i]=new Dot({
            cx: safeP.x,
            cy: safeP.y,
            width: wh,
            height: wh,
            style: setColor()
        });
    }

}

entityManager.generatePowerUps = function(){
    var max=25, min=20, wh, selector;
    var sprites = [g_sprites.lightningPwrp,g_sprites.turtlePwrp,
                    g_sprites.scissorPwrp,g_sprites.magnetPwrp];
    for (var i = 0; i < 3; i++) {
        selector = Math.floor(Math.random() * entityManager.pUTypes.length);
        // Setting side lengths
        wh = randomRange(min, max);
        safeP = this.aSafePlaceToSpawn(wh, wh);
        this.powerUps[this.powerUps.length] = new PowerUp({
            cx: safeP.x,
            cy: safeP.y,
            width: wh,
            height: wh,
            sprite: sprites[selector],
            type: entityManager.pUTypes[selector]
        });
    }
}

entityManager.aSafePlaceToSpawn = function(w, h) {
    var x, y, pu, dot, valid = true,
        tries = 0;
    while( tries < 100 ){
        x = 0.1 * g_canvas.width + Math.random() * 0.8 * g_canvas.width;
        y = 0.1 * g_canvas.height + Math.random() * 0.8 * g_canvas.height;

        // it is not a safe pos if it spawns colliding with a map line
        if( map.theClosestLine(x, y) > w + 1 ) {
            for( var i=0; i<this.dots.length; i++ ) {
                dot = this.dots[i];
                if( rectRectCollision(x,y,w,h,dot.cx,dot.cy,dot.width,dot.height) ){
                    valid = false;
                    break;
                }
            }
            // Want to quit if it spawns colliding with a dot
            if( valid ){
                for( var j=0; j<this.powerUps.length; j++ ){
                    pu = this.powerUps[j];
                    if( rectRectCollision(x,y,w,h,pu.cx,pu.cy,pu.width,pu.height) ){
                        valid = false;
                        break;
                    }
                }
                // Found a safe spot
                if( valid ) return {x: x, y: y};
            }
            
        }
        valid = true;
        tries++;
    }
    // Tried 100 times so just return random pos
    return {x: x, y: y};
}

entityManager.remObject = function(arr,id){
    arr.splice(id,1);
}

entityManager.setMinimumPlayers = function (min) {
    this.minimumPlayers = min;
}

entityManager.isGameOver = function() {
    if (this.bikes.length < this.minimumPlayers) g_main.gameOver();
}