export interface IScreen {
  id: string;
}

export interface IURL {
  url: string;
}
export interface INavigation {
  to: string;
  method: 'push' | 'navigate';
  props?: object;
}

export interface IOnPress {
  type: 'navigation' | 'url';
  props: INavigation | IURL;
}
