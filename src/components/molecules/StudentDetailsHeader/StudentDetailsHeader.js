import React from 'react';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { HeaderWrapper, StyledAverage, StyledInfo, Toolbar } from './StudentDetailsHeader.styles';
import { Title } from 'components/atoms/Title/Title';

const StudentDetailsHeader = ({ student: { name, average, attendance } }) => {
  return (
    <HeaderWrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <Title>{name}</Title>
        <p>Attendance: {attendance}</p>
      </StyledInfo>
      <Toolbar>
        <DeleteButton />
        <DeleteButton />
        <DeleteButton />
      </Toolbar>
    </HeaderWrapper>
  );
};

export default StudentDetailsHeader;
