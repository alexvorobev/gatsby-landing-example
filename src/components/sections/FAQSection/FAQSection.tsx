import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Container } from '../../Container';
import { FiChevronDown } from 'react-icons/fi';

const FAQSectionWrapper = styled.section`
  padding: 3rem 0;
  text-align: center;
`;

const FAQSectionContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FAQSectionTitle = styled.h2`
  font-size: 1.875rem;
  line-height: 1.375;
  font-weight: 600;
  margin: 0 auto 1rem;

  @media (min-width: 1024px) {
    max-width: 60%;
  }
`;

const FAQSectionDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 400;
  margin: 0 auto 3rem;

  @media (min-width: 1024px) {
    max-width: 50%;
  }
`;

const FAQSectionList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
`;

const FAQItemQuestion = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: left;
  padding: 1rem 1.125rem;
  border-radius: 0.5rem;
  background-color: var(--color-secondary);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  svg {
    flex-shrink: 0;
    color: var(--color-primary);
    transform: rotate(0deg);
    transform-origin: center;
    transition: transform 0.2s ease-in-out;
  }

  @media (min-width: 1024px) {
    padding: 1rem 2rem;

    &:hover {
      background-color: var(--color-secondary-light);
    }
  }
`;

const FAQItemAnswer = styled.div`
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 400;
  padding: 0.5rem 1.125rem 3rem;
  text-align: left;

  @media (min-width: 1024px) {
    padding: 0.5rem 2.125rem 3rem;
  }
`;

const FAQItemAnswerWrapper = styled.div`
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
`;

const FAQItemWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  

  ${({ isOpen }) =>
    isOpen &&
    `
    ${FAQItemQuestion} {
      background-color: var(--color-secondary-light);

      svg {
        transform: rotate(180deg);
        transform-origin: center;
        transition: transform 0.2s ease-in-out;
    }
  `})}
`;

interface FAQItemProps {
  question: string;
  isOpen: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const FAQItem: FC<FAQItemProps> = ({ question, isOpen, children, onClick }) => {
  const answerRef = React.useRef<HTMLDivElement>(null);
  const answerWrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (answerRef.current && answerWrapperRef.current) {
      if (isOpen) {
        answerWrapperRef.current.style.maxHeight = `${answerRef.current.offsetHeight}px`;
      } else {
        answerWrapperRef.current.style.maxHeight = '0px';
      }
    }
  }, [isOpen]);

  return (
    <FAQItemWrapper isOpen={isOpen}>
      <FAQItemQuestion onClick={onClick}>
        <span>{question}</span>
        <FiChevronDown />
      </FAQItemQuestion>
      <FAQItemAnswerWrapper ref={answerWrapperRef}>
        <FAQItemAnswer ref={answerRef}>{children}</FAQItemAnswer>
      </FAQItemAnswerWrapper>
    </FAQItemWrapper>
  );
};

interface FAQSectionProps {
  title: string;
  subtitle: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export const FAQSection: FC<FAQSectionProps> = ({ title, subtitle, questions }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  console.log(activeIndex);

  return (
    <FAQSectionWrapper>
      <FAQSectionContainer>
        <FAQSectionTitle>{title}</FAQSectionTitle>
        <FAQSectionDescription>{subtitle}</FAQSectionDescription>
        <FAQSectionList>
          {questions.map((question, index) => (
            <FAQItem
              key={index}
              question={question.question}
              isOpen={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              {question.answer}
            </FAQItem>
          ))}
        </FAQSectionList>
      </FAQSectionContainer>
    </FAQSectionWrapper>
  );
};
