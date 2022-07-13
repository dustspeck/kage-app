import React from 'react';
import {View, FlatList} from 'react-native';
import {IComponentData} from '../../types/navigator/screen';
import {IHStack, IImageBanner, ITextPanel} from '../../types/ui/components';
import HStack from '../ui/HStack';
import ImageBanner from '../ui/ImageBanner';
import TextPanel from '../ui/TextPanel';

const KageScreen = ({data, id}: {data: IComponentData[]; id: string}) => {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => {
          switch (item.type) {
            case 'image':
              const imagePayload = item.payload as IImageBanner;
              return (
                <ImageBanner
                  url={imagePayload.url}
                  ratio={imagePayload.ratio}
                  backgroundColor={imagePayload.backgroundColor}
                  margins={imagePayload.margins}
                  borderRadius={imagePayload.borderRadius}
                  columns={imagePayload.columns}
                  onPress={imagePayload.onPress}
                />
              );
            case 'text':
              let textPayload = item.payload as ITextPanel;
              return (
                <TextPanel
                  text={textPayload.text}
                  columns={textPayload.columns}
                  color={textPayload.color}
                  fontFamily={textPayload.fontFamily}
                  fontSize={textPayload.fontSize}
                  fontWeight={textPayload.fontWeight}
                  backgroundColor={textPayload.backgroundColor}
                  margins={textPayload.margins}
                  paddings={textPayload.paddings}
                  borderRadius={textPayload.borderRadius}
                  textAlign={textPayload.textAlign}
                  onPress={textPayload.onPress}
                />
              );
            case 'hstack':
              let hstackPayload = item.payload as IHStack;
              return (
                <HStack
                  sources={hstackPayload.sources}
                  componentType={hstackPayload.componentType}
                  columns={hstackPayload.columns}
                  snapToColumns={hstackPayload.snapToColumns}
                  componentProps={hstackPayload.componentProps}
                />
              );
            default:
              return <TextPanel text="" />;
          }
        }}
      />
    </View>
  );
};

export default KageScreen;
