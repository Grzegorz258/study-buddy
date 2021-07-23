import styled from 'styled-components';

export const Wrapper = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 15px;
  cursor: pointer;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
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
