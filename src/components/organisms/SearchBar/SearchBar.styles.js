import styled from 'styled-components';
import { Input } from 'components/atoms/Input/input';

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  padding: 0 40px;
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};

  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    width: 100%;
    max-width: 300px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  }
`;

export const StatusInfo = styled.div`
  margin-right: 40px;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};

  p {
    margin: 5px;
  }
`;
