import {percentTwo} from "./PercentSavingsTwo";
import { totalIncomeAfterTax } from "./TaxCalculate";

const FinalSavingTwo = () => {
    let personTwoSavings = Math.round((totalIncomeAfterTax * (percentTwo * 0.01)) * 0.4);
    return personTwoSavings
}
export default FinalSavingTwo