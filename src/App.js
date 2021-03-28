import './App.css';
import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

export default class home extends Component {
  state = {
    inputNum: '',
    mode: 'isPrime',
  }

  updateInput = (e) => {
    if (e.target.value < 0) {
      this.setState( {inputNum: 1} )
    }
    else {
      this.setState( {inputNum: e.target.value} )
      if (!Number.isInteger(e.target.value)){
        this.setState( {inputNum: Math.round(e.target.value)} )
      }  
    }
  }

  updateMode = (e) => {
    this.setState( {mode: e.target.value} )
  }

  isPerfectSquare = (x) => {
    let s = parseInt(Math.sqrt(x));
    return (s * s === x);
  }

  isFibonacci = (n) => {
    return this.isPerfectSquare(5 * n * n + 4) || this.isPerfectSquare(5 * n * n - 4);
  }

  isPrime = (n) => {
    for(let i = 2, s = Math.sqrt(n); i <= s; i++)
      if(n % i === 0) return false; 
    return n > 1;
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
            crossorigin="anonymous"
          />        
        </header>

        <Container fluid>
          <Row className="full-height">
            <div className="first-col">
              <input 
                type="number"
                value={this.state.inputNum}
                onChange={this.updateInput}
              />
            </div>
            <div className="mid-col">
              <p>{this.state.inputNum}</p>
              <select name="cal_mode" id="mode" onChange={this.updateMode}>
                <option value="isPrime" selected>isPrime</option>
                <option value="isFibonacci">isFibonacci</option>
              </select>
            </div>
            <div className="last-col">
              {this.state.mode === "isPrime" ? 
                <>{this.isPrime(this.state.inputNum) ? <p>True</p>:<p>False</p>}</>
                : <>{this.isFibonacci(this.state.inputNum) ? <p>True</p>:<p>False</p>}</>
              }
            </div>
          </Row>
        </Container>    
      </div>
    );  
  }
}