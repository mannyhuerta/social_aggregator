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
        <div>This is going to be an information aggregater that will build a profile </div>
     
      </header>
    );
  }
}