import React, { Component } from "react";
import styles from "./ResourcesCategoriesStyles";
import { Link, withRouter } from "react-router-dom";

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
                    <Link to={link}>{link}</Link>
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

export default withRouter(ResourcesCategories);
