import React, { Component } from "react";
import Template from "./components/Template"
import ResourcesConsent from "./components/resources-consent/ResourcesConsent"
import Xiaoxia from "./components/xiaoxia/Xiaoxia"
import Yiyu from "./components/yiyu/Yiyu"

class App extends Component {
  render() {
    return <div className="App">
      <Template content={<ResourcesConsent />}/>
      {/* REPLACE 'ResourcesConsent' WITH YOUR OWN OBJECT!! */}
      </div>;
  }
}

export default App;
