import React, { Component } from "react";
import ResourcesMain from "./components/resources-main/ResourcesMain";
import ResourcesCategories from "./components/resources-categories/ResourcesCategories";
import ResourcePage from "./components/resources-categories/resource-page/ResourcePage";
import Error from "./components/Error";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Faq from "./components/faq/Faq";
import { Route, Switch } from "react-router-dom";
import BodyBlog from "./components/body-blog/BodyBlog";
import BlogMain from "./components/body-blog/BlogMain";
import BlogWriting from "./components/body-blog/BlogWriting";
import { links, pages, faqData } from "./components/data/data";
import Glossary from "./components/resources-consent/glossary/Glossary";
import ConsentMainPage from "./components/resources-consent/content-main/ConsentMainPage";
import Content from "./components/resources-consent/content/Content";
import HealthcareProviders from "./components/resources-consent/HealthcareProviders";
import Home from "./components/Home.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{backgroundColor: "#FFB6C1"}}>
          <Header />
          <Switch>
            <Route path="/glossary" exact>
              <Glossary />
            </Route>
            <Route path="/consent_main" exact>
              <ConsentMainPage />
            </Route>
            <Route path="/consent_resources" exact>
              <Content />
            </Route>
            <Route path="/providers" exact>
              <HealthcareProviders />
            </Route>
            <Route path="/PrEP" exact>
              <ResourcePage
                header={pages.PrEP.header}
                body={pages.PrEP.body}
                image={pages.PrEP.image}
                citations={pages.PrEP.citations}
              />
            </Route>
            <Route path="/TransLifeline" exact>
              <ResourcePage
                header={pages.TransLifeline.header}
                body={pages.TransLifeline.body}
                image={pages.TransLifeline.image}
                citations={pages.TransLifeline.citations}
              />
            </Route>
            <Route path="/categories" exact>
              <ResourcesCategories categories={links} />
            </Route>
            <Route path="/resources" exact>
              <ResourcesMain />
            </Route>
            <Route path="/bodystories" exact>
              <BlogMain />
            </Route>
            <Route path="/bodyblogs" exact>
              <BodyBlog />
            </Route>
            <Route path="/blogwriting" exact>
              {/* modified */}
              <BlogWriting />
            </Route>
            <Route path="/faq" exact>
              <Faq data={faqData} />
            </Route>
            <Route path="/" exact>
              <Home />
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
