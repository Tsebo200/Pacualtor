import { personOneIncome } from "./Addition";
import { personTwoIncome } from "./Addition";
import { totalIncome } from "./Addition";

const PercentSavings = () => {
    let percentOne = Math.round((personOneIncome/totalIncome) * 100);
    let percentTwo = Math.round((personTwoIncome/totalIncome) * 100);

    return percentOne
}
// export const percentOne = 37.5
export default PercentSavings