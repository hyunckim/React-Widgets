import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(){
    super();
    this.state = { date: new Date() };
  }


  componentDidMount(){
    setInterval(() => {
      this.setState({date: new Date()});
    }, 1000);
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
