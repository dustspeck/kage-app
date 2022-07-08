import React from 'react';
import {View, FlatList} from 'react-native';
import HStack from '../ui/HStack';
import ImageBanner from '../ui/ImageBanner';
import TextPanel from '../ui/TextPanel';

const KageScreen = () => {
  const items: {type: string; [key: string]: any}[] = [
    {
      type: 'text',
      text: 'Kage Sample Text Banner',
      color: '#1e1e1e',
      fontFamily: 'Roboto',
      fontSize: 20,
      fontWeight: 'bold',
      backgroundColor: '#e1e1e1',
      paddings: '10 10 10 10',
    },
    {
      type: 'image',
      ratio: 2,
      url: 'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+Hero',
    },
    {
      type: 'hstack',
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
      componentType: 'image',
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
                />
              );
            case 'text':
              return (
                <TextPanel
                  text={item.text}
                  color={item.color}
                  fontFamily={item.fontFamily}
                  fontSize={item.fontSize}
                  fontWeight={item.fontWeight}
                  backgroundColor={item.backgroundColor}
                  margins={item.margins}
                  paddings={item.paddings}
                />
              );
            case 'hstack':
              return (
                <HStack
                  ratio={item.ratio}
                  sources={item.sources}
                  componentType={item.componentType}
                  columns={item.columns}
                  snapToColumns={item.snapToColumns}
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
