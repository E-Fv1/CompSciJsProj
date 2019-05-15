
function Enemy()
{
  this.x = 100
  this.y = 100
  this.w = 550
  this.h = 200
  this.img =
loadImage("https://i.imgur.com/ylUDBl6.png")
  this.dir = 0
  this.shoot = false
  this.alive = true
  this.firearea = 100

  this.track = function(){

  }

  this.show = function (){
    if(this.alive == true){
      image(this.img, this.x, this.y, this.w, this.h)
    }
  }
  this.stop = function(){
    this.dir = 0
  }
  this.rightdir = function(){
    this.dir = 1
  }
  this.leftdir = function (){
    this.dir = 2
  }
  this.update = function(){
      if(this.dir == 1){
      if(this.x > 10000){
      }else{
        this.x += 6
      }
      }else if(this.dir == 2){
        if(this.x < 10){
      } else {
        this.x -= 1
      }
      } else if(this.dir == 3){
        this.y += .05
      } else if (this.dir == 4) {
        this.y -= .05
      }
    }
}
