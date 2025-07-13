interface Props {
  chartType: string;
  setChartType: React.Dispatch<React.SetStateAction<"bar" | "pie">>;
}

function GraphHeader({ setChartType, chartType }: Props) {
  return (
    <div className="flex items-center justify-between mx-5 mb-4">
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold text-center">Task Categories</h2>
        <p className="text-center text-gray-500">
          Overview of tasks by category
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setChartType("bar")}
          className={`px-4 py-2 rounded ${
            chartType === "bar" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Bar Chart
        </button>
        <button
          onClick={() => setChartType("pie")}
          className={`px-4 py-2 rounded ${
            chartType === "pie" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Pie Chart
        </button>
      </div>
    </div>
  );
}

export default GraphHeader;
