import {useState, useEffect} from 'react';
import {IScreen} from '../types/navigator/screen';
import {getScreens} from '../utils/utils';

var public_key: string | null = null;

export const setKageConfig = (key: string) => {
  public_key = key;
};

export const createKageStack = ({navigation}: any) => {
  const [screens, setScreens] = useState<IScreen[]>([]);

  const initScreens = async () => {
    try {
      if (!public_key) throw 'Public key is required.';
      const {screens: fetchedScreens} = await getScreens({public_key});
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
    if (public_key !== null) {
      console.log(`# kage screens loaded: ${screens.length}`);
      if (screens.length > 0) navigation.replace('index');
    }
  }, [screens]);

  return screens;
};

export default createKageStack;
