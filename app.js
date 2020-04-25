//引入数据库
const mysql = require("mysql")
const events = require('events'); 
const emitter = new events.EventEmitter(); 

//实现本地链接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cc931819',
    database: 'test'
}) 

class connectDatebase{  
    constructor(connection,emitter){
        this.connection = connection;
        this.emitter = emitter;
        this.emitter.on("get.totle.num",this.getTotalNumberSuc)
    }

    getTotalNumberSuc(res){
        console.log("触发成功！",res)
        this.data = res
    }

    getTotalNumber(){
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
        p.then(function(data){
            console.log("hhh",data)
            this.add(data)
        }.bind(this))
        connection.end();
    }

    add(args){
        console.log("add",args)
    }
}

  var db = new connectDatebase(connection,emitter);
  db.getTotalNumber()