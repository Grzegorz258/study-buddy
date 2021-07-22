// eslint-disable-next-line
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
