import React, { useState } from "react";

function RoleSettings({ onRoleChange, onSettingsChange }) {
  const [role, setRole] = useState("");
  const [settings, setSettings] = useState({});

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    onRoleChange(e.target.value);
  };

  const handleSettingsChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
    onSettingsChange(settings);
  };

  return (
    <div>
      <input
        type="text"
        value={role}
        onChange={handleRoleChange}
        placeholder="Role"
      />
      <input
        type="text"
        name="description"
        onChange={handleSettingsChange}
        placeholder="Description"
      />
      {/* Add more fields as necessary */}
    </div>
  );
}

export default RoleSettings;
