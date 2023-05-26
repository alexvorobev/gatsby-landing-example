import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Container } from '../../Container';

const TestimonialsSectionWrapper = styled.section`
  padding: 3rem 0;
  text-align: center;
`;

const TestimonialsSectionContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TestimonialsSectionTitle = styled.h2`
  font-size: 1.875rem;
  line-height: 1.375;
  font-weight: 600;
  margin: 0 auto 1rem;

  @media (min-width: 1024px) {
    max-width: 60%;
  }
`;

const TestimonialsSectionDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 400;
  margin: 0 auto 3rem;

  @media (min-width: 1024px) {
    max-width: 50%;
  }
`;

const TestimonialsSectionList = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.875rem;
    align-items: start;
  }
`;

const TestimonialsSectionListItem = styled.div`
  padding: 3.5rem;
  border-radius: 1.5rem;
  background-color: var(--color-secondary);
  margin-top: 2rem;
  text-align: left;
`;

const TestimonialsSectionListItemText = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  font-weight: 400;
  margin: 0 0 2rem;
`;

const TestimonialsSectionListItemName = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
  font-weight: 600;
  margin: 0;
`;

const TestimonialsSectionListItemPosition = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  margin: 0;
`;

const TestimonialFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TestimonialsSectionListItemIcon = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: var(--color-white);
`;

interface TestimonialsSectionProps {
  title: string;
  subtitle: string;
  testimonials: Array<{
    name: string;
    position: string;
    text: string;
  }>;
}

export const TestimonialsSection: FC<TestimonialsSectionProps> = ({
  title,
  subtitle,
  testimonials,
}) => {
  return (
    <TestimonialsSectionWrapper>
      <TestimonialsSectionContainer>
        <TestimonialsSectionTitle>{title}</TestimonialsSectionTitle>
        {subtitle && <TestimonialsSectionDescription>{subtitle}</TestimonialsSectionDescription>}
        <TestimonialsSectionList>
          {testimonials.map((testimonial, index) => (
            <TestimonialsSectionListItem key={index}>
              <TestimonialsSectionListItemText>{testimonial.text}</TestimonialsSectionListItemText>
              <TestimonialFooter>
                <TestimonialsSectionListItemIcon src={`https://100k-faces.glitch.me/random-image?id=${index}`} alt={testimonial.name} />
                <div>
                <TestimonialsSectionListItemName>
                  {testimonial.name}
                </TestimonialsSectionListItemName>
                <TestimonialsSectionListItemPosition>
                  {testimonial.position}
                </TestimonialsSectionListItemPosition>
                </div>
              </TestimonialFooter>
            </TestimonialsSectionListItem>
          ))}
        </TestimonialsSectionList>
      </TestimonialsSectionContainer>
    </TestimonialsSectionWrapper>
  );
};
