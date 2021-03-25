import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className='filmCard' onClick={this.props.click}>
        <img
          src={this.props.img}
          className='card-img-top rounded'
          alt='movie-poster'
        />
        <div className='card-body'>
          <h4 className='card-title'>{this.props.title}</h4>
          <p className='card-text'>{this.props.description}</p>
          <p className='card-subtitle'>
            <small className='text-muted'>{this.props.date}</small>
          </p>
        </div>
      </div>
    );
  }
}
