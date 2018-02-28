import React from 'react';
import { Link } from 'react-router-dom';
import './AppTitle.css';

const AppTitle = () => (
  <div className="AppTitle">
    <Link to="/">
      <p>nextflixroulette</p>
    </Link>
  </div>
);

export default AppTitle;
