import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  padding: 10px 30px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border: none;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  cursor: pointer;
`;
