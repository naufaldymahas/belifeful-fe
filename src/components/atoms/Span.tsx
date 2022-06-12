import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';
import styled from 'styled-components';

type SpanProps = {
  variant?: ColorThemeEnum;
  weight?: FontWeightEnum;
  fs?: 'default' | '1' | '2' | '3' | '4' | '5' | '6' | '7';
  center?: boolean;
};

export const Span = styled.span<SpanProps>`
  font-size: ${({ theme, fs }) => (fs ? theme.fontSize[fs] : 'inherit')};
  font-weight: ${({ weight }) => (weight ? weight : 'inherit')};
  color: ${({ variant, theme }) =>
    variant ? theme.colors[variant] : 'inherit'};
  ${({ center }) => center && 'text-align: center;'}
`;
