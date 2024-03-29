    function preloadStuff_thenCall(completionCallback) {
    var cnt = 0;
//1. preload the background 
    var g_bgImage = new Image();
    
    g_bgImage.onload = function () {
        g_bg = new pumbax(g_bgImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_bgImage.src = "bhbg.png";

//2. preload the bullet  
    var g_bulletImage = new Image();
    
    g_bulletImage.onload = function () { 
        g_bullet = new pumbax(g_bulletImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_bulletImage.src = "sprites/bullet2.png";
    
//3. preload the enemy1 
    var g_enemy1Image = new Image();
    
    g_enemy1Image.onload = function () { 
        g_enemy1 = new pumbax(g_enemy1Image) ;
        isReady(++cnt,completionCallback);
    };
    
    g_enemy1Image.src = "sprites/enemymark1.png";

//4. preload the ship
    var g_shipImage = new Image();
    
    g_shipImage.onload = function () { 
        g_ship = new pumbax(g_shipImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_shipImage.src = "sprites/bhship.png";
//5. preload the blackknight
    var g_blackKnightImage = new Image();
    
    g_blackKnightImage.onload = function () { 
        g_blackKnight = new pumbax(g_blackKnightImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_blackKnightImage.src = "sprites/blackknight.png";

//6. preload the sidebar
    var g_sideImage = new Image();
    
    g_sideImage.onload = function () { 
        g_side = new pumbax(g_sideImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_sideImage.src = "sprites/sidebar.png";

//7. preload the powerup
    var g_powerupImage = new Image();
    
    g_powerupImage.onload = function () { 
        g_powerup = new pumbax(g_powerupImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_powerupImage.src = "sprites/powerup2.png";

//8. preload the powerup2
    var g_powerup2Image = new Image();
    
    g_powerup2Image.onload = function () { 
        g_powerup2 = new pumbax(g_powerup2Image) ;
        isReady(++cnt,completionCallback);
    };
    
    g_powerup2Image.src = "sprites/powerup1.png";
//9. preload the bullet2
    var g_bullet2Image = new Image();
    
    g_bullet2Image.onload = function () { 
        g_bullet2 = new pumbax(g_bullet2Image) ;
        isReady(++cnt,completionCallback);
    };
    
    g_bullet2Image.src = "sprites/bigbulletrad12.png";

//10. preload the xpbar
    var g_xpbarImage = new Image();
    
    g_xpbarImage.onload = function () { 
        g_xpbar = new pumbax(g_xpbarImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_xpbarImage.src = "sprites/xpbar.png";

//11. preload the xpbarbackground
    var g_xpbarbgImage = new Image();
    
    g_xpbarbgImage.onload = function () { 
        g_xpbarbg = new pumbax(g_xpbarbgImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_xpbarbgImage.src = "sprites/xpbarbackground.png";

//12. preload the chistmas carol enemy
    var g_cCarolImage = new Image();
    
    g_cCarolImage.onload = function () { 
        g_cCarol = new pumbax(g_cCarolImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_cCarolImage.src = "sprites/christmasCarolShip.png";

//13. preload bullet3
    var g_bullet3Image = new Image();
    
    g_bullet3Image.onload = function () { 
        g_bullet3 = new pumbax(g_bullet3Image) ;
        isReady(++cnt,completionCallback);
    };
    
    g_bullet3Image.src = "sprites/bullet3.png";

//14. preload spider boss
    var g_spiderImage = new Image();
    
    g_spiderImage.onload = function () { 
        g_spider = new pumbax(g_spiderImage) ;
        isReady(++cnt,completionCallback);
    };
    
    g_spiderImage.src = "sprites/spiderBoss.png";

//15. preload startscreen background 
    var g_startScreenImage = new Image();

    g_startScreenImage.onload = function() {
        g_startScreen = new pumbax(g_startScreenImage);
        isReady(++cnt,completionCallback);
    };

    g_startScreenImage.src = "sprites/background.png";

//16. preload startscreen button up
    var g_startScreenButtonUpImage = new Image();

    g_startScreenButtonUpImage.onload = function() {
        g_startScreenButtonUp = new pumbax(g_startScreenButtonUpImage);
        isReady(++cnt,completionCallback);
    };

    g_startScreenButtonUpImage.src = "sprites/buttonup.png";

//17. preload startscreen button down
    var g_startScreenButtonDownImage = new Image();

    g_startScreenButtonDownImage.onload = function() {
        g_startScreenButtonDown = new pumbax(g_startScreenButtonDownImage);
        isReady(++cnt,completionCallback);
    };

    g_startScreenButtonDownImage.src = "sprites/buttondown.png";

//18. preload the red enemy
    var g_redEnemyImage = new Image();

    g_redEnemyImage.onload = function() {
        g_redEnemy = new pumbax(g_redEnemyImage);
        isReady(++cnt,completionCallback);
    };

    g_redEnemyImage.src = "sprites/redenemy.png";

//19. preload the flappy boss
    var g_flappyImage = new Image();

    g_flappyImage.onload = function() {
        g_flappy = new pumbax(g_flappyImage);
        isReady(++cnt,completionCallback);
    };

    g_flappyImage.src = "sprites/flappyBird.png";

//20. preload spinner enemy
    var g_spinnerImage = new Image();

    g_spinnerImage.onload = function() {
        g_spinner = new pumbax(g_spinnerImage);
        isReady(++cnt,completionCallback);
    };

    g_spinnerImage.src = "sprites/spinninghell.png";

//21. preload goomba
    var g_pbbImage = new Image();

    g_pbbImage.onload = function() {
        g_pbb = new pumbax(g_pbbImage);
        isReady(++cnt,completionCallback);
    };

    g_pbbImage.src = "sprites/goomba.png";

//22. preload goomba2
    var g_rbbImage = new Image();

    g_rbbImage.onload = function() {
        g_rbb = new pumbax(g_rbbImage);
        isReady(++cnt,completionCallback);
    };

    g_rbbImage.src = "sprites/goomba2.png";

//23. gameover screen
    var g_gameOverImage = new Image();

    g_gameOverImage.onload = function() {
        g_sGameOver = new pumbax(g_gameOverImage);
        isReady(++cnt,completionCallback);
    };

    g_gameOverImage.src = "sprites/gameoverv20.png";

//24. gpreload background for level 2
    var g_bg2Image = new Image();

    g_bg2Image.onload = function() {
        g_bg2 = new pumbax(g_bg2Image);
        isReady(++cnt,completionCallback);
    };

    g_bg2Image.src = "sprites/bg2.png";

//25. gpreload background for level 3
    var g_bg3Image = new Image();

    g_bg3Image.onload = function() {
        g_bg3 = new pumbax(g_bg3Image);
        isReady(++cnt,completionCallback);
    };

    g_bg3Image.src = "sprites/backgroundlevel3.png";

//26. gpreload background for level 3
    var g_bg4Image = new Image();

    g_bg4Image.onload = function() {
        g_bg4 = new pumbax(g_bg4Image);
        isReady(++cnt,completionCallback);
    };

    g_bg4Image.src = "sprites/backgroundlevel4.png";

//27. gpreload background for level 3
    var g_bg5Image = new Image();

    g_bg5Image.onload = function() {
        g_bg5 = new pumbax(g_bg5Image);
        isReady(++cnt,completionCallback);
    };

    g_bg5Image.src = "sprites/backgroundlevel5.png";

//NOT PRELOADING:
//28. gpreload sound for level 1
    g_audio1 = new Audio("audio/BloodyTears.ogg");
        //g_audio1.play();
    //g_audio1.src = "audio/BloodyTears.ogg"
    g_audio1.oncanplaythrough = function() {
        isReady(++cnt, completionCallback);
    };

//29. preload for bullet 4
    var g_bullet4Image = new Image();

    g_bullet4Image.onload = function() {
        g_bullet4 = new pumbax(g_bullet4Image);
        isReady(++cnt,completionCallback);
    };

    g_bullet4Image.src = "sprites/bullet4.png";
 
 //29. preload for bullet 5
    var g_bullet5Image = new Image();

    g_bullet5Image.onload = function() {
        g_bullet5 = new pumbax(g_bullet5Image);
        isReady(++cnt,completionCallback);
    };

    g_bullet5Image.src = "sprites/bullet5.png";

}