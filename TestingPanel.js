/** @class Testing panel Панель предназначенная для вывода
 * результатов тестов.
 */

Ext.define("Ext.ux.TestingPanel", {
	extend : "Ext.panel.Panel", 
	alias : "widget.ux_testing_panel", 

	constructor : function(config) {
		var me = this;
		
		/** @cfg {boolean} Определяет будет ли исползоваться значение 
		 * окружения по умолчанию */
		me.isDefaultJasmineEnv = config.isDefaultJasmineEnv || false;
		me.callParent(arguments);
	}, 
	
	initComponent : function() {
		var me = this;
		me.items = me.items || [];
		me.callParent(arguments);
	}, 

	onRender : function () {
		var me = this;
		me.callParent(arguments);
		if (me.isDefaultJasmineEnv) {
			me.jasmineEnv = jasmine.getEnv();
		} else {
			me.jasmineEnv = jasmine.getNewEnv();
		}
		
		me.jasmineEnv.updateInterval = 250;
		outputPanel.add(Ext.create("Ext.Component", {html : jasmineEnv.versionString()}));
		var el = Ext.create("Ext.Component", { contentEl : document.createElement("div")});
		me.add(el);
		el = el.getEl();
		el.body = el;
		el.location = document.location;
		var htmlReporter = new jasmine.HtmlReporter(el);
		me.jasmineEnv.addReporter(htmlReporter);
	}, 

	execute : function () {
		var me = this;
		if (me.jasmineEnv) {
			me.jasmineEnv.execute();
		}
	}
});