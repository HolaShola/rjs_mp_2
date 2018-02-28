import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FilmItem from '../FilmItem';
import './FilmsCollection.css';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

class FilmsCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonValue: ""
    };
  }

  handleSearchByChange = (index) => {
    console.log(`search click ${index}`);
    let buttonValue = index == 0 ? "title" : "director";
    this.setState({buttonValue: buttonValue});
  }

  render() {
    return (
      <div className="FilmsCollection">
        <div className="sort">
          <div className="search_number_result">
            <p>movies found</p>
          </div>
          <div className="sort_by">
            <ButtonGroup label="sort by" onChange={this.handleSearchByChange}>
              <Button type="submit" text="release date" />
              <Button type="submit" text="rating" />
            </ButtonGroup>
          </div>
        </div>
        <div className="discography">
          { Array.isArray(this.props.films)
            ? this.props.films.map(film =>
              (<Link to={`/film/title=${film.show_title}`} key={film.unit}>
                <FilmItem
                  id={film.unit}
                  posterUrl={film.poster}
                  release_year={film.release_year}
                  show_title={film.show_title}
                  category={film.category}
                  director={film.director}
                  show_cast={film.show_cast}
                  summary={film.summary}
                />
              </Link>),
            )
            : <Link to={`/film/title=${this.props.films.show_title}`}>
              <FilmItem
                id={this.props.films.unit}
                key={this.props.films.unit}
                posterUrl={this.props.films.poster}
                release_year={this.props.films.release_year}
                show_title={this.props.films.show_title}
                category={this.props.films.category}
                director={this.props.films.director}
                show_cast={this.props.films.show_cast}
                summary={this.props.films.summary}
                onClick={showTitle => this.props.func(showTitle)}
              />
            </Link>
          }
        </div>
      </div>
    );
  }
}
export default FilmsCollection;

