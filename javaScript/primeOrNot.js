var a = parseInt(prompt("Enter any number"));

function check( a ) {
    for( var i = 2; i < a; i++ ){
        if ( a % i != 0 && i < a - 1) {
            continue;
        }
        else if( a % i == 0 ){
            document.write(`${a} is not a prime number`);
            break;
        }
        if ( a - 1  == i ) {
            document.write(`${a} is a prime number`);
        }
    }
    
}
check(a);

const year = parseInt(prompt("Enter any year"));
function leapYear() {
    if (year % 4 == 0 && ( year % 100 == 0 || year % 400 != 0 )) {
        document.write(`${year} is a leap year`);
    }
    else
        document.write(`${year} is not a leap year`);
}

leapYear(year);

let marks = 89;

if( marks < 90 ){
    
}