import { FlexItem } from '@components/atoms/Flex';
import { ColorThemeEnum } from '@styles/Theme';
import styled from 'styled-components';

interface BarPasswordLevelProps {
  variant: ColorThemeEnum;
}

export const BarPasswordLevel = styled(FlexItem)<BarPasswordLevelProps>`
  height: 5px;
  background-color: ${({ theme, variant }) => theme.colors[variant]};
`;

export const PasswordLevelAdviceWrapper = styled.div`
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.antiFlashWhite};
  padding: 1rem 1.5rem 1rem 1.5rem;
`;
