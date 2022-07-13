import {uiApi} from '../config/api';

export const getScreens = async ({app_id}: {app_id: string}) => {
  try {
    const response = await uiApi.get(`/${app_id}/screens`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
