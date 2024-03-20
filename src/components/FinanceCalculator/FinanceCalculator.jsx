import React, { useState } from "react";

const FinanceCalculator = () => {
  const [amount, setAmount] = useState();
  const [downpayment, setDownPayemt] = useState();
  const [interestRate, setInterestRate] = useState();
  const [loanTerms, setLoanTerms] = useState();
  const [monthlyPayment, setMonthlyPayment] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullPayment = amount - downpayment;
    const inter = interestRate / 100;
    const month = (fullPayment * inter + fullPayment) / loanTerms;
    setMonthlyPayment(month.toFixed(2));
  };

  return (
    <>
      <div id="calculator" style={{ marginTop: "20px" }}>
        <div className="container  ">
          <div className="col-xs-12 col-md-12">
            <div className="row ">
              <h2 className="text-center">Finance Calculator</h2>

              <div className="row ">
                <form
                  onSubmit={handleSubmit}
                  style={{ marginTop: "25px", marginLeft: "280px" }}
                >
                  <div className="row">
                    <div className="col-md-4  ">
                      <div className="form-group">
                        <label htmlFor="">Amount</label>
                        <input
                          type="number"
                          id="amount"
                          name="amount"
                          className="form-control"
                          placeholder="Lkr"
                          required
                          onChange={(e) => {
                            setAmount(e.target.value);
                          }}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-4 ">
                      <div className="form-group">
                        <label htmlFor="">Down Payment</label>
                        <input
                          type="number"
                          id="downpayment"
                          name="downpayment"
                          className="form-control"
                          placeholder="Lkr"
                          required
                          onChange={(e) => {
                            setDownPayemt(e.target.value);
                          }}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4  ">
                      <div className="form-group">
                        <label htmlFor="">Interest Rate</label>
                        <input
                          type="number"
                          id="interestRate"
                          name="interestRate"
                          className="form-control"
                          placeholder="%"
                          required
                          onChange={(e) => {
                            setInterestRate(e.target.value);
                          }}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-4  ">
                      <div className="form-group">
                        <label htmlFor="">Loan Terms</label>
                        <input
                          type="number"
                          id="loanTerms"
                          name="loanTerms"
                          className="form-control"
                          placeholder="eg: 10"
                          required
                          onChange={(e) => {
                            setLoanTerms(e.target.value);
                          }}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8  ">
                      <div className="form-group">
                        <label htmlFor="">Monthly Payment</label>
                        <input
                          type="number"
                          id="monthlyPayment"
                          readOnly
                          step="0.01"
                          name="monthlyPayment"
                          className="form-control"
                          value={monthlyPayment}
                          placeholder="Monthly Payment"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-1">
                      <button
                        type="submit"
                        className="btn"
                        onClick={() => handleSubmit}
                        style={{ marginTop: "3px", marginLeft: "195px" }}
                      >
                        Calculate
                      </button>
                    </div>
                    <div className="col-md-1">
                      <button
                        type="reset"
                        className="btn"
                        style={{ marginTop: "3px", marginLeft: "215px" }}
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinanceCalculator;
