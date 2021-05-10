//normal logic
document.getElementById("hour").innerHTML = 0;
document.getElementById("minute").innerHTML = 0;
document.getElementById("second").innerHTML = 0;

let timer = null;

//Selectors
const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const stop = document.getElementById("stop");
let hr = 0;
let mi = 0;
let se=0;


//Event Listeners
start.addEventListener("click",star);
reset.addEventListener("click",rese);
stop.addEventListener("click",sto);
//Functions
function star(event){
    event.preventDefault();
    console.log("Hi");
    console.log(h.value);
    console.log(m.value);
    console.log(s.value);
    if(h.value > 24 || h.value < 0){
        return alert("Invalid hours input");
    }
    else if(m.value > 60 || m.value < 0)
    {
        return alert("Invalid minutes input");
    }
    else if(s.value > 60 || s.value < 0){
        return alert("Invalid seconds input")
    }
    else{
        document.getElementById("hour").innerHTML = h.value;
        document.getElementById("minute").innerHTML = m.value;
        document.getElementById("second").innerHTML = s.value;
    }
    hr = h.value;
    mi = m.value;
    se = s.value;
    
    //task(hr,mi,se);
    startTimer(hr,mi,se);
    
}
function sto(event){
    event.preventDefault();
    stopTimer();
    h.value = hr;
    m.value = mi;
    s.value = se;
}
function rese(event){
    event.preventDefault();
    stopTimer();
    hr = 0;
    mi = 0;
    se = 0;
    document.getElementById("hour").innerHTML = hr;
    document.getElementById("minute").innerHTML = mi;
    document.getElementById("second").innerHTML = se;

}
function startTimer(hr,mi,se){
    timer = setInterval(function(){
        console.log("chal raha hu");
        task();
    },1000);
}

function stopTimer(){
    clearInterval(timer);
}
function task(){
    if(se>0){
        se--;
    }
    else if(se==0 && mi >0){
        mi--;
        se = 60;
    }
    else if(mi==0 && se==0 && hr>0){
        hr--;
        mi=60;
    }
    else if(hr==0 && mi==0 && se==0){
        stopTimer();
        alert("Timer completed");
    }
    //se--;
    document.getElementById("hour").innerHTML = hr;
    document.getElementById("minute").innerHTML = mi;
    document.getElementById("second").innerHTML = se;

    
}