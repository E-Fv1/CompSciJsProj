var player;
var pshot;
var aimer;

var enemy1;
var enemy2;
var enemy3;
var enemy4;
var enemy5;

var reloadState = 0;
var reloaded = false;
var pause = false;

var level = 1;

function lv1reset() {
  enemy1.alive = true;
  enemy1.x = 100;
  enemy1.y = 100;
  player.x = 1100;
  player.y = 600;
  player.dir = 0;
  level = 1;
}

function lv2reset() {
  enemy1.alive = true;
  enemy2.alive = true;
  // enemy3.alive = true
  // enemy4.alive = true
  // enemy5.alive = true
  enemy1.x = 100;
  enemy1.y = 100;
  enemy2.x = 300;
  enemy2.y = 300;
  // enemy3.x = 500
  // enemy3.y = 300
  // enemy4.x = 700
  // enemy4.y = 400
  // enemy5.x = 900
  // enemy5.y = 500
  player.x = 1100;
  player.y = 600;
  player.dir = 0;
  level = 2;
}

function lv3reset() {
  enemy1.alive = true;
  enemy2.alive = true;
  enemy3.alive = true;
  // enemy4.alive = true
  // enemy5.alive = true
  enemy1.x = 100;
  enemy1.y = 100;
  enemy2.x = 300;
  enemy2.y = 300;
  enemy3.x = 500;
  enemy3.y = 600;
  // enemy4.x = 700
  // enemy4.y = 400
  // enemy5.x = 900
  // enemy5.y = 500
  player.x = 1100;
  player.y = 600;
  player.dir = 0;
  level = 3;
}

function lv4reset() {
  enemy1.alive = true;
  enemy2.alive = true;
  enemy3.alive = true;
  enemy4.alive = true;
  // enemy5.alive = true
  enemy1.x = 100;
  enemy1.y = 100;
  enemy2.x = 300;
  enemy2.y = 300;
  enemy3.x = 800;
  enemy3.y = 100;
  enemy4.x = 1400;
  enemy4.y = 600;
  // enemy5.x = 900
  // enemy5.y = 500
  player.x = 1100;
  player.y = 600;
  player.dir = 0;
  level = 4;
}

function lv5reset() {
  enemy1.alive = true;
  enemy2.alive = true;
  enemy3.alive = true;
  enemy4.alive = true;
  enemy5.alive = true;
  enemy1.x = 100;
  enemy1.y = 100;
  enemy2.x = 300;
  enemy2.y = 300;
  enemy3.x = 1500;
  enemy3.y = 300;
  enemy4.x = 700;
  enemy4.y = 200;
  enemy5.x = 900;
  enemy5.y = 500;
  player.x = 1500;
  player.y = 600;
  player.dir = 0;
  level = 5;
}

function winCheck() {
  if (level == 1 && enemy1.alive == false) {
    alert("You have finished level 1!");
    level = 0;
  }
  if (level == 2 && enemy1.alive == false && enemy2.alive == false) {
    alert("You have finished level 2!");
    level = 0;
  }
  if (
    level == 3 &&
    enemy1.alive == false &&
    enemy2.alive == false &&
    enemy3.alive == false
  ) {
    alert("You have finished level 3!");
    level = 0;
  }
  if (
    level == 4 &&
    enemy1.alive == false &&
    enemy2.alive == false &&
    enemy3.alive == false &&
    enemy4.alive == false
  ) {
    alert("You have finished level 4!");
    level = 0;
  }
  if (
    level == 5 &&
    enemy1.alive == false &&
    enemy2.alive == false &&
    enemy3.alive == false &&
    enemy4.alive == false &&
    enemy5.alive == false
  ) {
    alert("You have finished level 5!");
    level = 0;
  }
}

function setup() {
  createCanvas(2100, 800);
  enemy1 = new Enemy();
  enemy2 = new Enemy();
  enemy2.x = 200;
  enemy2.alive = false;
  enemy3 = new Enemy();
  enemy3.x = 300;
  enemy3.alive = false;
  enemy4 = new Enemy();
  enemy4.x = 400;
  enemy4.alive = false;
  enemy5 = new Enemy();
  enemy5.x = 500;
  enemy5.alive = false;
  player = new Player();

  pshot = new Explosion();
  aimer = new Reticle();
}

function draw() {
  background("#222222");
  if (!pause) {
    enemy1.update();
    enemy2.update();
    enemy3.update();
    enemy4.update();
    enemy5.update();
    pshot.update();
    player.update();
    sightupdate();
    shootPosUpdate();
    enemytrack();
    hitDetection();
    winCheck();
  }
  player.show();
  enemy1.show();
  enemy2.show();
  enemy3.show();
  enemy4.show();
  enemy5.show();
  pshot.show();
  reloadCheck();
  ETPHitDetection();
  enemyFireDevUpdate();
}
function sighton() {
  aimer.state = true;
  aimer.w = 200;
  aimer.h = 200;
  player.dir = 0;
}

