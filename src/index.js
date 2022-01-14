module.exports = function toReadable (number) {
    let zeroToNineteen = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let twentyToNinety = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let result
    if (number==0){
        result="zero";
    }
    else if (number<20){
        result=zeroToNineteen[number];
    }
    else if (20<=number&&number<100){
        result=(twentyToNinety[Math.floor(number/10)]+" "+zeroToNineteen[number%10]);
    }
    else if (number>=100&&number%100<20){
        result=(zeroToNineteen[Math.floor(number/100)] + " hundred " + zeroToNineteen[number%100]);
    }
    else {
        result=(zeroToNineteen[Math.floor(number/100)] + " hundred " + twentyToNinety[(Math.floor(number/10))%10]+" "+zeroToNineteen[number%10]);
    };
    if (result[result.length-1]===" "){
        result=result.substr(0, result.length-1);
    }
    return result;
}