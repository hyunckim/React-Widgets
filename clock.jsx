import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(){
    super();
    this.state = { date: new Date() };
  }


  render() {
    return (
      <ul>
        <li>{this.state.date.toDateString()}</li>
        <li>{this.state.date.toTimeString()}</li>
      </ul>
  );
  }
}

export default Clock;
