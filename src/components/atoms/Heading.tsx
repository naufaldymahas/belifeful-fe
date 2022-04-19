import { ColorThemeEnum, FontWeightEnum } from '@styles/Theme';
import styled from 'styled-components';

type HeadingProps = {
  variant?: ColorThemeEnum;
  weight?: FontWeightEnum;
};

export const Heading1 = styled.h1<HeadingProps>`
  font-size: ${({ theme }) => theme.fontSize[1]};
  font-weight: ${({ weight, theme }) =>
    weight ? weight : theme.fontWeight.normal};
  color: ${({ variant, theme }) =>
    variant ? theme.colors[variant] : 'inherit'};
  line-height: 4.563rem;
`;

export const Heading2 = styled.h2<HeadingProps>`
  font-size: ${({ theme }) => theme.fontSize[2]};
  font-weight: ${({ weight, theme }) =>
    weight ? weight : theme.fontWeight.normal};
  color: ${({ variant, theme }) =>
    variant ? theme.colors[variant] : 'inherit'};
  line-height: 3.688rem;
`;

export const Heading3 = styled.h3<HeadingProps>`
  font-size: ${({ theme }) => theme.fontSize[3]};
  font-weight: ${({ weight, theme }) =>
    weight ? weight : theme.fontWeight.normal};
  color: ${({ variant, theme }) =>
    variant ? theme.colors[variant] : 'inherit'};
  line-height: 2.938rem;
`;
