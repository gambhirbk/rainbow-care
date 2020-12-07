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
    this.props.history.push(this.state.search)
  };

  render() {
    return (
      <div>
        <div style={styles.headerBar}>
          <button
            style={styles.button}
            onClick={() => this.props.history.push("/")}
          >
            HOME
          </button>
          <button
            style={styles.button}
            onClick={() => this.props.history.push("/resources")}
          >
            RESOURCES
          </button>
          <button
            style={styles.button}
            onClick={() => this.props.history.push("/glossary")}
          >
            GLOSSARY
          </button>
          <button style={styles.button} onClick={() => this.props.history.push("/bodystories")}>BODY STORIES</button>
          <form style={styles.search} onSubmit={this.onSearch}>
            <input
              type="text"
              name="search"
              value={this.state.search}
              placeholder="search..."
              onChange={this.handleChange}
            />
            {/*html form button - default behavior is onSubmit*/}
            <button style={styles.searchButton}>
              <img
                src="./img/search.png"
                alt="Search button"
                style={styles.searchButton}
              />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
