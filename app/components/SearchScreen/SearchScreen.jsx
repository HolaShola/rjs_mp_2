import React, { Component } from 'react';
import 'whatwg-fetch';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header';
import FilmsCollection from '../FilmsCollection';
import Footer from '../Footer';
import './SearchScreen.css';
import { getFilms } from '../../actions';

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      loading: true,
    };
  }

  componentDidMount() {
   // getFilms();
  }

  render() {
    return (
      <div>
        <Header />
        <FilmsCollection
          films={this.props.films}
          func={id => this.handleClick(id)}
        />
        <Footer />
      </div>
    );
  }
}

SearchScreen.defaultProps = {
  searchQuery: {
    history: {},
    location: {},
    match: {},
  },
  match: {},
};

function mapStateToProps(state) {
  return {
    films: state.filmsProp.films,
  }
}

export default connect(mapStateToProps)(SearchScreen);
