(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/Star.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '45f24YoZZREvbK87vHesj9z', 'Star', __filename);
// script/Star.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: function properties() {
        return {
            //碰撞检测,当两者之间的距离小于这玩意时,视为得分
            pickRadius: 0,
            //暂存对象引用
            game: {
                default: null,
                serializable: false
            }
        };
    },

    onLoad: function onLoad() {},

    /**
     * 获取主角与星星之间的距离
     */
    getPlayerDistance: function getPlayerDistance() {
        //根据player节点位置判断距离
        var playerPos = this.game.player.getPosition();
        // 根据两点位置计算两点之间距离
        console.log("星星的位置:", this.node.position);
        console.log("角色的位置:", playerPos);
        var dist = cc.pDistance(this.node.position, playerPos);
        return dist;
    },

    /**
     * 两者碰撞时
     */
    onPicked: function onPicked() {
        //当星星被收集时,调用game脚本中的接口
        this.game.spawnNewStar();
        // 调用 Game 脚本的得分方法
        this.game.gainScore();
        //销毁当前节点
        this.node.destroy();
    },

    start: function start() {},

    update: function update(dt) {
        //判断星星与主角的距离
        // 每帧判断和主角之间的距离是否小于收集距离
        console.log(this.getPlayerDistance());
        if (this.getPlayerDistance() < this.pickRadius) {
            // 调用收集行为
            this.onPicked();
            return;
        }
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Star.js.map
        