nums = [1,2,3,1,1,3];

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let map = {};
    let numGPairs = 0;
    for(let i = 0; i < nums.length; i++){
        if(map[i] >= 0){//map contains entry already
            console.log("line 12, " + map[i]);
            map[i] = (map[i]+1);
            console.log("line 14, " + map[i]);
        } else {//map does not contain entry yet
            map[i] = 1;
            console.log("line 17, " + map[i])
        }
    }

    for (let key in map){
        let value = map[key];
        numGPairs += ((value-1)*(value-2))/2;
    }

    return numGPairs;
};

console.log("result: " + numIdenticalPairs(nums));