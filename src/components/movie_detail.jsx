import React from "react";
import MdArrowRoundBack from "react-ionicons/lib/MdArrowRoundBack";
import { Link } from "react-router-dom";

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      loadng: true,
    };
  }

  async componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const url = `https://api.themoviedb.org/3/movie/${this.props.match.params.movie}?api_key=${api_key}&language=en-US`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ movie: data, loading: false });
      });
  }

  render() {
    const { movie } = this.state;
    return (
      <div>
        {this.state.loading || !this.state.movie ? (
          <div>loading...</div>
        ) : (
          <div>
            <div className="movie-detail-image-container">
              <img
                className="movie-detail-image"
                src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
              />
            </div>
            <div className="movie-detail-container">
              <Link to={{ pathname: `/:page?` }}>
                <MdArrowRoundBack className="back-button" />
              </Link>
              <div className="movie-details-caption">Movie Details</div>
              <div className="movie-details-heading-container">
                <div className="heading">Overview:</div>
                <div className="information">{movie.overview}</div>
                <div className="heading">Popularity:</div>
                <div className="information">{movie.popularity}</div>
                <div className="heading">Vote Average:</div>
                <div className="information">{movie.vote_average}</div>
                <div className="heading">Release Date:</div>
                <div className="information">{movie.release_date}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MovieDetail;
