//引入数据库
const mysql = require("mysql")

//实现本地链接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cc931819',
    database: 'test'
})

function findData(){
    var  sql = 'SELECT * FROM list';
    connection.query(sql,function (err, result) {
            if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
            }
    
        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        console.log('------------------------------------------------------------\n\n');  
    });
}

function add(id,label,text){
    var  addSql = 'INSERT INTO list(id,label,text) VALUES(?,?,?)';
    //var  addSqlParams = ['2','妇产科', '我这几次月经量比较少，而且痛经肚子痛，来例假的时候还会呕吐'];
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
}

function getTotalNumber(){
    //获取数据库数据总量
    var  sql = 'select * from list where id=(select MAX(id) from list )';
    var NOW_ID = 0
    connection.query(sql,function(err, result){
            if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
            }
    
        NOW_ID = result[0].id
        return NOW_ID;
    });
}

//数据库操作开始
connection.connect();

var  sql = 'select * from list where id=(select MAX(id) from list )';
var NOW_ID = 0
connection.query(sql,function(err, result){
        if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
        }
    NOW_ID = result[0].id
}.bind(this));

var id = Number(NOW_ID)+1;
console.log(id,NOW_ID)
var label = '儿科';
var text = '我家宝宝最近屁屁上张了很多斑点，有点像癣一样，还有点痒痒';
add(id,label,text)
connection.end();
