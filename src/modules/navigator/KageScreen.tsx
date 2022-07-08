import React from 'react';
import {View, FlatList} from 'react-native';
import HStack from '../ui/HStack';
import ImageBanner from '../ui/ImageBanner';
import TextPanel from '../ui/TextPanel';

const KageScreen = () => {
  const items: {type: string; [key: string]: any}[] = [
    {
      type: 'text',
      text: 'Kage Sample Text Heading',
      color: '#3e3e3e',
      fontFamily: 'Roboto',
      fontSize: 35,
      fontWeight: 'bold',
      backgroundColor: '#e1e1e1',
      paddings: '50 10 10 20',
      onPress: {type: 'url', props: {url: 'heading'}},
    },
    {
      type: 'image',
      ratio: 2,
      url: 'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+Hero',
      onPress: {type: 'url', props: {url: 'hero'}},
    },
    {
      type: 'hstack',
      componentType: 'text',
      columns: 2,
      sources: [
        'Sample Text 1 with long text',
        'Sample Text 2',
        'Sample Text 3',
        'Sample Text 4',
        'Sample Text 5',
        'Sample Text 6',
      ],
      snapToColumns: false,
      componentProps: {
        paddings: '30 10 10 10',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#e1e1e1',
      },
    },
    {
      type: 'hstack',
      componentType: 'image',
      componentProps: {margins: '10 5 10 5'},
      columns: 2,
      ratio: 2,
      sources: [
        'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+1',
        'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+2',
        'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+3',
        'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+4',
        'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+5',
        'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+6',
        'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+7',
        'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+8',
      ],
      snapToColumns: true,
    },
    {
      type: 'text',
      text: 'Kage Sample Text Banner',
      color: '#1e1e1e',
      fontFamily: 'Roboto',
      fontSize: 20,
      fontWeight: 'bold',
      backgroundColor: '#e1e1e1',
      paddings: '10 10 10 10',
      textAlign: 'center',
    },
    {
      type: 'hstack',
      componentType: 'image',
      ratio: 2,
      sources: [
        'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+1',
        'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+2',
        'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+3',
      ],
    },
    {
      type: 'image',
      ratio: 2,
      url: 'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner',
      backgroundColor: '#e1e1e1',
    },
    {
      type: 'image',
      ratio: 2,
      url: 'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner',
      margins: '10 50 20 25',
    },
    {
      type: 'image',
      ratio: 2,
      url: 'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner',
    },
    {
      type: 'text',
      text: 'Kage Sample Text Banner',
      color: '#1e1e1e',
      fontFamily: 'Roboto',
      fontSize: 30,
      fontWeight: 'bold',
      backgroundColor: '#e1e1e1',
      margins: '10 50 20 10',
      paddings: '50 20 20 10',
    },
    {
      type: 'image',
      ratio: 2,
      url: 'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner',
    },
  ];
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        renderItem={({item}) => {
          switch (item.type) {
            case 'image':
              return (
                <ImageBanner
                  url={item.url}
                  ratio={item.ratio}
                  backgroundColor={item.backgroundColor}
                  margins={item.margins}
                  columns={item.columns}
                  onPress={item.onPress}
                />
              );
            case 'text':
              return (
                <TextPanel
                  text={item.text}
                  columns={item.columns}
                  color={item.color}
                  fontFamily={item.fontFamily}
                  fontSize={item.fontSize}
                  fontWeight={item.fontWeight}
                  backgroundColor={item.backgroundColor}
                  margins={item.margins}
                  paddings={item.paddings}
                  textAlign={item.textAlign}
                  onPress={item.onPress}
                />
              );
            case 'hstack':
              return (
                <HStack
                  sources={item.sources}
                  componentType={item.componentType}
                  columns={item.columns}
                  snapToColumns={item.snapToColumns}
                  componentProps={item.componentProps}
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
