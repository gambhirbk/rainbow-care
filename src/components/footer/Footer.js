import React, { Component } from "react";
import styles from "./FooterStyles";
import { withRouter } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer style={styles.footerBar}>
          {/* <button style={styles.button} onClick={() => this.props.history.push('/about_us')}>ABOUT</button>
          <button style={styles.button} onClick={() => this.props.history.push('/dev_info')}>DEVELOPERS</button>
          <button style={styles.button} onClick={() => this.props.history.push('/privacy_page')}>PRIVACY</button>
          <button style={styles.button} onClick={() => this.props.history.push('/faq')}>FAQ</button> */}
          <span style={{display: "inline", verticalAlign: "center", paddingTop: "10px", fontFamily: "'Montserrat', sans-serif",}}>&copy;2020, Joseph Barsness, Gambhir Kunwar, Yiyu Tian, Xiaoxia Yin</span>
        </footer>
      </div>
    );
  }
}

export default withRouter(Footer);
