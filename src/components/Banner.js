import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from "../utilis/Card";
import useHttp from '../hooks/use-http';
import { getRandomAnime } from '../lib/api';
import { useEffect } from "react";

const Banner = (props) => {
    const {
        sendRequest,
        status,
        data: randomAnime,
        error,
      } = useHttp(getRandomAnime, false);
    
      useEffect(() => {
        sendRequest();
      }, [sendRequest]);
    

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 815, min: 0 },
      items: 3
    }
  };

  if(status === "pending"){
      return (<div>Loading...</div>)
  }
  if(status === "completed" && (!randomAnime || randomAnime.length === 0)){
      return (<div>No Anime Found</div>)
  }
  if(error){
      return (<div>{error}</div>)
  }
  console.log(randomAnime)
  return ( 
    <Carousel className='mx-auto items-center max-w-6xl border-8 border-gray-400 my-6'
    itemClass="image"
    containerClass='container'
    responsive={responsive}
    infinite={true}>
      {randomAnime?.map((ani) => (
          <Card
            src={ani.cover_image}
            description={ani.titles.en || ani.titles.jp || ani.titles.it}
            name={ani.titles.en}
            id={ani.id}
            score= {ani.score}
            year = {ani.season_year}
            key={ani.id}
           />
      ))}
    </Carousel>
  )
};

export default Banner;
