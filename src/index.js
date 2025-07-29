import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Card from './card'
import Team1 from './team1';
import Team2 from './team2';
import MovieCard from './moviecardlist';
import 'tachyons';
import {movies} from './movies';
import {team1} from './datat1';
import {team2} from './datat2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 className='tc bg-black white sticky-top'>Blockbuster Movies</h1>
    <MovieCard movies={movies} />

    {/* <h1 className='tc'>Software Engineering Team</h1>
    <Team1 robots={team1} />
    <h1 className='tc'>Data Engineering Team</h1>
    <Team2 robots={team2} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
