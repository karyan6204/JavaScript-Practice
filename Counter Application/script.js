function increament(){
    var number = Number(document.getElementById('count1').innerHTML)
    document.getElementById('count1').innerHTML = number+1;
}
function reset(){
    document.getElementById('count1').innerHTML = 0;
}
function decreament(){
    var number = Number(document.getElementById('count1').innerHTML)
    document.getElementById('count1').innerHTML = number-1;
}