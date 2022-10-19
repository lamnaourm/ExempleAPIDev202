import React, { Component } from "react";
import axios from "axios";

class Exemple extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      userId: '',
    };

    console.log("Lancement de constructeur ...");
  }

  render() {
    console.log(this.state.users);
    return (
      <div>
        <input
          type="number"
          value={this.state.userId}
          onChange={(e) => this.setState({ userId: e.target.value })}
        />

        {this.state.user.name && (
          <h1>
            {this.state.user.name} - {this.state.user.address.street}
          </h1>
        )}
      </div>
    );
  }

  componentDidUpdate(prevprops, prevstate) {
    if (prevstate.userId !== this.state.userId) {

      const getData = async () => {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${this.state.userId}`
        );
        return res.data;
      };
      getData().then((user) => this.setState({ user: user }));
    }
  }
}

export default Exemple;
