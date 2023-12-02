import colors from '../../base/colors';
import borders from '../../base/borders';
import boxShadows from '../../base/boxShadows';
import rgba from '../../functions/rgba';

const { black } = colors;
const { borderWidth, borderRadius } = borders;
const { md } = boxShadows;

const cardStyle = {
  styleOverrides: {
    root: {
      display: 'flex',
      flexDirection: 'column' as const,
      position: 'relative' as const,
      minWidth: 0,
      wordWrap: 'break-word' as const,
      backgroundColor: black.light,
      backgroundClip: 'border-box' as const,
      border: `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
      borderRadius: borderRadius.xl,
      boxShadow: md,
      overflow: 'visible' as const,
    },
  },
};

export default cardStyle;
