import styled, { StyledComponent } from "@emotion/styled";

export const Button: StyledComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = styled.button`
  background: var(--accent);
  border: none;
  border-radius: 5px;
  color: var(--background);
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 20px;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;

  &:hover {
    background: var(--accent-hover);
  }
`;
