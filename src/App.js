import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ClassClickHandler from "./components/ClassClickHandler";
import ConditionalRender from "./components/ConditionalRender";
import EventBind from "./components/EventBind";
import FunctionClickHandler from "./components/FunctionClickHandler";
import GreetClass from "./components/GreetClass";
import GreetFunctional from "./components/GreetFunctional";
import InlineCSS from "./components/InlineCSS";
import NameList from "./components/NameList";
import ParentComponent from "./components/ParentComponent";
import StateCounter from "./components/StateCounter";
import StateMessage from "./components/StateMessage";
import styleClass from "./appStyle.module.css";
import FromHandle from "./components/FromHandle";
import LifeCycleA from "./components/LifeCycleA";
import TimerLifeCycle from "./components/TimerLifeCycle";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import RefsDemoFunctional from "./components/CallbackRefs";
import CallbackRefs from "./components/CallbackRefs";
import FocusInputRef from "./components/FocusInputRef";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import PortalHolder from "./components/PortalHolder";
import EventErrorHandling from "./components/EventErrorHandling";
import StateHooks from "./components/StateHooks";
import HOCclickCounter from "./components/HOCclickCounter";
import HOChoverCounter from "./components/HOChoverCounter";
import RenderPropsWrapper from "./RenderPropsWrapper";
import RenderPropsCounter from "./RenderPropsCounter";
import Mouse from "./Mouse";
import Cat from "./Cat";
// import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";
import ErrorBoundary from "./components/ErrorBoundary";
import RefDemo from "./component-context/RefDemo";
import ThemedButton from "./component-context/ThemedButton";
import Toolbar from "./component-context/Toolbar";
import CounterUseState from "./hooks-concepts/CounterUseState";
import Navingation from "./hooks-concepts/Navingation";
import FormHandlingUseState from "./hooks-concepts/FormHandlingUseState";
import ArrayUseState from "./hooks-concepts/ArrayUseState";
import DemoUseEffect from "./hooks-concepts/DemoUseEffect";
import EffectMouse from "./hooks-concepts/EffectMouse";
import MouseContainer from "./hooks-concepts/MouseContainer";
import TimerHook from "./hooks-concepts/TimerHook";
import DataFetching from "./hooks-concepts/DataFetching";
import DataFetchingById from "./hooks-concepts/DataFetchingById";
import ComponentC from "./hooks-concepts/ComponentC";
import ToDoList from "./hooks-concepts/ToDoList";
import ReducerDemo from "./hooks-concepts/ReducerDemo";
import ReducerDemo2 from "./hooks-concepts/ReducerDemo2";
import ReducerDemo3 from "./hooks-concepts/ReducerDemo3";
import DataFetchingUsingReducer from "./hooks-concepts/DataFetchingUsingReducer";
import CallbackDemo from "./hooks-concepts/CallbackDemo";
import FocusInput from "./hooks-concepts/FocusInput";
import HookCounterRef from "./hooks-concepts/HookCounterRef";

export const userContext = React.createContext();
export const ChannelContext = React.createContext();

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navingation />
        <Routes>
          <Route path="useStateCounter" element={<CounterUseState />} />
          <Route path="useStateObject" element={<FormHandlingUseState />} />
          <Route path="arrayinUseState" element={<ArrayUseState />} />
          <Route path="demoUseEffect" element={<DemoUseEffect />} />
          <Route path="effectMouse" element={<EffectMouse />} />
          <Route path="mouseContainer" element={<MouseContainer />} />
          <Route path="timerHook" element={<TimerHook />} />
          <Route path="dataFetching" element={<DataFetching />} />
          <Route path="dataFetchingById" element={<DataFetchingById />} />
          <Route
            path="contextDemo"
            element={
              <userContext.Provider value="Heet">
                <ChannelContext.Provider value="Technical">
                  <ComponentC />
                </ChannelContext.Provider>
              </userContext.Provider>
            }
          />
          <Route path="reducerDemo" element={<ReducerDemo />} />
          <Route path="reducerDemo2" element={<ReducerDemo2 />} />
          <Route path="reducerDemo3" element={<ReducerDemo3 />} />
          <Route path="dataFetchUseReducer" element={<DataFetchingUsingReducer />} />
          <Route path="callbackDemo" element={<CallbackDemo />} />
          <Route path="focusInput" element={<FocusInput />} />
          <Route path="hookCounterRef" element={<HookCounterRef />} />
        </Routes>
        {/* <ToDoList /> */}

        {/* <Toolbar /> */}
        {/* <ThemedButton /> */}
        {/* <RefDemo /> */}
        {/* <UserProvider value="Vishwas"> */}
        {/* <ErrorBoundary>
          <StateCounter />
        </ErrorBoundary> */}
        {/* </UserProvider> */}

        {/* <Mouse render={(mouse) => <Cat mouse={mouse} />} /> */}
        {/* <RenderPropsWrapper
          render={(count, incrementCount) => (
            <RenderPropsCounter count={count} incrementCount={incrementCount} />
          )}
        /> */}
        {/* <HOCclickCounter name="Heet" /> */}
        {/* <HOChoverCounter /> */}
        {/* <StateHooks /> */}
        {/* <EventErrorHandling /> */}
        {/* <PortalHolder /> */}
        {/* <FRParentInput /> */}
        {/* <FocusInputRef /> */}
        {/* <CallbackRefs /> */}
        {/* <RefsDemo /> */}
        {/* <ParentComp /> */}
        {/* <TimerLifeCycle /> */}
        {/* <LifeCycleA /> */}
        {/* <FromHandle /> */}
        {/* <h1 className={styleClass.success}>Success</h1> */}
        {/* <InlineCSS /> */}
        {/* <NameList /> */}
        {/* <ConditionalRender /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <ClassClickHandler /> */}
        {/* <FunctionClickHandler /> */}
        {/* <GreetFunctional name="Heet">
          <button>Action</button>
        </GreetFunctional>

        <GreetFunctional name="Rahul">
          <p>This is children props</p>
        </GreetFunctional>

        <GreetClass name="Heet" /> */}

        {/* <StateMessage /> */}
        {/* <StateCounter /> */}
      </div>
    );
  }
}

export default App;
