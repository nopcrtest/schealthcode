function init(){
    

    //console.log("init called");
    timer();
    date();
    prc();
    travel();
    animation();
}

var intervalId = window.setInterval(function(){
    // call your function here
    timer();
  }, 1000);

function animation(){

    let date = new Date();

    result = `<marquee scrollamount="10" >四川疾控健康提示(${date.getFullYear()}年${(date.getMonth()+1)}月${date.getDate()}日${date.getHours()}时)   【点击查看详情】 </marquee>`
    document.getElementById("animation").innerHTML = result;
}

function timer(){

    let timer = document.getElementById("timer");
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    
    if(minute < 10){
        minute ="0" + minute;
    }

    if(second < 10){
        second ="0" + second;
    }

    if(hour < 10){
        hours ="0" + hour;
    }

    let current_time = hour +":"+ minute+":";
    
    let result = `<p>${current_time}<strong id = "second">${second}</strong></p>`;

    timer.innerHTML = result;
}

function date(){

    let dateInfo = document.getElementById("date");
    let date = new Date();
    let current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();

    let result = `<p>${current_date}</p>`
    dateInfo.innerHTML = result;
}

function prc(){

    let date = new Date();
    let hour = date.getHours();
    let day = date.getDate();
    

    if(hour >= 7){
        hour = hour - 7;
    }else{
        day--;
        hour = (7-hour)
    }

    result = `<p>${(date.getMonth()+1)}/${day} ${hour}时</p>`;
    
    document.getElementById("pcr").innerHTML = result;
}

function travel(){
    let date = new Date();
    let hour = date.getHours();
    let day = date.getDate();

    if(hour >= 12){
        hour = hour - 12;
    }else{
        day--;
        hour = (12-hour)
    }

    resultTravel = `<p>${(date.getMonth()+1)}/${day} ${hour}时</p>`;
    document.getElementById("travel").innerHTML = resultTravel;

}