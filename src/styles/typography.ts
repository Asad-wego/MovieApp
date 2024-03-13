import {StyleSheet} from 'react-native';

import {scaleFont} from './mixins';
import colors from './colors';

// FONT FAMILY
export const FONT_FAMILY = 'poppins'; //TODO: add later

// FONT WEIGHT
export const FONT_WEIGHT_NORMAL = 'normal';
export const FONT_WEIGHT_BOLD = 'bold';
export const FONT_WEIGHT_600 = '600';

// FONT WEIGHT
export const FONT_STYLE_NORMAL = 'normal';
export const FONT_STYLE_ITALIC = 'italic';

// FONT SIZE
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_13 = scaleFont(13);
export const FONT_SIZE_10 = scaleFont(10);

// LINE HEIGHT
export const LINE_HEIGHT_32 = scaleFont(32);
export const LINE_HEIGHT_28 = scaleFont(28);
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// TODO: will make reusable common viewstyles
export const viewStyles = StyleSheet.create({});

// TODO: will make reusable text styles
export const textStyles = StyleSheet.create({
  headingBoldCenterOrange: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE_24,
    fontWeight: FONT_WEIGHT_BOLD,
    fontStyle: FONT_STYLE_NORMAL,
    textAlign: 'center',
    color: colors.primary,
  },
});
