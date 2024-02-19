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

for( b = 0; a < quiz.ans.length; a++ ){
        if( i == 0 )
            console.log(quiz.Q);
        console.log(quiz.ans[i]);
}