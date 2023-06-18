const mysql = require('mysql2');
const SQL = require('./db');
const { PASSWORD } = require('./db.config');


const createTable = (req,res)=>{
    const Q1 = "CREATE TABLE IF NOT EXISTS `users`(id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, password varchar(255) NOT NULL, name varchar(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
    SQL.query(Q1, (err,mysqlres)=>{
        if(err){
            console.log(err);
            res.send(err);
            return;
        }
        else{
            console.log("table created");
            res.send('table created');
            return;
        }
    });
};

module.exports = {createTable};