require=function o(s,a,r){function u(e,t){if(!a[e]){if(!s[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(p)return p(e,!0);var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}var i=a[e]={exports:{}};s[e][0].call(i.exports,function(t){return u(s[e][1][t]||t)},i,i.exports,o,s,a,r)}return a[e].exports}for(var p="function"==typeof require&&require,t=0;t<r.length;t++)u(r[t]);return u}({Background:[function(t,e,n){"use strict";cc._RF.push(e,"718589GKQJL7qKkwrKSR7gn","Background"),cc.Class({extends:cc.Component,properties:function(){return{player:{default:null,type:cc.Node}}},onLoad:function(){var t=this.node.getChildByName("left"),e=this.node.getChildByName("right"),n=this.player.getComponent("Player");t.on(cc.Node.EventType.TOUCH_START,function(){n.accLeft=!0},this),t.on(cc.Node.EventType.TOUCH_END,function(){n.accLeft=!1},this),e.on(cc.Node.EventType.TOUCH_START,function(){n.accRight=!0},this),e.on(cc.Node.EventType.TOUCH_END,function(){n.accRight=!1},this)},start:function(){}}),cc._RF.pop()},{}],Game:[function(t,e,n){"use strict";cc._RF.push(e,"ac65aF2nFdO/pLoEmAKHYAX","Game"),cc.Class({extends:cc.Component,properties:{starPrefab:{default:null,type:cc.Prefab},minStarDuration:0,maxStarDuration:0,ground:{default:null,type:cc.Node},player:{default:null,type:cc.Node},scoreDisplay:{type:cc.Label,default:null},scoreAudio:{default:null,url:cc.AudioClip}},onLoad:function(){this.score=0,this.spawnNewStar()},gainScore:function(){this.score+=1,this.scoreDisplay.string="Score: "+this.score.toString(),cc.audioEngine.playEffect(this.scoreAudio,!1)},spawnNewStar:function(){var t=cc.instantiate(this.starPrefab);this.node.addChild(t),t.setPosition(this.getNewStarPosition()),t.getComponent("Star").game=this},getNewStarPosition:function(){console.log("查看groundY"),console.log(this.groundY);var t,e=cc.randomMinus1To1()*this.player.getComponent("Player").jumpHeight/3,n=this.node.width/2;return t=cc.randomMinus1To1()*n,cc.p(t,e)},start:function(){},update:function(t){}}),cc._RF.pop()},{}],Player:[function(t,e,n){"use strict";cc._RF.push(e,"088e0/TL3FL74eFbWjeHvR7","Player"),cc.Class({extends:cc.Component,properties:function(){return{jumpHeight:0,jumpDuration:0,maxMoveSpeed:0,accel:0,accLeft:!1,accRight:!1,xSpeed:0,jumpAudio:{default:null,url:cc.AudioClip}}},getAccLeft:function(){return this.accLeft},onLoad:function(){console.log("加载游戏"),this.jumpAction=this.setJumpAction(),this.node.runAction(this.jumpAction)},start:function(){},setJumpAction:function(){var t=cc.moveBy(this.jumpDuration,cc.p(0,this.jumpHeight)).easing(cc.easeCubicActionOut()),e=cc.moveBy(this.jumpDuration,cc.p(0,-this.jumpHeight)).easing(cc.easeCubicActionIn()),n=cc.callFunc(this.playJumpSound,this);return console.log("不断重复上跳和下落的过程"),cc.repeatForever(cc.sequence(t,e,n))},playJumpSound:function(){cc.audioEngine.playEffect(this.jumpAudio,!1)},update:function(t){this.accLeft?this.xSpeed-=this.accel*t:this.accRight&&(this.xSpeed+=this.accel*t),Math.abs(this.xSpeed)>this.maxMoveSpeed&&(this.xSpeed=this.maxMoveSpeed*this.xSpeed/Math.abs(this.xSpeed)),this.node.x+=this.xSpeed*t}}),cc._RF.pop()},{}],Star:[function(t,e,n){"use strict";cc._RF.push(e,"45f24YoZZREvbK87vHesj9z","Star"),cc.Class({extends:cc.Component,properties:function(){return{pickRadius:0,game:{default:null,serializable:!1}}},onLoad:function(){},getPlayerDistance:function(){var t=this.game.player.getPosition();return cc.pDistance(this.node.position,t)},onPicked:function(){this.game.spawnNewStar(),this.game.gainScore(),this.node.destroy()},start:function(){},update:function(t){this.getPlayerDistance()<this.pickRadius&&this.onPicked()}}),cc._RF.pop()},{}]},{},["Background","Game","Player","Star"]);