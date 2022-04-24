//question 1
for (var x=0; x<=20; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}

//question 2
var arr = [0, 1, 2, 3].reverse();
         document.write("Reversed array is : " + arr ); 



var array1 = [1,2,3,4];
var array2 = [5,6,7,8];

//question 4
for(var i = 0; i < array1.length; i++){
    sum.push(array1[i] + array2[i]);
 }

var sum    = [6,8,10,12];


//question 5
var str = 'hello world how ya doing?';

function toUpperCase(str) {
  return str.split('').map((v, i) => i % 2 == 0 ? v.toLowerCase() : v.toUpperCase()).join('');
}


