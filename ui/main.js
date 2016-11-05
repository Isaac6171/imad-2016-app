var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
 
 
 counter = counter+1;
 var th = document.getElementById('count');
 th.innerHTML = counter.toString();
};