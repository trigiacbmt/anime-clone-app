import React from 'react';
import ResultGenres from './ResultGenres';
import SideResult from './SideResult';

function Result() {
   
  return <div>
      {/* {main Side} */}
      <div className=''>
          <ResultGenres params="?year=2021" genres="ANIME MOI CAP NHAT"/>
          <ResultGenres params="?genres=Action" genres="ANIME HANH DONG"/>
          <ResultGenres params="?genres=Drama" genres="ANIME DRAMA"/>
      </div>
      {/* {SubSide} */}
        <SideResult />
  </div>;
}

export default Result;
