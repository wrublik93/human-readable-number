module.exports = function toReadable (number) {
    let first = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let second = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let third = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let numberToArray = (number + '').split("");
    let numberZeroArray = +(numberToArray[0]);
    let numberOneArray =  +(numberToArray[1]);
    let numberTwoArray =  +(numberToArray[2]);
    let length = numberToArray.length;
    if(length == 1) {
        return first[number];
    } else if(length == 2 && numberZeroArray == 1) {
        return second[numberOneArray];
    } else if(length == 2 && numberZeroArray != 1) {
        if(numberOneArray != 0){
            return third[numberZeroArray - 2] + ' ' + first[numberOneArray];
        } else {
            return third[numberZeroArray - 2];
        }
    } else if(length == 3 && numberOneArray == 0) {
        if(numberTwoArray != 0){
            return first[numberZeroArray] + ' hundred' + ' ' + first[numberTwoArray];
        } else {
            return first[numberZeroArray] + ' hundred';
        }
    } else if(length == 3 && numberOneArray == 1) {
        return first[numberZeroArray] + ' hundred' + ' ' + second[numberTwoArray];
    } else if(length == 3 && numberOneArray != 1) {
        if(numberTwoArray != 0){
            return first[numberZeroArray] + ' hundred' + ' ' + third[numberOneArray - 2] + ' ' + first[numberTwoArray];
        } else {
            return first[numberZeroArray] + ' hundred' + ' ' + third[numberOneArray - 2];
        }
    }
}
