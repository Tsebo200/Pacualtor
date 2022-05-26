import AddingIncome from "./Addition";
import totalIncome from "./Addition";
import totalIncomeAfterTax from './TaxCalculate';
import TaxCalc from './TaxCalculate';
import Expenses from "./Subtraction";
import monthlyExpense from './Subtraction';
import Result from './Equals';
import totalSavings from './Equals';
import PercentSavings from "./PercentSavings";
import percentOne from './PercentSavings';
import percentTwo from './PercentSavingsTwo';
import PercentSavingsTwo from './percentSavingsTwo';
import FinalSavingOne from './FinalSavingOne';
import personOneSavings from './FinalSavingOne';
import FinalSavingTwo from './FinalSavingTwo';
import personTwoSavings from './FinalSavingTwo';


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

describe("Testing The Final Result for household", () => {
    test("Run test for result....", () => {
        expect(Result(totalSavings)).toBe(50148);
    });
});

describe("Testing The percentage person One owns from total salary", () => {
    test("Run test for percentOne...", () => {
        expect(PercentSavings(percentOne)).toBe(38);
    });
});

describe("Testing The percentage person Two owns from total salary", () => {
    test("Run test for percentTwo...", () => {
        expect(PercentSavingsTwo(percentTwo)).toBe(63);
    });
});

describe("Testing The percentage person One Saves", () => {
    test("Run test for personOne Savings...", () => {
        expect(FinalSavingOne(personOneSavings)).toBe(11422);
    });
});

describe("Testing The percentage person Two Saves", () => {
    test("Run test for personTwo Savings...", () => {
        expect(FinalSavingTwo(personTwoSavings)).toBe(18937);
    });
});