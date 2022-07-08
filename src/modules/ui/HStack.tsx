import {Dimensions, FlatList, View} from 'react-native';
import React from 'react';
import ImageBanner from './ImageBanner';
import {IHStack} from '../../types/ui/components';
import TextPanel from './TextPanel';

const {width} = Dimensions.get('window');
const HStack = ({
  sources,
  componentType,
  columns = 1,
  snapToColumns = false,
  componentProps,
}: IHStack) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      snapToInterval={snapToColumns ? width / columns : undefined}
      horizontal={true}
      data={sources}
      renderItem={({item}) => {
        switch (componentType) {
          case 'image':
            return (
              <ImageBanner
                columns={columns}
                url={item}
                ratio={componentProps?.ratio}
                backgroundColor={componentProps?.backgroundColor}
                margins={componentProps?.margins}
                onPress={{type: 'url', props: {url: ''}}}
              />
            );
          case 'text':
            return (
              <TextPanel
                text={item}
                color={componentProps?.color}
                fontFamily={componentProps?.fontFamily}
                fontSize={componentProps?.fontSize}
                fontWeight={componentProps?.fontWeight}
                backgroundColor={componentProps?.backgroundColor}
                margins={componentProps?.margins}
                paddings={componentProps?.paddings}
                columns={columns}
                onPress={{type: 'url', props: {url: ''}}}
              />
            );

          default:
            return <View />;
        }
      }}
    />
  );
};

export default HStack;
