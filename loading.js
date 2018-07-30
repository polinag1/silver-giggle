var proc=0;

function changeProc(){
    document.getElementById('prs').innerHTML=proc+'%';
    document.getElementById('prs').style="margin-left:"+proc+'%;';
    document.getElementById('progress').style="width:"+proc+'%;';  
    proc++;

} 

var timerId= setInterval(changeProc,100);
setTimeout(function(){clearInterval(timerId)},100*100);
