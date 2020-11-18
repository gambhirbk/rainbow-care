import React, { Component } from "react";
import styles from "./FooterStyles"

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
