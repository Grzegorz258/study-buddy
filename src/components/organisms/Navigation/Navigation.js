import React from 'react';
import { Wrapper, StyledLink, Logo } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink exact to="/">
        Dashboard
      </StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
      {/* <StyledLink activeClassName="active=link">Settings</StyledLink>
      <StyledLink activeClassName="active=link">Logout</StyledLink> */}
    </Wrapper>
  );
};

export default Navigation;
