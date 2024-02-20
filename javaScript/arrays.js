const a = [ 1, 2, "Raj" ];
console.log(typeof(a))

console.log(a[0]);
console.log(a[2]);

console.log(a.length);

a[0] = false;
console.log(a[0]);

let quiz = {
    Q:"World fastest man?",
    ans : [ "you", "me", "the teacher", "sagar"]
}

console.log(quiz.Q);
console.log(quiz.ans[0]);
console.log(quiz.ans[1]);
console.log(quiz.ans[2]);
console.log(quiz.ans[3]);

for( let b = 0; a < quiz.ans.length; a++ ){
        if( i == 0 )
            console.log(quiz.Q);
        console.log(quiz.ans[i]);
}

//toString method

function z(a){ //Display function
    console.log(a);
}

let b = [1,2,3,45,6.7];
let c = b.toString();

console.log(c);
console.log(typeof(c));

//join()
let d = b.join("**");
z(d);

//pop()
e = b.pop();
z(b);
z(e);

//push()
b.push(3);
out = b.push(4);
z(b);
z(out);

//shift()
z(b);
f = b.shift();
z(b);
z(f);

//unshift
g = b.unshift(90);
z(b);
z(g);

//delete
z(b);
del = delete b[2];
z(b);
z(del);

//concat

let ar = [23,65,3,13,67];
let arr = b.concat(ar);
z(arr);
z(b)
//concat 3 arrays

{
    let a = [1,4,3,6,5,4];
    let b = [5,0,76,34,75,26,84];
    let c = [7362,536,636747];

    let d = a.concat(b,c);

    z(d);
    z(a);
    z(b);
    z(c);
}

