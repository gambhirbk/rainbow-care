import React, { Component } from "react";
import styles from "./components/TemplateStyles";
import Header from "./components/header/Header";
// import Content from "./components/resources-consent/Content";
// import ConsentMainPage from "./components/resources-consent/ConsentMainPage";
import Glossary from "./components/resources-consent/Glossary";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={styles.container}>
          {/* replace ResourcesMain with your component to render locally */}
        <Header> 
        </Header>
          <Glossary>
          </Glossary>
        </div>
      </div>
    );
  }
}

export default App;
