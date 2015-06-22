
var Payment = function(){
	this.date;
	this.price;
	this.currency;
	this.balance;
	this.ks;
	this.vs;
	this.ss;
	this.label;
	this.offset_name;
	this.offset;
	this.note;
	this.is_card;
	this.card_place;
	
	this.toArray = function(){
		return [this.date, this.price, this.currency, this.balance, this.ks, this.vs, this.ss, this.label, this.offset_name, this.offset, this.note, this.is_card, this.card_place]
	}
}

var PaymentBuilder = function(){
	this.newPayment = function(){
		return new Payment();
	}
}

module.exports = new PaymentBuilder();