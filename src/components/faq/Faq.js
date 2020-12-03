import React, { Component } from "react";
import styles from "./FaqStyles";

class Faq extends Component {

  render() {
    return (
      <div>
        <div style={styles.header}>Frequently Asked Questions (FAQ)</div>
        <div>
          {this.props.data.map((item, i) => (
            <div key={i}>
              <div style={styles.faqHeader}>{item.title}</div>
              <div style={styles.faqBody}>{item.body}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Faq;
