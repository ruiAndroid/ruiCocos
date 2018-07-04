require = function() {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }
        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function(r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }
      return n[i].exports;
    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o;
  }
  return r;
}()({
  Background: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "718589GKQJL7qKkwrKSR7gn", "Background");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: function properties() {
        return {
          player: {
            default: null,
            type: cc.Node
          }
        };
      },
      onLoad: function onLoad() {
        var leftNode = this.node.getChildByName("left");
        var rightNode = this.node.getChildByName("right");
        var playerNode = this.player.getComponent("Player");
        leftNode.on(cc.Node.EventType.TOUCH_START, function() {
          playerNode.accLeft = true;
        }, this);
        leftNode.on(cc.Node.EventType.TOUCH_END, function() {
          playerNode.accLeft = false;
        }, this);
        rightNode.on(cc.Node.EventType.TOUCH_START, function() {
          playerNode.accRight = true;
        });
        rightNode.on(cc.Node.EventType.TOUCH_END, function() {
          playerNode.accRight = false;
        });
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  Player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "088e0/TL3FL74eFbWjeHvR7", "Player");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: function properties() {
        return {
          jumpHeight: 0,
          jumpDuration: 0,
          maxMoveSpeed: 0,
          accel: 0,
          accLeft: false,
          accRight: false,
          xSpeed: 0
        };
      },
      getAccLeft: function getAccLeft() {
        return this.accLeft;
      },
      onLoad: function onLoad() {
        console.log("加载游戏");
        this.jumpAction = this.setJumpAction();
        this.node.runAction(this.jumpAction);
      },
      start: function start() {},
      setJumpAction: function setJumpAction() {
        var jumpUp = cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        var jumpDown = cc.moveBy(this.jumpDuration, cc.p(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        console.log("不断重复上跳和下落的过程");
        return cc.repeatForever(cc.sequence(jumpUp, jumpDown));
      },
      update: function update(dt) {
        this.accLeft ? this.xSpeed -= this.accel * dt : this.accRight && (this.xSpeed += this.accel * dt);
        Math.abs(this.xSpeed) > this.maxMoveSpeed && (this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed));
        this.node.x += this.xSpeed * dt;
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "Background", "Player" ]);