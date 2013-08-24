/**
 * @class Ext.app.Portal
 * @extends Object
 * A sample portal layout application class.
 */
// TODO: Fill in the content panel -- no AccordionLayout at the moment
// TODO: Fix container drag/scroll support (waiting on Ext.lib.Anim)
// TODO: Fix Ext.Tool scope being set to the panel header
// TODO: Drag/drop does not cause a refresh of scroll overflow when needed
// TODO: Grid portlet throws errors on destroy (grid bug)
// TODO: Z-index issues during drag

Ext.define('Ext.app.Portal', {

    extend: 'Ext.container.Viewport',
    //requires: [ 'Ext.diag.layout.ContextItem', 'Ext.diag.layout.Context' ],
    uses: ['Ext.app.PortalPanel', 'Ext.app.PortalColumn', 'Ext.app.GridPortlet', 'Ext.app.ChartPortlet'],

	constructor : function(config) {
		var me = this;
		me.config = config;
		me.callParent(arguments);
	},

    getTools: function(){
        return [{
            xtype: 'tool',
            type: 'gear',
            handler: function(e, target, panelHeader, tool){
                var portlet = panelHeader.ownerCt;
                portlet.setLoading('Loading...');
                Ext.defer(function() {
                    portlet.setLoading(false);
                }, 2000);
            }
        }];
    },

    initComponent: function(){
		var me =this;
        var content = '<div class="portlet-content">'+Ext.example.shortBogusMarkup+'</div>';

		var portalApp = me.config.portalApp;
		var testPanel = Ext.create("Ext.panel.Panel", {
			title : "TestPanel", 
			closable : true
		});

		var testOutputPanel = Ext.create("Ext.panel.Panel", {
			title : "TestOutputPanel", 
			closable : true, 
			height : 500, 
			autoScroll: true
		});

		var testOutputPanel1 = Ext.create("Ext.panel.Panel", {
			title : "TestOutputPanel1", 
			closable : true, 
			height : 500, 
			autoScroll: true
		});

		var testOutputPanel2 = Ext.create("Ext.panel.Panel", {
			title : "TestOutputPanel2", 
			closable : true, 
			height : 500, 
			autoScroll: true
		});
		
		console.log("portal_app in init component = ", portalApp);
		portalApp.testPanel = testPanel;
		portalApp.testOutputPanel = testOutputPanel;
		portalApp.testOutputPanel1 = testOutputPanel1;
		portalApp.testOutputPanel2 = testOutputPanel2;

        Ext.apply(this, {
            id: 'app-viewport',
            layout: {
                type: 'border',
                padding: '0 5 5 5' // pad the layout from the window edges
            },
            items: [{
                id: 'app-header',
                xtype: 'box',
                region: 'north',
                height: 40,
                html: 'Ext Portal'
            },{
                xtype: 'container',
                region: 'center',
                layout: 'border',
                items: [{
                    id: 'app-options',
                    title: 'Options',
                    region: 'west',
                    animCollapse: true,
                    width: 200,
                    minWidth: 150,
                    maxWidth: 400,
                    split: true,
                    collapsible: true,
                    layout:{
                        type: 'accordion',
                        animate: true
                    },
                    items: [{
                        html: content,
                        title:'Navigation',
                        autoScroll: true,
                        border: false,
                        iconCls: 'nav'
                    },{
                        title:'Settings',
                        html: content,
                        border: false,
                        autoScroll: true,
                        iconCls: 'settings'
                    }]
                },{
                    id: 'app-portal',
                    xtype: 'portalpanel',
                    region: 'center',
                    items: [{
                        id: 'col-1',
                        items: [
							portalApp.testOutputPanel1, 
							portalApp.testOutputPanel2
						]
                    },{
                        id: 'col-2',
                        items: [portalApp.testPanel]
                    },{
                        id: 'col-3',
                        items: [portalApp.testOutputPanel]
                    }]
                }]
            }]
        });
        this.callParent(arguments);
    },

    onPortletClose: function(portlet) {
        this.showMsg('"' + portlet.title + '" was removed');
    },

    showMsg: function(msg) {
        var el = Ext.get('app-msg'),
            msgId = Ext.id();

        this.msgId = msgId;
        el.update(msg).show();

        Ext.defer(this.clearMsg, 3000, this, [msgId]);
    },

    clearMsg: function(msgId) {
        if (msgId === this.msgId) {
            Ext.get('app-msg').hide();
        }
    }
});