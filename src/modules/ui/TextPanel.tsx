import {Text, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {ITextPanel} from '../../types/ui/components';
import {parseMargins, parsePaddings} from '../../helpers/ui';
import {handleNavigation} from '../../helpers/navigator';
import {useNavigation} from '@react-navigation/native';

const {fontScale, width} = Dimensions.get('window');
const TextPanel = ({
  text,
  backgroundColor,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  margins,
  paddings,
  borderRadius,
  columns = 1,
  textAlign = 'auto',
  onPress,
}: ITextPanel) => {
  const {isPaddingsValid, paddingsArr} = parsePaddings(paddings);
  const {isMarginsValid, marginsArr} = parseMargins(margins);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={onPress ? 0.8 : 1}
      onPress={
        onPress
          ? () => {
              handleNavigation({onPress, navigation});
            }
          : () => {}
      }>
      <Text
        style={[
          {
            fontSize: fontScale * (fontSize ? fontSize : 20),
            width: width / columns,
            flexGrow: 1,
            textAlignVertical: 'center',
            textAlign,
            color: color ? color : 'black',
            fontFamily: fontFamily ? fontFamily : 'Roboto',
            backgroundColor: backgroundColor ? backgroundColor : 'transparent',
            fontWeight: fontWeight ? fontWeight : 'normal',
            borderRadius: borderRadius ? borderRadius : 0,
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
    </TouchableOpacity>
  );
};

export default TextPanel;
