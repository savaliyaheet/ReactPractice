import React from "react";

const UpdatedComponent = (OriginalComp) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    counterHandler = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    };
    render() {
      return (
        <OriginalComp
          count={this.state.count}
          counterHandler={this.counterHandler}
          {...this.props}  // When creating HOC dont forget to pass out the remaining props from parent component using spread operator
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
