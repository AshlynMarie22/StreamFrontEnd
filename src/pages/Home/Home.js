import React from 'react';
import HomePage from 'components/HomePage/HomePage';
import Stream from 'components/HomePage/Stream';
import Header from 'components/Header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <Stream />
      <HomePage />
    </>
  );
};

export default Home;
