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

        var drad = Math.PI * 2 / 100;
        var theta = 0;
        var r = 30;
        this.moveAround = function(frame) {
          this.tl.moveBy(125, -35, frame)
          .moveBy(48, 35, frame)
          .moveBy(-48, 35, frame)
          .moveTo(this.x, this.y, frame)
          .loop();
        }
        core.rootScene.addChild(this);
      }
    });

    var bear = new Bear(15, 78);
    bear.moveAround(10);
  }
  core.start();
};
