import {uiApi} from '../config/api';

export const getScreens = async () => {
  let data = null;
  try {
    const screens = await uiApi.get('/screens');
    console.log(screens);
    data = screens.data;
  } catch (error) {
    console.log(error);
  } finally {
    return data;
  }
};
