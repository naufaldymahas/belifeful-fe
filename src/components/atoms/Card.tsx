import { ColorThemeEnum } from '@styles/Theme';
import styled from 'styled-components';

interface CardProps {
  bg?: ColorThemeEnum;
}

const Card = styled.div<CardProps>`
  padding: 1.25rem;
  background-color: ${({ theme, bg }) =>
    bg ? theme.colors[bg] : theme.colors.lotion};
`;

export default Card;
