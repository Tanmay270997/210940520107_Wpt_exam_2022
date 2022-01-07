
const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);


const dbinfo = {
   host : "localhost",
   user : "root",
   password : "cdac",
   database : "project2",
};


async function connectionCheck(){
     const connection = mysql.createConnection(dbinfo);
     await connection.connectAsync();
     console.log("CONNECTION SUCCESS");
     await connection.endAsync();
    }

async function addUser(user)
{
    const connection = mysql.createConnection(dbinfo);
     await connection.connectAsync();
     console.log("CONNECTION SUCCESS");
    let sql = 'INSERT INTO user(username,password) values( ?, ? )';
   await connection.queryAsync(sql,[user.username,user.password]);
     await connection.endAsync();
     console.log("RECORD ADDED!!!");
}

async function selectUser(user)
{
    const connection = mysql.createConnection(dbinfo);
     await connection.connectAsync();
     console.log("CONNECTION SUCCESS");


    let sql = 'SELECT * from user';
    const list = await connection.queryAsync(sql,[]);

     await connection.endAsync();

     console.log(list);
     return list;
     
}


selectUser();

// connectionCheck();
// const user = {username:'Tanmay', password: 'Tanmay@39'};
// addUser(user);

