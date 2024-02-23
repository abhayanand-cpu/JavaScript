function totalIncome(){
        event.preventDefault();
        
        let incomeM = parseInt(document.getElementById("income").value);
        let housePropety = parseInt(document.getElementById("incomeHouse").value);
        let otherSources = parseInt(document.getElementById("incomeSources").value);
        var totalIncome = incomeM + housePropety + otherSources;
        // console.log(totalIncome);

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
                // console.log(totalIncome);
                
        }
        deductionTotal();
        
        function taxRate(){
                var taxApplied;
                
                if( totalIncome <= 250000 ){
                        taxApplied = "NIL";
                }
                else if ( totalIncome >= 250001 && totalIncome <= 500000 ) {
                        taxApplied = totalIncome * 0.05;
                }
                else if( totalIncome >= 500001 && totalIncome <= 1000000 ){
                        taxApplied = 12500 + totalIncome * 0.2;
                }
                else if ( totalIncome >= 1000000 ) {
                        taxApplied = 112500 + totalIncome * 0.3;
                }
                return taxApplied;
        }
        var t = taxRate();
        var tax = document.getElementById("tax").innerHTML = "<br>your tax for this year Rs."+t;
}





        

    

