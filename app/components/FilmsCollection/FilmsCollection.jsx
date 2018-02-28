import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FilmItem from '../FilmItem';
import './FilmsCollection.css';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import Loader from '../Loader';
import { getCurrentFilm, getSimilarFilms, changeTypeOfSort } from '../../actions';

class FilmsCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonValue: '',
    };
  }

  handleSearchByChange = (index) => {
   // index == 0 ? this.sortByReleaseDate() : this.sortByRating();
   // this.setState({buttonValue: index});
    const { dispatch } = this.props;
    const sort_by = index === 0 ? 'release_date' : 'rating';
    dispatch(changeTypeOfSort(sort_by));
  }

  sortByReleaseDate() {
    this.props.films.sort((a, b) => parseInt(b.release_year) - parseInt(a.release_year));
  }

  sortByRating() {
    this.props.films.sort((a, b) => parseInt(b.rating) - parseInt(a.rating));
  }

  selectCurrentFilm = (currentFilmId) => {
    const { dispatch } = this.props;
    dispatch(getCurrentFilm(currentFilmId));
    dispatch(getSimilarFilms(currentFilmId));
  }
 
  renderDiscography() {
    if (this.props.isFetching) {
      return (<Loader />);
    } else {
      if (Array.isArray(this.props.films)) {
        return this.props.films.map(film =>
          <Link to={encodeURI(encodeURI(`/film/title=${film.title}`))} replace key={film.id}>
            <FilmItem
              id={film.id}
              posterUrl={film.poster_path
                ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${film.poster_path}`
                : 'https://www.themoviedb.org/assets/static_cache/02a9430b88975cae16fcfcc9cf7b5799/images/v4/logos/primary-green.svg'
              }
              release_year={film.release_date}
              show_title={film.title}
              category={film.category}
              director={film.director}
              show_cast={film.show_cast}
              summary={film.overview}
              rating={film.vote_average}
              onClick={() => this.selectCurrentFilm(film.id)}
            />
          </Link>
        )
      } else if (this.props.films.errorcode) {
        console.log(this.props.films.message);
      }
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
  }
}

export default connect(mapStateToProps)(FilmsCollection);