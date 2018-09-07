import * as React from "react";
export interface RadialChartProps {
  title: React.ReactNode;
  color?: string;
  padding?: [number, number, number, number];
  height: number;
  data: string;
  autoLabel?: boolean;
  style?: React.CSSProperties;
}

export default class RadialChart extends React.Component<RadialChartProps, any> {}