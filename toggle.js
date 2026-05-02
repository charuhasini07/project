import React from "react";

function Toggle({ dark, setDark }) {
  return (
    <div className="toggle">
      <label>
        <input
          type="checkbox"
          checked={dark}
          onChange={() => setDark(!dark)}
        />
        Dark Mode
      </label>
    </div>
  );
}

export default Toggle;
