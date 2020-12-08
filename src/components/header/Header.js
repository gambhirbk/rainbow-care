import React, { Component } from "react";
import styles from "./HeaderStyles";
import { withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
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

  onSearch = (e) => {
    e.preventDefault();
    // route to searched endpoint
    this.props.history.push(this.state.search);
  };

  render() {
    return (
      <div>
        <div style={styles.headerBar}>
          <h1 style={styles.title}>Rainbow Care</h1>
          <nav style={{display: "flex", justifyContent: "center",}}>
            <button
              style={styles.button}
              onClick={() => this.props.history.push("/")}
            >
              Home
            </button>
            <button
              style={styles.button}
              onClick={() => this.props.history.push("/resources")}
            >
              Resources
            </button>
            <button
              style={styles.button}
              onClick={() => this.props.history.push("/bodystories")}
            >
              Body Stories
            </button>
            <button
              style={styles.button}
              onClick={() => this.props.history.push("/faq")}
            >
              FAQ
            </button>
            <button
              style={styles.button}
              onClick={() => this.props.history.push("/glossary")}
            >
              Glossary
            </button>
          </nav>
          <form style={styles.search} onSubmit={this.onSearch}>
            <input
              type="text"
              name="search"
              value={this.state.search}
              placeholder="search..."
              onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
