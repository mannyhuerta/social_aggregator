import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
   
  }

  // increment() {
  //   this.setState(({ counter }) => {
  //     return {counter: counter + 1};
  //   });
  // }

  componentWillUnmount() {
  
  }

  render() {
    const { counter } = this.state;

    return (
      <header>
        <div>This is application will be a social information aggregator and consolidator to help display various things about you in a simplistic and thoughtfully designed way.</div>
     
      </header>
    );
  }
}