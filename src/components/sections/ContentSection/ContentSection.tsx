import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Container } from '../../Container';

const ContentSectionWrapper = styled.section`
  padding: 3rem 0;
  text-align: left;

  @media (min-width: 1024px) {
    padding: 6rem 0;
  }
`;

const ContentSectionContainer = styled(Container)<{ align: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;

  @media (min-width: 1024px) {
    display: grid;
    column-gap: 4rem;
    grid-template-columns: repeat(2, 1fr);

    ${({ align }) =>
      align === 'right' &&
      `
      div:first-of-type {
        grid-column: 2;
        grid-row: 1;
      }

      div:last-of-type {
        grid-column: 1;
        grid-row: 1;
      }
    `}
  }
`;

const ContentSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 1rem;
`;

const ContentSectionImage = styled.div`
  display: block;
  width: 100%;
  border-radius: 1.5rem;
  position: relative;

  img {
    width: 100%;
    height: auto;
    border-radius: 1.5rem;
  }

  @media (min-width: 1024px) {
    overflow: hidden;
    min-height: 28rem;
    max-height: 32rem;

    img {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      display: block;
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;

const ContentSectionTitle = styled.h2`
  font-size: 1.875rem;
  line-height: 1.375;
  font-weight: 600;
  text-align: left;

  @media (min-width: 1024px) {
  }
`;

const ContentSectionDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 400;
  margin: 0;

  @media (min-width: 1024px) {
  }
`;

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  content?: string;
  image?: string;
  align?: 'left' | 'right';
}

export const ContentSection: FC<ContentSectionProps> = ({
  title,
  subtitle,
  content,
  align = 'left',
}) => {
  return (
    <ContentSectionWrapper>
      <ContentSectionContainer align={align}>
        <ContentSectionContent>
          <ContentSectionTitle>{title}</ContentSectionTitle>
          {(subtitle || content) && (
            <ContentSectionDescription>{content ?? subtitle}</ContentSectionDescription>
          )}
        </ContentSectionContent>
        <ContentSectionImage>
          <img src="https://www.letsphuket.com/wp-content/uploads/phuket1.jpg" alt="Education" />
        </ContentSectionImage>
      </ContentSectionContainer>
    </ContentSectionWrapper>
  );
};
