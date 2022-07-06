import {useState, useEffect} from 'react';
import {IScreen} from '../types/navigator/screen';
import {getScreens} from '../utils/utils';

const createKageStack = ({navigation}: any) => {
  const [screens, setScreens] = useState<IScreen[]>([]);

  const initScreens = async () => {
    try {
      const screensData = await getScreens();
      if (screensData) setScreens(screensData);
      console.log('screens loaded');
      navigation.replace('index');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initScreens();
  }, []);

  return screens;
};

export default createKageStack;
