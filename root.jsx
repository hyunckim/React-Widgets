import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';
import Clock from './clock';

const tab = [{title: "one", content: "I am the first" },
              {title: "two", content: "I am the two"},
                {title: "three", content: "I am the three"}];

class Root extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <Tabs tabs={tab}/>
        <Clock />
      </div>
      );
  }
}

export default Root;
