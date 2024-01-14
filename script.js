//your JS code here. If required.
let ele=document.getElementById("fname");

function fn(){
	ele.value=ele.value.toUpperCase();
}
ele.addEventListner('mouseleave',fn);