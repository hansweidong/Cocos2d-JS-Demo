var HelloWorldLayer = cc.Layer.extend({
	bgSprit:null,
	arrays:null,
	score:null,
	socreNum:null,
    ctor:function () {
    	this._super();
    	var size = cc.winSize;
    	this.scoreNum=0;
    	this.score = new cc.LabelTTF("Score:","",50);
    	this.score.x=size.width/2;
    	this.score.y=size.height/2;
    	this.addChild(this.score,2);
    	this.arrays = [];
    	this.bgSprit =new cc.Sprite(res.background_png);
    	this.bgSprit.attr({x:size.width/2,y:size.height/2});
    	this.addChild(this.bgSprit, 0);
    	this.initBackground();
    	this.schedule(this.updateBtn, 1, 1024, 1);
    	return true;
    },
    initBackground:function(){
    	var btn = new cc.Sprite(res.CloseNormal_png);
    	var size = cc.winSize;
    	btn.attr({
    		x:size.width*cc.random0To1(),
    		y:size.height
    	});
    	this.arrays.push(btn);
    	this.addChild(btn, 1);
    	var action = cc.MoveTo(1,cc.p(btn.x, 50));
    	btn.runAction(action);
    },
    updateBtn:function(){
    	this.initBackground();
    	this.removeBtn();
    },
    removeBtn:function(){
    	for(var i=0;i<this.arrays.length;i++){
    		if(this.arrays[i].y==50){
    			cc.log(".>>>>>>>>>>>>");
    			this.arrays[i].removeFromParent();
    			this.arrays[i]=undefined;
    			this.arrays.splice(i,1);
    			this.score.setString("Score:"+(++this.scoreNum));
    		}
    	}
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

