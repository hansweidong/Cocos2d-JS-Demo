var ButtonLayer = cc.Layer.extend({
	ctor:function(){
		this._super();
		var menuItem = new cc.MenuItemImage(res.start_N,res.start_S,function(){
			cc.log("Click The Start Button");
			cc.director.runScene(new HelloWorldScene());
		});
		var size = cc.winSize;
		var bg = new cc.Sprite(res.background_png);
		bg.attr({
			x:size.width/2,
			y:size.height/2
		});
		this.addChild(bg,0);
		var menu = cc.Menu(menuItem);
		menu.x=size.width/3;
		menu.y=size.height/2;
		this.addChild(menu, 1);
		return true;
	}
});

var MenuScene = cc.Scene.extend({
	onEnter:function(){
		this._super();
		var layer = new ButtonLayer();
		this.addChild(layer);
	}
})