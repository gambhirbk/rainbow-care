import React, { Component } from "react";
import styles from "./FooterStyles";
import { withRouter } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <div style={styles.footerBar}>
          <button style={styles.button} onClick={() => this.props.history.push('/about_us')}>ABOUT</button>
          <button style={styles.button} onClick={() => this.props.history.push('/dev_info')}>DEVELOPERS</button>
          <button style={styles.button} onClick={() => this.props.history.push('/privacy_page')}>PRIVACY</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
