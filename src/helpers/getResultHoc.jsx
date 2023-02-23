import { Component } from "react";

const GetResultHoc = (Wrapp) => {
  return class extends Component {
    render() {
      const { a, b } = this.props;
      const result = a + b;

      return <Wrapp result={result} />;
    }
  };
};

export default GetResultHoc;