// function showMessage(){
//     return "Hello";
// }

// let message = showMessage();
// console.log(message);

// let n = prompt("Your name: ");

// n = message(n);
 
// function message( name ){
//     return "Good Morning "+name;
// }

// document.write(n);

// Electricity
let a =  54;


let b = 8;

let c =  240;

function bill(){
    return a + ( b * c );
}

console.log(bill());

let player1 = {
    name: "manav",
    place: "Jhamshedpur",
    health: 20
};

let player2 = {
    name: "abhayanand",
    place: "Bihar",
    health: 20
};

function pHealth( obj ){
    console.log("Player health is: "+obj.health);
    seperator();
}

function pName( obj ){
    console.log("Player name is: "+obj.name);
    seperator();
}

function pPlace( obj ){
    console.log("Player place is: "+obj.place);
    seperator();
}

function doubleHealth( obj ){
    console.log("the updated player health is "+obj.health*2);
    seperator();
}

function seperator(){
    console.log("------------------------------------------------------------");
}

function playerDetails(){
    pName(player1);
    pHealth(player1);
    doubleHealth(player1);
    pPlace(player1);

    pName(player2);
    pHealth(player2);
    doubleHealth(player2);
    pPlace(player2);
}

playerDetails();