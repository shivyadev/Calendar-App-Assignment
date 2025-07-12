import { BarChartOutlined, CalendarOutlined } from "@ant-design/icons";
import { useState } from "react";
import CalendarTab from "./CalendarTab";
import GraphTab from "./GraphTab";

function MainView() {
  const [activeTab, setActiveTab] = useState("1");

  const tabs = [
    {
      key: "1",
      label: "Calendar",
      icon: <CalendarOutlined className="text-xl" />,
      content: <CalendarTab />,
    },
    {
      key: "2",
      label: "Analytics",
      icon: <BarChartOutlined className="text-xl" />,
      content: <GraphTab />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
            Task Calendar
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your calendar and track analytics
          </p>
        </div>

        <div className="bg-white/80 rounded-2xl shadow-xl border border-white/20">
          <div className="p-2">
            <div className="flex bg-white rounded-xl p-1">
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
