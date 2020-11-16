import React, { Component } from "react";

const styles = {
  footerBar: {
    backgroundColor: "#84B4FF",
  },
  button: {
    border: "none",
    padding: 12,
    marginLeft: 30,
    fontSize: "14px",
    backgroundColor: "#84B4FF",
    color: "white",
  },
};

class Footer extends Component {
  render() {
    return (
      <div>
        <div style={styles.footerBar}>
          <button style={styles.button}>ABOUT</button>
          <button style={styles.button}>DEVELOPERS</button>
          <button style={styles.button}>PRIVACY</button>
        </div>
      </div>
    );
  }
}

export default Footer;
