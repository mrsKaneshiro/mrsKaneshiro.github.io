var sqlserver = require('mysql');
var dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'cc931819',
    database: 'test'
};

var db = function(strsql) {
    return new Promise(function(resolve, reject){
        sqlserver.connect(dbConfig).then(function() {
        var req = new sqlserver.Request().query(strsql).then(function(recordset) {
            resolve(recordset)
        }).
        catch(function(err) {
            reject(err)
        });
    }).
    catch(function(err) {
        reject(err)
    });
    })
};


// 使用方法：
async function getData() {
    const result = await db('select * from list where id=(select MAX(id) from list )');
    console.log(result)
}

getData()
