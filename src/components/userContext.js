import React from "react";

const UserContext = React.createContext({ name: "Heet", age: 20 });

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserConsumer, UserProvider };
export default UserContext;
