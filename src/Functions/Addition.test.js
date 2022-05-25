import AddingIncome from "./Addition";
import totalIncome from "./Addition";


describe("Test Adding Total Income in the household", () => {
    test("Run test for AddingIncome function to calculate Persons Income...", () => {
        expect(AddingIncome(totalIncome)).toBe(160000);
    });
});