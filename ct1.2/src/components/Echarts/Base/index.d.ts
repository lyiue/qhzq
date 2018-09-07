import * as React from 'react';
export interface EbaseProps {
  title: string;
  chartId: string;
  color?: string;
  width?: number;
  height?: number;
  type: string;
  data?: Array<{
    x: number | string;
    y: number;
  }>;
  style?: React.CSSProperties;
}

export default class Base extends React.Component<EbaseProps, any> {}