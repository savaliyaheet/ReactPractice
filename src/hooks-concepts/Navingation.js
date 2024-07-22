import React from "react";
import { NavLink } from "react-router-dom";

function Navingation() {
  return <div>
    <nav>
      <NavLink to="useStateCounter">Counter with useState</NavLink>
      <NavLink to="useStateObject">Object Handling with useState</NavLink>
      <NavLink to="arrayinUseState">Array handling with useState</NavLink>
      <NavLink to="demoUseEffect">Demo of Use Effect</NavLink>
      <NavLink to="effectMouse">Demo of Use Effect Mouse</NavLink>
      <NavLink to="mouseContainer">Demo of Use Effect Mouse with unmounting</NavLink>
      <NavLink to="timerHook">Demo of Use Effect Timer/ setInterval</NavLink>
      <NavLink to="dataFetching">Demo of Data Fetching</NavLink>
      <NavLink to="dataFetchingById">Demo of Data Fetching by ID</NavLink>
      <NavLink to="contextDemo">Demo of Context</NavLink>
      <NavLink to="reducerDemo">Demo of Reducer Hook with simple state and action</NavLink>
      <NavLink to="reducerDemo2">Demo of Reducer Hook with complex state and action</NavLink>
      <NavLink to="reducerDemo3">Demo of Reducer Hook with Multiple reducer hook</NavLink>
      <NavLink to="dataFetchUseReducer">Data Fetching using useReducer</NavLink>
      <NavLink to="callbackDemo">Callback Demo</NavLink>
      <NavLink to="focusInput">FocusInput using useRef</NavLink>
      <NavLink to="hookCounterRef">Counter and clear interval using useRef</NavLink>
    </nav>
  </div>;
}

export default Navingation;
