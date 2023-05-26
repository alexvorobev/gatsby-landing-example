import React, { FC } from 'react';
import styled from '@emotion/styled';

const InputWrapper = styled.div`
    width: 100%;
`;

const StyledInput = styled.input`
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--color-secondary);
    background-color: #fff;
    color: var(--color-text);
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;
    width: 100%;

    &:focus {
        outline: none;
        border-color: var(--color-primary);
    }

    &::placeholder {
        color: rgb(var(--color-primary)11);
    }

    &:disabled {
        opacity: 0.5;
    }

    @media (min-width: 1024px) {
    }
`;

const StyledLabel = styled.label`
    display: block;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 600;
    margin-bottom: 0.5rem;

    @media (min-width: 1024px) {
    }
`;

interface InputProps {
    label?: string;
    placeholder?: string;
    type?: string;
    id?: string;
    name?: string;
    value?: string;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}


export const Input:FC<InputProps> = ({
    id,
    value,
    name,
    label,
    type = 'text',
    placeholder,
    disabled,
    onChange,
    onBlur,
}) => {
    return (
        <InputWrapper>
            {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
            <StyledInput
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                onChange={onChange}
                onBlur={onBlur}
            />
        </InputWrapper>
    );
};