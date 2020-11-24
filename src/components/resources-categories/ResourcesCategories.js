import React, { Component } from "react";
import styles from "./ResourcesCategoriesStyles";

class ResourcesCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          {this.props.categories.map((group, i) => (
            <div key={i}>
              <div style={styles.title}>{group.title}</div>
              <div>
                {group.pages.map((link, j) => (
                  <div key={j} style={styles.resource}>
                    <a href={link}>{link}</a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <br />
      </div>
    );
  }
}

export default ResourcesCategories;
