// "Crappy PONG" -- step by step
//
// Step 13: Simplify
/*

Supporting timer-events (via setInterval) *and* frame-events (via requestAnimationFrame)
adds significant complexity to the the code.

I can simplify things a little by focusing on the latter case only (which is the
superior mechanism of the two), so let's try doing that...

The "MAINLOOP" code, inside g_main, is much simplified as a result.

*/

"use strict";

/* jshint browser: true, devel: true, globalstrict: true */

var g_canvas = document.getElementById("myCanvas");
var g_ctx = g_canvas.getContext("2d");

var score = 0;

/*
0        1         2         3         4         5         6         7         8         9
123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
*/

var entityManager = new EntityManager();

// ============
// Player STUFF
// ============

// Player 1

var mainPlayer = new Player({
    cx : 250,
    cy : 500,
    
    GO_UP   : KEY_W,
    GO_RIGHT: KEY_D,
    GO_LEFT : KEY_A,
    GO_DOWN : KEY_S
});

entityManager.setPlayer(mainPlayer);

// Player 2

var KEY_I = 'I'.charCodeAt(0);
var KEY_K = 'K'.charCodeAt(0);

var g_player2 = new Player({
    cx : 500,
    cy : 300,
    halfHeight: 300,
    halfWidth:2,
    
    GO_UP   : KEY_I,
    GO_DOWN : KEY_K
});

var xCord = 20;
for(var i = 0; i < 10; i++)
{
    var en = new Enemy({
    cx : xCord,
    cy : 100,
    });

    console.log(xCord);
    xCord += 25;
    entityManager.addEnemy(en);

}



// =============
// GATHER INPUTS
// =============

function gatherInputs() {
    // Nothing to do here!
    // The event handlers do everything we need for now.
}

// =================
// UPDATE SIMULATION
// =================

// We take a very layered approach here...
//
// The primary `update` routine handles generic stuff such as
// pausing, single-step, and time-handling.
//
// It then delegates the game-specific logic to `updateSimulation`


// GAME-SPECIFIC UPDATE LOGIC

function updateSimulation(du) {
    
    entityManager.update(du);
    particleManager.update(du);
    //g_player2.update(du);
    sideBar.update(du);
}


// =================
// RENDER SIMULATION
// =================

// We take a very layered approach here...
//
// The primary `render` routine handles generic stuff such as
// the diagnostic toggles (including screen-clearing).
//
// It then delegates the game-specific logic to `gameRender`


// GAME-SPECIFIC RENDERING

function renderSimulation(ctx) {
    
    entityManager.render(ctx);
    particleManager.render(ctx);
    sideBar.render(ctx);

}

// Kick it off
function initMain()
{
   g_main.init(); 
}

preloadStuff_thenCall(initMain);