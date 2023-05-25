import styled from '@emotion/styled';
import React, { FC } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  rounded?: boolean;
  variant?: 'primary' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<Pick<ButtonProps, 'rounded' | 'variant'>>`
  padding: 0.35rem 1.75rem;
  border-radius: 0.375rem;
  font-size: 0.938rem;
  font-weight: 600;
  line-height: 1.5;
  border: 0;
  background-color: var(--color-primary);
  color: #fff;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--color-primary-dark);
  }

  ${({ variant }) =>
    variant === 'secondary' &&
    `
        background-color: var(--color-secondary);
        color: var(--color-primary-dark);

        &:hover, &:focus, &:active {
            background-color: var(--color-secondary-dark);
        }
    `}

  ${({ rounded }) =>
    rounded &&
    `
        border-radius: 6rem;
        height: auto;
        width: auto;
    `}
`;

export const Button: FC<ButtonProps> = ({ children, rounded, ...props }) => {
  return (
    <StyledButton {...props} rounded={rounded}>
      {children}
    </StyledButton>
  );
};
