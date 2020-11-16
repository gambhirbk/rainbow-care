import React, { Component } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const styles = {
  container: {
    height: "800px",
    backgroundColor: "#D3F8FF",
  },
};

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
        <div style={styles.container}>{this.props.content}</div>
        <Footer />
      </div>
    );
  }
}

export default Template;
