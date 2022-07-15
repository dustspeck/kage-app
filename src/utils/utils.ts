import {uiApi} from '../config/api';

export const getScreens = async ({public_key}: {public_key: string}) => {
  try {
    const response = await uiApi.get(`/screens`, {headers: {public_key}});
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
