import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FilmDescription.css';
import AppTitle from '../AppTitle';
import Button from '../Button';
import { mockPoster, constantPartOfURL } from '../../../config';

const FilmDescription = props => (
  <div className="FilmDescription">
    <div className="header_label">
      <div className="header_label_up">
        <AppTitle />
        <Link to="/">
          <Button type="submit" text="search" />
        </Link>
      </div>
      <div className="header_down">
        <div className="header_img">
          <img
            alt="poster"
            src={props.currentFilm.poster_path
              ? `${constantPartOfURL}${props.currentFilm.poster_path}`
              : `${mockPoster}`
            }
          />
        </div>
        <div className="header_img_description">
          <div className="show_title">
            <p>{props.currentFilm.original_title}</p>
          </div>
          <div className="film_rating">{props.currentFilm.vote_average}</div>
          <div>
            <p className="category">{props.currentFilm.category}</p>
          </div>
          <div>
            <p className="release_year film_runtime">
              {props.currentFilm.release_date} {props.currentFilm.runtime}
            </p>
          </div>
          <div className="description">
            {props.currentFilm.overview}
          </div>
          <div className="director_cast_list">
            <p>{props.currentFilm.director}</p>
            <p>{props.currentFilm.show_cast}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);


FilmDescription.propTypes = {
//  currentFilm: PropTypes.func.isRequired,
};

PropTypes.shape({
  poster_path: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  vote_average: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  show_cast: PropTypes.string.isRequired,
});

export default FilmDescription;

