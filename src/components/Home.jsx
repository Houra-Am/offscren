import React, { Component } from "react";
import { SimpleSlider } from "./SimpleSlider";

export default class Home extends Component {
  render() {
    return (
      <div className='homepageContent'>
        <h4 className=' homepage-title'>Film of the day</h4>
        <SimpleSlider></SimpleSlider>;
      </div>
    );
  }
}
