
## Movie App
The Movie app ist several pages of movies ordered by popularity from The Movie Database API. 

## User Interface
[![Screen-Shot-2020-05-17-at-12-38-29-PM.png](https://i.postimg.cc/yYq3Mhdh/Screen-Shot-2020-05-17-at-12-38-29-PM.png)](https://postimg.cc/V5RNMCX5)

[![Screen-Shot-2020-05-17-at-1-15-35-PM.png](https://i.postimg.cc/SxHvbtBQ/Screen-Shot-2020-05-17-at-1-15-35-PM.png)](https://postimg.cc/xXyRKgjB)

## Tech/framework used
- ReactJS 
- JavaScript

## Features
- Movies are displayed by popularity.
- A search bar to filter out your results by title.
- Pagination to navigate through the different pages of movies.
- By clicking on the title of the movie you can view the details of that movie.

## Code Example
```JavaScript
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
  ```
  
## Installation
- Step 1 remove interpolation ${API_KEY} and insert API key as a string
- Step 2 npm install
- Step 3 npm start

## API Reference
API is from [The Movie Database API](https://developers.themoviedb.org/3/getting-started).
