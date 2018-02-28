import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Search.css';
import ButtonGroup from '../../components/ButtonGroup';
import Button from '../../components/Button';
import { getFilms, changeTypeOfSearch } from '../../actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  handleChange = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  handleSearchByChange = (index) => {
    const { dispatch } = this.props;
    const buttonValue = index === 0 ? 'movie' : 'tv';
    dispatch(changeTypeOfSearch(buttonValue));
  }

  handleSearchClick = () => {
    const { dispatch } = this.props;
    dispatch(getFilms(this.state.searchValue, this.props.buttonValueForSearch));
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') {
      this.handleSearchClick();
      window.location = `/search/${this.props.buttonValueForSearch}=${this.state.searchValue}`;
    }
  }

  render() {
    return (
      <div className="header_search_label">
        <p>Find your movie</p>
        <div className="header_search">
          <input
            type="text"
            name=""
            defaultValue=""
            onChange={this.handleChange}
            onKeyPress={this.handleEnter}
            ref={(input) => { this.input = input; }}
          />
          <Link to={`/search/${this.props.buttonValueForSearch}=${this.state.searchValue}`}><Button
            type="submit"
            text="search"
            onClick={this.handleSearchClick}
          /></Link>
          <div className="search_filters">
            <ButtonGroup label="search by" onChange={this.handleSearchByChange}>
              <Button type="raised" text="movie" buttonValueForSearch={this.props.buttonValueForSearch} />
              <Button type="raised" text="tv" buttonValueForSearch={this.props.buttonValueForSearch} />
            </ButtonGroup>
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  dispatch: PropTypes.func,
  buttonValueForSearch: PropTypes.string.isRequired,
};

Search.defaultProps = {
  dispatch: () => {},
};

function mapStateToProps(state) {
  return {
    buttonValueForSearch: state.buttonValueForSearch,
  };
}

export default connect(mapStateToProps)(Search);
