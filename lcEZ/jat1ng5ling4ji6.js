/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithProg = function(arr) {
    //technically, progressions can be short
    if(arr.length === 2){
        return true;
    }
    // sort the array first
    arr = arr.sort(function(a,b){return a-b});

    //console logging slows down by a lot?
    //console.log(arr);

    //for loop through the array to detect differences
        //int for holding the differences
    let dif = arr[1] - arr[0];
    for(let i = 2; i < arr.length; i++){
        if(arr[i]-arr[i-1] !== dif) {
            return false;
        } else {
            return true;
        }
    }
};

//console.log("result: " + canMakeArithProg(arr));