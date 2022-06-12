import styled from 'styled-components';

type Props = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
};

const getWidthString = (span: number) => {
  if (!span) return;

  return `width: ${(span / 12) * 100}%;`;
};

const Column = styled.div<Props>`
  ${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%;')}

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)}
  }

  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthString(md)}
  }

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)}
  }
`;
export default Column;
