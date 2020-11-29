import React, { Component } from "react";
import ResourcesMain from "./components/resources-main/ResourcesMain";
import ResourcesConsent from "./components/resources-consent/ResourcesConsent";
import Xiaoxia from "./components/xiaoxia/Xiaoxia";
import Yiyu from "./components/yiyu/Yiyu";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import styles from "./components/TemplateStyles";
import ResourcesOptions from "./components/resources-consent/ResourcesOptions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={styles.container}>
          {/* replace ResourcesMain with your component to render locally */}
          <ResourcesOptions> 

          </ResourcesOptions>
        </div>
      </div>
    );
  }
}

export default App;
