import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Container } from '../../Container';
import { Button } from '../../Button';
import { ScratchIcon } from '../../../icons';

const HeroSectionWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 5rem;
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;
  }
`;

const HeroSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3.5rem;
  max-width: 35rem;

  @media (min-width: 1024px) {
    align-items: flex-start;
    margin-bottom: 0;
  }
`;

const HeroSectionTitle = styled.div`
  position: relative;
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 1.75rem;

  svg {
    position: absolute;
    top: 1.125rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    opacity: 0.35;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
    text-align: left;
  }
`;

const HeroSectionSubtitle = styled.div`
  font-size: 1.125rem;
  line-height: 2rem;
  text-align: center;
  margin-bottom: 2.75rem;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const HeroSectionButton = styled(Button)`
  width: max-content;
  padding: 0.75rem 1.75rem;
`;

const HeroSectionImage = styled.div`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  overflow: hidden;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
`;

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  callToAction?: string;
}

export const HeroSection: FC<HeroSectionProps> = ({ title, subtitle, callToAction }) => {
  return (
    <HeroSectionWrapper>
      <HeroSectionContent>
        <HeroSectionTitle>
          {title}
          <ScratchIcon height="2.5rem" width="100%" color="var(--color-primary)" />
        </HeroSectionTitle>
        <HeroSectionSubtitle>{subtitle}</HeroSectionSubtitle>
        {callToAction && <HeroSectionButton rounded>{callToAction}</HeroSectionButton>}
      </HeroSectionContent>
      <HeroSectionImage>
        <img
          src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </HeroSectionImage>
    </HeroSectionWrapper>
  );
};
