// const mysql2 = require("mysql2");
// const dbConnection = mysql2.createPool({
//   user: "evangadi-admin",
//   //user: process.env.user,
//   database: "evangadi-db",
//   //database: process.env.DATABASE,
//   host: "localhost",
//   password: "123456",
//   //password: process.env.PASSWORD
//   connectionLimit: 10,
//   socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
// });

// dbConnection.execute("select 'test' ",(err,result)=>{
//     if (err){
//         console.log(err.message)
//     }else{
//         console.log(result)
//         console.log("try")
//     }
// })

// module.exports = dbConnection.promise();


const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  user: process.env.NAME,
  database: process.env.DATABASE,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  connectionLimit: 10,
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

console.log(process.env.JWT_SECRET)
//console.log("test")
console.log("user",process.env.NAME)
console.log("user",process.env.DATABASE)
console.log("user",process.env.PASSWORD)
console.log("user",process.env.HOST)
module.exports = dbConnection.promise()