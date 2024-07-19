import React, { useState } from "react";
import Chat from "./components/chat";
import RoleSettings from "./components/RoleSettings";
import GeneralSettings from "./components/GeneralSettings";
import "./App.css";

function App() {
  const [role, setRole] = useState("");
  const [generalSettings, setGeneralSettings] = useState({});
  const [roleSettings, setRoleSettings] = useState({});

  const handleRoleChange = (newRole) => setRole(newRole);
  const handleGeneralSettingsChange = (settings) =>
    setGeneralSettings(settings);
  const handleRoleSettingsChange = (settings) => setRoleSettings(settings);

  return (
    <div className="App">
      <RoleSettings
        onRoleChange={handleRoleChange}
        onSettingsChange={handleRoleSettingsChange}
      />
      <GeneralSettings onSettingsChange={handleGeneralSettingsChange} />
      <Chat
        role={role}
        generalSettings={generalSettings}
        roleSettings={roleSettings}
      />
    </div>
  );
}

export default App;
