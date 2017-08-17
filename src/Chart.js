import React, { Component } from 'react';

import Bar from './Bar';
import './Chart.css';

class Chart extends Component {
  render() {
    return (
      <div className="chart">
        {this.props.data.map((d, i) =>
          <Bar key={i} height={d} width={800 / this.props.data.length - 5} />
        )}
      </div>
    );
  }
}

export default Chart;
