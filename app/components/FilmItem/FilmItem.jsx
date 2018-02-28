import React from 'react';
import PropTypes from 'prop-types';
import './FilmItem.css';

const FilmItem = props => (
  <div className="FilmItem" >
    <div className="FilmItem_img">
      <img
        alt={props.show_title}
        src={props.posterUrl}
        width="318"
        height="450"
        onClick={props.onClick}
      />
    </div>
    <div className="film_description">
      <div className="release_year">
        <p>{props.release_year}</p>
      </div>
      <div className="show_title">
        <p>{props.show_title}</p>
      </div>
      <div className="category">
        <p>{props.rating}</p>
      </div>
    </div>
  </div>
);

FilmItem.propTypes = {
  posterUrl: PropTypes.string.isRequired,
  show_title: PropTypes.string.isRequired,
  release_year: PropTypes.string,
  rating: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

FilmItem.defaultProps = {
  release_year: '',
};

export default FilmItem;
