import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { fetchPres } from '../../thunks/fetchPres';
import Loading from '../../components/Loading/Loading'
import Cards from '../Cards/Cards'

class App extends Component {

  componentDidMount = () => {
    const url = 'http://localhost:3001/api/v1/presidents'
    this.props.fetchPres(url)
  }

  render() {
    let { isLoading, hasErrored, presidents } = this.props;
    
    return (
      <div className="App">
        <header>
          <h1>Welcome to the presidents page</h1>
          {hasErrored !== '' &&
            <h3>An error occurred trying to retrieve your data: {hasErrored}</h3>}
        </header>
        <main className='display'>
          {isLoading && <Loading />}
          {!isLoading && <Cards presidents={presidents} />}
        </main>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchPres: (url) => dispatch(fetchPres(url)),
})

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  hasErrored: state.hasErrored,
  presidents: state.presidents,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