function enemytrack() {
  if (pause == false) {
    if (player.x >= enemy1.x) {
      enemy1.dir = 1;
    } else {
      enemy1.dir = 2;
    }
    if (player.x >= enemy2.x) {
      enemy2.dir = 1;
    } else {
      enemy2.dir = 2;
    }
    if (player.x >= enemy3.x) {
      enemy3.dir = 1;
    } else {
      enemy3.dir = 2;
    }
    if (player.x >= enemy4.x) {
      enemy4.dir = 1;
    } else {
      enemy4.dir = 2;
    }
    if (player.x >= enemy5.x) {
      enemy5.dir = 1;
    } else {
      enemy5.dir = 2;
    }
    if (player.y > enemy1.y && player.y > enemy1.y - 100) {
      enemy1.dir = 3;
    } else if (player.y < enemy1.y && player.y < enemy1.y - 100) {
      enemy1.dir = 4;
    }
    if (player.y > enemy2.y && player.y > enemy2.y - 100) {
      enemy2.dir = 3;
    } else if (player.y < enemy2.y && player.y < enemy2.y - 100) {
      enemy2.dir = 4;
    }
    if (player.y > enemy3.y && player.y > enemy3.y - 100) {
      enemy3.dir = 3;
    } else if (player.y < enemy3.y && player.y < enemy3.y - 100) {
      enemy3.dir = 4;
    }
    if (player.y > enemy4.y && player.y > enemy4.y - 100) {
      enemy4.dir = 3;
    } else if (player.y < enemy4.y && player.y < enemy4.y - 100) {
      enemy4.dir = 4;
    }
    if (player.y > enemy5.y && player.y > enemy5.y - 100) {
      enemy5.dir = 3;
    } else if (player.y < enemy5.y && player.y < enemy5.y - 100) {
      enemy5.dir = 4;
    }
  }
}

function sightoff() {
  aimer.state = false;
  aimer.w = 1;
  aimer.h = 1;
}

function enemyFireDevUpdate() {
  enemy1.firearea = 100 + Math.random() * 5;
}

function ETPHitDetection() {
  if (
    player.alive == true &&
    player.x <= enemy1.firearea &&
    player.x - 250 >= enemy1.firearea &&
    player.y <= enemy1.y + 10 &&
    player.y + 110 >= enemy1.y
  ) {
  }

  function sightupdate() {
    aimer.x = player.x - 600;
    aimer.y = player.y - 60;
    image(aimer.img, aimer.x, aimer.y, aimer.w, aimer.h);
  }

  function shootPosUpdate() {
    pshot.x = aimer.x + 30;
    pshot.y = aimer.y + 25;
  }

  function startReload() {
    reloadState++;
  }

  function reloadCheck() {
    if (reloadState >= 15) {
      reloadState = 0;
      reloaded = true;
    }
    document.getElementById("reload").innerHTML =
      reloaded + "..." + reloadState;
  }

  function shoot() {
    if (pshot.shoot == true) {
      pshot.shoot = false;
    }
    if (reloaded == true) {
      if (pshot.shoot == true) {
        pshot.shoot = false;
        reloaded = false;
      }
      if (pshot.shoot == false) {
        pshot.shoot = true;
        reloaded = false;
        // reloadState = 0
      } else {
        if (pshot.shoot == true) {
          alert("dfs");
          pshot.shoot = false;
        }
      }
    }
  }

  function barrage() {
    for (var i = 0; i < 300; i++) {
      pshot.x = aimer.x + 30 + i * 0.5;
      pshot.shoot = true;
    }
  }

  function hitDetection() {
    if (pshot.shoot == true) {
      if (
        enemy1.alive == true &&
        enemy1.x <= pshot.x &&
        enemy1.x + 600 >= pshot.x &&
        enemy1.y <= pshot.y &&
        enemy1.y + 150 >= pshot.y
      ) {
        alert("Enemy Killed");
        pshot.shoot = false;
        enemy1.alive = false;
      }
      if (
        enemy2.alive == true &&
        enemy2.x <= pshot.x &&
        enemy2.x + 600 >= pshot.x &&
        enemy2.y <= pshot.y &&
        enemy2.y + 250 >= pshot.y
      ) {
        alert("Enemy Killed");
        pshot.shoot = false;
        enemy2.alive = false;
      }
      if (
        enemy3.alive == true &&
        enemy3.x <= pshot.x &&
        enemy3.x + 600 >= pshot.x &&
        enemy3.y <= pshot.y &&
        enemy3.y + 350 >= pshot.y
      ) {
        alert("Enemy Killed");
        pshot.shoot = false;
        enemy3.alive = false;
      }
      if (
        enemy4.alive == true &&
        enemy4.x <= pshot.x &&
        enemy4.x + 600 >= pshot.x &&
        enemy4.y <= pshot.y &&
        enemy4.y + 450 >= pshot.y
      ) {
        alert("Enemy Killed");
        pshot.shoot = false;
        enemy4.alive = false;
      }
      if (
        enemy5.alive == true &&
        enemy5.x <= pshot.x &&
        enemy5.x + 600 >= pshot.x &&
        enemy5.y <= pshot.y &&
        enemy5.y + 550 >= pshot.y
      ) {
        alert("Enemy Killed");
        pshot.shoot = false;
        enemy5.alive = false;
      }
    }
  }

  function keyPressed() {
    if (!pause && keyCode === UP_ARROW) {
      player.updir();
      pshot.shoot = false;
      sightoff();
    } else if (!pause && keyCode === RIGHT_ARROW) {
      player.rightdir();
      pshot.shoot = false;
      sightoff();
    } else if (!pause && keyCode === LEFT_ARROW) {
      player.leftdir();
      pshot.shoot = false;
      sightoff();
    } else if (!pause && keyCode === DOWN_ARROW) {
      player.downdir();
      pshot.shoot = false;
      sightoff();
    } else if (!pause && keyCode === SHIFT) {
      player.nomove();
      pshot.shoot = false;
      sighton();
    } else if (key === "p") {
      pause = !pause;
    }
    if (!pause && keyCode === ENTER) {
      shoot();
      sightoff();
      player.dir = 0;
    }
    if (!pause && key === "r") {
      startReload();
    }
    if (!pause && key === "h") {
      barrage();
    }
  }
}
