var dao = require("./dao.js");
var csobParser = require("./csob_parser.js");

var Controller = function(){
	
	this.import = function(){
		csobParser.parse(function(values){
			dao.import(values);
		});
	}
	
}

var inst = new Controller();
inst.import();
