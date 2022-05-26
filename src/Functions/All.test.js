import AddingIncome from "./Addition";
import totalIncome from "./Addition";
import totalIncomeAfterTax from './TaxCalculate';
import TaxCalc from './TaxCalculate';
import Expenses from "./Subtraction";
import monthlyExpense from './Subtraction';


describe("Test Adding Total Income in the household", () => {
    test("Run test for AddingIncome function to calculate Persons Income...", () => {
        expect(AddingIncome(totalIncome)).toBe(160000);
    });
});

describe("Test Income After Tax for the household", () => {
    test("Run test for totalIncomeAfterTax Calculation...", () => {
        expect(TaxCalc(totalIncomeAfterTax)).toBe(75148);
    });
});

describe("Testing Expenses for the household", () => {
    test("Run test for monthlyExpense...", () => {
        expect(Expenses(monthlyExpense)).toBe(25000);
    });
});