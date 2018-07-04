(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/Background.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '718589GKQJL7qKkwrKSR7gn', 'Background', __filename);
// script/Background.js

'use strict';

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
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

        var leftNode = this.node.getChildByName('left');

        var rightNode = this.node.getChildByName('right');

        var playerNode = this.player.getComponent('Player');
        //左边按钮按下去
        leftNode.on(cc.Node.EventType.TOUCH_START, function () {
            playerNode.accLeft = true;
        }, this);
        //左边按钮抬起来
        leftNode.on(cc.Node.EventType.TOUCH_END, function () {
            playerNode.accLeft = false;
        }, this);

        //右边按钮按下去
        rightNode.on(cc.Node.EventType.TOUCH_START, function () {
            playerNode.accRight = true;
        }, this);
        //右边按钮抬起来
        rightNode.on(cc.Node.EventType.TOUCH_END, function () {
            playerNode.accRight = false;
        }, this);
    },

    start: function start() {}

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
        //# sourceMappingURL=Background.js.map
        