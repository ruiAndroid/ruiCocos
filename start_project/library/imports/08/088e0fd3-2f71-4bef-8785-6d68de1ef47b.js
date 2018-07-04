"use strict";
cc._RF.push(module, '088e0/TL3FL74eFbWjeHvR7', 'Player');
// script/Player.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
/**
 * 节点
 *  节点是承载组件的实体
 *
 */

cc.Class({
    extends: cc.Component,

    properties: function properties() {
        return {
            //主角跳跃高度
            jumpHeight: 0,
            //主角跳跃持续时间
            jumpDuration: 0,
            //最大的移动速度
            maxMoveSpeed: 0,
            //加速度
            accel: 0,
            // 加速度方向开关
            accLeft: false,
            accRight: false,
            xSpeed: 0
        };
    },

    getAccLeft: function getAccLeft() {
        return this.accLeft;
    },
    onLoad: function onLoad() {
        console.log('加载游戏');
        // 初始化跳跃动作
        this.jumpAction = this.setJumpAction();
        this.node.runAction(this.jumpAction);
    },

    start: function start() {},

    /**
     * 跳跃的方法
     */
    setJumpAction: function setJumpAction() {
        /**
         * 在duration时间内，相对当前位置基础上移动x，y个单位。
         * moveBy(duration,x,y)函数,移动指定距离,相对移动
         *
         * easing()减速
         *
         *
         */
        // 跳跃上升
        var jumpUp = cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        // 下落
        var jumpDown = cc.moveBy(this.jumpDuration, cc.p(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        // 不断重复
        console.log("不断重复上跳和下落的过程");
        return cc.repeatForever(cc.sequence(jumpUp, jumpDown));
    },

    update: function update(dt) {
        //duration time表示每帧之间的间隔时间
        // 根据当前加速度方向每帧更新速度
        // console.log(this.accLeft);
        if (this.accLeft) {
            this.xSpeed -= this.accel * dt;
        } else if (this.accRight) {
            this.xSpeed += this.accel * dt;
        }

        // 限制主角的速度不能超过最大值
        if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
            // if speed reach limit, use max speed with current direction
            this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
        }

        // 根据当前速度更新主角的位置
        this.node.x += this.xSpeed * dt;
    }
});

cc._RF.pop();