import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';
import styled from 'styled-components';

type ParagraphProps = {
  variant?: ColorThemeEnum;
  weight?: FontWeightEnum;
  fs?: 'default' | '1' | '2' | '3' | '4' | '5' | '6';
};

export const Paragraph = styled.p<ParagraphProps>`
  font-size: ${({ theme, fs }) => (fs ? theme.fontSize[fs] : 'inherit')};
  font-weight: ${({ weight }) => (weight ? weight : 'inherit')};
  color: ${({ variant, theme }) =>
    variant ? theme.colors[variant] : 'inherit'};
`;
