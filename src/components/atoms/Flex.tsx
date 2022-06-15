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
  flexDirection?: 'column' | 'row';
  alignItems?: 'center';
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ block }) => block && `width: 100%;`}
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
`;

export const FlexItem = styled.div<FlexItemProps>`
  width: ${({ size }) => (size ? size : '100')}%;
`;
