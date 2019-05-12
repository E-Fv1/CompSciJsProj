  var player
  var pshot
  var aimer

  var enemy1
  var enemy2
  var enemy3
  var enemy4
  var enemy5

  var reloadState = 0
  var reloaded = false
  var pause = false

  function setup(){
    createCanvas(1200, 600)
    enemy1 = new Enemy()
    player = new Player()
    pshot = new Explosion()
    aimer = new Reticle()
  }

  function draw(){
    background('#222222')
    if(!pause){
      enemy1.update()
      pshot.update()
      player.update()
      // enemy1.update()
      sightupdate()
      shootPosUpdate()
      enemytrack()
    }
    player.show()
    enemy1.show()
    pshot.show()
    reloadCheck()
  }
  function sighton(){
    aimer.state = true
    aimer.w = 200
    aimer.h = 200
    player.dir = 0
  }

  function enemytrack(){
    if(player.x >= enemy1.x){
      enemy1.dir = 1
    } else {
      enemy1.dir = 2
    }
  }

  function sightoff(){
    aimer.state = false
    aimer.w = 1
    aimer.h = 1
  }

  function sightupdate(){
    aimer.x = player.x - 600
    aimer.y = player.y - 60
    image(aimer.img, aimer.x, aimer.y, aimer.w, aimer.h)
  }

  function shootPosUpdate(){
    pshot.x = aimer.x + 30
    pshot.y = aimer.y + 25
  }

    function startReload(){
      reloadState++
    }

  function reloadCheck(){
      if(reloadState >= 15){
        reloadState = 0
        reloaded = true
      }
      document.getElementById("reload").innerHTML = reloaded + "..." + reloadState
    }

  function shoot(){
    if(pshot.shoot == true){
      pshot.shoot = false
    }
    if(reloaded == true){
      if(pshot.shoot == true){
        pshot.shoot = false
        reloaded = false
      }
      if(pshot.shoot == false){
        pshot.shoot = true
        reloaded = false
        // reloadState = 0
      } else {
      if(pshot.shoot == true){
        alert('dfs');pshot.shoot = false
      }
      }
    }
  }

  function keyPressed()
  {
    if(!pause && keyCode === UP_ARROW){
      player.updir()
      pshot.shoot = false
      sightoff()
    } else if (!pause && keyCode === RIGHT_ARROW){
      player.rightdir()
      pshot.shoot = false
      sightoff()
    } else if (!pause && keyCode === LEFT_ARROW){
      player.leftdir()
      pshot.shoot = false
      sightoff()
    } else if (!pause && keyCode === DOWN_ARROW){
      player.downdir()
      pshot.shoot = false
      sightoff()
    } else if (!pause && keyCode === SHIFT){
      player.nomove()
      pshot.shoot = false
      sighton()
    } else if (key === 'p'){
      pause = !pause
    }
    if(!pause && keyCode === ENTER){
      shoot()
      sightoff()
    }
    if(!pause && key === 'r'){
      startReload()
    }

  }
