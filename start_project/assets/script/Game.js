/**
 * 游戏主逻辑控制脚本
 */
cc.Class({
    extends: cc.Component,

    properties: {
        // 这个属性引用了星星预制资源
        starPrefab: {
            default: null,
            type: cc.Prefab
        },
        //星星产生后消失时间的随机范围
        minStarDuration:0,
        maxStarDuration:0,
        //地面节点,用于确定星星生成的高度
        ground:{
            default:null,
            type:cc.Node,
        },
        //player节点,用户获取主角弹跳高度,以及控制主角行动开关
        player:{
            default:null,
            type:cc.Node
        },
        //score对象的引用
        scoreDisplay:{
            type:cc.Label,
            default:null,
        },
        //得分音效
        scoreAudio:{
            default:null,
            url:cc.AudioClip,
        }



    },

    onLoad:function () {
        //初始化分数为0
        this.score=0;
        //获取地平面的y坐标
        // this.groundY=this.ground.y+this.ground.height/2;
        this.spawnNewStar()


    },

    /**
     * 获取最新的分数并显示
     */
    gainScore:function(){
        this.score += 1;
        // 更新 scoreDisplay Label 的文字
        this.scoreDisplay.string = 'Score: ' + this.score.toString();
        // 播放得分音效
        cc.audioEngine.playEffect(this.scoreAudio, false);

    },

    /**
     * 随机生成一个星星
     */

    spawnNewStar:function(){
        //使用给定的模板在场景中生成一个新的节点
        let newStar=cc.instantiate(this.starPrefab);
        //将新增的节点添加到Canvas节点下面
        this.node.addChild(newStar);
        // 为星星设置一个随机位置
        newStar.setPosition(this.getNewStarPosition());
        //将Game组件的实例传入星星组件
        newStar.getComponent('Star').game=this;

    },

    /**
     * 设置一个随机位置
     */
    getNewStarPosition:function(){
        console.log('查看groundY');
        console.log(this.groundY);
        let randX = 0;
        // 根据地平面位置和主角跳跃高度，随机得到一个星星的 y 坐标
        let randY =  cc.randomMinus1To1()*this.player.getComponent('Player').jumpHeight/3;
        // 根据屏幕宽度，随机得到一个星星 x 坐标
        let maxX = this.node.width/2;
        randX = cc.randomMinus1To1() * maxX;
        // 返回星星坐标
        // console.log('查看随机生成的星星的坐标');
        // console.log(randX, randY);

        return cc.p(randX, randY);


    },

    start () {

    },

    update (dt) {

    },
});
