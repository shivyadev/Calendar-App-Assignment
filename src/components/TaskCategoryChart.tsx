import type { TaskProp } from "@/types";
import { getCategoryCounts } from "@/utils/taskUtils";
import { useMemo, useState } from "react";
import DisplayGraph from "./DisplayGraph";
import FilterDropdown from "./FilterDropdown";
import GraphHeader from "./GraphHeader";

function TaskCategoryChart({ task }: TaskProp) {
  const rawData = useMemo(() => getCategoryCounts(task), [task]);
  const allCategories = useMemo(
    () => rawData.map((item) => item.category),
    [rawData]
  );
  const [chartType, setChartType] = useState<"bar" | "pie">("bar");
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(allCategories);
  const [tempSelection, setTempSelection] = useState<string[]>(allCategories);

  const filteredData = rawData.filter((d) =>
    selectedCategories.includes(d.category)
  );

  return (
    <div>
      <GraphHeader setChartType={setChartType} chartType={chartType} />
      <FilterDropdown
        allCategories={allCategories}
        tempSelection={tempSelection}
        setTempSelection={setTempSelection}
        setSelectedCategories={setSelectedCategories}
      />
      <DisplayGraph chartType={chartType} filteredData={filteredData} />
    </div>
  );
}

export default TaskCategoryChart;
