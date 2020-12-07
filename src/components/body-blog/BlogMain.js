import styles from "./BlogMainStyles";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class BlogMain extends Component {
  render() {
    return (
      <div>
        <div style={styles.header}>STORIES OF MY BODY</div>
        <div style={styles.buttonRow}>
          <button style={styles.button} onClick={() => this.props.history.push('/bodyblogs')}>Explore the Community</button>
          <button style={styles.button} onClick={() => this.props.history.push('/blogmodal')}>Write Your Stories</button>
        </div>
      </div>
    );
  }
}

export default withRouter(BlogMain);