import { FlexItem } from '@components/atoms/Flex';
import styled from 'styled-components';

export const ECourseCardContainer = styled(FlexItem)`
  background: ${({ theme }) => theme.colors.lotion};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
`;

export const ECourseCardImage = styled.div`
  height: 10rem;
  overflow: hidden;
  position: relative;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
`;
