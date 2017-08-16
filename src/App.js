import React, { Component } from 'react';

import Chart from './Chart';
import './App.css';

class App extends Component {
  state = {
    data: Array(20).fill(100),
  };

  handleResetClick = () => {
    this.setState({ data: Array(20).fill(100) });
  };

  handleSetClick = () => {
    const { data } = this.state;
    const newData = data.map(d => (Math.random() + 0.5) * d);
    this.setState({ data: newData });
  };

  render() {
    const data = this.state.data;
    return (
      <div className="App">
        <Chart data={data} />
        <button onClick={this.handleResetClick}>reset</button>
        <button onClick={this.handleSetClick}>set</button>
      </div>
    );
  }
}

export default App;
