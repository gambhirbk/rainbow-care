import React, { Component } from "react";

class Faq extends Component {
  render() {
    return (
      <div style={{ fontFamily: "'Roboto', sans-serif" }}>
        <h1
          style={{
            fontFamily: "'Ubuntu', sans-serif",
            color: "#623F7F",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            float: "center",
            justifyContent: "center",
          }}
        >
          Frequently Asked Questions (FAQ)
        </h1>
        <div>
          {this.props.data.map((item, i) => (
            <div key={i}>
              <h3>{item.title}</h3>
              <ul>
                <li>{item.body}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Faq;
