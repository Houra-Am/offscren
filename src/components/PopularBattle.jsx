import React, { Component } from "react";
import Card from "./Card";

export default class PopularBattle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentBattle: 0,
      favorites_id: [],
    };
  }

  handleClick = (event, id) => {
    let favorites = this.state.favorites_id;
    favorites.push(id);
    this.setState({
      currentBattle: this.state.currentBattle + 2,
      favorites_id: favorites,
    });
    localStorage.setItem(
      "favorites_id",
      JSON.stringify(this.state.favorites_id)
    );
  };

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c72ac9cf5197a1f66ad0d776f5568bc2"
    )
      .then((response) => response.json())
      .then((popular) => {
        console.log("popular", popular);
        this.setState({
          movies: popular.results,
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    console.log(this.state.currentBattle);
    if (this.state.movies.length === 0) {
      return <h1>LOADING</h1>;
    }
    return (
      <div className='popularBattle image-container d-flex justify-content-start m-3'>
        <h4 className='PopBattTitle'>Popular Battle</h4>
        {this.state.movies.length > 1 &&
          this.state.currentBattle < this.state.movies.length && (
            <div className='row'>
              <div
                className='col-6 mt-5'
                onClick={(event) =>
                  this.handleClick(
                    event,
                    this.state.movies[this.state.currentBattle].id
                  )
                }>
                <Card
                  img={`https://image.tmdb.org/t/p/w300/${
                    this.state.movies[this.state.currentBattle].poster_path
                  }`}
                  title={this.state.movies[this.state.currentBattle].title}
                  description={
                    this.state.movies[this.state.currentBattle].overview
                  }
                  date={
                    this.state.movies[this.state.currentBattle].release_date
                  }
                />
              </div>

              <div
                className='col-6 mt-5'
                onClick={(event) =>
                  this.handleClick(
                    event,
                    this.state.movies[this.state.currentBattle].id
                  )
                }>
                <Card
                  img={`https://image.tmdb.org/t/p/w300/${
                    this.state.movies[this.state.currentBattle + 1].poster_path
                  }`}
                  title={this.state.movies[this.state.currentBattle + 1].title}
                  description={
                    this.state.movies[this.state.currentBattle + 1].overview
                  }
                  date={
                    this.state.movies[this.state.currentBattle + 1].release_date
                  }
                />
              </div>
            </div>
          )}

        {this.state.currentBattle === this.state.movies.length && (
          <div>
            <h2 className='text-center'>You have visited all movies !</h2>
          </div>
        )}
      </div>
    );
  }
}
