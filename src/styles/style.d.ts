// styled.d.ts
import 'styled-components';
import { IColorTheme, IFontWeight } from './Theme';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColorTheme;
    fontSize: {
      default: '1rem';
      '1': '3.813rem';
      '2': '3.063rem';
      '3': '2.438rem';
      '4': '1.938rem';
      '5': '1.563rem';
      '6': '1.25rem';
    };
    fontWeight: IFontWeight;
    fontFamily: `'Nunito', sans-serif`;
  }
}
