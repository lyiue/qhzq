import * as React from 'react';
export interface EpieProps {
  title?: string;
  chartId: string;
  color?: string;
  width?: number;
  height?: number;
  legend?: Array;
  type?: string;
  data?: Array;
  style?: React.CSSProperties;
}

export default class Pie extends React.Component<EpieProps, any> {}