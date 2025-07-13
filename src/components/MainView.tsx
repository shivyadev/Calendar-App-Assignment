import { BarChartOutlined, CalendarOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import CalendarTab from "./CalendarTab";
import GraphTab from "./GraphTab";

function MainView() {
  const [activeTab, setActiveTab] = useState("1");
  const task = useSelector((state: RootState) => state.tasks);

  const tabs = [
    {
      key: "1",
      label: "Calendar",
      icon: <CalendarOutlined className="text-xl" />,
      content: <CalendarTab task={task} />,
    },
    {
      key: "2",
      label: "Analytics",
      icon: <BarChartOutlined className="text-xl" />,
      content: <GraphTab task={task} />,
    },
  ];

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="w-full max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="mb-2 text-4xl font-bold text-transparent bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
            Task Calendar
          </h1>
          <p className="text-lg text-gray-600">
            Manage your calendar and track analytics
          </p>
        </div>

        <div className="border shadow-xl bg-white/80 rounded-2xl border-white/20">
          <div className="p-2">
            <div className="flex p-1 bg-white rounded-xl">
              {tabs.map((tab) => {
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`
                      flex-1 flex items-center justify-center gap-3 px-6 py-4 font-semibold transition-all duration-300 rounded-lg

                      ${
                        activeTab === tab.key
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-[1.02]"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:shadow-lg"
                      }
                    `}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Enhanced Tab Content */}
          <div className="p-8">
            <div className="transition-all duration-300 ease-in-out">
              {tabs.find((tab) => tab.key === activeTab)?.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainView;
