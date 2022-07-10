import {IHStack, IImageBanner, ITextPanel} from '../ui/components';

export interface IScreenData {
  type: 'text' | 'image' | 'hstack';
  payload: ITextPanel | IImageBanner | IHStack;
}

export interface IScreen {
  id: string;
  data: IScreenData[];
}

export interface IURL {
  url?: string;
}
export interface INavigation {
  to?: string;
  method?: 'push' | 'navigate' | 'replace';
  props?: object;
}

export interface IOnPressProps extends IURL, INavigation {}
export interface IOnPress {
  type: 'navigation' | 'url';
  props: IOnPressProps;
}
