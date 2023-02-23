import { Component } from "react";

const WithData = (Wrapp) => {
  return class extends Component {
    state = {
      users: [],
      loading: true,
      errorMsg: null,
    };

    componentDidMount() {
      this.setState({ loading: true });

      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => this.setState({ users: data }))
        .catch((err) => this.setState({ errorMsg: err }))
        .finally(() => this.setState({ loading: false }));
    }

    render() {
      const { props } = this;
      const { users, loading, errorMsg } = this.state;

      if (loading) {
        return <div>Loading ...</div>;
      }

      if (errorMsg) {
        return <div>{errorMsg}</div>;
      }

      return <Wrapp users={users} {...props} />;
    }
  };
};

export default WithData;
