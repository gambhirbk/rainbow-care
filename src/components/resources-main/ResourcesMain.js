import styles from "./ResourceMainStyles";
import React, { Component } from "react";

class ResourcesMain extends Component {
  render() {
    return (
      <div>
        <div style={styles.header}>Resources</div>
        <div style={styles.buttonRow}>
          <button style={styles.button}>By Category</button>
          <button style={styles.button}>Healthcare Providers</button>
          <button style={styles.button}>Consent</button>
        </div>
      </div>
    );
  }
}

export default ResourcesMain;
