import * as React from "react";
export interface GetEvaluateType_hbProps {
  title: React.ReactNode;
  color?: string;
  padding?: [number, number, number, number];
  height: number;
  data: Array<{
    x: string;
    y: number;
  }>;
  autoLabel?: boolean;
  style?: React.CSSProperties;
}

export default class GetEvaluateType_hb extends React.Component<GetEvaluateType_hbProps, any> {}