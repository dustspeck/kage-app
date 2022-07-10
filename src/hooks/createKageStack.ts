import {useState, useEffect} from 'react';
import {IScreen, IScreenData} from '../types/navigator/screen';
// import {getScreens} from '../utils/utils';

const createKageStack = ({navigation}: any) => {
  const [screens, setScreens] = useState<IScreen[]>([]);

  const indexData: IScreenData[] = [
    {
      type: 'text',
      payload: {
        text: 'Kage Sample Text Heading',
        color: '#3e3e3e',
        fontFamily: 'Roboto',
        fontSize: 35,
        fontWeight: 'bold',
        backgroundColor: '#e1e1e1',
        paddings: '50 10 10 20',
        onPress: {type: 'url', props: {url: 'https://google.com'}},
      },
    },
    {
      type: 'image',
      payload: {
        ratio: 2,
        url: 'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+Hero',
        onPress: {
          type: 'navigation',
          props: {to: 'PredefinedRootStack1', method: 'navigate'},
        },
      },
    },
    {
      type: 'hstack',
      payload: {
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
          margins: '10 5 0 5',
          borderRadius: 10,
        },
      },
    },
    {
      type: 'hstack',
      payload: {
        componentType: 'image',
        componentProps: {margins: '10 5 10 5', ratio: 1},
        columns: 2.5,
        sources: [
          {
            payload:
              'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+1',
            onPress: {
              type: 'navigation',
              props: {to: 'screen1', method: 'navigate'},
            },
          },
          {
            payload:
              'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+2',
            onPress: {
              type: 'url',
              props: {url: 'http://google.com'},
            },
          },
          {
            payload:
              'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+3',
            onPress: {
              type: 'url',
              props: {url: 'tel:919999999999'},
            },
          },
          {
            payload:
              'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+4',
            onPress: {
              type: 'url',
              props: {url: 'mailto:android@google.com'},
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
    },
    {
      type: 'text',
      payload: {
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
    },
    {
      type: 'hstack',
      payload: {
        componentType: 'image',
        componentProps: {margins: '10 5 0 5', ratio: 1},
        columns: 4.5,
        sources: [
          {
            payload: 'https://via.placeholder.com/728x364.png?text=1',
          },
          {
            payload: 'https://via.placeholder.com/728x364.png?text=2',
          },
          {
            payload: 'https://via.placeholder.com/728x364.png?text=3',
          },
          {
            payload: 'https://via.placeholder.com/728x364.png?text=4',
          },
          {
            payload: 'https://via.placeholder.com/728x364.png?text=5',
          },
          {
            payload: 'https://via.placeholder.com/728x364.png?text=6',
          },
          {
            payload: 'https://via.placeholder.com/728x364.png?text=7',
          },
          {
            payload: 'https://via.placeholder.com/728x364.png?text=8',
          },
          {
            payload: 'https://via.placeholder.com/728x364.png?text=9',
          },
          {
            payload: 'https://via.placeholder.com/728x364.png?text=10',
          },
        ],
        snapToColumns: true,
      },
    },
    {
      type: 'hstack',
      payload: {
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
        componentProps: {margins: '10 10 10 10', borderRadius: 15, ratio: 3},
      },
    },
    {
      type: 'image',
      payload: {
        ratio: 2,
        url: 'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner',
        backgroundColor: '#e1e1e1',
      },
    },
    {
      type: 'image',
      payload: {
        ratio: 2,
        url: 'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner',
        margins: '10 50 20 25',
      },
    },
    {
      type: 'image',
      payload: {
        ratio: 2,
        url: 'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner',
      },
    },
    {
      type: 'text',
      payload: {
        text: 'Kage Sample Text Banner',
        color: '#1e1e1e',
        fontFamily: 'Roboto',
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: '#e1e1e1',
        margins: '10 50 20 10',
        paddings: '50 20 20 10',
      },
    },
    {
      type: 'image',
      payload: {
        ratio: 2,
        url: 'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner',
      },
    },
  ];
  const screen1Data: IScreenData[] = [
    {
      type: 'text',
      payload: {
        text: 'Welcome to Screen 1',
        color: '#3e3e3e',
        fontFamily: 'Roboto',
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: '#e1e1e1',
        paddings: '20 10 10 20',
        textAlign: 'center',
        onPress: {type: 'url', props: {url: 'https://google.com'}},
      },
    },
    {
      type: 'text',
      payload: {
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
    },
    {
      type: 'hstack',
      payload: {
        componentType: 'image',
        componentProps: {margins: '10 5 10 5', ratio: 1},
        columns: 2.5,
        sources: [
          {
            payload:
              'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+1',
            onPress: {
              type: 'navigation',
              props: {to: 'screen1', method: 'navigate'},
            },
          },
          {
            payload:
              'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+2',
            onPress: {
              type: 'url',
              props: {url: 'http://google.com'},
            },
          },
          {
            payload:
              'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+3',
            onPress: {
              type: 'url',
              props: {url: 'tel:919999999999'},
            },
          },
          {
            payload:
              'https://via.placeholder.com/728x364.png?text=Kage+Sample+Image+Banner+4',
            onPress: {
              type: 'url',
              props: {url: 'mailto:android@google.com'},
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
    },
    {
      type: 'hstack',
      payload: {
        componentType: 'image',
        componentProps: {margins: '10 5 0 5', ratio: 1},
        columns: 4.5,
        sources: [
          {
            payload: 'https://via.placeholder.com/728x364.png?text=1',
          },
          {
            payload: 'https://via.placeholder.com/728x364.png?text=2',
          },
          {
            payload: 'https://via.placeholder.com/728x364.png?text=3',
          },
          {
            payload: 'https://via.placeholder.com/728x364.png?text=4',
          },
          {
            payload: 'https://via.placeholder.com/728x364.png?text=5',
          },
          {
            payload: 'https://via.placeholder.com/728x364.png?text=6',
          },
          {
            payload: 'https://via.placeholder.com/728x364.png?text=7',
          },
          {
            payload: 'https://via.placeholder.com/728x364.png?text=8',
          },
          {
            payload: 'https://via.placeholder.com/728x364.png?text=9',
          },
          {
            payload: 'https://via.placeholder.com/728x364.png?text=10',
          },
        ],
        snapToColumns: true,
      },
    },
    {
      type: 'hstack',
      payload: {
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
        componentProps: {margins: '10 10 10 10', borderRadius: 15, ratio: 3},
      },
    },
  ];

  const initScreens = async () => {
    try {
      setScreens([
        {id: 'index', data: indexData},
        {id: 'screen1', data: screen1Data},
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initScreens();
  }, []);

  useEffect(() => {
    console.log(`# kage screens loaded: ${screens.length}`);
    if (screens.length > 0) navigation.replace('index');
  }, [screens]);

  return screens;
};

export default createKageStack;
