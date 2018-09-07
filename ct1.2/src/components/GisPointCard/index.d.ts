import * as React from 'react';
export interface GisPointCardProps {
  color?: string;
  height: number;
  data: Array<{
    x: number | string;
    y: number;
  }>;
  style?: React.CSSProperties;
}

export default class GisPointCard extends React.Component<GisPointCardProps, any> {}