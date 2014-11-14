var numberOfPreloadedImages = 8;

function preloadStuff_thenCall(completionCallback) {
	var cnt=0;
//1. preload the background	
    var g_bgImage = new Image();
    
    g_bgImage.onload = function () { 
        g_bg = new Sprite(g_bgImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_bgImage.src = "bhbg.png";

//2. preload the bullet  
    var g_bulletImage = new Image();
    
    g_bulletImage.onload = function () { 
        g_bullet = new Sprite(g_bulletImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_bulletImage.src = "sprites/bullet2.png";
    
//3. preload the bullet  
    var g_enemy1Image = new Image();
    
    g_enemy1Image.onload = function () { 
        g_enemy1 = new Sprite(g_enemy1Image) ;
        isReady(++cnt,completionCallback);
    };
    
    g_enemy1Image.src = "sprites/enemymark1.png";

//4. preload the ship
    var g_shipImage = new Image();
    
    g_shipImage.onload = function () { 
        g_ship = new Sprite(g_shipImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_shipImage.src = "sprites/bhship.png";
//5. preload the blackknight
    var g_blackKnightImage = new Image();
    
    g_blackKnightImage.onload = function () { 
        g_blackKnight = new Sprite(g_blackKnightImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_blackKnightImage.src = "sprites/blackknight.png";

//6. preload the sidebar
    var g_sideImage = new Image();
    
    g_sideImage.onload = function () { 
        g_side = new Sprite(g_sideImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_sideImage.src = "sprites/sidebar.png";

//7. preload the powerup
    var g_powerupImage = new Image();
    
    g_powerupImage.onload = function () { 
        g_powerup = new Sprite(g_powerupImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_powerupImage.src = "sprites/powerup2.png";

//8. preload the powerup2
    var g_powerup2Image = new Image();
    
    g_powerup2Image.onload = function () { 
        g_powerup2 = new Sprite(g_powerup2Image) ;
        isReady(++cnt,completionCallback);
    };
    
    g_powerup2Image.src = "sprites/powerup1.png";
}

function isReady(x,completionCallback)
{
    if(x>=numberOfPreloadedImages)
    {completionCallback();}
}