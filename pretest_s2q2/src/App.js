import './App.css';
import React, { Component } from 'react';
import axios from "axios";

export default class home extends Component {
  state = {
    data: [],
    filter_value: '', 
  }
  componentDidMount() {
    axios.get(`https://api.publicapis.org/categories`)
    .then(res => {
      this.setState({ data: res.data});
    })
  }

  render(){
    const { input_value } = this.state;

    const filteredElements = this.state.data
      .filter(e => e.toLowerCase().includes(this.state.filter_value))
      .map(e =>  e )

    return (
      <div>
        <header>
        </header>
        <input 
          type="text"
          value={input_value}
          onChange={ e => this.setState({ filter_value: e.target.value.toLowerCase() }) }
        />
        <table className="tableStyle">
          <tbody>
            <th>Categories</th>
            { filteredElements.length===0 ?  
              <>{this.state.data.map(d => 
                  <tr>
                    <td> {d} </td>
                  </tr>
                )}
              </>
              : <>
                  {filteredElements.map(ele => 
                    <tr>
                      <td>{ele}</td>
                    </tr>
                  )}
                </>
            }
          </tbody>
        </table>
      </div>
    );  
  }
}