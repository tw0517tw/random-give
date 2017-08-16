import React, { Component } from 'react';
import * as d3 from 'd3';
import { withFauxDOM } from 'react-faux-dom';
import { isEqual } from 'lodash';

import './Chart.css';

class Chart extends Component {
  componentDidMount = () => {
    this.renderD3();
  };
  componentDidUpdate = prevProps => {
    // do not compare props.chart as it gets updated in updateD3()
    if (this.props.data!==prevProps.data) {
      this.updateD3();
    }
  };
  updateD3 = () => {
    console.log('update!!!!');
    const faux = this.props.connectFauxDOM('div', 'chart');
    const data = this.props.data.map((v, i) => ({ name: i, value: v }));

    const x = d3.scaleBand().range([0, 800]).padding(0.1);
    const y = d3.scaleLinear().range([800, 0]);

    x.domain(data.map(d => d.name));
    y.domain([0, d3.max(data, d => d.value)]);

    const svg = d3.select(faux).select('svg');
    const rect = svg.select('g').selectAll('rect').data(data);
    rect.exit().remove();
    rect
      .enter()
      .append('rect')
      .attr('x', d => x(d.name))
      .attr('width', x.bandwidth())
      .attr('y', d => y(0))
      .attr('height', d => 800 - y(0));
    rect
      .transition()
      .duration(250)
      .attr('x', d => x(d.name))
      .attr('width', x.bandwidth())
      .attr('y', d => y(d.value))
      .attr('height', d => 800 - y(d.value));

    this.props.animateFauxDOM(300);
  };

  renderD3 = () => {
    const faux = this.props.connectFauxDOM('div', 'chart');
    // d3.select(faux).append('div').html('Hello World!');

    const data = this.props.data.map((v, i) => ({ name: i, value: v }));

    const x = d3.scaleBand().range([0, 800]).padding(0.1);
    const y = d3.scaleLinear().range([800, 0]);

    x.domain(data.map(d => d.name));
    y.domain([0, d3.max(data, d => d.value)]);

    const svg = d3
      .select(faux)
      .append('svg')
      .attr('width', '900px')
      .attr('height', '900px')
      .append('g')
      // .attr('transform', `translate(${50}px, ${50}px)`)
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.name))
      .attr('width', x.bandwidth())
      .attr('y', d => y(d.value))
      .attr('height', d => 800 - y(d.value));

    // add the x Axis
    svg
      .append('g')
      .attr('transform', `translate(0,800)`)
      .call(d3.axisBottom(x));

    // add the y Axis
    svg.append('g').call(d3.axisLeft(y));
  };

  render() {
    return (
      <div>
        {this.props.chart}
      </div>
    );
  }
}

export default withFauxDOM(Chart);
