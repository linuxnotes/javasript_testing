/** @class Testing panel ������ ��������������� ��� ������
 * ����������� ������. */

Ext.Loader.loadScript("tests.js");

Ext.define("Ext.ux.TestingPanel", {
	extend : "Ext.panel.Panel", 
	alias : "widget.ux_testing_panel", 

	constructor : function(config) {
		var me = this;
		config.autoScroll = true;
		config.height  = 1000;

		/** @cfg {boolean} ���������� ����� �� ������������� �������� 
		 * ��������� �� ��������� */
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
		me.envPrepare();
	},

	envPrepare : function() {
		var me = this;

		if (me.isDefaultJasmineEnv) {
			me.jasmineEnv = jasmine.getEnv();
		} else {
			me.jasmineEnv = jasmine.getNewEnv();
		}
		
		me.jasmineEnv.updateInterval = 250;
		// me.add(Ext.create("Ext.Component", {html : me.jasmineEnv.versionString()}));
		var el = Ext.create("Ext.Component", { contentEl : document.createElement("div")});
		console.log("el =" , el );
		me.add(el);
		console.log("el.el =", el.el);
		console.log("el.getEl() = ", el.getEl());
		el = el.contentEl; // el = el.getEl();
		console.log("el = ",  el );
		el.body = el;
		el.location = document.location;
		var htmlReporter = new jasmine.HtmlReporter(el);
		me.jasmineEnv.addReporter(htmlReporter);
	},

	execute : function () {
		var me = this;
		if (me.jasmineEnv) {
			console.log("before execute");
			me.jasmineEnv.execute();
		}
	}
});