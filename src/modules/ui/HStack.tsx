import {FlatList} from 'react-native';
import React from 'react';
import ImageBanner from './ImageBanner';
import {IHStack} from '../../types/ui/components';

const HStack = ({ratio, sources, componentType, columns}: IHStack) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={sources}
      renderItem={({item}) => (
        <ImageBanner columns={columns} ratio={ratio} url={item} />
      )}
    />
  );
};

export default HStack;
