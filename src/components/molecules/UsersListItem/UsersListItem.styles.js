import styled from 'styled-components';

export const Wrapper = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 15px;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

export const StyledAverage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  height: 34px;
  width: 34px;
  background: ${({ theme, average }) => {
    if (average > 4) return theme.colors.success;
    else if (average > 3) return theme.colors.warning;
    else if (average > 2) return theme.colors.error;
    else return theme.colors.grey;
  }};
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
`;

export const StyledInfo = styled.div`
  margin: 10px;
  padding: 0;

  p {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
  }

  p:last-child {
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: normal;
  }
`;
