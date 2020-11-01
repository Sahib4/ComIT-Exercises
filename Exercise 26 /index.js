function show_number() {
    for(var i = 0;i<=100;i++)
    {
        console.log(i);
    }
}

show_number();

function showUser(name,age,pNumber,street,pCode,status) {


    console.log(name,age,pNumber,street,pCode,status);
}


showUser("Sahib",21,9999999999,"hargarve",210210,false);


let evenNumber = function even() {
    for(let i = 0; i<=100; i++) {
        if(i%2 == 0) {
            console.log(i);
        }
    }
};

evenNumber();

let fibnacci = function (number){
    if (isNaN(number)) {
        console.log("invalid");
        return -1;
    }
    let convertnum = +number;
    if (convertnum < 0) {
        console.log("error");
        return -1;
    }
    if(convertnum == 1){
        return 0;
    }

    if(convertnum == 2){
        return 1;
    }

    var x,y,z;

   for (var i=2;i<=number;i++){
    z = x+y;
    x=y;
    y=z;

    return z;
   }
    
  
};

console.log(fibnacci(4));
