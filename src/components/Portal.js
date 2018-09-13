import React from "react";
import ReactDOM from "react-dom";

export default ({ children, closeCallback }) => {
  const composed = (
    <div className="Modal-container" onClick={closeCallback}>
      <div className="Modal-content">
        {children}
        <button onClick={closeCallback}> Close Basic Modal </button>
      </div>
    </div>
  );
  return ReactDOM.createPortal(composed, document.body);
};
