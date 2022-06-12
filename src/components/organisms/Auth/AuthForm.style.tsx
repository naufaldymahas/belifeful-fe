import { Flex, FlexItem } from '@components/atoms/Flex';
import styled from 'styled-components';

export const AuthLayoutStripWrapper = styled(Flex)`
  width: 100%;
  margin-top: 1.5rem;
  justify-content: space-between;
  align-items: center;
`;

export const AuthLayoutStrip = styled(FlexItem)`
  height: 0.125rem;
  background-color: ${({ theme }) => theme.colors.gray};
`;