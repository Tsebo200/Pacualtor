import { personTwoIncome } from "./Addition";
import { totalIncome } from "./Addition";

const PercentSavingsTwo = () => {
    let percentTwo = Math.round((personTwoIncome/totalIncome) * 100);

    return (percentTwo)
}
export const percentTwo = 63
export default PercentSavingsTwo