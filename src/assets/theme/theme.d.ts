import { ThemeOptions } from '@mui/material/styles';
import { Color, PaletteMode } from '@mui/material';
import {
  CommonColors,
  PaletteAugmentColorOptions,
  PaletteColor,
  PaletteTonalOffset,
  TypeAction,
  TypeBackground,
  TypeDivider,
  TypeText,
} from '@mui/material/styles/createPalette';
import { FontStyle, TypographyStyle, TypographyUtils, Variant } from '@mui/material/styles/createTypography';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    boxShadows: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      inset: string;
      colored: {
        primary: string;
        secondary: string;
        info: string;
        success: string;
        warning: string;
        error: string;
        light: string;
        dark: string;
        white: string;
      };
      sliderBoxShadow?: {
        thumb: string;
      };
      tabsBoxShadow: {
        indicator: string;
      };
    };
    borders: {
      borderColor: string;

      borderWidth: {
        0: number;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
      };

      borderRadius: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
        section: string;
      };
    };
    functions: {
      boxShadow: (offset: number[], radius: number[], color: string, opacity: number, inset?: string) => string;
      hexToRgb: (color: string) => string;
      linearGradient: (color: string, colorState: string, angle?: number) => string;
      pxToRem: (number: number, baseNumber?: number) => string;
      rgba: (color: string, opacity: number) => string;
    };
  }

  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    boxShadows: {
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
      xxl?: string;
      inset?: string;
      colored?: {
        primary?: string;
        secondary?: string;
        info?: string;
        success?: string;
        warning?: string;
        error?: string;
        light?: string;
        dark?: string;
        white?: string;
      };
      sliderBoxShadow?: {
        thumb?: string;
      };
      tabsBoxShadow?: {
        indicator?: string;
      };
    };
    borders: {
      borderColor?: string;

      borderWidth?: {
        0?: number;
        1?: string;
        2?: string;
        3?: string;
        4?: string;
        5?: string;
      };

      borderRadius?: {
        xs?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
        xxl?: string;
        section?: string;
      };
    };
    functions: {
      boxShadow?: (offset: number[], radius: number[], color: string, opacity: number, inset?: string) => string;
      hexToRgb?: (color: string) => string;
      linearGradient?: (color: string, colorState: string, angle?: number) => string;
      pxToRem?: (number: number, baseNumber?: number) => string;
      rgba?: (color: string, opacity: number) => string;
    };
  }
  // eslint-disable-next-line import/prefer-default-export
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
