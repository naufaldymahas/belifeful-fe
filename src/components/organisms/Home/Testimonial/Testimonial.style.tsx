import { Flex } from '@components/atoms/Flex';
import styled from 'styled-components';

export const TestimonialCard = styled(Flex)`
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
  padding: 2.5rem 0.75rem;
  height: 12.5rem;
  width: 14rem;
  white-space: normal;
`;

export const TestimonialBackground = styled(Flex)`
  position: absolute;
  height: 17rem;
  background-color: rgb(255, 119, 85);
  mix-blend-mode: normal;
  opacity: 0.1;
  border-radius: 48px;
  z-index: -1;
  left: 50%;
  top: 65%;
  width: 80%;

  @media only screen and (max-width: 992px) {
    left: 5%;
    top: 25%;
    width: 100%;
  }

  @media only screen and (min-width: 993px) {
    transform: translate(-50%, -50%);
  }

  @media only screen and (min-width: 1400px) {
    width: 60%;
  }
`;
