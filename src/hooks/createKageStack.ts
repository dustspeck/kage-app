import {useState, useEffect} from 'react';
import {IScreen, IComponentData} from '../types/navigator/screen';
import {getScreens} from '../utils/utils';

const createKageStack = ({navigation}: any) => {
  const [screens, setScreens] = useState<IScreen[]>([]);

  const initScreens = async () => {
    try {
      const {screens: fetchedScreens} = await getScreens({app_id: 'app1'});
      if (fetchedScreens) {
        setScreens([...fetchedScreens]);
      } else {
        setScreens([]);
      }
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
