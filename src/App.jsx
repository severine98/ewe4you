import React, { Component } from 'react';
<<<<<<< HEAD
import styles from "./App.module.scss";
import TopicCard from "./Components/TopicCard";
import image from "./img/ewe4you.jpg";
import LandingPage from "./Components/LandingPage";

import DashboardUpdate from './dashboard/components/DashboardUpdate'
import DashboardProgress from './dashboard/components/DashboardProgress'

class App extends Component {
  render() {
    return (
    <>
        <LandingPage/>
        <div className={styles.backgroundDiv}>
          <h1>Hi there! Welcome to your dashboard view</h1>
          <div className={styles.dashboardView}>
            <section className={styles.updateSection}>
              <DashboardUpdate strTitle="Test Title 1" strText="this is the test text for the component" />
              <DashboardUpdate strTitle="Test Title 2" strText="this is the test text for the component" />
              <DashboardUpdate strTitle="Test Title 3" strText="this is the test text for the component" />
            </section>
            <section className={styles.progressSection}>
              <DashboardProgress strProgress="Progress" strPercentage="100%" />
            </section>
          </div>
        </div>
        <div className={styles.Flexed}>
      <TopicCard />
      <TopicCard />
      <TopicCard />
    </div>
    {image}
      </>
    );
  }
}

export default App;
      
=======
import styles from './App.module.scss';
import Routes from "./Routes/Routes";

class App extends Component {
  
  render() {
  
    return (

      <>
        <section className={styles.content}>
          <Routes/>
        </section>
      </>
    )
  } 
}

>>>>>>> 185cabda2b6b88f030efd5b2bf5007bae96bd09d

export default App;