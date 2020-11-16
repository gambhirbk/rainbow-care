import React, { Component } from "react";

const styles = {
  headerBar: {
    backgroundColor: "#2699FB",
  },
  button: {
    border: "none",
    padding: 20,
    marginLeft: 50,
    fontSize: "20px",
    backgroundColor: "#2699FB",
    color: "white",
  },
  search: {
    display: "inline",
    float: "right",
    padding: 15,
    marginRight: 50,
  },
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "search...",
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <div style={styles.headerBar}>
          <button style={styles.button}>HOME</button>
          <button style={styles.button}>RESOURCES</button>
          <button style={styles.button}>BODY STORIES</button>
          <form style={styles.search}>
            <input
              type="text"
              name="search"
              value={this.state.search}
              onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Header;
