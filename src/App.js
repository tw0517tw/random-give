import React, { Component } from 'react';
import _ from 'lodash';

import Chart from './Chart';
import './App.css';

const randomGive = data => {
  const newData = data.map(v => v - 1);
  for (let i = 0; i < 50; i += 1) {
    newData[_.random(1, 50) - 1] += 1;
  }
  return newData.sort((a, b) => a - b);
};

class App extends Component {
  state = {
    data: Array(50).fill(100),
    round: 0,
  };

  handleResetClick = () => {
    this.setState({ data: Array(50).fill(100), round: 0 });
  };

  handleSetClick = () => {
    const { data, round } = this.state;
    const newData = randomGive(data);
    this.setState({ data: newData, round: round + 1 });
  };

  handleGoClick = async () => {
    for (let i = 0; i < 500; i += 1) {
      setTimeout(() => {
        this.handleSetClick();
      }, i * 50);
    }
  };

  render() {
    const data = this.state.data;
    return (
      <div className="App">
        <div className="chartContainer">
          <Chart data={data} />
        </div>
        <div>
          Round: {this.state.round}
        </div>
        <button onClick={this.handleResetClick}>reset</button>
        <button onClick={this.handleSetClick}>set</button>
        <button onClick={this.handleGoClick}>Go!!</button>
      </div>
    );
  }
}

export default App;
