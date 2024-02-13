let student = {
    name : "Abhayanand Siddharth",
    mobile: 532154842,
    semester: 5
};
console.log(student);
student.semester = 6;
console.log(student);

let player = {
    Name: "R.Pragnananda",
    Score: 5.5
};

player.Maximum_Score = 7.5;
console.log("Player has Scored "+player.Score+" and the maimum score of the player is "+player.Maximum_Score);

function addTwoNumber(){
    
    let a = 10;
    let b = 20;
    console.log(a+b);

}   
addTwoNumber();

function addTwoNumber(x,y){
    
    let z = x+y;
    
    console.log(z);

}
addTwoNumber(10,20);

let obj1 = {
    price: 45,
    tax: 5
};

let obj2 = {
    price: 50,
    tax: 5
};

let obj3 = {
    price: 55,
    tax: 5
};

let obj4 = {
    price: 95,
    tax: 5
};

let obj5 = {
    price: 85,
    tax: 5
};

function finalPrice(x){
    let final_Price = x.price + ( x.price * x.tax / 100 );
    console.log("final price is "+final_Price);
}

finalPrice(obj1);
finalPrice(obj2);
finalPrice(obj3);
finalPrice(obj4);
finalPrice(obj5);

let movie1 = {
    title : "Haseen Dillruba",
    actors: "Taapsee Pannu",
    directors: "Vinil Mathew"
};

let movie2 = {
    title : "12th Fail",
    actors: "Vikrant Massey",
    directors: "Vidhu Vinod Chopra"
};

let movie3 = {
    title : "Super 30",
    actors: "Hrithik Roshan",
    directors: "Vikas Bahl"
};

let movie4 = {
    title : "3 Idiots",
    actors: "Amir khan, R madhwan , Sharman Joshi",
    directors: "Raj kumar irani"
};

let movie5 = {
    title : "Munna Bhai M.B.B.S.",
    actors: "Sanju baba",
    directors: "Rajkumar Hirani"
};

function movies( obj ){
    console.log("---------------------------------------------------------------------------");
    console.log("movie = "+obj.title+" ,actor = "+obj.actors+" ,director = "+obj.directors);
    console.log("---------------------------------------------------------------------------");
}

movies(movie1);
movies(movie2);
movies(movie3);
movies(movie4);
movies(movie5);

//multiplication, addition, substraction, division using js function

function addition( x, y ){
    return x + y;
}

function substraction( x, y ){
    return x - y;
}

function multiplication( x, y ){
    return x * y;
}

function division( x, y ){
    return x / y;
}

// let x = prompt("Enter 1st digit");
// let y = prompt("Enter 2nd digit");

// x = parseInt(x);
// y = parseInt(y);

// let add = addition(x,y);
// let subs = substraction( x, y );
// let mul = multiplication( x, y );
// let div = division( x, y );

// console.log("addition of "+x+" and "+y+" is "+ add);
// console.log("substraction of "+x+" and "+y+" is "+ subs);
// console.log("multiplication of "+x+" and "+y+" is "+ mul);
// console.log("division of "+x+" and "+y+" is "+ div);

let player1 = {
    health: 5,
    place: "Bhubaneswar"
};
let player2 = {
    health: 8,
    place: "Shrirampur"
}

function health( obj ){
    console.log("Player health "+obj.health);
}

function place( obj ){
    console.log("Player place "+obj.place);
}

health(player1);
place(player1);

player1.place = "Cuttack";
place(player1);

health(player2);
place(player2);

//Temperature conversion

let temp = parseFloat(prompt("Enter temperature in celsius"));

let Fahrenheit = function toFahrenheit( temp ){
    return ( 9/5 * temp ) + 32;
};

let kelvin = function toKelvin( temp ){
    return ( temp + 273.15 );
};

console.log(Fahrenheit);
console.log(kelvin);


