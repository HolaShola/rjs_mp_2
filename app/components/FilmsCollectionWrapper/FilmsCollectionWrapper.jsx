import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilmsCollection from '../FilmsCollection';
import Loader from '../Loader';
import { getSimilarFilms } from '../../actions';

const FilmsCollectionWrapper = props => ( 
  props.isFetchingForSimilarFilms
    ? <Loader /> 
    : (<div className="FilmScreen">
        <FilmsCollection films={props.similarFilms} loading={props.isFetchingForSimilarFilms} />
      </div>)
)  

function mapStateToProps(state) {
  return {
    isFetchingForSimilarFilms: state.filmsProp.isFetchingForSimilarFilms,
    similarFilms: state.filmsProp.similarFilms.results,
  }
}

export default connect(mapStateToProps)(FilmsCollectionWrapper);
