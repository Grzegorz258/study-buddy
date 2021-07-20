import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  grid-row: 1 / 3;
  grid-column: 1/ 1;
  padding: 30px 0;
  width: 100%;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  height: 60px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkGrey};

  h1 {
    margin: 20px;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
  }
`;

const activeClassName = 'active-link';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  position: relative;
  margin: 15px 20px 15px auto;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  text-decoration: none;

  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    opacity: 0;
    content: '';
    position: absolute;
    height: 3px;
    width: 18px;
    top: 50%;
    right: -20px;
    background-color: ${({ theme }) => theme.colors.darkPurple};
    transition: opacity 0.4s ease-in-out;
    transform: translateY(-50%);
  }
`;
