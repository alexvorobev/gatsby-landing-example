import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Container } from '../../Container';
import * as FeatherIcons from 'react-icons/fi';

const AdvantagesSectionWrapper = styled.section`
  padding: 3rem 0;
  text-align: center;

  @media (min-width: 1024px) {
    padding: 6rem 0;
  }
`;

const AdvantagesSectionContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AdvantagesSectionTitle = styled.h2`
  font-size: 1.875rem;
  line-height: 1.375;
  font-weight: 600;
  margin: 0 auto 1rem;

  @media (min-width: 1024px) {
    max-width: 60%;
  }
`;

const AdvantagesSectionDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 400;
  margin: 0 auto 3rem;

  @media (min-width: 1024px) {
    max-width: 50%;
    margin-bottom: 5rem;
  }
`;

const AdvantagesSectionList = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.875rem;
  }
`;

const AdvantagesSectionListItem = styled.div`
  padding: 1.125rem 1rem;
  border-radius: 0.5rem;
  margin-top: 2rem;
  background-color: var(--color-secondary);
`;

const AdvantagesSectionListItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background-color: var(--color-primary);
  color: var(--color-secondary);
  padding: 1rem;
  width: min-content;
  border-radius: 50%;
  margin-top: -2.5rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.5rem;
`;

const AdvantagesSectionListItemTitle = styled.h4`
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const AdvantagesSectionListItemDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

interface AdvantagesSectionProps {
  title: string;
  subtitle: string;
  features: Array<{
    title: string;
    subtitle: string;
    icon: string;
  }>;
}

const snakeToCamel = (str: string) => {
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace('-', '').replace('_', ''),
  );
};

const snakeToPascal = (str: string) => {
  const camel = snakeToCamel(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
};

export const AdvantagesSection: FC<AdvantagesSectionProps> = ({ title, subtitle, features }) => {
  const getIcon = (icon: string) => {
    const iconKey = `Fi${snakeToPascal(icon)}`;
    const Icon = FeatherIcons[iconKey as keyof typeof FeatherIcons] ?? FeatherIcons.FiDisc;

    if (!Icon) {
      return null;
    }

    return <Icon />;
  };

  return (
    <AdvantagesSectionWrapper>
      <AdvantagesSectionContainer>
        <AdvantagesSectionTitle>{title}</AdvantagesSectionTitle>
        <AdvantagesSectionDescription>{subtitle}</AdvantagesSectionDescription>
        <AdvantagesSectionList>
          {features.map((advantage, index) => (
            <AdvantagesSectionListItem key={index}>
              <AdvantagesSectionListItemIcon>
                {getIcon(advantage.icon)}
              </AdvantagesSectionListItemIcon>
              <AdvantagesSectionListItemTitle>{advantage.title}</AdvantagesSectionListItemTitle>
              <AdvantagesSectionListItemDescription>
                {advantage.subtitle}
              </AdvantagesSectionListItemDescription>
            </AdvantagesSectionListItem>
          ))}
        </AdvantagesSectionList>
      </AdvantagesSectionContainer>
    </AdvantagesSectionWrapper>
  );
};
