import styles from "./ResourceMainStyles";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ResourcesMain extends Component {
  render() {
    return (
      <div>
        <div style={styles.header}>RESOURCES</div>
        <div style={styles.buttonRow}>
          <button style={styles.button} onClick={() => this.props.history.push('/categories')}>By Category</button>
          <button style={styles.button} onClick={() => this.props.history.push('/providers')}>Healthcare Providers</button>
          <button style={styles.button} onClick={() => this.props.history.push('/consent_main')}>Consent</button>
          <button style={styles.button} onClick={() => this.props.history.push('/chat_with_doctors')}>Chat With Doctors</button>
        </div>
      </div>
    );
  }
}

export default withRouter(ResourcesMain);
