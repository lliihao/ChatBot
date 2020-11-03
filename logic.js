function search(){
    var str=document.getElementById("msgs").value;
    //alert(typeof(str));
    //alert(str);
    
    fetch('http://www.xhxly.cn:8080/api.php?key=free&appid=0&msg='+str)
    .then(response=>response.json())
    // .then(figure=>console.log(figure))
    .then(function(data){
        var reg=JSON.stringify(data.content);
        reg=reg.replace("\"","").replace("\"","")
        document.getElementById("content").innerHTML=reg;
    })
    //
    //document.getElementById("content").innerHTML=a;
    
};