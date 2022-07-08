import {Dimensions, FlatList} from 'react-native';
import React from 'react';
import ImageBanner from './ImageBanner';
import {IHStack} from '../../types/ui/components';

const {width} = Dimensions.get('window');
const HStack = ({
  ratio,
  sources,
  componentType,
  columns = 1,
  snapToColumns = false,
}: IHStack) => {
  // TODO: add text in componentType
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      snapToInterval={snapToColumns ? width / columns : undefined}
      horizontal={true}
      data={sources}
      renderItem={({item}) => (
        <ImageBanner columns={columns} ratio={ratio} url={item} />
      )}
    />
  );
};

export default HStack;
