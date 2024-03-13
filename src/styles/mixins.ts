import {Dimensions} from 'react-native';

export const WINDOW_WIDTH: number = Dimensions.get('window').width;
const guidelineBaseWidth: number = 375;

export const scaleSize = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: number) => size;

//TODO: wil add functions for margin,padding,boxshadow etc
