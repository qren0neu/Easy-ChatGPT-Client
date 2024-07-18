// src/roleSelection.js
import React from "react";
import { useHistory } from "react-router-dom";

const roles = [
  { name: "5年经验的HR", path: "/chat/hr-5-years" },
  { name: "10年经验的Hiring Manager", path: "/chat/hiring-manager-10-years" },
];

const RoleSelection = () => {
  const history = useHistory();

  const handleRoleClick = (path) => {
    history.push(path);
  };

  return (
    <div>
      <h1>选择你的角色</h1>
      <ul>
        {roles.map((role, index) => (
          <li key={index} onClick={() => handleRoleClick(role.path)}>
            {role.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleSelection;
