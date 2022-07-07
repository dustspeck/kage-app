import {Dimensions, Image, ImageBackground, Text, View} from 'react-native';
import React, {useState} from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const {width} = Dimensions.get('window');
const ImageBanner = () => {
  const props = {
    url: 'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner',
    ratio: 2,
  };
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  return (
    <View>
      <ImageBackground
        style={{width, height: width / props.ratio}}
        source={{uri: props.url}}
        onLoad={() => {
          setIsLoaded(true);
        }}>
        {!isLoaded && (
          <SkeletonPlaceholder speed={1600}>
            <SkeletonPlaceholder.Item
              zIndex={2}
              width={width}
              height={width / props.ratio}
            />
          </SkeletonPlaceholder>
        )}
      </ImageBackground>
    </View>
  );
};

export default ImageBanner;
