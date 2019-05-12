function Player()
{
  this.x = 50 //Define what and where player is
  this.y = 300
  this.w = 250
  this.h = 100
  this.img =
loadImage("https://media.discordapp.net/attachments/374414128795615232/575900088656986122/TOG-1.png")
  this.dir = 0
  this.shoot = false

  this.show = function (){ //display image
    image(this.img, this.x, this.y, this.w, this.h)
  }
  this.updir = function (){
    this.dir = 1
  }
  this.rightdir = function(){
    this.dir = 2
  }
  this.leftdir = function (){
    this.dir = 3
  }
  this.downdir = function(){
    this.dir = 4
  }
  this.nomove = function(){
    this.dir = 0
  }
  this.update = function(){


    if(this.dir == 1){
        if(this.y < 10){
          }else{
            this.y -= 5
          }
      }else if(this.dir == 2){
        if(this.x > 7440){
          }else{
            this.x += 5
          }
      }else if(this.dir == 3){
        if(this.x < 10){
          } else {
            this.x = this.x - 5
          }
      }else if(this.dir == 4){
        if(this.y > 810){
          } else {
            this.y = this.y + 5
          }
      }
    }
}
