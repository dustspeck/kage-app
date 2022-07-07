export interface ITextPanel {
  text: string;
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
}

export interface IImageBanner {
  url: string;
  ratio: number;
  columns?: number;
  margins?: string;
  backgroundColor?: string;
}

export interface IHStack {
  componentType: 'text' | 'image';
  sources: string[];
  ratio: number;
  columns?: number;
}
