import { DownOutlined, ReloadOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

interface Props {
  allCategories: string[];
  tempSelection: string[];
  setTempSelection: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterDropdown = ({
  allCategories,
  tempSelection,
  setTempSelection,
  setSelectedCategories,
}: Props) => {
  const handleCategoryToggle = (category: string) => {
    setTempSelection((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleApply = () => {
    setSelectedCategories(tempSelection);
  };

  const handleReset = () => {
    setTempSelection(allCategories);
    setSelectedCategories(allCategories);
  };

  const dropdownItems = [
    {
      type: "divider" as const,
    },
    {
      key: "categories",
      label: (
        <div
          className="overflow-y-auto max-h-48 min-w-64"
          onClick={(e) => e.stopPropagation()}
        >
          <Space direction="vertical" className="flex flex-wrap w-full gap-2">
            {allCategories.map((category) => (
              <label
                key={category}
                className="flex items-center gap-3 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  checked={tempSelection.includes(category)}
                  onChange={() => handleCategoryToggle(category)}
                  className="p-2 text-blue-600 border-gray-300 rounded-full cursor-pointer size-5"
                />
                <span className="text-lg font-medium text-gray-700">
                  {category[0].toUpperCase() + category.slice(1)}
                </span>
              </label>
            ))}
          </Space>
        </div>
      ),
    },
  ];

  const getButtonText = () => {
    if (tempSelection.length === 0) return "No categories selected";
    if (tempSelection.length === allCategories.length)
      return "All categories selected";
    return `${tempSelection.length} categories selected`;
  };

  return (
    <div className="p-4 space-y-4">
      <div className="relative">
        <Dropdown
          menu={{ items: dropdownItems }}
          trigger={["click"]}
          placement="bottom"
          overlayClassName="category-filter-dropdown"
        >
          <button
            className="flex justify-between w-full h-auto px-4 py-3 border-[1px] border-gray-300 rounded-xl hover:shadow-xl transition-all duration-300 hover:cursor-pointer"
            onClick={(e) => e.preventDefault()}
          >
            <span className="text-gray-700">{getButtonText()}</span>
            <DownOutlined />
          </button>
        </Dropdown>
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleApply}
          className={`px-4 py-2 font-medium text-white bg-blue-600 hover:bg-blue-500 hover:cursor-pointer rounded-lg transition-all duration-300`}
        >
          Apply Filters
        </button>
        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-4 py-2 transition-all bg-gray-400 rounded-lg duration-400 hover:bg-gray-300 hover:cursor-pointer"
        >
          <ReloadOutlined />
          Reset
        </button>
      </div>
    </div>
  );
};

export default FilterDropdown;
