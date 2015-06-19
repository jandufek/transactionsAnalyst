"use strict"
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../data/data.db');

var Dao = function(){
	
	this.init = function(){
		db.serialize(function() {
			  db.run("CREATE TABLE IF NOT EXISTS payments (date TEXT, price REAL, currency TEXT, balance REAL, ks INTEGER," +
				  " vs INTEGER, ss INTEGER, label TEXT, offset_name TEXT, offset TEXT, note TEXT, is_card INTEGER, card_place TEXT)");
			});
	}
	
	this.import = function(payments){
		var stmt = db.prepare("INSERT INTO payments VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
		for (all payments) {
			if (!paymentExist(payment)){
				stmp.run(payment);
			}			
		}	
		stmt.finalize();	
	}
	
	this.paymentExist = function(payment){
		exist??
	}
	
	
	this.selectByFilter() = function(){
		
	}
};

module.exports = new Dao;


/*
  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});

db.close();
*/