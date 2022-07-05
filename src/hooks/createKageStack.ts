import {useState, useEffect, SetStateAction} from 'react';
import {IScreen} from '../types/navigator/screen';
import {getScreens} from '../utils/utils';

const createKageStack = () => {
  const [screens, setScreens]: [IScreen[], SetStateAction<any>] = useState([]);

  const initScreens = async () => {
    try {
      const screensData = await getScreens();
      if (screensData) setScreens(screensData);
      console.log('screens loaded');
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
