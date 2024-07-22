import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { userContext, ChannelContext } from "../App";

function ComponentE() {
  const user = useContext(userContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user} - {channel}
      <ComponentF />
    </div>
  );
}

export default ComponentE;
