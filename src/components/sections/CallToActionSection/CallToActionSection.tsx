import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Container } from '../../Container';
import { FiChevronDown } from 'react-icons/fi';
import { Button } from '../../Button';

const CallToActionSectionWrapper = styled.section`
  padding: 3rem 0;
  text-align: left;
`;

const CallToActionSectionContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 60rem;
  padding: 2.25rem;
  border-radius: 0.5rem;
  color: #fff;
  background-color: var(--color-primary);

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 3rem;
    gap: 2rem;
    justify-content: space-between;
  }
`;

const CallToActionSectionTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  margin: 0 auto 0.5rem;

  @media (min-width: 1024px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-bottom: 1rem;
  }
`;

const CallToActionSectionDescription = styled.p`
  font-weight: 400;
  margin: 0 auto 2.25rem;

  @media (min-width: 1024px) {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

const StyledButton = styled(Button)`
  background-color: #fff;
  font-size: 1.125rem;
  color: var(--color-primary);
  padding: 0.75rem 2.75rem;

  &:hover,
  &:focus {
    background-color: var(--color-secondary-dark);
  }

  @media (min-width: 1024px) {
    padding: 1rem 2rem;
  }
`;

interface CallToActionSectionProps {
  title: string;
  subtitle: string;
  callToAction: string;
}

export const CallToActionSection: FC<CallToActionSectionProps> = ({
  title,
  subtitle,
  callToAction,
}) => {
  return (
    <CallToActionSectionWrapper>
      <Container>
        <CallToActionSectionContainer>
          <div>
            <CallToActionSectionTitle>{title}</CallToActionSectionTitle>
            <CallToActionSectionDescription>{subtitle}</CallToActionSectionDescription>
          </div>
          <StyledButton>{callToAction}</StyledButton>
        </CallToActionSectionContainer>
      </Container>
    </CallToActionSectionWrapper>
  );
};
