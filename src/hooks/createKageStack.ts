import {useState, useEffect} from 'react';
import {IScreen} from '../types/navigator/screen';
import {getScreens} from '../utils/utils';

const createKageStack = ({navigation}: any) => {
  const [screens, setScreens] = useState<IScreen[]>([]);

  const initScreens = async () => {
    try {
      const screensData = await getScreens();
      if (screensData) {
        setScreens(screensData);
        navigation.replace('index');
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
  }, [screens]);

  return screens;
};

export default createKageStack;
