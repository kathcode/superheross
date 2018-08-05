import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';

import * as actions from '../../actions/List';

import SuperHeros from '../../api/superheros';

import styled from 'styled-components';
import StyledHeader from '../../components/StyledHeader/StyledHeader';
import GridList from '../../components/GridList/GridList';
import TableList from '../../components/TableList/TableList';

const StyledAvatar = styled(Avatar)`
  width: 160px !important;
  height: 160px !important;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const StyledCardActions = styled(CardActions)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px !important;
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

const StyledIcon = styled.i`
  height: 40px;
  wight: 40px;
`;

class List extends Component {
  state = {
    listStyle: true
  };

  async componentDidMount() {
    await this.props.getSuperHeros();

    if (this.props.superHeros && this.props.superHeros.superHeros.length > 0) {
      this.props.superHeros.superHeros.forEach(hero => {
        hero.ranking = 0;
      });
    }
  }

  addRanking = (position) => {
    const superheros = [...this.props.superHeros.superHeros];
    const hero = superheros[position];
    const ranking = hero['ranking'] ? hero['ranking'] : 0;
    hero['ranking'] = ranking + 1;

    this.setState({
      superheros,
    });
  }

  changeView = () => {
    this.setState({
      listStyle: !this.state.listStyle,
    })
  }

  render() {
    const {
      superHeros
    } =  this.props;

    return (
      <React.Fragment>
        <StyledHeader
          history={this.props.history}
          path="/ranking"
          title="Superheros"
          textButton="Ranking"
        />
        <div className="text-center">
          <IconButton  onClick={this.changeView} aria-label="Add to favorites">
            {this.state.listStyle && (
              <i class="fas fa-list-ul" />
            )}

            {!this.state.listStyle && (
              <i class="fas fa-th-large" />
            )}
          </IconButton>
        </div>
        <div className="container mt-3">
          <div className="row row-eq-height">
            {superHeros.superHeros.length > 0 && superHeros.superHeros.map((hero, position) => (
              <React.Fragment>
                {this.state.listStyle && (
                  <GridList hero={hero} position={position} addRanking={this.addRanking} superHeros={superHeros.superHeros} />
                )}

                {!this.state.listStyle && (
                  <TableList hero={hero} position={position} addRanking={this.addRanking} superHeros={superHeros.superHeros} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  state => state,
  actions
)(List);
