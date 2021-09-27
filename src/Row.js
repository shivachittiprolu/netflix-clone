import React, { useState,useEffect } from 'react';
import axiosClient from './axios';
import './Row.css';

const baseUrl ="https://api.themoviedb.org/3";
const imgBaseUrl="https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState( [] );

    useEffect(() => {
        async function fetchData() {
            const request = await axiosClient.get(`${baseUrl}${fetchUrl}`);
            // const request = await axiosClient.get('https://api.themoviedb.org/3/trending/all/week?api_key=6f96ea9cb4464f42bd8190bffeeab138&language=en-US');
            //https://api.themoviedb.org/3/trending/all/week?api_key=6f96ea9cb4464f42bd8190bffeeab138&language=en-US
            setMovies(request.data.results);
            // console.log(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchUrl] )
    console.log(movies);     
    
    return (
        <div className="row">
            <h2>{ title }</h2>
            <div className="row__posters">
                {movies.map(movie=>(
                        <img key={movie.id} className ="row__poster" src={`${imgBaseUrl}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>

            { /* Container */ }
            { /* Titles */ }
        </div>
    )
}

export default Row;
