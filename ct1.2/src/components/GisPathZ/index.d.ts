import * as React from 'react';
export interface GisPathZProps {
  color?: string;
  height: number;
  data: Array<{
    x: number | string;
    y: number;
  }>;
  style?: React.CSSProperties;
}

export default class GisPathZ extends React.Component<GisPathZProps, any> {}