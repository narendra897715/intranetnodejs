const auth_sql = require('mssql');

const config = {
    user: 'IntranetPortal',
    password: 'BurE0hDprR',
    server: '172.16.10.42',
    port: 1433, // You can use 'localhost\\instance' to connect to named instance
    database: process.env.AUTH_DB_NAME,

    options: {
        encrypt: false,
        useUTC:false // Use this if you're on Windows Azure
    }
}

//creating conn pool using callback functions
const auth_poolPromise =new  auth_sql.ConnectionPool(config,(err)=>{
    if(err){
        console.log(err);
    }
})


module.exports = {
  auth_sql, auth_poolPromise
}