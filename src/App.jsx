import Employees from "./components/Employees";
import Team from "./components/Team";
import EmployeeState from "./context/EmployeeState";

function App() {
  return (
    <>
      <EmployeeState>
        <div
          className="w-[80%] mx-auto mt-8 flex justify-between flex-wrap
        "
        >
          <Employees />
          <Team />
        </div>
      </EmployeeState>
    </>
  );
}

export default App;
