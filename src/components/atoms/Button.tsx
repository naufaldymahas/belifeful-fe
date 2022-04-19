import styled, { DefaultTheme } from 'styled-components';
import { ColorThemeEnum } from '../../styles/Theme';

type Props = {
  variant: ColorThemeEnum;
  outline?: boolean;
  weight?: 'normal' | '600' | '700' | '800';
  block?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const colorHandler = (variant: ColorThemeEnum, theme: DefaultTheme): string => {
  if (variant === ColorThemeEnum.darkCharcoal) {
    return theme.colors[variant];
  }

  return theme.colors[ColorThemeEnum.darkCharcoal];
};

const borderColorHandler = (
  variant: ColorThemeEnum,
  theme: DefaultTheme,
  outline?: boolean
): string => {
  if (outline) {
    return variant;
  }

  if (variant === ColorThemeEnum.lotion) {
    return theme.colors[ColorThemeEnum.darkCharcoal];
  }

  return 'transparent';
};

const paddingHandler = (size?: 'sm' | 'md' | 'lg') => {
  if (!size || size === 'sm') {
    return '0.4rem 1rem 0.4rem 1rem';
  }

  if (size === 'md') {
    return '0.75rem 1.5rem 0.75rem 1.5rem';
  }

  if (size === 'lg') {
    return '1rem 2rem 1rem 2rem';
  }
};

const Button = styled.button<Props>`
  text-align: center;
  padding: ${({ size = 'sm' }) => paddingHandler(size)};
  line-height: 1.625rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px solid
    ${({ variant, theme, outline }) =>
      borderColorHandler(variant, theme, outline)};
  vertical-align: middle;
  font-size: ${({ theme }) => theme.fontSize.default};
  font-weight: ${({ weight }) => (weight ? weight : 'normal')};
  background-color: ${({ theme, variant, outline }) =>
    outline ? theme.colors.lotion : theme.colors[variant]};
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ variant, theme }) => colorHandler(variant, theme)};
  transition: 0.3s;
  ${({ block }) => (block ? 'width: 100%;' : '')}

  &:hover,
  &:active {
    filter: brightness(0.93);
  }

  &:disabled,
  &.disabled,
  fieldset:disabled & {
    pointer-events: none;
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.lotion};
  }
`;

export default Button;
