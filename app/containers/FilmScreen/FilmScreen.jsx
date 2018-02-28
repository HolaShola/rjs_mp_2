import React, { Component } from 'react';
import 'whatwg-fetch';
import { connect } from 'react-redux';
import FilmDescription from '../../components/FilmDescription/';
import FilmsCollectionWrapper from '../FilmsCollectionWrapper';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import './FilmScreen.css';

class FilmScreen extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentFilm.status_message) {
      window.location = '/';
    }
  }

  render() {
    return (
      <div className="FilmScreen">
        {this.props.isFetching
          ? <Loader />
          : (<div><FilmDescription currentFilm={this.props.currentFilm} />
            <FilmsCollectionWrapper currentFilm={this.props.currentFilm} />
          </div>)
        }
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.filmsProp.isFetching,
    currentFilm: state.filmsProp.currentFilm,
  };
}

export default connect(mapStateToProps)(FilmScreen);
