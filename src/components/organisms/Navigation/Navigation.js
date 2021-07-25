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
      <StyledLink to="/group">Dashboard</StyledLink>
      <StyledLink as="a" onClick={() => localStorage.removeItem('token')}>
        Login
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;
