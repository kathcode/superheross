import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background: #d4d4d4;
  padding: 30px;
`;

const StyledSmallHeader = styled.div`
  height: 100%;
  width: ${props => props.widthSmallMenu};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #d4d4d4;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 0px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`;

const StyledSmallMenu = styled.div`
  position: absolute;
  left: -7px;
  top: 1px;
  font-size: 30px;
  display: none;

  @media (max-width: 700px) {
    display: block;
  }
`;

const StyledCloseButton = styled.div`
  display: block;
  text-align: center;
  font-size: 3em;
`;

const StyledButton = styled(Button)`
  width: 90%;
`;

const StyledTitle = styled.h1`
  margin-left: 10px;

  @media (max-width: 700px) {
    display: block;
    text-align: center;
  }
`;

const StyledButtonLarge = styled(Button)`
  @media (max-width: 700px) {
    display: none !important;
  }
`;

class Ranking extends Component {
  state = {
    widthSmallMenu: '0px',
  }

  goToRanking = (path) => {
    this.props.history.push(path);
  }

  closeNav = () => {
    this.setState({
      widthSmallMenu: '0px',
    })
  }

  openNav = () => {
    this.setState({
      widthSmallMenu: '200px',
    })
  }
  render() {
    return (
      <React.Fragment>
        <div className="hidden-sm-up visible">
          <StyledSmallHeader id="mySidenav" widthSmallMenu={this.state.widthSmallMenu}>
            <StyledCloseButton href="javascript:void(0)" onClick={this.closeNav}>&times;</StyledCloseButton>
            <div className="text-center">
              <StyledButton variant="outlined" onClick={() => this.goToRanking(this.props.path)}>
                {this.props.textButton}
              </StyledButton>
            </div>
          </StyledSmallHeader>
        </div>
        <StyledHeader className="container-fluid">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col">
              <StyledSmallMenu onClick={this.openNav}>&#9776;</StyledSmallMenu>
              <StyledTitle>{this.props.title}</StyledTitle>
            </div>
            <div className="col text-right">
              <StyledButtonLarge variant="outlined" className="hidden-xs-down visible" onClick={() => this.goToRanking(this.props.path)}>
                {this.props.textButton}
              </StyledButtonLarge>
            </div>
          </div>
        </StyledHeader>
      </React.Fragment>
    );
  }
}

export default Ranking;
