"use strict"
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../data/data.db');

var Dao = function(){
	
	this.init = function(){
		db.serialize(function() {
			  db.run("CREATE TABLE IF NOT EXISTS payments (date TEXT, price REAL, currency TEXT, balance REAL, ks INTEGER," +
				  " vs INTEGER, ss INTEGER, label TEXT, offset_name TEXT, offset TEXT, note TEXT, is_card INTEGER, card_place TEXT, unique(date, price, balance)) ");
			});
	}
	
	this.import = function(payments){
		var stmt = db.prepare("INSERT INTO payments VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
		for (var p in payments) {
				stmt.run(payments[p].toArray(), function(err){
					if (err.code !== 'SQLITE_CONSTRAINT'){
						throw err;
					}
				});
		}
		stmt.finalize();
			
	}
	
	
	
	this.selectByFilter = function(){
		
	}
};

module.exports = new Dao;
