function totalIncome(){
        event.preventDefault();
        
        let incomeM = parseInt(document.getElementById("income").value);
        let housePropety = parseInt(document.getElementById("incomeHouse").value);
        let otherSources = parseInt(document.getElementById("incomeSources").value);
        var totalIncome = incomeM + housePropety + otherSources;
        console.log(totalIncome);

        function deductionTotal(){

                var deductionAmount = 0;

                let decision11 = parseInt(document.getElementById("decision1").value); // amount invest
                let ded1 = document.getElementById("80C").value; // yes or no
                
                let decision12 = parseInt(document.getElementById("decision2").value);
                let ded2 = document.getElementById("NPS").value;

                let decision13 = parseInt(document.getElementById("decision3").value);
                let ded3 = document.getElementById("Ihealth").value;

                if( ded1 === "yes" ){
                        if( decision11 >= 150000 )
                                deductionAmount += 150000;
                        else{
                                deductionAmount += decision11;
                        }
                }
                if( ded2 === "yes" ){
                        if( decision12 >= 50000 )
                                deductionAmount += 50000;
                        else{
                                deductionAmount += decision12;
                        }
                }
                if( ded3 === "yes" ){
                        if( decision13 >= 25000 )
                                deductionAmount += 25000;
                        else{
                                deductionAmount += decision13;
                        }
                }

                totalIncome -= deductionAmount;
                console.log(totalIncome);
        }
        deductionTotal();


}




        

    

