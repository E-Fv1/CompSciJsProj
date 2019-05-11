
function Enemy()
{
  this.x = 50
  this.y = 150
  this.w = 550
  this.h = 200
  this.img =
loadImage("https://i.imgur.com/ylUDBl6.png")
  this.dir = 0
  this.shoot = false

  this.show = function (){
    image(this.img, this.x, this.y, this.w, this.h)
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
      if(this.x > 940){
      }else{
        this.x += 5
      }
      }else if(this.dir == 2){
        if(this.x < 10){
      } else {
        this.x = this.x - 5
      }
      }
  }
}
