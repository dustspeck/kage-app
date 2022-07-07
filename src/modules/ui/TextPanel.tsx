import {View, Text, Dimensions} from 'react-native';
import React from 'react';

const {fontScale} = Dimensions.get('window');
const TextPanel = () => {
  const props = {
    text: 'Kage Sample Text Banner',
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1e1e1e',
    backgroundColor: '#e1e1e1',
    margins: '10 50 20 10',
    paddings: '50 20 20 10',
  };

  var isPaddingsValid = false;
  var isMarginsValid = false;
  var paddings: number[] = [];
  var margins: number[] = [];
  try {
    paddings = props.paddings.split(' ').map(p => parseInt(p));
    isPaddingsValid = true;
  } catch (error) {
    console.log(error);
  }
  try {
    margins = props.paddings.split(' ').map(p => parseInt(p));
    isMarginsValid = true;
  } catch (error) {
    console.log(error);
  }

  return (
    <View>
      <Text
        style={[
          // @ts-ignore
          {
            fontSize: fontScale * (props.fontSize ? props.fontSize : 20),
            color: props.color ? props.color : 'black',
            fontFamily: props.fontFamily ? props.fontFamily : 'Roboto',
            backgroundColor: props.backgroundColor
              ? props.backgroundColor
              : 'transparent',
            fontWeight: props.fontWeight ? props.fontWeight : 'normal',
          },
          isPaddingsValid
            ? {
                paddingTop: paddings[0],
                paddingRight: paddings[1],
                paddingBottom: paddings[2],
                paddingLeft: paddings[3],
              }
            : {padding: 0},
          isMarginsValid
            ? {
                marginTop: margins[0],
                marginRight: margins[1],
                marginBottom: margins[2],
                marginLeft: margins[3],
              }
            : {margin: 0},
        ]}>
        {props.text}
      </Text>
    </View>
  );
};

export default TextPanel;
