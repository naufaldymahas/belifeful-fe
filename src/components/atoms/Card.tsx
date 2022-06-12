import styled from 'styled-components';

const Card = styled.div`
  padding: 3.25rem 1.5rem;
  width: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lotion};
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
`;

export default Card;
