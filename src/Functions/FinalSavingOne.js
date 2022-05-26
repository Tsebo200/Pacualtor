import {percentOne} from "./PercentSavings";
import { totalIncomeAfterTax } from "./TaxCalculate"

const FinalSavingOne = () => {
    let personOneSavings = Math.round((totalIncomeAfterTax * (percentOne * 0.01)) * 0.4);
    return personOneSavings
}
export default FinalSavingOne