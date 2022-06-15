import { Flex } from '@components/atoms/Flex';
import styled from 'styled-components';

interface bodyContainerProps {
  paddingTop?: string
  paddingX?: string
}


export const BodyContainer1 = styled(Flex)<bodyContainerProps>`
  background-color: rgba(250, 215, 10, 0.1);
  padding-top: ${({paddingTop}) => paddingTop || '13'}rem;
  padding-left: ${({paddingX}) => paddingX || '6.5'}rem;
  padding-right: ${({paddingX}) => paddingX || '6.5'}rem;
`;
