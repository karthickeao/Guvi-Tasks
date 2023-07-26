var timer;
var ele=document.getElementById("timer");
(function(){
    var sec=10;
    timer=setInterval(()=>{
        ele.innerHTML=sec;
        sec--;
        if(sec<0){
            clearTimeout(timer);
            ele.innerHTML='<h2>Happy Independence Day!</h2>';
        }
            },1000)
})()