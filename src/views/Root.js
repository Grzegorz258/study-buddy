import React from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f7f8fa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Root = (props) => {
  return (
    <Wrapper>
      <UsersList />
    </Wrapper>
  );
};

Root.propTypes = {};

export default Root;
