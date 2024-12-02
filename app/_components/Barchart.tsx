"use client";
import React, { PureComponent } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export interface MonthObj {
  month: string;
  value: number;
}

export interface BarChartData {
  data: MonthObj[];
}

export default class Example extends PureComponent<BarChartData> {
  static demoUrl = "https://codesandbox.io/p/sandbox/stacked-bar-chart-7fwfgj";

  render() {
    // Transform the data to include a new key `v` based on some logic
    const transformedData = this.props.data.map((item) => ({
      ...item,
      v: 800 - item.value, // Example logic to compute 'v'. Adjust as needed.
    }));

    const CustomBarShape = (props: any) => {
      const { x, y, width, height, fill } = props;
      return (
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={fill}
          rx={5} // Border radius for the corners
          ry={5} // Optional: Y-axis-specific border radius
        />
      );
    };

    return (
      <ResponsiveContainer className="sm:h-full h-full !w-full !max-w-full !p-0 !flex !justify-center -ml-7">
        <BarChart
          className="!w-full !max-w-full !p-0 !h-full flex-1"
          data={transformedData}
        >
          <XAxis
            dataKey="month"
            axisLine={false}
            className="text-xs"
            tickLine={false}
            padding="no-gap"
          />
          <YAxis
            axisLine={false}
            className="text-xs"
            tickLine={false}
          />

          <Bar
            dataKey="value"
            stackId="a"
            fill="#2462ffc8"
            barSize={10}
            maxBarSize={30}
            shape={<CustomBarShape />}
          />

          <Bar
            dataKey="v"
            stackId="a"
            fill="#1b5af812"
            barSize={0}
            maxBarSize={0}
            shape={<CustomBarShape />}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
