import React, { Component } from "react";
import { Router } from "@reach/router";
import LandingPage from "../components/LandingPage/LandingPage";
import DashboardPage from "../containers/Dashboard/DashboardPage/DashboardPage";
import CardCarousel from "../components/CardCarousel/CardCarousel";
import TopicOverview from "../components/TopicOverview/TopicOverview";
import topics from "../data/topics";
import ToolPage from "../containers/ToolPage";
import TopicPage from "../containers/TopicPage";
import Gallery from "../containers/Gallery";

class Routes extends Component {
  render() {
    return (
      <Router>
        <LandingPage path="/" />
        <DashboardPage path="dashboardPage" />
        <CardCarousel path="card-carousel" />
        <TopicOverview path="topic-overview" topic={topics[0]} />
        <ToolPage path="tools" />
        <TopicPage path="topics" />
        <Gallery path="gallery" />
      </Router>
    );
  }
}

export default Routes;
