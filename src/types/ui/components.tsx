import {IOnPress} from '../navigator/screen';

export interface ITextPanel extends ITextPanelProps {
  text: string;
}

export interface IImageBanner extends IImageBannerProps {
  url: string;
}

export interface IImageBannerProps {
  onPress?: IOnPress;
  ratio?: number;
  columns?: number;
  margins?: string;
  backgroundColor?: string;
}

export interface ITextPanelProps {
  onPress?: IOnPress;
  columns?: number;
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?:
    | 'bold'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  backgroundColor?: string;
  margins?: string;
  paddings?: string;
  textAlign?: 'auto' | 'center' | 'left' | 'right' | 'justify' | undefined;
}

export interface IHStackComponentProps
  extends ITextPanelProps,
    IImageBannerProps {}

export interface IHStack {
  componentType: 'text' | 'image';
  sources: string[];
  componentProps?: IHStackComponentProps;
  columns?: number;
  snapToColumns?: boolean;
}
