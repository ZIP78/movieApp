import React from "react";
import Pignation from "./pagination";
// import MovieDetail from "./movie_detail";
import { Link } from "react-router-dom";

class MovieTitles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: null,
      searchText: "",
      moviesPerPage: 20,
      totalMovies: 100,
      currentPage: 1,
    };
    this.Text = this.Text.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const url = `http://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${this.state.currentPage}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ movies: data.results, loading: false });
      });
  }

  Text(e) {
    this.setState({ searchText: e.currentTarget.value });
  }

  showMovie(movie) {
    return (
      <div className="indiv-movie">
        <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
        <Link to={{ pathname: `movies/${movie.id}` }}>
          <div>{movie.title}</div>
        </Link>
      </div>
    );
  }
  filteredMovies() {
    if (this.state.movies) {
      let movies = this.state.movies;
      let searchText = this.state.searchText;
      return movies.filter(
        (movie) =>
          movie.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      );
    }
  }

  render() {
    const paginate = (pageNumber) =>
      this.setState({ currentPage: pageNumber }, () => this.fetchData());

    const nextPage = () => {
      let numberOfPages = Math.ceil(
        this.state.totalMovies / this.state.moviesPerPage
      );

      if (this.state.currentPage < numberOfPages) {
        this.setState({ currentPage: (this.state.currentPage += 1) }, () =>
          this.fetchData()
        );
      }
    };

    const previousPage = () => {
      if (this.state.currentPage > 1) {
        this.setState({ currentPage: (this.state.currentPage -= 1) }, () =>
          this.fetchData()
        );
      }
    };
    return (
      <div>
        {this.state.loading || !this.state.movies ? (
          <div>loading...</div>
        ) : (
          <div className="movies-container">
            <div className="search-container">
              <input
                className="movie-search"
                placeholder="Search Movie"
                onChange={this.Text}
              />
            </div>

            <Pignation
              moviesPerPage={this.state.moviesPerPage}
              totalMovies={this.state.totalMovies}
              pagination={paginate}
              previousPage={previousPage}
              nextPage={nextPage}
              currentPage={this.state.currentPage}
            />

            {this.filteredMovies().map((movie) => this.showMovie(movie))}
          </div>
        )}
      </div>
    );
  }
}

export default MovieTitles;
