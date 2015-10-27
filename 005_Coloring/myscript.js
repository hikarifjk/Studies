// myscript.js

$(function(){
  draw();
})

function draw() {
  var canvas = $('#mycanvas')[0];
  if (!canvas || !canvas.getContext) {
    return false;
  }
  var count = 0;
  (function yyy() {
      var ctx = canvas.getContext('2d') ;

      ctx.fillStyle = "blue";
      var y = 0;

      (function loop() {
        if (y > canvas.height) {
          y = -50;
        }
        y++;
        ctx.fillRect(Math.floor(Math.random() * 255), y, 5, 5);
        setTimeout(loop, 10);
      })();
      setTimeout(yyy, 1000);
  })();
}
