import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background: #d4d4d4;
  padding: 30px;
`;

class Ranking extends Component {
  goToRanking = (path) => {
    this.props.history.push(path);
  }

  render() {
    return (
      <StyledHeader className="container-fluid">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col">
            <h1>{this.props.title}</h1>
          </div>
          <div className="col text-right">
            <Button variant="outlined" onClick={() => this.goToRanking(this.props.path)}>
              {this.props.textButton}
            </Button>
          </div>
        </div>
      </StyledHeader>
    );
  }
}

export default Ranking;
