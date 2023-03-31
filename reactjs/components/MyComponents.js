import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }
  decrementCount() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (<form>
      <div>
        <h1>Count: {this.state.count}</h1>
        <button class="b1" onClick={() => this.incrementCount()}>Increment</button>
        <button class=" b2" onClick={() => this.decrementCount()}>Increment</button>
      </div></form>
    );
  }
}

export default MyComponent;
