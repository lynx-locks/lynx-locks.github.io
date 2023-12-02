import colors from '../../base/colors';
import typography from '../../base/typography';
import borders from '../../base/borders';

const { primary, inputBorderColor, white } = colors;
const { size } = typography;
const { borderWidth } = borders;

export default {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: white.main,

      '&:hover:not(.Mui-disabled):before': {
        borderBottom: `${borderWidth[1]} solid ${inputBorderColor}`,
      },

      '&:before': {
        borderColor: inputBorderColor,
      },

      '&:after': {
        borderColor: primary.main,
      },
    },
  },
};
