var fs = require('fs');
var paymentBuilder = require('./payment.js');

var CSOB_Parser = function(){ 
	
	
	
	this.parse = function(){
		var file = "/Users/jandufek/Downloads/HIST_198401220_201506161738.txt";
		
		var regexp = /datum zaúčtování:\s*(.*)\s*částka:\s*(.*)\s*měna:\s*(.*)\s*zůstatek:\s*(.*)\s*konstantní symbol:\s*(.*)\s*variabilní symbol:\s*(.*)\s*specifický symbol:\s*(.*)\s*označení operace:\s*(.*)\s*název protiúčtu:\s*(.*)\s*protiúčet:\s*(.*)\s*poznámka:\s*(.*\s*.*)/g;
		
		var payments = new Array();
		
		fs.readFile(file, "utf8", function(err, data){
			if (err) {
			    return console.log(err);
			}
			var match = regexp.exec(data);
			while (match != null){
				var p = paymentBuilder.newPayment();
				p.date = match[1];
				p.price = match[2];
				p.currency = match[3];
				p.balance = match[4];
				p.ks = match[5];
				p.vs = match[6];
				p.ss = match[7];
				p.label = match[8];
				p.offset_name = match[9];
				p.offset = match[10];
				p.note = match[11];
				if (p.label === 'Transakce platební kartou'){
					p.is_card = true;
					p.card_place = match2[];
					p.date = match2[]
				} else {
					p.is_card = false;
				}
				p.card_place = match[];
				
				payments.push(p);
				
				match = regexp.exec(data);
			}
			return payments
		});
		
	}
	
	
};

module.exports = new CSOB_Parser();
module.exports.parse();