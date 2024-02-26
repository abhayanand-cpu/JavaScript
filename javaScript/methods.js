function print(p) {
    console.log(p);
}

//Question 1
let employe = [
    {fName:"Abhay",lName:"anand",salary:100000},
    {fName:"Priyaranjan",lName:"Khatua",salary:53000},
    {fName:"Sagar",lName:"kumar",salary:45000},
    {fName:"Manav",lName:".",salary:500000},
    {fName:"Rudra",lName:"Prasad",salary:83000},
    {fName:"yaj",lName:"goswami",salary:43000},
    {fName:"Sohan",lName:"Mohanty",salary:40000},
    {fName:"Priyanka",lName:"patra",salary:55000},
    {fName:"Shreyansh",lName:"padhi",salary:10000},
    {fName:"Abinash",lName:"Mahopatra",salary:66000},
    {fName:"Akash",lName:"pradhan",salary:80000},
];

let moreThan50k = employe.filter( function moreThan(obj) {
    return obj.salary > 50000;
    
});
console.log(moreThan50k);
let moreThan = moreThan50k.map( function name(obj) {
   return obj.fName; 
});

console.log(moreThan);

//Question 2

let sumSalary = moreThan50k.reduce(function add(sum,next) {
    sum += next.salary;
    return sum;
},0);

console.log(sumSalary);

//Question 3

let data = [12,56,34,56,87,23,86,56,87,23];

let dataSum = data.reduce( function sum(sum,next) {
    sum += next;
    return sum;
},0);

let mean = dataSum / data.length;
print(mean);

let median = function calcMedian() {
    data.sort();
    const length = data.length;
    let m = 0;

    if( length % 2 != 0 ) {
        m = length + 1 / 2;
    }

    else{
        m =  ( ((length / 2) + (length / 2 + 1)) / 2 );
    }
    return data[m];
}

let mode = function frequent(data) {
    const l = data.length;
    let count = 1;
    let pC = 1;
    let ele = data[0];

    for (let i = 1; i < l; i++) {
        if( data[i] == data[i-1] ){
            count++;
        }
        else{
            if (pC < count) {
                pC = count;
                ele = data[i-1];
            }
            count = 1;
        }    
    }
    return ele;
}
print(mode);