import { useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";
import AdsClickIcon from "@mui/icons-material/AdsClick";

const Team = () => {
  const states = useContext(EmployeeContext);
  const teamMembers = states.teamMembers;

  const totalAge = teamMembers.reduce((total, item) => {
    return (total += item.age);
  }, 0);

  const avgAge = Math.round(totalAge / teamMembers.length);

  return (
    <div className="w-[40%] h-[590px] border-4 border-gray-400 relative overflow-auto">
      <h1 className=" text-center text-2xl w-full py-1 bg-blue-300">Team</h1>
      <div className="px-3 my-5">
        {teamMembers.length == 0 ? (
          <p className=" text-center text-lg text-red-500">No Team Members</p>
        ) : (
          <div className="flex flex-col gap-2 text-lg">
            <div className="px-3 flex justify-between items-center">
              <button
                onClick={() => states.sortTeamMembers()}
                className="px-4 shadow-lg py-1 text-sm font-bold rounded-lg bg-red-400 mb-4 hover:scale-105 transition-all w-[150px]"
              >
                <AdsClickIcon
                  sx={{ fontSize: "20px", margin: "0 5px 3px 0" }}
                />
                SORT BY AGE
              </button>
              {teamMembers.length == 0 ? null : (
                <div className="px-2 py-1 bg-green-400 mb-4 rounded-sm">
                  <span>
                    Average age: <span className="font-bold">{avgAge}</span>
                  </span>
                </div>
              )}
            </div>
            {teamMembers.map((item) => (
              <div
                key={item.id}
                className="flex justify-between bg-gray-300 py-2 px-3 items-center"
              >
                <span className="inline-block w-[190px]">
                  {item.first_name} {item.last_name}
                </span>
                <span>{item.age}</span>

                <button
                  onClick={() => states.removeTeamMember(item.id)}
                  className="text-sm font-bold bg-blue-500 py-1 px-3 rounded-lg hover:scale-105 transition-all"
                >
                  REMOVE
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
