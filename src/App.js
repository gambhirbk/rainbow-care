import React, { Component } from "react";
import ResourcesMain from "./components/resources-main/ResourcesMain";
import ResourcesConsent from "./components/resources-consent/ResourcesConsent";
import ResourcesCategories from "./components/resources-categories/ResourcesCategories";
import ResourcePage from "./components/resources-categories/resource-page/ResourcePage";
import Xiaoxia from "./components/xiaoxia/Xiaoxia";
import Yiyu from "./components/yiyu/Yiyu";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import styles from "./components/TemplateStyles";

const links = [
  {
    title: "Health",
    pages: [
      "page one",
      "page two"
    ]
  },
  {
    title: "Other Title",
    pages: [
      "page one 2",
      "page two 3"
    ]
  },
  {
    title: "Third Title",
    pages: [
      "page one 3",
      "page two 4"
    ]
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={styles.container}>
          <Header />
          {/* replace ResourcesMain with your component to render locally */}
          <ResourcesCategories categories={links}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
