import React from 'react';
import SchoolSubjectInfo from 'components/atoms/SchoolSubjectInfo/SchoolSubjectInfo';
import { CourseInfo, GradesInfo, StyledLabel, Wrapper } from './StudentDetailsContent.styles';

const StudentDetailsContent = ({ student: { course, grades } }) => {
  return (
    <Wrapper>
      <CourseInfo>
        <StyledLabel>Course:</StyledLabel>
        <p>{course}</p>
      </CourseInfo>
      <GradesInfo>
        <StyledLabel>Average grades: </StyledLabel>
        {grades.map((grade) => (
          <SchoolSubjectInfo key={grade.subject} grade={grade} />
        ))}
      </GradesInfo>
    </Wrapper>
  );
};

export default StudentDetailsContent;
