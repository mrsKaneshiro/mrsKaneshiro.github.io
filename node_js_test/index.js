var vm = new Vue({
    el: '#app',
    data: {
        label:'',
        text:'',
        age:'',
        sex:'',
        illName:'',
        arr:[], //最终的数据
        arr_length:0,
    },
    methods: {
        onclick:function (){
            if(this.label == '' || this.text == ''){
                alert("请填写完整！")
                return false
            }else{
                var name = this.label
                var str = this.label +"\t"+this.text
                this.arr.push(str)
                this.arr_length =this.arr.length
                
                //清空表单
                this.label ='';
                this.text='';
                this.age ='';
                this.illName =''
                this.sex = ''

                var long_str = this.arr.toString().replace(/,/g,'\n')
                if(this.arr.length == 10){
                    var blob = new Blob([long_str], {type: "text/plain;charset=utf-8"});
                    var file_name = name +".txt"
                    saveAs(blob, file_name);
                    this.arr_length = 0
            }
        }
    },
}）