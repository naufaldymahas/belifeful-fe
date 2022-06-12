import styled from 'styled-components';

export const RegisterOTPForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  margin: 1.5rem 0 1.5rem 0;
`;

interface RegisterOTPProps {
  isFailed: boolean;
}

export const RegisterOTPInput = styled.input<RegisterOTPProps>`
  border: none;
  border-bottom: 2px solid
    ${({ theme, isFailed }) =>
      isFailed ? theme.colors.ryb : theme.colors.gold};
  outline: none;
  background-color: transparent;
  width: ${100 / 6 - 7}%;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.bolder};
  font-size: ${({ theme }) => theme.fontSize[5]};
  padding-bottom: 0.625rem;
`;
