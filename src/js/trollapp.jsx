import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      interest: 0,
      loan: 15,
      mortgage: 0
    };

    this.onBalance = this.onBalance.bind(this);
    this.onInterest = this.onInterest.bind(this);
    this.onLoan = this.onLoan.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onBalance(e) {
    this.setState({balance: e.target.value});
    //{balance: this.state.onBalance} will return default state; won't update when it changes
  }

  onInterest(e) {
    this.setState({interest: e.target.value});
  }
  
  onLoan(e) {
    this.setState({loan: e.target.value})
  }

  onSubmit(e) {
    //balance = p
    //interest = r
    //loan = n
    var {balance, interest, loan} = this.state;
    let numerator = ( balance  * (interest * Math.pow((1 + interest), (12 * loan))) );
    let denominator = (Math.pow((1 + interest), loan)) - 1;

    let mortgage = numerator/denominator;

    console.log(mortgage);
    this.setState({mortgage});
    return `${mortgage} is your payment.`
  }

  render() {
    return (
      <div className='container'>
        <div className='form-horizontal'>
          <h1>Mortgage Calculator</h1>
          <div className='form-row col-md-4'>
            Loan balance:
            <input 
              type='number' 
              placeholder='0' 
              name='balance' 
              value={this.state.balance}
              onChange={this.onBalance} 
              className='form-control' />
            Interest Rate (%):
            <input type='number'
              placeholder='0' 
              name='rate' 
              step='0.01'
              value={this.state.interest}
              onChange={this.onInterest}
              className='form-control' />
            Loan term (years):
            <select name='term' 
              className='form-control'
              value={this.state.loan}
              onChange={this.onLoan}>
                <option>15</option>
                <option>30</option>
            </select>
            <br />
            <button name='submit'
              className="btn btn-primary"
              onClick={this.onSubmit}>Submit</button>
          </div>
          <div name='output' id='output'>{this.state.mortgage}
          </div>
        </div>
      </div>
    );
  }
}