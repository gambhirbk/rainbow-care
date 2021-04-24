import React, { Component } from "react";
import styles from "./ConsentMainPageStyle";
import {withRouter, Link} from "react-router-dom"

class ConsentMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1 style={styles.header}> Learn about consent </h1> 
        <div style={styles.body}> Consent, vital in any relationship, is closely tied to power dynamics and the way they play out in both sexual and non-sexual relationships. Consent plays out differently in queer relationships than in heterosexual ones, due to both distinct power dynamics and a less rigid social perception of the roles in the relationship. Learning about consent in the queer community is illuminating for both queer and non-queer people; yet, a lot of discussions around consent seem to be missing this perspective.
        </div>

        <div style={styles.buttonRow}> Click links below to read more about Consent </div> 
        <ul style={styles.consentList}>
          <li>
            <a href="https://www.plannedparenthood.org/learn/teens/lgbtq/info-and-resources-lgbtq-teens-and-allies">Planned Parenthood</a>
          </li>
        
          <li>
            <a href="https://teenhealthsource.com/blog/queering-sexual-education/">Teen Health</a>
          </li>
        </ul>
        
      </div>
    );
  }
}

export default withRouter(ConsentMainPage);