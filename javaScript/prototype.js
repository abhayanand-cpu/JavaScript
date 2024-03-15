user = {
    myName: "name",
    email:"examlpe@ex.com",
    print : function(){
        console.log("user is "+this.myName);
    }
}

console.log(user);
 
// user.prototype.increase = function(){       // This will not work(91:11 Uncaught TypeError: Cannot set      
//     this.Score++;                             //properties of undefined (setting 'increase')
// }

// console.log(user)

Object.prototype.increase = function(){
    this.Score++;
}

console.log(user);

function createUser(name,email) {
    this.name = name;
    this.email = email;
    console.log(name,email);
}

user1 = new createUser("abhay","www");
console.log(user1);

createUser.prototype.score = function(){
    console.log("Score");
}

user1.score();

