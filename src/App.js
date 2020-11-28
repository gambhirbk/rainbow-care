import React, { Component } from "react";
import ResourcesMain from "./components/resources-main/ResourcesMain";
import ResourcesCategories from "./components/resources-categories/ResourcesCategories";
import ResourcePage from "./components/resources-categories/resource-page/ResourcePage";
import Error from "./components/Error"
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import styles from "./components/TemplateStyles";
import { Route, Switch } from "react-router-dom";
import { links, mockData } from "./components/data/data";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={styles.container}>
          <Header />
          <Switch>
            <Route path="/Mock" exact>
              <ResourcePage
                header={mockData.header}
                body={mockData.body}
                image={mockData.image}
                citations={mockData.citations}
              />
            </Route>
            <Route path="/categories" exact>
              <ResourcesCategories categories={links} />
            </Route>
            <Route path="/resources" exact>
              <ResourcesMain />
            </Route>
            <Route path="/" exact>
              {/* our home page will go here! */}
            </Route>
            <Route>
              {/* if the switch statement isn't resolved, render error component */}
              <Error />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
