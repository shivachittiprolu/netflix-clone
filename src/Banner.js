import React, { useState, useEffect } from 'react';
import axiosClient from './axios';
import requests from './Requests';
import './Banner.css';

function Banner() {
const [movie, setMovie ] = useState([]);

useEffect(() => {
    
    async function fetchData() {
        const request = await axiosClient.get(`${requests.baseUrl}${requests.fetchActionMovies}`);
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length)
        ]);
        return request;
    }
    fetchData();
}, []);

    function truncate(str,n){
        return str?.length > n ?str.substr(0,n-1)+"...":str;
    }
    console.log(movie);

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${requests.imgBaseUrl}${movie.backdrop_path})`
        }}>
            <div className="banner__content">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.originam_name}</h1>
                
                <div className="banner_buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner--fadebottom" />
        </header>
    )
}

export default Banner;