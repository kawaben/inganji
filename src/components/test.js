import React, { useState } from "react";

const ToggleList = () => {
  const [openToggle, setOpenToggle] = useState(null); // Store the ID of the currently open toggle

  const handleToggle = (id) => {
    setOpenToggle((prev) => (prev === id ? null : id)); // Close if already open, else open the new toggle
  };

  const toggles = [
    { id: 1, title: "Toggle 1", content: "This is content for Toggle 1" },
    { id: 2, title: "Toggle 2", content: "This is content for Toggle 2" },
    { id: 3, title: "Toggle 3", content: "This is content for Toggle 3" },
  ];

  return (
    <div>
      {toggles.map((toggle) => (
        <div key={toggle.id} style={{ marginBottom: "10px" }}>
          <button onClick={() => handleToggle(toggle.id)}>
            {toggle.title}
          </button>
          {openToggle === toggle.id && (
            <div style={{ padding: "10px", background: "#f0f0f0" }}>
              {toggle.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ToggleList;
