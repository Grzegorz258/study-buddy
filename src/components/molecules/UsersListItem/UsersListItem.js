import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

const Wrapper = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: lightgrey;
  }
`;

const UsersListItem = ({ userData: { name, attendance = '0%', average } }) => (
  <Wrapper>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>Attendance: {attendance}</p>
    </div>
    <Button />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
