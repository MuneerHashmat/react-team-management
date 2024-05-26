import { useState } from "react";
import PropTypes from "prop-types";
import EmployeeContext from "./EmployeeContext";
import employeeArray from "../data/employeeArray";

const EmployeeState = (props) => {
  const [employees, setEmployees] = useState(employeeArray);

  const [teamMembers, setTeamMembers] = useState([]);

  const addTeamMember = (id) => {
    const newTeamMember = employees.find((item) => item.id === id);
    setTeamMembers([...teamMembers, newTeamMember]);

    setEmployees(
      employees.map((item) => {
        return item.id === id ? { ...item, team_member: true } : item;
      })
    );
  };

  const removeTeamMember = (id) => {
    setTeamMembers(teamMembers.filter((item) => item.id !== id));
    setEmployees(
      employees.map((item) => {
        return item.id === id ? { ...item, team_member: false } : item;
      })
    );
  };

  const sortTeamMembers = () => {
    const sortedTeamMembers = [...teamMembers].sort((a, b) => a.age - b.age);
    setTeamMembers(sortedTeamMembers);
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        teamMembers,
        addTeamMember,
        removeTeamMember,
        sortTeamMembers,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};
EmployeeState.propTypes = {
  children: PropTypes.node,
};

export default EmployeeState;
