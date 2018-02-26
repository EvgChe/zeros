module.exports = function getZerosCount(number) {

    var value = 0;
    var zero = 0;
    var a;

    while ( value < number ) {

        value++;
        a = value;

        while ( a % 5 == 0 ) {

            zero ++;
            a = a / 5;

        }

    }

    return zero;

}

//console.log(getZerosCount(26));