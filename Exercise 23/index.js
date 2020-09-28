var a = prompt("please enter a number between 0-23");

if (a<0 || a>2323){
    alert("please enter the number in range");
}

else if(a<8 || a>=18){
    alert("office is closed");
}

else {
    alert("We are open");
}