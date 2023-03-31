import React, { Component } from 'react';

class DataFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => this.setState({ data: data, isLoading: false }))
      .catch(error => this.setState({ error: error, isLoading: false }));
  }

  render() {
    const { data, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error.message}</div>;
    }

    return (
        <center>
      <div>
        <form>
        <h1>Data Fetcher Component</h1>
        <p>{data.title}</p>
        </form>
      </div>
      </center>
    );
  }
}

export default DataFetcher;
