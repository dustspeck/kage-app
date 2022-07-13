import {IHStack, IImageBanner, ITextPanel} from '../ui/components';

export interface IComponentData {
  type: 'text' | 'image' | 'hstack';
  payload: ITextPanel | IImageBanner | IHStack;
}

export interface IScreen {
  screen_id: string;
  data: IComponentData[];
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
