

var a = 5;

if (a==1){
    console.log("today is monday");
} 

else if (a==2){
    console.log("today is tuesday");
}

else if (a==3){
    console.log("today is Wednesday");
}

else if (a==4){
    console.log("today is Thursday");
}

else if (a==5){
    console.log("today is Friday");
}
else if (a==6){
    console.log("today is saturday");
}
else if (a==7){
    console.log("today is sunday");
}

else{
    console.log("Please enter a valid number");
}

switch(a) {
    case 1: console.log("today is monday");
    break;
    case 2: console.log("today is tuesday");
    break;
    case 3: console.log("today is Wednesday");
    break;
    case 4: console.log("today is Thursday");
    break;
    case 5: console.log("today is Friday");
    break;
    case 6: console.log("today is Saturday");
    break;
    case 7: console.log("today is Sunday");
    break;
    default:console.log("Please neter a valid number");
}
