function Explosion()
{
  this.shoot = false
  this.x = 0
  this.y = 0
  this.w = 0
  this.h = 0

  this.img =
loadImage("https://media.discordapp.net/attachments/492840492090916895/576091802830897225/explosion-animation-1.gif")
  this.show = function(){
    // image(this.img, this.x, this.y, this.w, this.h)
  }
  this.update = function(){
    document.getElementById("active").innerHTML = this.shoot
    if(this.shoot == true){
      image(this.img, this.x, this.y, 150, 150)
    }else{
      image(this.img, 10000, 10000, 1, 1)
    }
  }

  }
