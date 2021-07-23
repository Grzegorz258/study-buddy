import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledInfo } from './StudentsListItem.styles';
import { UsersContext } from 'providers/UsersProvider';
import { UserShape } from 'types';
import { Average } from 'components/atoms/Average/Average';

const StudentsListItem = ({ userData: { name, attendance = '0%', average }, ...props }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper {...props}>
      <Average value={average}>{average}</Average>
      <StyledInfo>
        <p>{name}</p>
        <p>Attendance: {attendance}</p>
      </StyledInfo>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

StudentsListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default StudentsListItem;
