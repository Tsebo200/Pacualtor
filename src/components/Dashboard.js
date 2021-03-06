import React from "react";
// import { monthlyExpense } from "../Functions/Subtraction";
// import { totalIncomeAfterTax } from "../Functions/TaxCalculate";

const Dashboard = () => {

    // Names Function
    const handleChange = () => {
        let nameOne = document.getElementById("nameOne").value;
        let nameTwo = document.getElementById("nameTwo").value;
        document.getElementById("name-one-output").textContent = nameOne;
        document.getElementById("name-two-output").textContent = nameTwo;
        document.getElementById("name-three-output").textContent = nameOne;
        document.getElementById("name-four-output").textContent = nameTwo;
        document.getElementById("name-five-output").textContent = nameOne;
        document.getElementById("name-six-output").textContent = nameTwo;
        handleNetIncome();
        handleTax();
    }

    // Total Net Income Function
    const handleNetIncome = () => {
        let nameOneIncome = +document.getElementById("name-one-income").value;
        let nameTwoIncome = +document.getElementById("name-two-income").value;
        let netIncome = nameOneIncome + nameTwoIncome;
        document.getElementById("net-income-output").textContent = netIncome + ".00";

        return netIncome;
    }

    // Tax Calculation Function
    const handleTax = () => {
        
        let nameOneIncome = +document.getElementById("name-one-income").value;
        let nameTwoIncome = +document.getElementById("name-two-income").value;

        let yearTotalOne = nameOneIncome * 12;
        let yearTotalTwo = nameTwoIncome * 12;
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
    
        let totalIncomeAfterTax = Math.round((nameOneIncome - yearTotalOne) + (nameTwoIncome - yearTotalTwo));
        console.log(totalIncomeAfterTax)
        // Income After Tax
        document.getElementById("tax-after-output").textContent = totalIncomeAfterTax + ".00";

        // Tax Deducted
        let deductions = nameOneIncome + nameTwoIncome - totalIncomeAfterTax;
        document.getElementById("tax-amount-output").textContent = deductions + ".00";
        console.log(deductions)
        // Tax Bracket
        document.getElementById("tax-bracket-one").textContent = taxBracketOne;
        document.getElementById("tax-bracket-two").textContent = taxBracketTwo;
       
        return totalIncomeAfterTax;
    }

   // Monthly Expense Function
 const handleMonthlyExpense = () => {
    let expenseOne = +document.getElementById("expense-one").value;
    let expenseTwo = +document.getElementById("expense-two").value;
    let expenseThree = +document.getElementById("expense-three").value;
    let expenseFour = +document.getElementById("expense-four").value;
    let expenseFive = +document.getElementById("expense-five").value;
    let expenseSix = +document.getElementById("expense-six").value;
    let monthlyExpenses = expenseOne + expenseTwo + expenseThree + expenseFour + expenseFive + expenseSix;
        document.getElementById("monthly-expense-output").textContent = monthlyExpenses + ".00";
        console.log("YES");
        console.log(monthlyExpenses);
        return monthlyExpenses;
    }

    const handleGrandTotal = () => {
        let afterTax = handleTax();
        let afterDeductions = handleMonthlyExpense();
        let finalAmount = afterTax - afterDeductions;
        document.getElementById("grand-total-amount").textContent = finalAmount + ".00"; 
        console.log(afterTax);
        console.log(afterDeductions);
        console.log(finalAmount);
        return finalAmount;
    }

    const handleIncomePercent = () => {
       let totalIncome = handleNetIncome();

       let nameOneIncome = +document.getElementById("name-one-income").value;
       let nameTwoIncome = +document.getElementById("name-two-income").value;
    
       let percentOutOne = Math.round((nameOneIncome/totalIncome)) * 100;
       let percentOutTwo = Math.round((nameTwoIncome/totalIncome)) * 100;
    
        document.getElementById("person-one-percent").textContent = percentOutOne + "%";
        document.getElementById("person-two-percent").textContent = percentOutTwo + "%";
    
        return [percentOutOne, percentOutTwo];
    }

    const handleSaveMoney = () => {
        let percentages = handleIncomePercent();
        let finalTotal = handleGrandTotal();

        let personOnePercent = percentages [0];
        let personTwoPercent = percentages [1];

        let savingpPercent = +document.getElementById("savings").value * 0.01;
        let personOneSavings = Math.round((finalTotal * (personOnePercent * 0.01)) * savingpPercent);
        let personTwoSavings = Math.round((finalTotal * (personTwoPercent * 0.01)) * savingpPercent);

        document.getElementById("person-one-savings").textContent = "R " + personOneSavings;
        document.getElementById("person-two-savings").textContent = "R " + personTwoSavings;
    }

    return(
        <>
        <div className="main-container">
        <div className="side-bar-container">
        <div className="logo-box"></div>
        <p className="paculate-text"><mark className="P-text">P</mark><mark className="a-text-one">a</mark><mark className="c-text">c</mark><mark className="u-text">u</mark><mark className="l-text">l</mark><mark className="a-text-two">a</mark><mark className="t-text">t</mark><mark className="o-text">o</mark><mark className="r-text">r</mark></p>
        <p className="slogan"><mark className="your-text">Your</mark><mark className="personal-text">Personal</mark><mark className="budget-text">Budget</mark><mark className="paculator-text">Paculator</mark></p>
        <div className="profile-one-img"></div>
        <p className="input-label-one">Please Enter Your Name</p>
        <form><input id="nameOne" className="name-input-one" type={'text'}></input></form>
        <p className="input-label-two">Please Enter Your Earnings PM</p>
        <form><input id="name-one-income" className="salary-input-one" type={'number'}></input></form>

        <div className="profile-two-img"></div>
        <p className="input-label-three">Please Enter Your Name</p>
        <form><input id="nameTwo" className="name-input-two" type={'text'}></input></form>
        <p className="input-label-four">Please Enter Your Earnings PM</p>
        <form><input id="name-two-income" className="salary-input-two" type={'number'}></input></form>
        <div onClick= {() => {handleChange(); handleIncomePercent()}} className="begin-btn" type={'submit'}><p className="begin-text">Let's Begin</p></div>
        </div>
        {/* End of Side-Bar Container */}

        <div className="net-income-container">
            <p className="net-income-text">Total Net Income</p>
            <div className="net-income-output-container">
                <div className="rand-container-one"><p className="R-text-one">R</p></div>
                <div className="net-income-output-box">
                    <p id="net-income-output"></p>
                </div>
            </div>
            <div className="line-breaker"></div>
            <div className="name-one-net-inc-container">
            <p id="person-one-percent" className="percent-contribute-one"></p>
            <p id="name-one-output" className="name-one-net-inc"></p>
            </div>
            <div className="name-two-net-inc-container">
            <p id="person-two-percent" className="percent-contribute-two"></p>
            <p id="name-two-output" className="name-two-net-inc"></p>
            </div>
        </div>
        {/* End of Net Income Container */}
        
        <div className="income-after-tax-container">
            <p className="income-after-tax-text">Income After Tax</p>
            <div className="income-after-tax-left-container">
                <div className="income-after-tax-output-container-one">
                    <div className="rand-container-two"><p className="R-text-two">R</p></div>
                    <div className="income-after-tax-output-box-one">
                        <p id="tax-after-output"></p>
                    </div>
                    <p className="amount-deducted-text">Amount Deducted</p>
                </div>
                <div className="income-after-tax-output-container-two">
                    <div className="rand-container-three"><p className="R-text-three">R</p></div>
                    <div className="income-after-tax-output-box-two">
                        <p id="tax-amount-output"></p>
                    </div>
                    <p className="damn-thieves-text">DAMN THOSE THIEVES!</p>
                </div>
            </div>
            <div className="income-after-tax-right-container">
                <div className="income-after-tax-user-one-box">
                    <div className="income-after-tax-profile-one"></div>
                    <div className="income-after-tax-text-container-one">
                    <p id="name-three-output" className='income-after-tax-profile-one-name'></p>
                    </div>
                </div>
                <div className="income-after-tax-user-two-box">
                    <div className="income-after-tax-profile-two"></div>
                    <div className="income-after-tax-text-container-two">
                    <p id="name-four-output" className='income-after-tax-profile-two-name'></p>
                    </div>
                </div>
            </div>
            <div className="tax-bracket-container-one">
                <p className="tax-bracket-text">Tax Bracket</p>
                <p id="tax-bracket-one"></p>
            </div>
            <div className="tax-bracket-container-two">
                <p className="tax-bracket-text">Tax Bracket</p>
                <p id="tax-bracket-two"></p>
            </div>
        </div>
        {/* End of Income After Tax Container */}

        <div className="monthly-expense-container">
            <p className="monthly-expense-text">Monthly Expense</p>
            <div className="monthly-expense-content-container-left">
                <div className="monthly-expense-input-box">
                    <select className="expense-one">
                        <option>Select Your Expense</option>
                        <option>Rent</option>
                        <option>Water and Electricity</option>
                        <option>Petrol</option>
                        <option>Groceries</option>
                        <option>Internet</option>
                        <option>Subscriptions</option>
                        <option>Others</option>
                    </select>
                
                    <select className="expense-two">
                        <option>Select Your Expense</option>
                        <option>Rent</option>
                        <option>Water and Electricity</option>
                        <option>Petrol</option>
                        <option>Groceries</option>
                        <option>Internet</option>
                        <option>Subscriptions</option>
                        <option>Others</option>
                    </select>

                    <select className="expense-three">
                        <option>Select Your Expense</option>
                        <option>Rent</option>
                        <option>Water and Electricity</option>
                        <option>Petrol</option>
                        <option>Groceries</option>
                        <option>Internet</option>
                        <option>Subscriptions</option>
                        <option>Others</option>
                    </select>

                    <select className="expense-four">
                        <option>Select Your Expense</option>
                        <option>Rent</option>
                        <option>Water and Electricity</option>
                        <option>Petrol</option>
                        <option>Groceries</option>
                        <option>Internet</option>
                        <option>Subscriptions</option>
                        <option>Others</option>
                    </select>

                    <select className="expense-five">
                        <option>Select Your Expense</option>
                        <option>Rent</option>
                        <option>Water and Electricity</option>
                        <option>Petrol</option>
                        <option>Groceries</option>
                        <option>Internet</option>
                        <option>Subscriptions</option>
                        <option>Others</option>
                    </select>

                    <select className="expense-six">
                        <option>Select Your Expense</option>
                        <option>Rent</option>
                        <option>Water and Electricity</option>
                        <option>Petrol</option>
                        <option>Groceries</option>
                        <option>Internet</option>
                        <option>Subscriptions</option>
                        <option>Others</option>
                    </select>
                    </div>
                {/* End Monthly Expense Container Left */}

                <div className="monthly-expense-content-container-right">
                    <div className="monthly-expense-input-container-one">
                        <div className="rand-container-four"><p className="R-text-four">R</p></div>
                            <input id="expense-one" type={'number'} className="monthly-expense-input-box-one"></input>
                    </div>

                    <div className="monthly-expense-input-container-two">
                        <div className="rand-container-five"><p className="R-text-five">R</p></div>
                            <input id="expense-two" type={'number'} className="monthly-expense-input-box-two"></input>
                    </div>

                    <div className="monthly-expense-input-container-three">
                        <div className="rand-container-six"><p className="R-text-six">R</p></div>
                            <input id="expense-three" type={'number'} className="monthly-expense-input-box-three"></input>
                    </div>

                    <div className="monthly-expense-input-container-four">
                        <div className="rand-container-seven"><p className="R-text-seven">R</p></div>
                            <input id="expense-four" type={'number'} className="monthly-expense-input-box-four"></input>
                    </div>

                    <div className="monthly-expense-input-container-five">
                        <div className="rand-container-eight"><p className="R-text-eight">R</p></div>
                            <input id="expense-five" type={'number'} className="monthly-expense-input-box-five"></input>
                    </div>

                    <div className="monthly-expense-input-container-six">
                        <div className="rand-container-nine"><p className="R-text-nine">R</p></div>
                            <input id="expense-six" type={'number'} className="monthly-expense-input-box-six"></input>
                    </div>
                </div>
            </div>
            <div className="total-monthly-expense-box">
                    <div className="rand-container-ten"><p className="R-text-ten">R</p></div>
                    <div className="monthly-expense-output-box">
                        <p id="monthly-expense-output"></p>
                    </div>
            </div>
            <div onClick= {() => {handleMonthlyExpense(); handleGrandTotal()}} type={'submit'} className="suffer-btn">
                <p className="suffer-text">Make Me Suffer</p>
            </div>
        </div>
        <div className="results-container">
            <p className="amount-left-text">Amount Left Over</p>
            <p className="grand-total-text">Grand Total</p>
            <div className="result-output-container">
                <div className="rand-container-eleven"><p className="R-text-eleven">R</p></div>
                <div className="results-output-box">
                    <p id="grand-total-amount"></p>
                </div>
            </div>
            <div className="how-much-save-text">How much do you want to save?</div>
            <div className="percent-save-box">
                <select id="savings" onChange={handleSaveMoney} className="percent-numb">
                    <option value="10">10%</option>
                    <option value="20">20%</option>
                    <option value="30">30%</option>
                    <option value="40">40%</option>
                    <option value="50">50%</option>
                    <option value="60">60%</option>
                    <option value="70">70%</option>
                    <option value="80">80%</option>
                    <option value="90">90%</option>
                    <option value="100">100%</option>
                </select>
            </div>
            <div className="profile-amount-container-left">
                <div className="profile-amount-left"></div>
                <div className="profile-amount-text-container-one">
                <div id="name-five-output" className="profile-amount-name-one">Name One</div>
                </div>
                <div id="person-one-savings" className="profile-one-savings"></div>
            </div>
            <div className="profile-amount-container-right">
                <div className="profile-amount-right"></div>
                <div className="profile-amount-text-container-two">
                <div id="name-six-output" className="profile-amount-name-two">Name Two</div>
                </div>
                <div id="person-two-savings" className="profile-two-savings"></div>
            </div>
        </div>
        </div> 
        </> 
    )
}
// export const nameOneIncome = +document.getElementById("name-one-income").value;
// export const nameTwoIncome = +document.getElementById("name-two-income").value;
export default Dashboard