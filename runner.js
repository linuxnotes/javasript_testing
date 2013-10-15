
var jasmineReload = function() {
	delete jasmine;
	Ext.Loader.loadScript("jasmine/lib/jasmine-1.3.1/jasmine.js");
	Ext.Loader.loadScript("jasmine/lib/jasmine-1.3.1/jasmine-html.js");
};

var addVersionToOutputPanel1 = function() {
	var outputPanel = portalApp.testOutputPanel1;
	var jasmineEnv = jasmine.getNewEnv();
	jasmineEnv.updateInterval = 250;
	outputPanel.add(Ext.create("Ext.Component", {html : jasmineEnv.versionString()}));
	var el = Ext.create("Ext.Component", { contentEl : document.createElement("div")});
	outputPanel.add(el);
	el = el.getEl();
	el.body = el;
	el.location = document.location;
	var htmlReporter = new jasmine.HtmlReporter(el);
	jasmineEnv.addReporter(htmlReporter);
	
	describe("Test Test1", function() {
		it ("test1", function(){
			var a = 1;
			expect(a).toEqual(1);
		}); 

		it ("test1", function(){
			var a = 1;
			expect(a).toEqual(1);
		}); 
		
		it ("test1", function(){
			var a = 1;
			expect(a).toEqual(1);
		}); 

		it ("test1", function(){
			var a = 1;
			expect(a).toEqual(1);
		}); 

		it ("test1", function(){
			var a = 1;
			expect(a).toEqual(1);
		}); 
	});

	describe("Test Test1_1", function() {
		it ("test1", function(){
			var a = 1;
			expect(a).toEqual(1);
		}); 

		it ("test1", function(){
			var a = 1;
			expect(a).toEqual(1);
		}); 
		
		it ("test1", function(){
			var a = 1;
			expect(a).toEqual(1);
		}); 

		it ("test1", function(){
			var a = 1;
			expect(a).toEqual(1);
		}); 

		it ("test1", function(){
			var a = 1;
			expect(a).toEqual(1);
		}); 
	});

	console.log("outputPanel = ", outputPanel);
	jasmineEnv.execute();
	
};


var addVersionToOutputPanel2 = function() {
	// var jasmine = getJasmine();
	// setHtmlReporter(jasmine);
	var outputPanel = portalApp.testOutputPanel2;
	var jasmineEnv = jasmine.getNewEnv();
	jasmineEnv.updateInterval = 250;
	outputPanel.add(Ext.create("Ext.Component", {html : jasmineEnv.versionString()}));
	var el = Ext.create("Ext.Component", { contentEl : document.createElement("div")});
	outputPanel.add(el);
	el = el.getEl();
	el.body = el; 
	el.location = document.location;
	var htmlReporter = new jasmine.HtmlReporter(el);
	jasmineEnv.addReporter(htmlReporter);
	
	// jasmineEnv.specFilter = function(spec) {
	//  	return htmlReporter.specFilter(spec);
	// };

	describe("Test Test2", function() {
	it ("test2", function(){
		var a = 1;
		expect(a).toEqual(1);
	}); 

	it ("test2", function(){
		var a = 1;
		expect(a).toEqual(1);
	}); 
	
	it ("test2", function(){
		var a = 1;
		expect(a).toEqual(1);
	}); 

	it ("test2", function(){
		var a = 1;
		expect(a).toEqual(1);
	}); 

	it ("test2", function(){
		var a = 1;
		expect(a).toEqual(1);
	}); 
});
	
	console.log("outputPanel = ", outputPanel);
	jasmineEnv.execute();
	
};