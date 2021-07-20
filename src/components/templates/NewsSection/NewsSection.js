import React, { useState, useEffect } from 'react';
import { Button } from 'components/atoms/Button/Button';
import { ArticleWrapper, NewsSectionHeader } from './NewsSection.styles';
import { Wrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import axios from 'axios';

export const query = `
            {
             allArticles {
                id
                title
                category
                content
                image {
                url
                }
              }
            }`;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => setArticles(data.allArticles))
      .catch((err) => setError(`Sorry, we couldn't load news for you`));
  }, []);

  return (
    <Wrapper>
      <h2>News feed section</h2>
      {articles.length > 0 ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="" /> : null}
            </ContentWrapper>
            <Button isBig>Read more</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;
