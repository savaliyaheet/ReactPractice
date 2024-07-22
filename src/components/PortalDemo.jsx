import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(<div style={{ position: "fixed", top: 0, left: 0, zIndex: 999, color: "white" }}>PortalDemo</div>, document.getElementById("portal-root"));
}

export default PortalDemo;
