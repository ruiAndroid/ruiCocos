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

    properties: ()=>({
        player:{
            default:null,
            type:cc.Node,
        }
    }),

    onLoad:function(){

        let leftNode=this.node.getChildByName('left');

        let rightNode=this.node.getChildByName('right');

        let playerNode=this.player.getComponent('Player');
        //左边按钮按下去
        leftNode.on(cc.Node.EventType.TOUCH_START,function(){
            playerNode.accLeft=true;
        },this);
        //左边按钮抬起来
        leftNode.on(cc.Node.EventType.TOUCH_END,function () {
            playerNode.accLeft=false;
        },this);

        //右边按钮按下去
        rightNode.on(cc.Node.EventType.TOUCH_START,function(){
            playerNode.accRight = true;
        },this);
        //右边按钮抬起来
        rightNode.on(cc.Node.EventType.TOUCH_END,function(){
            playerNode.accRight = false;
        },this);
    },

    start:function () {

    },

});
