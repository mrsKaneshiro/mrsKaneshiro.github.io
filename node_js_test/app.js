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
        this.max_id =0;
    }

    getTotalNumber(){
        connection.connect();
        var  sql = 'select * from list where id=(select MAX(id) from list )';
        var p=new Promise(function(resolve,reject){
            connection.query(sql,function(err, result){
                if(err){
                    console.log('[SELECT ERROR] - ',err.message);
                    reject(ErrorEvent)
                    return;
                }else{
                    resolve(result)
                }
            }.bind(this));
        })
        return p 
        
    }

    add(label,text){
        var p = this.getTotalNumber();
        p.then(result=>{
            var  addSql = 'INSERT INTO list(id,label,text) VALUES(?,?,?)';
            var  id =result[0].id+1
            var  addSqlParams = [id,label,text];
            connection.query(addSql,addSqlParams,function (err, result) {
                    if(err){
                    console.log('[INSERT ERROR] - ',err.message);
                    return;
                    }        
            });
            connection.end();
        })
    }

    find(){
        connection.connect();
        var  sql = 'select * from list';
        connection.query(sql,function(err, result){
            if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
            }else{
                console.log(result)
            }
        }.bind(this));
        connection.end();
    }
}

  var db = new connectDatebase(connection);
  var label = '儿科';
  var text = '测试';
  db.add(label,text)
  //每次只能发送一个请求
  //db.find()
/*

  var id = null;
  connection.query(sql,function(res){
        //从mysql中获取id 
        var id = res.id;
        console.log("aa:",id) 
  })
  console.log("bb:",id) 

  预计输出结果为： 
  aa:2019
  bb:2019

  但是实际的输出结果为：
  bb：null
  aa：2019
*/
