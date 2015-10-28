// myscript.js

$(function(){
  draw();
})

function draw() {
  var canvas = $('#mycanvas')[0];
  if (!canvas || !canvas.getContext) {
    return false;
  }
  var ctx = canvas.getContext('2d');

  function rand(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var Ball = function(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = "rgba("
    + rand(0, 255) + ', '
    + rand(0, 255) + ', '
    + rand(0, 255) + ', '
    + rand(0, 1)
      ")";
    this.draw = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.closePath();
      ctx.fill();
    }
    this.larger = function(r) {
      this.r = this.r + r;
    }
  }

  $('#mycanvas').click(function(e) {
    var ball = new Ball(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, 5);
    ball.draw();
    setInterval(function() {
      ball.larger(1);
      ball.draw();
    }, 200);
  });
  ctx.fillStyle = 'gray';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

}
