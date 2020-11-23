import React, { Component } from "react";
import styles from "./ResourcePageStyles";

class ResourcePage extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.image}
          alt="resource pic"
          style={styles.image}
        ></img>
        <br />
        <div style={styles.title}>{this.props.header}</div>
        <div style={styles.body}>{this.props.body}</div>
        <div style={styles.title}>Citations</div>
        <div style={styles.citations}>
          {this.props.citations.map((citation, i) => (
            <div key={i}>
              <a href={citation} style={styles.citation}>
                {citation}
              </a>
            </div>
          ))}
        </div>
        <br />
      </div>
    );
  }
}

export default ResourcePage;
