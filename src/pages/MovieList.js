import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    // this.setState(
    //   { movies: [] },
    //   async () => {
    //     const moviesList = await movieAPI.getMovies();
    //     this.setState({ movies: moviesList });
    //   },
    // );
    const moviesList = await movieAPI.getMovies();
    this.setState({ movies: moviesList });
  }

  render() {
    const { movies } = this.state;

    if (movies.length === 0) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
