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
z("Shift");
z(b);
f = b.shift();
z(b);
z(f);

//unshift
z("Unshift");
g = b.unshift(90);
z(b);
z(g);

//delete
z("delete");
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

//Sorting

{
    z("Sorting");
    let a = [ 5, 8, 222 ];
    a.sort();
    z(a);

    b = [ 22,58,326 ];
    b.sort(compare);
    function compare( a, b ) {
        return a - b;
    }
    z(b);
}

//Splice
{
    z("Splice");

    let a = [1,45,83,57,25,85,644];
    z(a);
    store = a.splice( 3, 2, 874,2938,873489);
    z(store);
    z(a);
}

//Slice
{
    z("Slice");
    let a = [1,45,83,57,25,85,644];
    let store = a.slice(4);
    z(a);
    z(store);
    let store2 = a.slice(2,3);
    z(store2);
    let store3 = a.slice(-1);
    z(store3);
}

//MAP
/*a.map(function functionName( value, index, array ){
    return (can return expression on array of each element with value and index as per use );
});*/
z("MAP")
{
    let a = [2,6,3,9,5];
    z(a);

    let arr = a.map( function mul(x){
        return x * 2;
    });

    z(arr);
}

user = [
    {firstName:"Abhayanand",lastName:"Siddharth"},
    {firstName:"Priyoranjan",lastName:"Khatua"},
];

let fullName = user.map( function(value, index, Array){
    return Array[index].firstName+" "+Array[index].lastName;
});

z(fullName);

{
    let a = [3,5,2,7,4];

    let fa = a.map( (value) => {
        let ans=1;

        while( value != 0 ){
            ans *= value;
            value--; 
        }

        return ans;

    });

    z(fa);
}
//FILTER METHOD(RETURNS THE ARRAY THAT PASSES THE TEST)
z("filter");
{
    let arr = [7,9,7,8,53,7,57,3,87];

    let pass = arr.filter( function trueofNot(x) {
        return x > 7;
    });

    z(pass);

    var stu = [
        {rollNo:3,Name:"Abhay",Marks:61},
        {rollNo:8,Name:"Abhayanand",Marks:45},
        {rollNo:5,Name:"Abhayanand Siddharth",Marks:65},
        {rollNo:6,Name:"Priyo",Marks:77},
        {rollNo:4,Name:"Priyoranjan Khatua",Marks:75},
        {rollNo:9,Name:"Priyoranjan",Marks:78},
    ]

    let passingStudent = stu.filter( (obj) => {
        if( obj.Marks > 60 && obj.rollNo >3 )
            return obj;
    });

    z(passingStudent);
}

{
    let a = [5,3,6,8,4,5,2,7,4,9,12];

    let re = a.reduce( function red(acc,curr){
        acc += curr;
        return acc;
    });
    
    z(re);

    let s = stu.reduce( function re(sum,curr){
        sum += curr.Marks;
        return sum;
    },0);
    z(s);
}



