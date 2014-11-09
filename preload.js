function preloadStuff_thenCall(completionCallback) {
	var cnt=0;
//preload the background	
    var g_bgImage = new Image();
    
    g_bgImage.onload = function () { 
        g_bg = new Sprite(g_bgImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_bgImage.src = "bhbg.png";

    
}

function isReady(x,completionCallback)
{
    if(x>=1)
    {completionCallback();}
}