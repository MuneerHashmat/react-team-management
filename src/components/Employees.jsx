import { useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";

const Employees = () => {
  const states = useContext(EmployeeContext);
  const employeeArray = states.employees;
  return (
    <div className=" w-[50%] h-[590px] border-4 border-gray-400 pb-1 overflow-auto">
      <h1 className="text-center text-2xl mb-8 w-full py-1 bg-blue-300 sticky">
        EMPLOYEES
      </h1>
      <div className="flex flex-col gap-3 text-lg px-3">
        {employeeArray.map((item) => (
          <div
            key={item.id}
            className="flex justify-between bg-gray-300 py-2 px-3 items-center"
          >
            <p className="w-[190px]">
              {item.first_name} {item.last_name}
            </p>
            <p>{item.age}</p>
            <div>
              {item.team_member ? (
                <div className="ml-[60px]"></div>
              ) : (
                <button
                  onClick={() => states.addTeamMember(item.id)}
                  className="text-sm font-bold bg-blue-500 py-1 px-4 rounded-lg hover:scale-105 transition-all"
                >
                  ADD
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;
