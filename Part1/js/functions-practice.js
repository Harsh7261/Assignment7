//STEP 1
function halfnumber (number){
       half_num = number / 2;
       return half_num;
 }

var result1 = halfnumber(5);
window.console.log("Half of 5 is " + result1 );

//STEP 2
function squareNumber (number){
    return number * number;
}

var result2 = squareNumber(4);
window.console.log("The result of squaring the number 4 is " + result2);

//STEP 3
function percentOf (firstnum, secondnum){
    return (firstnum * 100) / secondnum;
}

var result3 = percentOf(3,9);
window.console.log("3 is " + result3 + "% of 9");

//STEP 4
function findModulus (firstnum, secondnum) {
     return (firstnum % secondnum);
}
var result4 = findModulus(10,4);
window.console.log(result4 + " is the modulus of 10 and 4");

//STEP 5

function sum (){
    var numbers = window.prompt("Enter the numbers that you want to put: ");
    var num_arr = numbers.split(',');
    var sum = 0
    for( i = 0; i<num_arr.length; i++) {
           num_converted_to_Integer =  parseInt(num_arr[i],10);
           sum = sum + num_converted_to_Integer;
    }
    window.console.log(sum);
}

sum()