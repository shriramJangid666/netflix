import {React, useEffect, useState} from 'react'
import './banner.css'
import axios from './axios';
import requests from './Requests'


function Banner() {

  const [movies, setMovies] = useState([]);


useEffect(() => {
  async function fetchData(){
    const response = await axios.get(requests.fetchNetflixOriginals);
    let resData = response.data.results
    let index = Math.floor(Math.random()*resData.length -1)
    let myMovie = resData[index]
    setMovies(myMovie)
    return response;
  }
  fetchData();
},[])

console.log(movies)




  function turncate(string,n){
    return string?.length > n ? string.substr( 0, n-1) + "..." : string
  }

  return (
    <header className='banner'
    style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
      backgroundPosition: "center "
    }}
     >
    <div className="banner_content">
    <h1 className='banner_title'>{movies.name}</h1>
    <div className="banner_buttons">
    <button className='banner_buttoon'>Play</button>
    <button className='banner_buttoon'>My List</button>
    </div>
    <h1 className='banner_description'>
    {turncate(movies?.overview,150)}
    </h1>
    </div>
    </header>
  )
}

export default Banner