/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    let result = "";
    const inputs = date.split(" ");
    let day = inputs[0];
    let month = inputs[1];

    //four digit year first in result string
    result += inputs[2];
    result += "-";

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct",  "Nov", "Dec"];

    for(let i = 0; i < months.length; i++){
        if(month == months[i]){
            if(i >= 9){
                result += (i+1);
            } else {
                result += ("0" + (i + 1));
            }
            break;
        }
    }
    result += "-";
    let d = parseInt(day);
    if(d >= 10) {
        result += d;
    } else {
        result += ("0" + d);
    }

    return result;
};