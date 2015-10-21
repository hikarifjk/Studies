enchant();

window.onload = function() {
  var core = new Core(320, 320);
  core.preload('chara1.png');
  core.fps = 15;
  core.onload = function() {

    var Bear = Class.create(Sprite, {
      initialize: function(x, y) {
        Sprite.call(this, 32, 32);
        this.x = x;
        this.y = y;
        this.frame = 32;

        this.image = core.assets['chara1.png'];
        var straightCount = 0;
        this.moveStraight = function(x, y, frame) {
          this.tl.moveBy(x, y, frame)
            .moveBy(x * -1, y * -1, frame * 2)
            .repeat(function(){
              if (4 < straightCount) {
                this.tl.unloop();
              }
              straightCount++;
            }, 5)
            .loop();

        }

        var drad = Math.PI * 2 / 100;
        var theta = 0;
        var r = 30;
        this.moveTurnAround = function(frame) {
          this.on('enterframe', function(){
            theta += 0.8;
            var x = r * Math.cos(theta);
            var y = r * Math.sin(theta);

            this.tl.moveBy(x, y, frame);
          });
        }

        core.rootScene.addChild(this);
      }
    });

    var straightBear = new Bear(10, 80);
    straightBear.moveStraight(0, 140, 20);


    var turnaroundBear = new Bear(100, 80);
    turnaroundBear.moveTurnAround(10);

  }
  core.start();
};
