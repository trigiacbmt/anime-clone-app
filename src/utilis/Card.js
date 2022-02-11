import React from 'react';
import {AnnotationIcon} from "@heroicons/react/solid"
import { Link } from 'react-router-dom';

function Card(props) {
  return  <Link to={`/anime/${props.id}`}><div className=' flex flex-col w-52 h-auto relative p-2 mx-auto cursor-pointer hover:opacity-40'>
      <img src={props.src} className=' h-64 object-fill' loading="lazy"  alt={props.name}/>
      <div className='bg-gray-500'>
          <p className='font-bold text-center p-3 text-md truncate text-white hover:text-yellow-500'>{props.description}</p>
          <div className='flex justify-between items-center'>
            <p className='flex items-center'><AnnotationIcon className='h-5 mx-1'/>{props.score}</p>
            <p className='mx-1'>{props.year}</p>
          </div>
      </div>
  </div>
  </Link> ;
}

export default Card;
