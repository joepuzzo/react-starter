/* Remember you always need ot import 'React' if the file contains a react component */
import React, { Component } from 'react';

/* Example of a component with component state */
class SomethingElse extends Component {
  constructor( props ){
    super(props);
    this.state = {
      something: 0
    };
  }
  doSomething(){
    this.setState(( prevState ) => ({
      something: prevState.something + 1
    }));
  }
  render(){
    return (
      <div>
        <h2>Something Else: {this.state.something}</h2>
        <button onClick={()=>{ this.doSomething( this.state.something )}}>Do Something Else!</button>
      </div>
    );
  }
}


/* Example of a component without component state that uses app state ( redux ) */
const Example = (props) => (
  <div>
    <h1>Example</h1>
    <h2>Something: {props.something}</h2>
    <button onClick={()=>{ props.doSomething( props.something )}}>Do Something!</button>
    <SomethingElse />
  </div>
);

/* Export the module that is to be used externally */
export default Example;
