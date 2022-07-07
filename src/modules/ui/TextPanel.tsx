import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {ITextPanel} from '../../types/ui/components';
import {parseMargins, parsePaddings} from '../helpers/ui';

const {fontScale} = Dimensions.get('window');
const TextPanel = ({
  text,
  backgroundColor,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  margins,
  paddings,
}: ITextPanel) => {
  const {isPaddingsValid, paddingsArr} = parsePaddings(paddings);
  const {isMarginsValid, marginsArr} = parseMargins(margins);

  return (
    <View>
      <Text
        style={[
          {
            fontSize: fontScale * (fontSize ? fontSize : 20),
            color: color ? color : 'black',
            fontFamily: fontFamily ? fontFamily : 'Roboto',
            backgroundColor: backgroundColor ? backgroundColor : 'transparent',
            fontWeight: fontWeight ? fontWeight : 'normal',
          },
          isPaddingsValid
            ? {
                paddingTop: paddingsArr[0],
                paddingRight: paddingsArr[1],
                paddingBottom: paddingsArr[2],
                paddingLeft: paddingsArr[3],
              }
            : {padding: 0},
          isMarginsValid
            ? {
                marginTop: marginsArr[0],
                marginRight: marginsArr[1],
                marginBottom: marginsArr[2],
                marginLeft: marginsArr[3],
              }
            : {margin: 0},
        ]}>
        {text}
      </Text>
    </View>
  );
};

export default TextPanel;
