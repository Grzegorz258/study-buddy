import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

export const CourseInfo = styled.div`
  position: absolute;
  top: 10px;
  left: 60px;

  p:last-child {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const GradesInfo = styled.div`
  position: absolute;
  top: 70px;
  left: 60px;
  margin-top: 40px;
`;

export const StyledLabel = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
`;
