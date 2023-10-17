
function alwaysHungry(arr) {
    let count =false
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy");
            count = true
        }         
    }
    if (!count){
        console.log("Iam hungry")
    }
}
// alwaysHungry([3.14, "food", "pie", true, "food"]);
// alwaysHungry([4, 1, 5, 7, 2]);
 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;   
}
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function betterThanAverage(arr) {
    var sum = 0;

    for(var i=0; i<arr.length; i++) {
        sum += arr[i];
    }

    var avg = sum / arr.length;
    var count = 0

    for(var i=0; i<arr.length; i++) {
        if(arr[i] > avg) {
            count++;
        }
    }
    return count;
}
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // arr = ["a", "b", "c", "d", "e"];
    // z= arr.reverse();  
    // console.log (z);

    function reverse (arr){
        var first = 0;
        var end = arr.length - 1;
        while (first < end){
            var elem = arr[first];
            arr[first] = arr[end];
            arr[end] = elem;
            first++;
            end--;
        }
        return arr;
    }
    var result = reverse(["a", "b", "c", "d", "e"]);
    console.log(result);
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while (fibArr.length< n){
        
        var x= fibArr[fibArr.length-1];
        var y = fibArr[fibArr.length-2];
        fibArr.push(x+y);
    }
    return fibArr;
}
   
// var result = fibonacciArray(10);
// console.log(result);
 




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////