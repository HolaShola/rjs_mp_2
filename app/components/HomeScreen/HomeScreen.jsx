import React from 'react';
import Header from '../Header';
import NotFound from '../NotFound';
import Footer from '../Footer';
import './HomeScreen.css';

const HomeScreen = () => (
  <div className="HomeScreen">
    <Header />
    <NotFound />
    <Footer />
  </div>
);

export default HomeScreen;
