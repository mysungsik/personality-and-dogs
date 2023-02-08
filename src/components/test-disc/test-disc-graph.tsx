import { useEffect, useState } from "react";
import styles from "./test-disc-graph.module.scss";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const TestDiscGraph = () => {
  const [graphData, setGraphData] =
    useState<{ type: string; data: number }[]>();

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("test-result-graph")!);
    setGraphData(data);
  }, []);

  return (
    <div className={styles.testResult__graphSection}>
      <h1> Data Graph</h1>
      {graphData && (
        <div className={styles.testResult__graph}>
          <ComposedChart
            width={700}
            height={300}
            data={graphData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="data" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="data" stroke="#82ca9d" />
          </ComposedChart>
        </div>
      )}
    </div>
  );
};

export default TestDiscGraph;
