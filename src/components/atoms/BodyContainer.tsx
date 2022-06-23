import { Flex } from '@components/atoms/Flex';
import styled from 'styled-components';

interface bodyContainerProps {
  paddingTop?: string;
  paddingX?: string;
}

const BodyContainer = styled(Flex)<bodyContainerProps>`
  background-color: ${({ theme }) => theme.colors.lotion};
  padding-top: 13rem;

  @media only screen and (max-width: 992px) {
    padding-top: 7.5rem;
  }

  @media only screen and (max-width: 1320px) {
    padding-left: 6.5rem;
    padding-right: 6.5rem;
  }

  @media only screen and (max-width: 992px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

export default BodyContainer;
