import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={ movie.imagePath } alt="MovieImage" />
        <p>{ movie.title }</p>
        <p>{ movie.subtitle }</p>
        <p>{ movie.storyline }</p>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.array).isRequired,
};
