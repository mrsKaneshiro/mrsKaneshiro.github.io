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

    async getTotalNumber(){
        this.connection.connect();
        var  sql = 'select * from list where id=(select MAX(id) from list )';
        this.connection.query(sql,function(err, result){
                if(err){
                    console.log('[SELECT ERROR] - ',err.message);
                    return;
                }else{
                    this.emitter.emit('get.totle.num',result[0].id); 
                }
        }.bind(this));
       
    }

    async add(args){
        //可接受外部传来的args
        await this.getTotalNumber()
        this.connection.end();
    }
}

  var db = new connectDatebase(connection,emitter);
  db.add("0")