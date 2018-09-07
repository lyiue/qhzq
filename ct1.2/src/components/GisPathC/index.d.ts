import * as React from 'react';
export interface GisPathCProps {
  color?: string;
  height: number;
  data: Array<{
    x: number | string;
    y: number;
  }>;
  style?: React.CSSProperties;
}

export default class GisPathC extends React.Component<GisPathCProps, any> {}