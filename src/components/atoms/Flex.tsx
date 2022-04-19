import styled from 'styled-components';

type FlexItemProps = {
  size?: string;
};

export const Flex = styled.div`
  display: flex;
`;

export const FlexItem = styled.div<FlexItemProps>`
  width: ${({ size }) => (size ? size : '100')};
`;
