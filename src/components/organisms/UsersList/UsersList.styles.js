import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px 30px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 25%;
  max-width: 500px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.3);
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
