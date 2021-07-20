import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  padding: ${({ isBig }) => (isBig ? '10px 40px' : '7px 20px')};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border: none;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.m : fontSize.s)};
  font-weight: bold;
  cursor: pointer;
`;
