import React, { FC, useState } from "react";
import { Container } from "../Container";
import styled from "@emotion/styled";

type QuestionType = {
  question: string;
  answer: string;
};

interface FAQSectionProps {
  title: string;
  subtitle?: string;
  questions: QuestionType[];
}

const FAQSectionWrapper = styled.div`
  padding: 32px 0;
  text-align: center;
  color: var(--white);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 32px;
`;

const SectionTypeTitle = styled.p`
    font-size: 14px;
    font-weight: 300;
    margin: 0 0 16px;
`;

const SectionTitle = styled.h3`
    font-size: 24px;
    font-weight: 700;
    margin: 0 0 16px;
`;

export const FAQSection: FC<FAQSectionProps> = ({
  title,
  subtitle,
  questions,
}) => {
  const [openedQuestion, setOpenedQuestion] = useState<number | null>(null);
  return (
    <FAQSectionWrapper>
      <Container>
        <SectionTypeTitle>FAQ</SectionTypeTitle>
        <SectionTitle>{title}</SectionTitle>
        <p>{subtitle}</p>

        {questions.map((question, index) => (
          <div key={index}>
            <div onClick={() => setOpenedQuestion(index)}>
              <h3>{question.question}</h3>
            </div>
            {openedQuestion === index && <p>{question.answer}</p>}
          </div>
        ))}
      </Container>
    </FAQSectionWrapper>
  );
};
