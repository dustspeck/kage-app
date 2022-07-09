import {Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {IImageBanner} from '../../types/ui/components';
import {parseMargins} from '../../helpers/ui';
import {handleNavigation} from '../../helpers/navigator';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');
const ImageBanner = ({
  columns = 1,
  ratio = 2,
  url,
  backgroundColor,
  margins,
  onPress,
}: IImageBanner) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
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
      <ImageBackground
        style={[
          {
            width:
              width / columns -
              (isMarginsValid ? marginsArr[1] + marginsArr[3] : 0),
            height: width / ratio,
            backgroundColor: backgroundColor ? backgroundColor : 'transparent',
          },
          isMarginsValid
            ? {
                marginTop: marginsArr[0],
                marginRight: marginsArr[1],
                marginBottom: marginsArr[2],
                marginLeft: marginsArr[3],
              }
            : {margin: 0},
        ]}
        source={{uri: url}}
        onLoad={() => {
          setIsLoaded(true);
        }}>
        {!isLoaded && (
          <SkeletonPlaceholder speed={1600}>
            <SkeletonPlaceholder.Item
              zIndex={2}
              width={width / columns}
              height={width / ratio}
            />
          </SkeletonPlaceholder>
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ImageBanner;
