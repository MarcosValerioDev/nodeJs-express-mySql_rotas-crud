//index.js
(async () => {
    const db = require("./src/connect/conn");
    console.log('Começou!');
 
    console.log('SELECT * FROM CLIENTES');
    const sclientes = await db.selectCustomers();
    console.log(sclientes);

    console.log('INSERT CLIENTES');
    const iclientes = await db.insertCustomers({nome:"Gisele", idade: 20, uf:"RS"});
    console.log(iclientes);
    
    console.log('UPDATE CLIENTES');
    const uclientes = await db.updateCustomers({nome:"Marcos Valério", idade: 20, uf:"RS"}, 1);
    console.log(uclientes);

    console.log('DELETE CLIENTES');
    const dclientes = await db.deleteCustomers(19);
    console.log(dclientes);
})();
