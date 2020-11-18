import React, { Component } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import styles from "./TemplateStyles"

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        {/*content prop is what is to be included inside template*/}
        <div style={styles.container}>
          <div style={styles.content}>{this.props.content}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Template;
