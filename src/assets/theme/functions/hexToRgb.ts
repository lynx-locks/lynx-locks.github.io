// chroma-js is a library for all kinds of color conversions and color scales.
import chroma from 'chroma-js';

/**
 The hexToRgb() function helps you to change the hex color code to rgb
 using chroma-js library.
 */

function hexToRgb(color: string): string {
  return chroma(color).rgb().join(', ');
}

export default hexToRgb;
