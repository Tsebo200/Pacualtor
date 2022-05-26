import {personOneIncome, personTwoIncome} from './Addition';
const TaxCalc = () => {

    
    
    let yearTotalOne = personOneIncome * 12;
    let yearTotalTwo = personTwoIncome * 12;
    let taxBracketOne = 0;
    let taxBracketTwo = 0;
    let tax = 0;
    let baseRate = 0;

    // Person One
    if(yearTotalOne < 226000){
        tax = yearTotalOne * 0.18;
        yearTotalOne = tax/12;
        taxBracketOne = taxBracketOne + 1;

    } else if(yearTotalOne < 353100) {
        baseRate = 40680;
        tax = (yearTotalOne - baseRate) * 0.26;
        yearTotalOne = (tax + baseRate)/12;
        taxBracketOne = taxBracketOne + 2;

    }else if(yearTotalOne < 488700){
        baseRate = 	73726;
        tax = (yearTotalOne - baseRate) * 0.31;
        yearTotalOne = (tax + baseRate)/12;
        taxBracketOne = taxBracketOne + 3;

    }else if(yearTotalOne < 641400){
        baseRate = 115762;
        tax = (yearTotalOne - baseRate) * 0.36;
        yearTotalOne = (tax + baseRate)/12;
        taxBracketOne = taxBracketOne + 4;

    }else if(yearTotalOne < 817600){
        baseRate = 170734;
        tax = (yearTotalOne - baseRate) * 0.39;
        yearTotalOne = (tax + baseRate)/12;
        taxBracketOne = taxBracketOne + 5;
  
    }else if(yearTotalOne < 1731600){
        baseRate = 239452;
        tax = (yearTotalOne - baseRate) * 0.41;
        yearTotalOne = (tax + baseRate)/12;
        taxBracketOne = taxBracketOne + 6;

    }else{
        baseRate = 614192;
        tax = (yearTotalOne - baseRate) * 0.45;
        yearTotalOne = (tax + baseRate)/12;
        taxBracketOne = taxBracketOne + 7;
    }

    

    // PersonTwo
    if(yearTotalTwo < 226000){
        tax = yearTotalTwo * 0.18;
        yearTotalTwo = tax/12;
        taxBracketTwo = taxBracketTwo + 1;

    } else if(yearTotalTwo < 353100) {
        baseRate = 40680;
        tax = (yearTotalTwo - baseRate) * 0.26;
        yearTotalTwo = (tax + baseRate)/12;
        taxBracketTwo = taxBracketTwo + 2;

    }else if(yearTotalTwo < 488700){
        baseRate = 	73726;
        tax = (yearTotalTwo - baseRate) * 0.31;
        yearTotalTwo = (tax + baseRate)/12;
        taxBracketTwo = taxBracketTwo + 3;

    }else if(yearTotalTwo < 641400){
        baseRate = 115762;
        tax = (yearTotalTwo - baseRate) * 0.36;
        yearTotalTwo = (tax + baseRate)/12;
        taxBracketTwo = taxBracketTwo + 4;

    }else if(yearTotalTwo < 817600){
        baseRate = 170734;
        tax = (yearTotalTwo - baseRate) * 0.39;
        yearTotalTwo = (tax + baseRate)/12;
        taxBracketTwo = taxBracketTwo + 5;
    
    }else if(yearTotalTwo < 1731600){
        baseRate = 239452;
        tax = (yearTotalTwo - baseRate) * 0.41;
        yearTotalTwo = (tax + baseRate)/12;
        taxBracketTwo = taxBracketTwo + 6;

    }else{
        baseRate = 614192;
        tax = (yearTotalTwo - baseRate) * 0.45;
        yearTotalTwo = (tax + baseRate)/12;
        taxBracketTwo = taxBracketTwo + 7;
    }

    let totalIncomeAfterTax = Math.round((personOneIncome - yearTotalOne) + (personTwoIncome - yearTotalTwo));
    return totalIncomeAfterTax
}
export const totalIncomeAfterTax = 75148;
export default TaxCalc