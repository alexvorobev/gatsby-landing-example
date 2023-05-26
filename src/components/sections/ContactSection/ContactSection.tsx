import React, { FC } from 'react';
import styled from '@emotion/styled';
import { FiSend } from 'react-icons/fi';

import { Container } from '../../Container';
import { Input } from '../../Input';
import { Button } from '../../Button';

const ContactSectionWrapper = styled.div`
  padding: 3rem 0;

  @media (min-width: 1024px) {
    padding: 6rem 0 1rem;
  }
`;

const ContactSectionContainer = styled(Container)`
  grid-gap: 2rem;
  padding: 3rem 2rem;
  background-color: var(--color-secondary);
  border-radius: 0;

  @media (min-width: 1024px) {
    padding: 5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    border-radius: 1.5rem;
  }
`;

const ContactSectionTitle = styled.h2`
  font-size: 1.875rem;
  line-height: 1.375;
  font-weight: 600;
  margin: 0 auto 1rem;
`;

const ContactSectionDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 400;
  margin: 0 auto 3rem;
`;

const ContactSectionFieldsList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-end;
`;

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  callToAction?: string;
}

export const ContactSection: FC<ContactSectionProps> = ({ title, subtitle, callToAction }) => {
  return (
    <ContactSectionWrapper id="contact">
      <ContactSectionContainer>
        <div>
          <ContactSectionTitle>{title}</ContactSectionTitle>
          <ContactSectionDescription>{subtitle}</ContactSectionDescription>
        </div>
        <ContactSectionFieldsList>
          <Input label="Имя" />
          <Input label="Электронная почта" />
          <Button size="large">{callToAction ?? <FiSend size={24} />}</Button>
        </ContactSectionFieldsList>
      </ContactSectionContainer>
    </ContactSectionWrapper>
  );
};
