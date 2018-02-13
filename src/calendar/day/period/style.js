import {StyleSheet} from 'react-native';
import * as defaultStyle from '../../../style';

const STYLESHEET_ID = 'stylesheet.day.period';

const FILLER_HEIGHT = 53;

export default function styleConstructor(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    base: {
      width: FILLER_HEIGHT,
      height: FILLER_HEIGHT,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 18,
      fontWeight: '600',
      color: '#4A4A4A',
      backgroundColor: 'transparent',
    },
    fillers: {
      position: 'absolute',
      height: FILLER_HEIGHT,
      flexDirection: 'row',
      left: -5,
      right: -5,
    },
    leftFiller: {
      height: FILLER_HEIGHT,
      flex: 1,
    },
    rightFiller: {
      height: FILLER_HEIGHT,
      flex: 1,
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
