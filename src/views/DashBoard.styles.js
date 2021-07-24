import styled from 'styled-components';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { NavLink } from 'react-router-dom';

const includeFlexbox = (justify, align) => {
  return {
    display: 'flex',
    'justify-content': justify,
    'align-items': align,
  };
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 50px;
  width: 100%;
  height: 100%;
`;

export const GroupsNav = styled.nav`
  ${includeFlexbox('center', 'center')}
  padding: 10px 10px 10px 0;
`;

export const ListWrapper = styled(ViewWrapper)`
  margin: 0;
`;

const activeClassName = 'active-group';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  ${includeFlexbox('center', 'center')}
  position: relative;
  width: 40px;
  height: 40px;
  margin: 10px;
  padding: 10px;
  border-radius: 50%;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: bold;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.darkGrey};

  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    opacity: 0;
    ${includeFlexbox('center', 'center')}
    content: '${({ group }) => group}';
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.white};
    transition: opacity 0.3s;
  }
`;
