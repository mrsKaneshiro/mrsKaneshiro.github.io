//引入数据库
const mysql = require("mysql")

//实现本地链接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cc931819',
    database: 'test'
}) 

class connectDatebase{  
    constructor(connection){
        this.connection = connection;
    }

    getTotalNumber(type){
        connection.connect();
        var  sql = 'select * from list where id=(select MAX(id) from list )';
        var p = new Promise(function (resolve,reject){
            connection.query(sql,function(err, result){
                if(err){
                    console.log('[SELECT ERROR] - ',err.message);
                    reject(err.message)
                    return;
                }else{
                    resolve(result[0].id)
                }
            }.bind(this));
            })
        
        return p;
        
    }

    add(label,text){
        var p = this.getTotalNumber()
        p.then(function(data){
            var  addSql = 'INSERT INTO list(id,label,text) VALUES(?,?,?)';
            var  id =data+1
            var  addSqlParams = [id,label,text];
            connection.query(addSql,addSqlParams,function (err, result) {
                    if(err){
                    console.log('[INSERT ERROR] - ',err.message);
                    return;
                    }        
                console.log('--------------------------INSERT----------------------------');
                console.log('INSERT ID:',result);        
                console.log('-----------------------------------------------------------------\n\n');  
            });
            connection.end();
        }.bind(this))
    }
}

  var db = new connectDatebase(connection);
  var label = '儿科';
  var text = '我家宝宝最近屁屁上张了很多斑点，有点像癣一样，还有点痒痒';
  db.add(label,text)