function Reticle(){
  this.x = 0
  this.y = 0
  this.w = 0
  this.h = 0
  this.img =
loadImage("https://t5.rbxcdn.com/67016792d6f7aef464c3e1e63883354b")
  this.state = false
}

this.on = function(){
  this.state = true
}

this.off = function(){
  this.state = false
  alert('afno')
}
