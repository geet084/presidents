import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { fetchPres } from '../../thunks/fetchPres';

class App extends Component {

  componentDidMount = () => {
    const url = 'http://localhost:3001/api/v1/presidents'
    this.props.fetchPres(url)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchPres: (url) => dispatch(fetchPres(url)),
})

export const mapStateToProps = (state) => ({
  presidents: state.presidents,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
