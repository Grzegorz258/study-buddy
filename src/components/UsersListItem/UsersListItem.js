import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({ userData: { name, attendance = '0%', average } }) => (
  <li>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>Attendance: {attendance}</p>
    </div>
    <button>X</button>
  </li>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
