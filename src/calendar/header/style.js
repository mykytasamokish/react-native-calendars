import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../style';

const STYLESHEET_ID = 'stylesheet.calendar.header';
const selectedColor = '#377093';
const FILLER_HEIGHT = 53;

export default function(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    header: {
      marginBottom: 21,
    },
    monthAndYear: {
      flex: 1,
      marginHorizontal: -60,
    },
    yearText: {
      lineHeight: 18,
      fontSize: 13,
      fontWeight: 'bold',
      textAlign: 'center',
      flex: 1,
      color: selectedColor,
      marginBottom: 5,
    },
    monthText: {
      backgroundColor: '#F8F8F8',
      textAlign: 'center',
      padding: 21,
      lineHeight: 27,
      fontSize: 20,
      fontWeight: 'bold',
      color: selectedColor,
    },
    week: {
      marginBottom: 21,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    dayHeader: {
      width: FILLER_HEIGHT,
      fontSize: 14,
      fontWeight: '600',
      color: '#9B9B9B',
      textAlign: 'center',
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
