async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection(
        {
            host: "localhost",
            user: "root",
            password: "123456",
            database: "estudo"
        });
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM user;');
    return rows;
}

async function insertCustomers(user){
    const conn = await connect();
    const sql = 'insert into user (nome, idade, uf) values (?,?,?);';
    const values = [user.nome, user.idade, user.uf];
    return await conn.query(sql, values);
}

async function updateCustomers(user, id){
    const conn = await connect();
    const sql = 'update user set nome= ?, idade=?, uf=? where iduser= ?';
    const values = [user.nome, user.idade, user.uf, id];
    return await conn.query(sql, values);
}

async function deleteCustomers(id){
    const conn = await connect();
    const sql = 'delete from user where iduser= ?';
    const values = [id];
    return await conn.query(sql, values);
}
 
module.exports = {selectCustomers, insertCustomers, updateCustomers, deleteCustomers}
    
    //posso passar aqui um obj ou connect string
//"mysql://root:root@localhost:3306/estudo"
  

