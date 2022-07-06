import {View} from 'react-native';
import React from 'react';
import {LoaderStyles} from '../../styles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const KageLoader = () => {
  return (
    <View style={LoaderStyles.container}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item width={'100%'} height={'100%'} />
      </SkeletonPlaceholder>
    </View>
  );
};

export default KageLoader;
