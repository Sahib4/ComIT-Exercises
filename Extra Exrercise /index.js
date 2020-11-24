/*var movies = prompt("please enter 3 favorite movies:" );
console.log(movies);



var arr = movies.split(',');



console.log(arr);


var sen = prompt("Please enter the sentence:" );


function reversestring() {
    var awordsrr1 = sen.split(' ');
    var revwords = awordsrr1.reverse();
    return revwords.join(' ');
}

console.log(reversestring(sen));



let random = (min,max) => {
   let randomnum = Math.random();

   return min + (randomnum *(max-min));
}

console.log(random(12,15));
console.log(random(12,20));
console.log(random(-1,6));
console.log(random(12,15));
console.log(random(12,15));*/


let arr = [1,2,3,4,5];

let sqarr = [];

for(let i= 0;i<=arr.length;i++){
    sqarr.push(arr[i]*arr[i]);
}

console.log(arr);
console.log(sqarr);

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evennum =[];

for(let i= 0;i<=num.length;i++){
    evennum.push(num[i] % 2 == 0);
}

console.log(num);
console.log(evennum);

var oddnum =[];

for(let i= 0;i<=num.length;i++){
    oddnum.push(num[i] % 2 !== 0);
}

console.log(num);
console.log(oddnum);

const info = [
    {name:'sahib',age:21,city:'winnipeg'},
    {name:'Naman',age:31,city:'New Delhi'},
    {name:'ashir',age:19,city:'Punjab'},
    {name:'aryan',age:32,city:'Calagry'},
    {name:'royal',age:25,city:'winnipeg'}
];

let abvthirty=info.filter((age) => {info.age>30});
console.log(abvthirty);








