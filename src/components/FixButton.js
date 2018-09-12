import React from "react";

export default ({ fixed, callback }) => (
  <div className="Fix-iOS">
    {fixed ? (
      <div>Enjoy!</div>
    ) : (
      <button onClick={callback}>Fix for iOS</button>
    )}
  </div>
);
