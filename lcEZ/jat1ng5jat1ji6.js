nums = [1,2,3,1,1,3];

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let map = new Map();
    let numGPairs = 0;
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){//map contains entry already
          //  console.log("line 12, ");
            map.set(nums[i], map.get(nums[i])+1);
            // console.log("line 14");
        } else {//map does not contain entry yet
            // console.log("line 16");
            map.set(nums[i], 1);
            // console.log("line 18");
        }
    }

    for (let [key, value] of map){
        //console.log("line 24; key, value: " + key + ", " + value);
        let temp = ((value)*(value-1))/2;
        if (temp > 0){
            numGPairs += temp;
        }
        //console.log("numGPairs: " + numGPairs);
    }

    return numGPairs;
};

console.log("result: " + numIdenticalPairs(nums));