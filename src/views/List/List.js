import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';

import * as actions from '../../actions/List';

import styled from 'styled-components';
import StyledHeader from '../../components/StyledHeader/StyledHeader';
import GridList from '../../components/GridList/GridList';
import TableList from '../../components/TableList/TableList';

class List extends Component {
  constructor(props) {
    super(props);
    this.addRanking = this.addRanking.bind(this);
  }
  
  state = {
    listStyle: true
  };

  async componentDidMount() {
    await this.props.fetchSuperHeros();
  }

  addRanking(position) {
    const hero = this.props.superHeros.superHeros[position];
    hero.ranking = hero.ranking + 1;
    this.props.updateHero(this.props.superHeros.superHeros);
  }

  changeView = () => {
    this.setState({
      listStyle: !this.state.listStyle,
    })
  }

  goToDetail = (heroId) => {
    this.props.history.push(`/${heroId}`);
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
              <i className="fas fa-list-ul" />
            )}

            {!this.state.listStyle && (
              <i className="fas fa-th-large" />
            )}
          </IconButton>
        </div>
        <div className="container mt-3">
          <div className="row row-eq-height">
            {Object.keys(superHeros.superHeros).length > 0 &&  Object.keys(superHeros.superHeros).map((hero, position) => (
              <React.Fragment>
                {this.state.listStyle && (
                  <GridList
                    hero={superHeros.superHeros[hero]}
                    position={hero}
                    addRanking={this.addRanking}
                    superHeros={superHeros.superHeros}
                    onClick={() => this.goToDetail(hero)}
                  />
                )}

                {!this.state.listStyle && (
                  <TableList
                    hero={superHeros.superHeros[hero]}
                    position={hero}
                    addRanking={this.addRanking}
                    superHeros={superHeros.superHeros}
                    onClick={() => this.goToDetail(hero)}
                  />
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
