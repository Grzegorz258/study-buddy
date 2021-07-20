import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  padding: 40px;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  overflow-y: scroll;
`;

export const NewsSectionHeader = styled.h2`
  margin-right: auto;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const ArticleWrapper = styled(ViewWrapper)`
  margin: 30px 0;
  width: 100%;
  max-width: unset;
  color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: 15px;

  p {
    line-height: 1.6;
  }
`;

export const TitleWrapper = styled.div`
  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

  img {
    margin-left: 30px;
    max-width: 200px;
    object-fit: cover;
  }
`;
