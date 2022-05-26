import {totalIncomeAfterTax} from './TaxCalculate';
import {monthlyExpense} from "./Subtraction";



const Result = ()=>{
 
    let totalSavings = totalIncomeAfterTax - monthlyExpense;
    console.log(totalSavings);
    return totalSavings
}
export default Result