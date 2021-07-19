import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  overflow-x: scroll;
`;
