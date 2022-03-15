import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import HandlingState from "./components/HandlingState";
// import Counter from "./components/Counter";
// import LifeCycleMethod from "./components/LifeCycleMethod";
// import FunctionEventHandler from "./components/FunctionEventHandler";
// import ClassEventHandler from "./components/ClassEventHandler";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import ConditionalRenderUI from "./components/ConditionalRenderUI";
// import PersonList from "./components/PersonList";
// import style from "./components/appStyle.module.css";
// import Form from "./components/Form";
// import LifeCycleA from "./components/LifeCycleA";
// import TempCalc1 from "./components/TempCalc1";
// import FragmentDemo from "./components/FragmentDemo";
// import MouseTracker from "./components/MouseTracker";
// import ParentComp from "./components/ParentComp";
// import RefsDemo from "./components/RefsDemo";
// import ClickCounter from "./components/ClickCounter";
// import HoverCounter from "./components/HoverCounter";
// import PostListAxios from "./components/PostListAxios";
// import PostFormAxios from "./components/PostFormAxios";
// import CalendarApi from "./components/CalendarApi";
// import FocusInputRef from "./components/FocusInputRef";
// import FRFocusInputRef from "./components/FRFocusInputRef";
import HCounter from "./hooksComponent/HCounter";
import StateForm from "./hooksComponent/StateForm";
import StateArray from "./hooksComponent/StateArray";
import SideEffects from "./components/SideEffects";
import EffectCounter from "./hooksComponent/EffectCounter";
import EffectMouse from "./hooksComponent/EffectMouse";
import EffectToggleCleanup from "./hooksComponent/EffectToggleCleanup";
import IntervalHookCounter from "./hooksComponent/IntervalHookCounter";
import DataFetching from "./hooksComponent/DataFetching";
import ComponentC from "./hooksComponent/ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Heet"}>
        <ChannelContext.Provider value={"Savaliya"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>

      {/* <DataFetching /> */}
      {/* <IntervalHookCounter /> */}
      {/* <EffectToggleCleanup /> */}
      {/* <EffectMouse /> */}
      {/* <EffectCounter/> */}
      {/* <StateArray /> */}
      {/* <StateForm /> */}
      {/* <HCounter/> */}
      {/* <SideEffects /> */}
      {/* <FRFocusInputRef /> */}
      {/* <FocusInputRef /> */}
      {/* <CalendarApi /> */}
      {/* <PostFormAxios /> */}
      {/* <PostListAxios/> */}
      {/* <ClickCounter name="Vishwas"/> */}
      {/* <HoverCounter/> */}
      {/* <RefsDemo/> */}
      {/* <ParentComp/> */}
      {/* <MouseTracker/> */}
      {/* <FragmentDemo/> */}
      {/* <TempCalc1/> */}
      {/* <LifeCycleA/> */}
      {/* <Form/> */}
      {/* <h1 className={style.success}>Success</h1> */}
      {/* <PersonList /> */}
      {/* <ConditionalRenderUI/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionEventHandler /> */}
      {/* <ClassEventHandler /> */}
      {/* <LifeCycleMethod name="heet"/> */}
      {/* <Counter/> */}
      {/* <HandlingState/> */}
      {/* <Greet
        name="Xyz"
        lname="Savaliya"
        avatar="http://placekitten.com/g/64/64"
      /> */}
      {/* <Welcome name="Heet" lname="Savaliya">
        <p>This is child ele of Welcome Component</p>
      </Welcome> */}
    </div>
  );
}

export default App;
