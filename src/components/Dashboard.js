import React from "react";

const Dashboard= () => {

    
    return(
        <>
        <div className="main-container">
        <div className="side-bar-container">
        <div className="logo-box"></div>
        <p className="paculate-text"><mark className="P-text">P</mark><mark className="a-text-one">a</mark><mark className="c-text">c</mark><mark className="u-text">u</mark><mark className="l-text">l</mark><mark className="a-text-two">a</mark><mark className="t-text">t</mark><mark className="o-text">o</mark><mark className="r-text">r</mark></p>
        <p className="slogan"><mark className="your-text">Your</mark><mark className="personal-text">Personal</mark><mark className="budget-text">Budget</mark><mark className="paculator-text">Paculator</mark></p>
        <div className="profile-one-img"></div>
        <p className="input-label-one">Please Enter Your Name</p>
        <form><input className="name-input-one" type={'text'}></input></form>
        <p className="input-label-two">Please Enter Your Earnings</p>
        <form><input className="salary-input-one" type={'number'}></input></form>

        <div className="profile-two-img"></div>
        <p className="input-label-three">Please Enter Your Name</p>
        <form><input className="name-input-two" type={'text'}></input></form>
        <p className="input-label-four">Please Enter Your Earnings</p>
        <form><input className="salary-input-two" type={'number'}></input></form>
        <div className="begin-btn" type={'submit'}><p className="begin-text">Let's Begin</p></div>
        </div>
        {/* End of Side-Bar Container */}

        <div className="net-income-container">
            <p className="net-income-text">Total Net Income</p>
            <div className="net-income-output-container">
                <div className="rand-container-one"><p className="R-text-one">R</p></div>
                <div className="net-income-output-box"></div>
            </div>
            <p className="name-one-net-inc">Name One</p>
            <div className="line-breaker"></div>
            <p className="name-two-net-inc">Name Two</p>
        </div>
        {/* End of Net Income Container */}
        
        <div className="income-after-tax-container">
            <p className="income-after-tax-text">Income After Tax</p>
            <div className="income-after-tax-left-container">
                <div className="income-after-tax-output-container-one">
                    <div className="rand-container-two"><p className="R-text-two">R</p></div>
                    <div className="income-after-tax-output-box-one"></div>
                    <p className="amount-deducted-text">Amount Deducted</p>
                </div>
                <div className="income-after-tax-output-container-two">
                    <div className="rand-container-three"><p className="R-text-three">R</p></div>
                    <div className="income-after-tax-output-box-two"></div>
                    <p className="damn-thieves-text">DAMN THOSE THIEVES!</p>
                </div>
            </div>
            <div className="income-after-tax-right-container">
                <div className="income-after-tax-user-one-box">
                    <div className="income-after-tax-profile-one"></div>
                    <p className='income-after-tax-profile-one-name'>Name One</p>
                </div>
                <div className="income-after-tax-user-two-box">
                    <div className="income-after-tax-profile-two"></div>
                    <p className='income-after-tax-profile-two-name'>Name Two</p>
                </div>
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
                        <option>Fuel</option>
                        <option>Groceries</option>
                        <option>Internet</option>
                        <option>Subscriptions</option>
                        <option>Others</option>
                    </select>
                
                    <select className="expense-two">
                        <option>Select Your Expense</option>
                        <option>Rent</option>
                        <option>Water and Electricity</option>
                        <option>Fuel</option>
                        <option>Groceries</option>
                        <option>Internet</option>
                        <option>Subscriptions</option>
                        <option>Others</option>
                    </select>

                    <select className="expense-three">
                        <option>Select Your Expense</option>
                        <option>Rent</option>
                        <option>Water and Electricity</option>
                        <option>Fuel</option>
                        <option>Groceries</option>
                        <option>Internet</option>
                        <option>Subscriptions</option>
                        <option>Others</option>
                    </select>

                    <select className="expense-four">
                        <option>Select Your Expense</option>
                        <option>Rent</option>
                        <option>Water and Electricity</option>
                        <option>Fuel</option>
                        <option>Groceries</option>
                        <option>Internet</option>
                        <option>Subscriptions</option>
                        <option>Others</option>
                    </select>

                    <select className="expense-five">
                        <option>Select Your Expense</option>
                        <option>Rent</option>
                        <option>Water and Electricity</option>
                        <option>Fuel</option>
                        <option>Groceries</option>
                        <option>Internet</option>
                        <option>Subscriptions</option>
                        <option>Others</option>
                    </select>

                    <select className="expense-six">
                        <option>Select Your Expense</option>
                        <option>Rent</option>
                        <option>Water and Electricity</option>
                        <option>Fuel</option>
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
                        <input type={'number'} className="monthly-expense-input-box-one"></input>
                    </div>
                    <div className="monthly-expense-input-container-two">
                    <div className="rand-container-five"><p className="R-text-five">R</p></div>
                        <input type={'number'} className="monthly-expense-input-box-two"></input>
                    </div>
                    <div className="monthly-expense-input-container-three">
                    <div className="rand-container-six"><p className="R-text-six">R</p></div>
                        <input type={'number'} className="monthly-expense-input-box-three"></input>
                    </div>
                    <div className="monthly-expense-input-container-four">
                    <div className="rand-container-seven"><p className="R-text-seven">R</p></div>
                        <input type={'number'} className="monthly-expense-input-box-four"></input>
                    </div>
                    <div className="monthly-expense-input-container-five">
                    <div className="rand-container-eight"><p className="R-text-eight">R</p></div>
                        <input type={'number'} className="monthly-expense-input-box-five"></input>
                    </div>
                    <div className="monthly-expense-input-container-six">
                    <div className="rand-container-nine"><p className="R-text-nine">R</p></div>
                        <input type={'number'} className="monthly-expense-input-box-six"></input>
                    </div>
                </div>
            </div>
        </div>
        <div className="results-container"></div>
       
        </div> 
        </> 
    )
}
export default Dashboard