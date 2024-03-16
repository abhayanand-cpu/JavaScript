function emp( name, email, Depatment, Salary ){
    this.name = name;
    this.email = email;
    this.Depatment = Depatment;
    this.Salary = Salary;
}

let obj = [

    {emp1 : new emp( "Abhay", "example@134", "CSIT", "546548654")}
    ,
    {emp2 : new emp( "Abhay", "example@134", "ECE", "54545454")}
    ,
    {emp3 : new emp( "Abhay", "example@134", "CSE", "54785")}
    ,
    {emp4 : new emp( "Abhay", "example@134", "CSIT", "5465")}
    ,
    {emp5 : new emp( "Abhay", "example@134", "CSIT", "548654")}

];

let fil = obj.filter( function ( emp ){
    
    return emp.Salary > 80000;
   
});

console.log(fil);
