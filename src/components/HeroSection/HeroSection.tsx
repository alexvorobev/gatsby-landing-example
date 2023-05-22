import styled from "@emotion/styled";
import React, { FC } from "react";
import { Container } from "../Container";
import { Button } from "../Button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  callToAction: string;
}

const HeroSectionWrapper = styled.div`
  background: rgba(var(--accent), 0.8);

  @media (min-width: 1024px) {
    padding: 20px;
  }
`;

const HeroSectionContainer = styled(Container)`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
  }
`;

const HeroImage = styled.img`
  width: auto;
  height: 100vh;
  object-fit: cover;
  max-height: 320px;

  @media (min-width: 1024px) {
    width: 100%;
    max-width: 540px;
    height: auto;
    max-height: 600px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 32px;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const HeroSection: FC<HeroSectionProps> = ({
  title,
  subtitle,
  callToAction,
}) => {
  return (
    <HeroSectionWrapper>
      <HeroSectionContainer>
        <div>
          <HeroTitle>{title}</HeroTitle>
          <HeroSubtitle>{subtitle}</HeroSubtitle>
          <Button>{callToAction}</Button>
        </div>
        <HeroImage src="https://images.pexels.com/photos/4050325/pexels-photo-4050325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </HeroSectionContainer>
    </HeroSectionWrapper>
  );
};
