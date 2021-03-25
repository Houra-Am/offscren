import React from "react";
import Card from "./Card";

class PopularMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      page: props.match.params.page || 1,
    };
  }

  componentDidMount() {
    this.loadMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.loadMovies();
    }
  }

  loadMovies() {
    console.log("load movies");
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c72ac9cf5197a1f66ad0d776f5568bc2"
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({
          movies: response.results,
        });
      });
  }

  loadPreviousMovies = () => {
    if (this.state.page > 1) {
      this.setState({
        page: this.state.page - 1,
      });
    }
    window.scrollTo(0, 0);
  };

  loadNextMovies = () => {
    this.setState({
      page: this.state.page + 1,
    });
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <>
        <h4>Popular</h4>
        <div className='container'>
          <div className='row'>
            {this.state.movies.map((movie) => {
              return (
                <div className='col-sm-6 col-md-4 col-lg-3'>
                  <Card
                    movie={movie}
                    img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    title={movie.title}
                    description={movie.overview}
                    date={movie.release_date}
                  />
                </div>
              );
            })}
          </div>
          <button onClick={this.loadPreviousMovies}>Previous</button>
          <button onClick={this.loadNextMovies}>Next</button>
        </div>
      </>
    );
  }
}

export default PopularMovie;
