import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';

const STYLESHEET_ID = 'stylesheet.calendar.main';
const FILLER_HEIGHT = 53;

export default function getStyle(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      paddingLeft: 5,
      paddingRight: 5,
      flex: 1,
      backgroundColor: appStyle.calendarBackground
    },
    week: {
      height: FILLER_HEIGHT,
      marginVertical: 10.5,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}

