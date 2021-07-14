import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles';

const showIndex = (index) => alert(`This is student ${index + 1}`);

const UsersListItem = ({ index, userData: { name, attendance = '0%', average } }) => (
  <Wrapper>
    <StyledAverage average={average}>{average}</StyledAverage>
    <StyledInfo>
      <p>{name}</p>
      <p>Attendance: {attendance}</p>
    </StyledInfo>
    <Button onClick={() => showIndex(index)} />
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
