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
      <div className="container">
        <div style={styles.headerBar}>
          <div className="row justify-content-start">
            <h1 style={styles.title}>Rainbow Care</h1>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{display: "flex", justifyContent: "center",}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/"> Home </a>
                <button style={styles.button} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="resource"
                  onClick={() => this.props.history.push("/")}>
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="resource">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="navbar-brand" href="/resources">Resource</a>
                    {/* <button style={styles.button} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                        onClick={() => this.props.history.push("/")}> */}
                    <span className="navbar-toggler-icon"></span>
                {/* </button> */}
                </li>
              </ul>
            </div>
          </div>

            {/* <div className="col-0">
              <button
                style={styles.button}
                onClick={() => this.props.history.push("/resources")}
              >
                Resources
              </button>
            </div> */}
            {/* <div className="col-0">
              <button
                style={styles.button}
                onClick={() => this.props.history.push("/bodystories")}
              >
                Body Stories
              </button>
            </div>
            <div className="col-0">
              <button
                style={styles.button}
                onClick={() => this.props.history.push("/faq")}
              >
                FAQ
              </button>
            </div>
            <div className="col">
              <button
                style={styles.button}
                onClick={() => this.props.history.push("/glossary")}
              >
                Glossary
              </button>
            </div> */}
          </nav>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
