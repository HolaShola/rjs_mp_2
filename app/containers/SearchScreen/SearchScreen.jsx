import React, { Component } from 'react';
import 'whatwg-fetch';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import FilmsCollection from '../FilmsCollection';
import Footer from '../../components/Footer';
import './SearchScreen.css';

class SearchScreen extends Component {
  render() {
    return (
      <div>
        <Header />
        <FilmsCollection
          films={this.props.films}
        />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    films: state.filmsProp.films,
  };
}

export default connect(mapStateToProps)(SearchScreen);
