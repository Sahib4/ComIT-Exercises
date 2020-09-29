var sum = 0;
for(var i = 1; i<1000; i++) {

    var value = 400;
    if(!value) break;
    sum += i;
}

console.log(sum);


// For looop 
//Part1
for(i = 0; i<10; i++){
    console.log(i);
}
//Part2
for(var c = 100; c>0; c--){
    console.log(c);
}
//Part3
for(var d = 0; d<100; d++){
    if (d%2==0)
    console.log(d);

}

//do while loop 
//Part1
var a = 0;
do{
    a++;
    console.log(a);
}while (a<10);

//Part2

var f = 100;
do{
    f--;
    console.log(f);
}while(f>0);

//Part3
var g =0;
do{
    g++;
    if(g%2==0)
    console.log(g);
}while (g>100);

//while loop 
//Part1
var b = 0;
while (b<10){
    b++;
    console.log(b);
}
//Part2

 var h = 0;
 while(h>0){
     h--;
     console.log(h);
 }

//part 3

var j = 0;
while(j>100){
    j++;
    if(j%2==0){
        console.log(j);
    }
    
}


//last answer

for(var x = 0; x<10;x++){
    for(var y = 0; y<10; y++){
        console.log("*");
    }
}