import React, { Component } from "react";
import styles from "./ResourcePageStyles";

class ResourcePage extends Component {
  render() {
    return (
      <div style={{height: 500, fontFamily: "'Roboto', sans-serif"}}>
        <div>
          <img
            src={this.props.image}
            alt="resource pic"
            style={styles.image}
          ></img>
        </div>
        <div>
          <div style={styles.title}>{this.props.header}</div>
          <div style={styles.body}>{this.props.body}</div>
          <div style={styles.title}>Citations:</div>
          <ul style={styles.citations}>
            {this.props.citations.map((citation, i) => (
              <li key={i}>
                <a href={citation}>{citation}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ResourcePage;
