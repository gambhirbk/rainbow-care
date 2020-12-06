import React, { Component } from "react";
import styles from "./GlossaryStyles";

class Glossary extends Component {
    constructor(props) {
      super(props);
      this.state = {
  
      }
    }
  
    render() {
      return (
          <div>
                <div style={styles.header}>Glossary</div>
                <div style={styles.intro} class="introduction">This glossary is included as a resource. We recognize that it is limited in scope, in particular to Western terms. These definitions are mutable and vary between individuals – people may use different identifiers for themselves, or identify with a term for different reasons. We urge readers to ask and apply the language an individual uses to describe themselves.</div>
                <div style={styles.term}> aromanticism </div>
                <div style={styles.termDes}> A lack of romantic attraction. </div> 
        
        
        
        
        </div>


      );
    }
}

  export default Glossary;