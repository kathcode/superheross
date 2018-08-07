import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';

import StyledHeader from '../StyledHeader/StyledHeader';

import * as actions from '../../actions/List';

const StyledAvatar = styled(Avatar)`
  width: 160px !important;
  height: 160px !important;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  margin: 0 auto;
  margin-bottom: 50px;
`;

const StyledTextGray = styled.strong`
  color: #757575;
  margin-left: 10px;
  font-size: 1.2em;
`;


const StyledContainerAvatar = styled.div`
  @media (max-width: 992px) {
    justify-content: center;
    display: flex;
    margin-bottom: 30px;
  }
`;

class GridList extends Component {
  async componentDidMount() {
    await this.props.getHero(this.props.match.params.id);
  }

  render() {
    const {
      superHeros,
    } = this.props;

    return (
      <React.Fragment>
        <StyledHeader
          history={this.props.history}
          path="/"
          title={superHeros.heroDetail.name || 'Hero'}
          textButton="List"
        />
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-8 mt-5 text-center">
              {superHeros.heroDetail &&
                <Card className="pt-3 pr-3 pl-3 pb-3">
                  <div className="row row-eq-height d-flex align-items-center justify-content-center">
                    <StyledContainerAvatar className="col-lg-12">
                      <StyledAvatar
                        alt={superHeros.heroDetail.picture}
                        src={superHeros.heroDetail.picture || 'https://www.namepros.com/a/2018/05/106343_82907bfea9fe97e84861e2ee7c5b4f5b.png'}
                      />
                    </StyledContainerAvatar>
                    <div className="col-lg-12">
                      <h2>{superHeros.heroDetail.name}</h2>
                      <p>Publisher: {superHeros.heroDetail.publisher}</p>
                      <div className="mt-3">{superHeros.heroDetail.info === '-' ? 'No description added' : superHeros.heroDetail.info }</div>
                    </div>
                  </div>
                </Card>
              }
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default  connect(
  state=>state,
  actions
)(GridList);
