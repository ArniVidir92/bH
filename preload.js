var numberOfPreloadedImages = 2;

function preloadStuff_thenCall(completionCallback) {
	var cnt=0;
//preload the background	
    var g_bgImage = new Image();
    
    g_bgImage.onload = function () { 
        g_bg = new Sprite(g_bgImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_bgImage.src = "bhbg.png";

//preload the bullet  
    var g_bulletImage = new Image();
    
    g_bulletImage.onload = function () { 
        g_bullet = new Sprite(g_bulletImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_bulletImage.src = "sprites/bullet2.png";
    
}

function isReady(x,completionCallback)
{
    if(x>=numberOfPreloadedImages)
    {completionCallback();}
}