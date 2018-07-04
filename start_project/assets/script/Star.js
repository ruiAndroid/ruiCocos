
cc.Class({
    extends: cc.Component,

    properties: ()=>({
        //碰撞检测,当两者之间的距离小于这玩意时,视为得分
        pickRadius:0,
        //暂存对象引用
        game:{
            default: null,
            serializable: false
        }
    }),

    onLoad :function() {


    },

    /**
     * 获取主角与星星之间的距离
     */
    getPlayerDistance:function(){
        //根据player节点位置判断距离
        let playerPos = this.game.player.getPosition();
        // 根据两点位置计算两点之间距离
        // console.log("星星的位置:",this.node.position);
        // console.log("角色的位置:",playerPos);
        let dist = cc.pDistance(this.node.position, playerPos);
        return dist;

    },

    /**
     * 两者碰撞时
     */
    onPicked:function(){
        //当星星被收集时,调用game脚本中的接口
        this.game.spawnNewStar();
        // 调用 Game 脚本的得分方法
        this.game.gainScore();
        //销毁当前节点
        this.node.destroy();

    },

    start :function() {

    },

    update :function(dt) {
        //判断星星与主角的距离
        // 每帧判断和主角之间的距离是否小于收集距离
        // console.log(this.getPlayerDistance());
        if (this.getPlayerDistance() < this.pickRadius) {
            // 调用收集行为
            this.onPicked();
            return;
        }
    },
});
