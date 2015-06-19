

var CSOB_Parser = function(){ extends from Parser
	
	this.parse = function(){
		datum zaúčtování:\s*(.*)\s*částka:\s*(.*)\s*měna:\s*(.*)\s*zůstatek:\s*(.*)\s*konstantní symbol:\s*(.*)\s*variabilní symbol:\s*(.*)\s*specifický symbol:\s*(.*)\s*označení operace:\s*(.*)\s*název protiúčtu:\s*(.*)\s*protiúčet:\s*(.*)\s*poznámka:\s*(.*\n.*)
	}
	
	
};

module.exports = new CSOB_Parser();
