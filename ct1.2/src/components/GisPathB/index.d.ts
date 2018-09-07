import * as React from 'react';
export interface GisPathBProps {
  color?: string;
  height: number;
  data: Array<{
    x: number | string;
    y: number;
  }>;
  style?: React.CSSProperties;
}

export default class GisPathB extends React.Component<GisPathBProps, any> {}