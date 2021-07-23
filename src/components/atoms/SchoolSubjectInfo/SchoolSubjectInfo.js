import React from 'react';
import styled from 'styled-components';
import { Average } from '../Average/Average';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: normal;
  }

  ${Average} {
    margin-left: 30px;
  }
`;

const SchoolSubjectInfo = ({ grade: { subject, average } }) => {
  return (
    <Wrapper>
      <p>{subject}</p>
      <Average value={average}>{average}</Average>
    </Wrapper>
  );
};

export default SchoolSubjectInfo;
