import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchMovieDetails } from '../actions';

import MovieDetails from '../components/MovieDetails';

class MovieDetailsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMovieDetails(this.props.match.params.movieId));
  }

  render() {
    return (
      <MovieDetails
        details={this.props.details}
        isFetching={this.props.isFetching}
      />
    );
  }
}

MovieDetailsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  details: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  details: state.movieDetails.details,
  isFetching: state.movieDetails.isFetching,
});

export default connect(mapStateToProps)(MovieDetailsContainer);
