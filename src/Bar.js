import React, { Component } from 'react';

import './Bar.css';

class Bar extends Component {
  render() {
    const { height, width } = this.props;
    return (
      <div className="bar" style={{ height, width }}>
        {this.props.height}
      </div>
    );
  }
}

export default Bar;
