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
        this.moveBy = function(x, y, frame) {
          this.tl.moveBy(x, y, frame);
        };
        core.rootScene.addChild(this);
      }
    });

    var bear1 = new Bear(10, 80);
    var bear2 = new Bear(210, 80);

    bear1.moveBy(90, 0, 80);
    bear2.moveBy(-90, 0, 80);


//    straightBear.moveStraight(0, 140, 20);


  }
  core.start();
};
