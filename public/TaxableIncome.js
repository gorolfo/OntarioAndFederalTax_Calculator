class TaxableIncome{
    static ontarioTax(nTaxableIncome){
        let nOntarioTax = 0;
        
        // 1st Bracket: Taxable Income less than 40,922. 
        if(nTaxableIncome <= 40922 ){
            let nBaseAmount = 0;
            let nOntarioTaxRates = 0.0505;
            nOntarioTax = (nTaxableIncome - nBaseAmount) * nOntarioTaxRates + 0;
        }

        // 2nd Bracket: Taxable Income more than 40,922 but less than 81,847. 
        if(nTaxableIncome > 40922 && nTaxableIncome <= 81847 ){
            let nBaseAmount = 40922;
            let nOntarioTaxRates = 0.0915;
            nOntarioTax = (nTaxableIncome - nBaseAmount) * nOntarioTaxRates + 2067;
        }

        // 3rd Bracket: Taxable Income more than 81,847 but less than 150,000. 
        if(nTaxableIncome > 81847 && nTaxableIncome <= 150000 ){
            let nBaseAmount = 81847;
            let nOntarioTaxRates = 0.1116;
            nOntarioTax = (nTaxableIncome - nBaseAmount) * nOntarioTaxRates + 5811;
        }

        // 4th Bracket: Taxable Income more than 150,000 but less than 220,000. 
        if(nTaxableIncome > 150000 && nTaxableIncome <= 220000 ){
            let nBaseAmount = 150000;
            let nOntarioTaxRates = 0.1216;
            nOntarioTax = (nTaxableIncome - nBaseAmount) * nOntarioTaxRates + 13417;
        }

        // 5rd Bracket: Taxable Income more than 220,000. 
        if(nTaxableIncome > 220000){
            let nBaseAmount = 220000;
            let nOntarioTaxRates = 0.1316;
            nOntarioTax = (nTaxableIncome - nBaseAmount) * nOntarioTaxRates + 21929;
        }
        return Number(nOntarioTax.toFixed(2));
    }
    
    static federalTax(nTaxableIncome){
        let nFederalTax = 0;

        // 1st Bracket: Taxable Income less than 45,282. 
        if(nTaxableIncome <= 45282 ){
            let nBaseAmount = 0;
            let nFederalTaxRates = 0.15;
            nFederalTax = (nTaxableIncome - nBaseAmount) * nFederalTaxRates + 0;
        }

        // 2nd Bracket: Taxable Income more than 45,282 but less than 90,563. 
        if(nTaxableIncome > 45282 && nTaxableIncome <= 90563 ){
            let nBaseAmount = 45282;
            let nFederalTaxRates = 0.205;            
            nFederalTax = (nTaxableIncome - nBaseAmount) * nFederalTaxRates + 6792;
        }

        // 3rd Bracket: Taxable Income more than 90,563 but less than 140,388. 
        if(nTaxableIncome > 90563 && nTaxableIncome <= 140388 ){
            let nBaseAmount = 90563;
            let nFederalTaxRates = 0.26;             
            nFederalTax = (nTaxableIncome - nBaseAmount) * nFederalTaxRates + 16075;
        }

        // 4th Bracket: Taxable Income more than 140,388 but less than 200,000. 
        if(nTaxableIncome > 140388 && nTaxableIncome <= 200000 ){
            let nBaseAmount = 140388;
            let nFederalTaxRates = 0.29;   
            nFederalTax = (nTaxableIncome - nBaseAmount) * nFederalTaxRates + 29029;
        }

        // 5rd Bracket: Taxable Income more than 200,000. 
        if(nTaxableIncome > 200000){
            let nBaseAmount = 200000;
            let nFederalTaxRates = 0.33;   
            nFederalTax = (nTaxableIncome - nBaseAmount) * nFederalTaxRates + 46317;
        }
        return Number(nFederalTax.toFixed(2));
    }
}
module.exports = TaxableIncome;