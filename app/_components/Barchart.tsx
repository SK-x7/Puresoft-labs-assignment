"use client";
import { PureComponent } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface monthObj {
  month: string;
  value: number;
}

export interface barChartData {
  data: monthObj[];
}

export default class Example extends PureComponent<barChartData> {
  static demoUrl = "https://codesandbox.io/p/sandbox/stacked-bar-chart-7fwfgj";

  render() {
    const { data } = this.props;
    return (
      <ResponsiveContainer className="sm:h-full h-full w-full">
        <BarChart
          // className='!w-full'
          width={500}
          height={100}
          data={data}
          margin={{}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="value"
            stackId="a"
            fill="#35d760"
            className=""
            barSize={15}
            maxBarSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
