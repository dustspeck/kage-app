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
      onPress: {type: 'url', props: {url: 'https://google.com'}},
    },
    {
      type: 'image',
      ratio: 2,
      url: 'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+Hero',
      onPress: {
        type: 'navigation',
        props: {to: 'PredefinedRootStack1', method: 'navigate'},
      },
    },
    {
      type: 'hstack',
      componentType: 'text',
      columns: 2,
      sources: [
        {
          payload: 'Sample Text 1 redirect to Google',
          onPress: {type: 'url', props: {url: 'https://google.com'}},
        },
        {
          payload: 'Sample Text 2 navigate to PRS1',
          onPress: {
            type: 'navigation',
            props: {to: 'PredefinedRootStack1', method: 'navigate'},
          },
        },
        {
          payload: 'Sample Text 3 navigate to PRS2',
          onPress: {
            type: 'navigation',
            props: {to: 'PredefinedRootStack2', method: 'navigate'},
          },
        },
        {
          payload: 'Sample Text 4 navigate to USER',
          onPress: {
            type: 'navigation',
            props: {to: 'USER', method: 'navigate'},
          },
        },
        {
          payload: 'Sample Text 5 navigate to ORDERS',
          onPress: {
            type: 'navigation',
            props: {to: 'ORDERS', method: 'navigate'},
          },
        },
      ],
      snapToColumns: false,
      componentProps: {
        paddings: '30 10 10 10',
        fontSize: 18,
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
        {
          payload:
            'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+1',
          onPress: {type: 'url', props: {url: 'https://google.com'}},
        },
        {
          payload:
            'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+2',

          onPress: {
            type: 'navigation',
            props: {to: 'PredefinedRootStack1', method: 'navigate'},
          },
        },
        {
          payload:
            'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+3',
          onPress: {
            type: 'navigation',
            props: {to: 'PredefinedRootStack2', method: 'navigate'},
          },
        },
        {
          payload:
            'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+4',

          onPress: {
            type: 'navigation',
            props: {to: 'USER', method: 'navigate'},
          },
        },
        {
          payload:
            'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+5',
          onPress: {
            type: 'navigation',
            props: {to: 'ORDERS', method: 'navigate'},
          },
        },
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
      onPress: {
        type: 'navigation',
        props: {to: 'PredefinedRootStack2', method: 'replace'},
      },
    },
    {
      type: 'hstack',
      componentType: 'image',
      ratio: 2,
      sources: [
        {
          payload:
            'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+1',
        },
        {
          payload:
            'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+2',
        },
        {
          payload:
            'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+3',
        },
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
