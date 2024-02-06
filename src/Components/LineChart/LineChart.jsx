import {
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
} from "recharts";

const LineChart = () => {
  const students = [
    {
      id: 1,
      name: "Alice",
      mathMarks: 85,
      physicsMarks: 75,
      chemistryMarks: 88,
    },
    { id: 2, name: "Bob", mathMarks: 78, physicsMarks: 70, chemistryMarks: 82 },
    {
      id: 3,
      name: "Charlie",
      mathMarks: 92,
      physicsMarks: 88,
      chemistryMarks: 95,
    },
    {
      id: 4,
      name: "David",
      mathMarks: 65,
      physicsMarks: 60,
      chemistryMarks: 75,
    },
    { id: 5, name: "Eva", mathMarks: 88, physicsMarks: 82, chemistryMarks: 90 },
    {
      id: 6,
      name: "Frank",
      mathMarks: 75,
      physicsMarks: 68,
      chemistryMarks: 80,
    },
    {
      id: 7,
      name: "Grace",
      mathMarks: 95,
      physicsMarks: 90,
      chemistryMarks: 98,
    },
    {
      id: 8,
      name: "Hank",
      mathMarks: 70,
      physicsMarks: 72,
      chemistryMarks: 78,
    },
    { id: 9, name: "Ivy", mathMarks: 82, physicsMarks: 78, chemistryMarks: 85 },
    {
      id: 10,
      name: "Jack",
      mathMarks: 89,
      physicsMarks: 85,
      chemistryMarks: 92,
    },
    {
      id: 11,
      name: "Kim",
      mathMarks: 72,
      physicsMarks: 65,
      chemistryMarks: 72,
    },
    {
      id: 12,
      name: "Liam",
      mathMarks: 93,
      physicsMarks: 88,
      chemistryMarks: 94,
    },
    {
      id: 13,
      name: "Mia",
      mathMarks: 68,
      physicsMarks: 60,
      chemistryMarks: 70,
    },
    {
      id: 14,
      name: "Noah",
      mathMarks: 84,
      physicsMarks: 78,
      chemistryMarks: 85,
    },
    {
      id: 15,
      name: "Olivia",
      mathMarks: 77,
      physicsMarks: 75,
      chemistryMarks: 80,
    },
    {
      id: 16,
      name: "Peter",
      mathMarks: 90,
      physicsMarks: 85,
      chemistryMarks: 92,
    },
    {
      id: 17,
      name: "Quinn",
      mathMarks: 79,
      physicsMarks: 72,
      chemistryMarks: 78,
    },
    {
      id: 18,
      name: "Rachel",
      mathMarks: 71,
      physicsMarks: 68,
      chemistryMarks: 75,
    },
    {
      id: 19,
      name: "Sam",
      mathMarks: 86,
      physicsMarks: 80,
      chemistryMarks: 88,
    },
    {
      id: 20,
      name: "Tom",
      mathMarks: 94,
      physicsMarks: 92,
      chemistryMarks: 96,
    },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={students}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="mathMarks" stroke="green"></Line>
        <Line dataKey="physicsMarks" stroke="yellow"></Line>
        <Line dataKey="chemistryMarks" stroke="blue"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
