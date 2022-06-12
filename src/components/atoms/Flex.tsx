import styled from 'styled-components';

type FlexItemProps = {
  size?: string;
};

type FlexProps = {
  justifyContent?:
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'center'
    | 'normal'
    | 'end';
  block?: boolean;
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ block }) => block && `width: 100%;`}
`;

export const FlexItem = styled.div<FlexItemProps>`
  width: ${({ size }) => (size ? size : '100')}%;
`;
