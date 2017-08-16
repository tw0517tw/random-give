import React, { Component } from 'react';
import _ from 'lodash';

import Chart from './Chart';
import './App.css';

const randomGive = data => {
  const newData = data.map(v => v - 1);
  for (let i = 0; i < 20; i += 1) {
    newData[_.random(0, 19)] += 1;
  }
  return newData.sort((a, b) => a - b);
};

class App extends Component {
  state = {
    data: Array(20).fill(100),
  };

  handleResetClick = () => {
    this.setState({ data: Array(20).fill(100) });
  };

  handleSetClick = () => {
    const { data } = this.state;
    const newData = randomGive(data);
    this.setState({ data: newData });
  };

  handleGoClick = async () => {
    for (let i = 0; i < 50; i += 1) {
      setTimeout(() => {
        this.handleSetClick();
      }, i * 500);
    }
  };

  render() {
    const data = this.state.data;
    return (
      <div className="App">
        <Chart data={data} />
        <button onClick={this.handleResetClick}>reset</button>
        <button onClick={this.handleSetClick}>set</button>
        <button onClick={this.handleGoClick}>Go!!</button>
      </div>
    );
  }
}

export default App;
