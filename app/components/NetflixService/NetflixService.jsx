import React, { Component } from 'react';

class NetflixService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  // FilmScreen.jsx
  fetchSend = (anyProps) => {
    fetch(`https://netflixroulette.net/api/api.php?${anyProps.searchQuery.match.url.replace('/film/', '')}`)
      .then(response => response.json())
      .then(data => this.setState({ currentFilm: data, loading: false }))
      .catch(error => console.log('error', error));
  }

  // SearchScreen.jsx
  fetchSend2 = () => {
    fetch(`https://netflixroulette.net/api/api.php?${this.props.searchQuery.match.url.replace('/search/', '')}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        if (data.errorcode) {
          console.log(data.message);
          window.location = '/';
        } else if (Array.isArray(data)) {
          this.setState({ films: data.sort((a, b) => parseInt(b.release_year, 10) - parseInt(a.release_year, 10)), loading: false });
        } else {
          window.location = `/#/film/title=${data.show_title}`;
        }
      })
      .catch(error => console.log('error', error));
  }

  // FilmsCollectionWrapper.jsx
  fetchSend3 = () => {
    const mainDirector = this.props.currentFilm.director.split(',').length > 1
      ? this.props.currentFilm.director.split(',')[0]
      : this.props.currentFilm.director;
    fetch(`https://netflixroulette.net/api/api.php?director=${mainDirector}`)
      .then(response => response.json())
      .then(data => this.setState({ films: data, loading: false }))
      .catch(error => console.log('error', error));
  }
}

export default NetflixService;
