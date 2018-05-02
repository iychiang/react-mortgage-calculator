import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: undefined,
      interest: undefined,
      loan: 15,
      mortgage: 0,
      output: ''
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
    var balance = this.state.balance;
    var loan = 12 * this.state.loan;
    var interest = (this.state.interest/12/100);
    console.log('interest', interest);

    let numerator = (balance * interest * Math.pow((1 + interest), loan));
    let denominator = (Math.pow((1 + interest), loan)) - 1;

    let mortgage = (numerator/denominator).toFixed(2);

    console.log(mortgage);
    this.setState({mortgage});
    this.setState({output: `${mortgage} is your monthly payment.`});
  }

  render() {
    return (
      <div className='container border'>
        <div className='form-horizontal'>
          <div className='form-row'>
          <h3>MORTGAGE <span>CALCULATOR</span></h3>
          <br />
            Loan balance:
            <input 
              type='number' 
              placeholder='$0.00' 
              name='balance' 
              value={this.state.balance}
              onChange={this.onBalance} 
              className='form-control' />
            Interest Rate (%):
            <input type='number'
              placeholder='0.00%' 
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
            <br />
            <br />
          <div name='output' id='output'>{this.state.output}
          </div>
          </div>
        </div>
      </div>
    );
  }
}