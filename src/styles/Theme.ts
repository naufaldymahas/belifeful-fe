import { DefaultTheme } from 'styled-components';

export interface IColorTheme {
  gold: string;
  lincolnGreen: string;
  darkCharcoal: string;
  lotion: string;
  sunsetOrange: string;
  persianGreen: string;
  gray: string;
  antiFlashWhite: string;
  coralRed: string;
  munsell: string;
  citrine: string;
  mustardYellow: string;
  ryb: string;
  paolo: string;
  coral: string;
  white: string;
  black: string;
}

export enum ColorThemeEnum {
  gold = 'gold',
  lincolnGreen = 'lincolnGreen',
  darkCharcoal = 'darkCharcoal',
  lotion = 'lotion',
  sunsetOrange = 'sunsetOrange',
  persianGreen = 'persianGreen',
  gray = 'gray',
  antiFlashWhite = 'antiFlashWhite',
  coralRed = 'coralRed',
  munsell = 'munsell',
  citrine = 'citrine',
  mustardYellow = 'mustardYellow',
  ryb = 'ryb',
  paolo = 'paolo',
  coral = 'coral',
  white = 'white',
  black = 'black',
}

export interface IFontWeight {
  normal: string;
  semi: string;
  bold: string;
  bolder: string;
}

export enum FontWeightEnum {
  normal = 'normal',
  semi = '600',
  bold = '700',
  bolder = '800',
}

const Theme: DefaultTheme = {
  colors: {
    gold: '#FAD70A',
    lincolnGreen: '#24450C',
    darkCharcoal: '#333333',
    lotion: '#FCFCFC',
    sunsetOrange: '#FF5A5A',
    persianGreen: '#0BB68C',
    gray: '#BABABA',
    antiFlashWhite: '#F2F2F2',
    coralRed: '#FF3838',
    munsell: '#0AA47E',
    citrine: '#E5C505',
    mustardYellow: '#D9BA04',
    ryb: '#FF2626',
    paolo: '#099B77',
    coral: '#FF7755',
    white: '#FFFFFF',
    black: '#000000',
  },
  fontSize: {
    default: '1rem',
    '1': '3.813rem',
    '2': '3.063rem',
    '3': '2.438rem',
    '4': '1.938rem',
    '5': '1.563rem',
    '6': '1.25rem',
  },
  fontWeight: {
    normal: 'normal',
    semi: '600',
    bold: '700',
    bolder: '800',
  },
  fontFamily: `'Nunito', sans-serif`,
};

export default Theme;
