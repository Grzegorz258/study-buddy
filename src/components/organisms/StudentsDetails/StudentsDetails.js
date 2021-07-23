import React from 'react';
import StudentDetailsHeader from '../../molecules/StudentDetailsHeader/StudentDetailsHeader';
import styled from 'styled-components';
import StudentDetailsContent from '../../molecules/StudentDetailsContent/StudentDetailsContent';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

const StudentDetails = ({ student }) => {
  return (
    <Wrapper>
      <StudentDetailsHeader student={student} />
      <StudentDetailsContent student={student} />
    </Wrapper>
  );
};

export default StudentDetails;
