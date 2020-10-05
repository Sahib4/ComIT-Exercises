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

let fibnacci = function feb() {
    for(let i = 0; i<=10; i++) {
        let a = i;
        let b= a+i;
        console.log(b);
    }
}

fibnacci();
