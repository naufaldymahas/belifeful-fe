import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1.625rem;
  color: ${({ theme }) => theme.colors.darkCharcoal};
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.lotion};
  font-family: ${({ theme }) => theme.fontFamily};

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.gold};
    box-shadow: 0px 0px 7px 1px rgba(250, 215, 10, 0.3);
  }
`;

export default Input;
