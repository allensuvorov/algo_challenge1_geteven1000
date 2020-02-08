var x = 1000;
function sum (x) {

    var sum = 0;
    for (var i=2; i<=x; i+=2) {
        sum += i;
        
    };
    console.log(sum);
}

function math_sum (x) {

    var math_sum = x/2*(x/2+1);
    console.log(math_sum);
}
sum(x);
math_sum(x);