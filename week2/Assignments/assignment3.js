var express= require("express");
var app= express();

//setting middleware
app.use(express.static(__dirname + '/public')); //Serves resources from public folder

app.get("/",function(req,res){///Assignment3

    res.send("hello sever!")
});


//http://localhost:3000/data?number=xyz
app.get('/data', function(req, res) {//Assignment4(3)
    var num = req.query.number; // 取得使用者傳送的參數
    var sum = 0;
   
    if (!isNaN(num)){// number
        console.log(__dirname);        
        sum =(1+parseInt(num))*num*0.5
        res.send('num=' + sum);
    }
    // req → request
    // res → response
    else if (num==undefined){
        res.send("Lack of Parameter");//Assignment4(1)
    }
    res.send("Wrong Parameter");///Assignment4(2)
    
  })


app.listen(3000,function(){
    console.log("啟動囉");
    
});