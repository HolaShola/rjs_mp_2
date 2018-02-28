import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FilmItem from '../../components/FilmItem';
import './FilmsCollection.css';
import ButtonGroup from '../../components/ButtonGroup';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import { getCurrentFilm, getSimilarFilms, changeTypeOfSort } from '../../actions';
import { mockPoster, constantPartOfURL } from '../../../config';

class FilmsCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonValue: '',
    };
  }

  handleSearchByChange = (index) => {
    const { dispatch } = this.props;
    const sort_by = index === 0 ? 'release_date' : 'rating';
    if (index === 0) {
      this.sortByReleaseDate();
    } else {
      this.sortByRating();
    }
    this.setState({ buttonValue: index });
    dispatch(changeTypeOfSort(sort_by));
  }

  sortByReleaseDate() {
    this.props.films.sort((a, b) => parseInt(b.release_date) - parseInt(a.release_date));
  }

  sortByRating() {
    this.props.films.sort((a, b) => b.vote_average - a.vote_average);
  }

  selectCurrentFilm = (currentFilmId) => {
    const { dispatch } = this.props;
    dispatch(getCurrentFilm(currentFilmId));
    dispatch(getSimilarFilms(currentFilmId));
  }

  renderDiscography() {
    if (this.props.isFetching) {
      return (<Loader />);
    } else if (Array.isArray(this.props.films)) {
      return this.props.films.map(film =>
        (<Link to={encodeURI(encodeURI(`/film/title=${film.title ? film.title : film.name}`))} replace key={film.id}>
          <FilmItem
            id={film.id}
            posterUrl={film.poster_path
              ? `${constantPartOfURL}${film.poster_path}`
              : `${mockPoster}`
            }
            release_year={film.release_date ? film.release_date : film.first_air_date}
            show_title={film.title ? film.title : film.name}
            director={film.director}
            show_cast={film.show_cast}
            summary={film.overview}
            rating={+film.vote_average}
            onClick={() => this.selectCurrentFilm(film.id)}
          />
        </Link>),
      );
    }
    return null;
  }

  render() {
    return (
      <div className="FilmsCollection">
        <div className="sort">
          <div className="search_number_result">
            <p>{this.props.films ? this.props.films.length : 0} movies found</p>
          </div>
          <div className="sort_by">
            <ButtonGroup label="sort by" onChange={this.handleSearchByChange}>
              <Button type="flat" text="release date" />
              <Button type="flat" text="rating" />
            </ButtonGroup>
          </div>
        </div>
        <div className="discography">
          {this.renderDiscography()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.filmsProp.isFetching,
  };
}

export default connect(mapStateToProps)(FilmsCollection);
