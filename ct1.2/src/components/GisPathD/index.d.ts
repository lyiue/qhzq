import * as React from 'react';
export interface GisPathDProps {
  color?: string;
  height: number;
  data: Array<{
    x: number | string;
    y: number;
  }>;
  style?: React.CSSProperties;
}

export default class GisPathD extends React.Component<GisPathDProps, any> {}