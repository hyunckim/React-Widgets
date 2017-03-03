import React from 'react';
import ReactDOM from 'react-dom';


class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.currentContent = this.currentContent.bind(this);
  }

  changeTab(index){
    this.setState({index});
  }

  currentContent() {
    const idx = this.state.index;
    return this.props.tabs[idx].content;
  }

  render() {
    const title = this.props.tabs.map((tab, idx) => {
      return(
      <li key={idx} onClick={this.changeTab.bind(this, idx)}>
        {tab.title}
      </li>);
    });

    return (
      <div>
        <ul className="tabs">
          {title}
        </ul>

        <article className="content">
          {this.currentContent()}
        </article>
      </div>
    );


  }
}


export default Tabs;
