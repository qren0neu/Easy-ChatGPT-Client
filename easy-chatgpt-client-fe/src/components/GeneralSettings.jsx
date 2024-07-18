import React, { useState } from "react";

function GeneralSettings({ onSettingsChange }) {
  const [settings, setSettings] = useState({});

  const handleChange = (e) => {
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
        name="workExperience"
        onChange={handleChange}
        placeholder="Work Experience"
      />
      <input
        type="text"
        name="skillSet"
        onChange={handleChange}
        placeholder="Skill Set"
      />
      <input
        type="text"
        name="companyDescription"
        onChange={handleChange}
        placeholder="Company Description"
      />
      <input
        type="text"
        name="jobDescription"
        onChange={handleChange}
        placeholder="Job Description"
      />
      {/* Add more fields as necessary */}
    </div>
  );
}

export default GeneralSettings;
