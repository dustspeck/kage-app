export interface IScreen {
  id: string;
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
