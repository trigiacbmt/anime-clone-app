import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Result from '../components/Result';

function HomePage() {

  return <div className='bg-anime_gray'>
      <Banner />
      <Result />
  </div>;
}

export default HomePage;
