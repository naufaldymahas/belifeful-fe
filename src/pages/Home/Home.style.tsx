import { Flex } from '@components/atoms/Flex';
import { ColorThemeEnum } from '@styles/Theme';
import styled from 'styled-components';

interface bodyContainerProps {
  paddingTop?: string;
  paddingX?: string;
  backgroundColor?: ColorThemeEnum;
}

export const BodyContainer = styled(Flex)<bodyContainerProps>`
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor
      ? theme.colors[backgroundColor]
      : 'rgba(250, 215, 10, 0.1)'};
  padding-top: ${({ paddingTop }) => paddingTop || '13'}rem;
  padding-left: ${({ paddingX }) => paddingX || '6.5'}rem;
  padding-right: ${({ paddingX }) => paddingX || '6.5'}rem;
`;
