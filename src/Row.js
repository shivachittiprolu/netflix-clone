import React, { useState,useEffect } from 'react';
import axiosClient from './axios';
import requests from './Requests';
import './Row.css';


function Row({ title, fetchUrl,isLargeRow }) {
    const [movies, setMovies] = useState( [] );

    useEffect(() => {
        async function fetchData() {
            const request = await axiosClient.get(`${requests.baseUrl}${fetchUrl}`);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchUrl] )    
    
    return (
        <div className="row">
            <h2>{ title }</h2>
            <div className="row__posters">
                {movies.map(movie=>(
                        <img key={movie.id} className ={`row__poster ${isLargeRow && "row__posterLarge"}`}
                         src={`${requests.imgBaseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>

            { /* Container */ }
            { /* Titles */ }
        </div>
    )
}

export default Row;
