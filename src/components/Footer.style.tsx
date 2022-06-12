import { ColorThemeEnum } from '@styles/Theme';
import styled from 'styled-components';
import { Flex } from './atoms/Flex';

export const FooterWrapper = styled.div`
  width: 100%;
`;

export const FooterList = styled.ul`
  padding: 0;
  list-style: none;
`;

interface FooterSectionProps {
  variant: ColorThemeEnum;
  paddingX: string;
  paddingTop?: string;
}

export const FooterSection = styled(Flex)<FooterSectionProps>`
  background-color: ${({ theme, variant }) => theme.colors[variant]};
  padding: ${({ paddingX, paddingTop }) =>
    `${paddingTop ?? 1.5}rem ${paddingX}rem 1.5rem ${paddingX}rem`};
    align-items: center;
`;
