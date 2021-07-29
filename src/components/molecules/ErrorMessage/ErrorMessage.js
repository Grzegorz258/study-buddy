import React from 'react';
import propTypes from 'prop-types';
import { Title } from 'components/atoms/Title/Title';
import { Wrapper } from './ErrorMessage.styles';

const defaultErrorMessage = 'Something went wrong. Please try again or contact our support.';

const ErrorMessage = ({ message = defaultErrorMessage }) => {
  return (
    <Wrapper>
      <Title>Oops!</Title>
      <p>{message}</p>
    </Wrapper>
  );
};

ErrorMessage.propTypes = {
  message: propTypes.string,
};

export default ErrorMessage;
