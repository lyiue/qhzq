import * as React from 'react';
export interface GisPointProps {
  color?: string;
  height: number;
  data: Array<{
    x: number | string;
    y: number;
  }>;
  style?: React.CSSProperties;
}

export default class GisPoint extends React.Component<GisPointProps, any> {}