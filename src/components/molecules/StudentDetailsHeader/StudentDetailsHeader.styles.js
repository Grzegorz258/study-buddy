import styled from 'styled-components';
import { StyledInfo as info } from 'components/molecules/StudentsListItem/StudentsListItem.styles';
import { Title } from 'components/atoms/Title/Title';
import { Average } from 'components/atoms/Average/Average';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 20px;
  width: 90%;
  height: 20%;
`;

export const StyledInfo = styled(info)`
  ${Title} {
    margin: 0;
  }

  p:last-child {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const StyledAverage = styled(Average)`
  height: 50px;
  width: 50px;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
