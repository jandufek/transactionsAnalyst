var fs = require('fs');
var paymentBuilder = require('./payment.js');

var CSOB_Parser = function(){ 
	
	
	
	this.parse = function(callback){
		var file = "/Users/jandufek/Downloads/HIST_198401220_201506161738.txt";
		
		var regexp = /datum zaúčtování:\s*(\d{1,2})\.(\d{1,2})\.(\d{4})\s*částka:\s*(.*)\s*měna:\s*(.*)\s*zůstatek:\s*(.*)\s*konstantní symbol:\s*(.*)\s*variabilní symbol:\s*(.*)\s*specifický symbol:\s*(.*)\s*označení operace:\s*(.*)\s*název protiúčtu:\s*(.*)\s*protiúčet:\s*(.*)\s*poznámka:\s*(.*\s*.*)/g;
		
		var regexpCard = /(\d{1,2})\.(\d{1,2})\.(\d{4})\s*Místo:\s*(.*)/g;
		
		var payments = new Array();
		
		fs.readFile(file, "utf8", function(err, data){
			if (err) {
			    return console.log(err);
			}
			var match = regexp.exec(data);
			while (match != null){
				var p = paymentBuilder.newPayment();
				p.date = transformDate(match[1].trim(), match[2].trim(), match[3].trim());
				p.price = match[4].trim();
				p.currency = match[5].trim();
				p.balance = match[6].trim();
				p.ks = match[7].trim();
				p.vs = match[8].trim();
				p.ss = match[9].trim();
				p.label = match[10].trim();
				p.offset_name = match[11].trim();
				p.offset = match[12].trim();
				p.note = match[13].trim().replace(/\s\s+/g, ' ');
				if (p.label === 'Transakce platební kartou'){
					p.is_card = true;
					var cardMatch = regexpCard.exec(p.note);
					while (cardMatch != null){
						p.date = transformDate(cardMatch[1].trim(), cardMatch[2].trim(), cardMatch[3].trim());
						p.card_place = cardMatch[4].trim();
						cardMatch = regexpCard.exec(p.note);
					}
				} else {
					p.is_card = false;
				}				
				payments.push(p);
				
				match = regexp.exec(data);
			}
			callback(payments);
		});
		
	}
	
	var transformDate = function(day, month, year){
		var f = year + "-";
		f += (month.length == 1) ? "0" + month : month;
		f += "-";
		f += (day.length == 1) ? "0" + day : day;
		return f;
	}
	
	
};

module.exports = new CSOB_Parser();


"Částka: 37,7 CZK 19.12.2013 Místo: BILLA S.R.O. PRAHA - MENZA"
"Částka: 84,3 CZK 18.12.2013 Místo: BILLA S.R.O. PRAHA - MENZA"