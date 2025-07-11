import CalendarDisplay from "./CalendarDisplay";

function MainView() {
  return (
    <div className="px-44 flex flex-col items-center justify-center">
      <h2 className="w-full mt-5 mb-5 text-4xl text-left">Tasks Calendar</h2>
      <div className="mb-10">
        <CalendarDisplay />
      </div>
    </div>
  );
}

export default MainView;
