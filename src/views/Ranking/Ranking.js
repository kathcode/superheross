import React, { Component } from 'react';
import Slider from 'react-slick';
import Card from '@material-ui/core/Card';
import StyledHeader from '../../components/StyledHeader/StyledHeader';
import SuperHeros from '../../api/superheros';

class Ranking extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

    return (
      <div>
        <StyledHeader
          history={this.props.history}
          path="/"
          title="Ranking"
          textButton="List"
        />
        <div>
          <h2> Multiple items </h2>
          <Slider {...settings}>
            ...
          </Slider>
        </div>
      </div>
    );
  }
}

export default Ranking;
