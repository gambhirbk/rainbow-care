import React, { Component } from "react";
import ResourcesMain from "./components/resources-main/ResourcesMain";
import ResourcesConsent from "./components/resources-consent/ResourcesConsent";
import Xiaoxia from "./components/xiaoxia/Xiaoxia";
import Yiyu from "./components/yiyu/Yiyu";
import styles from "./components/TemplateStyles";
import ResourcesOptions from "./components/resources-consent/ResourcesOptions";
import Header from "./components/header/Header";
import Content from "./components/resources-consent/Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={styles.container}>
          {/* replace ResourcesMain with your component to render locally */}
        <Header> 
        </Header>
          <Content> 
          </Content>
        </div>
      </div>
    );
  }
}

export default App;
