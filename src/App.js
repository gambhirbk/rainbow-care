import React, { Component } from "react";
import Template from "./components/Template"
import ResourcesConsent from "./components/resources-consent/ResourcesConsent"
import Xiaoxia from "./components/xiaoxia/Xiaoxia"
import Yiyu from "./components/yiyu/Yiyu"

class App extends Component {
  render() {
    return <div className="App">
      <Template />
      {/* REPLACE 'ResourcesMain' WITH YOUR OWN OBJECT!! */}
      </div>;
  }
}

export default App;
