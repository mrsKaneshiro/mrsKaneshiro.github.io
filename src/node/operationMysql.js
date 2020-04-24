//引入数据库
console.log("start")
const mysql = require("mysql")

//实现本地链接
var connection = createConnection({
    host: 'default',
    user: 'root',
    password: 'cc931819',
    database: 'test'
})

connection.connect();

//添加
function add() {
    let post = {
        id: 2,
        label: '妇产科',
        text: '我这几次月经量比较少，而且痛经肚子痛，来例假的时候还会呕吐'
    };
    let query = connection.query("INSERT INTO demo SET ?", post, function (error, results, fields) {
        if (error) throw error;
    })
    console.log(query.sql); //INSERT INTO posts 'id'=1, 'title'='Hello MySQL'
}


var  addSql = 'INSERT INTO list(id,label,text) VALUES(2,?,?)';
var  addSqlParams = ['妇产科', '我这几次月经量比较少，而且痛经肚子痛，来例假的时候还会呕吐'];
//增
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