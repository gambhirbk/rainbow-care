import React, { Component } from "react";
import styles from "./ResourcesConsentStyles";

class ResourcesOptions extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }


render() {
    return (
      <div>
        <h1 style={{textAlign: "center"}}> How would you like to learn about consent? Select an option </h1> 
        <div style={styles.buttonRow}>
          <button style={styles.button}>Content</button>
          <button style={styles.button}>Videos</button>
          <button style={styles.button}>Blog Posts</button>
        </div>
      </div>
    );
  }
}

export default ResourcesOptions;
