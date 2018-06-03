import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import { fetchMovieDetails } from '../actions/MovieDetailsActions';
import MovieDetails from '../components/MovieDetails';

const MovieDetailsContainer = props => <MovieDetails {...props} />;

MovieDetailsContainer.propTypes = {
  fetchMovieDetails: PropTypes.func.isRequired,
  details: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  details: state.movieDetails.details,
  isFetching: state.movieDetails.isFetching,
});

const mapDispatchToProps = (dispatch, onwProps) => ({
  fetchMovieDetails: () =>
    dispatch(fetchMovieDetails(onwProps.match.params.movieId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailsContainer);
