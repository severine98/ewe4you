import React, { Component } from 'react';
import styles from "./TopicCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";

class TopicCard extends Component {

  contentLimit = (summary) => 
    summary.length <500
    ? summary
    : summary.substring(0,400) + "...";

  render() { 
    const {
      title,
      text,
      innerColour,
      outerColour,
      topicOverview,
    } = this.props.topic;

    const innerStyle = {
      backgroundColor: innerColour
    };

    const outerStyle = {
      backgroundColor: outerColour
    };

    return ( 
        <section className={styles.Topics} style={outerStyle}>
            <div className={styles.title}>
              <h2>{title}</h2>
            </div>
            <div style={innerStyle} className={styles.inner}>
              <p>
                {this.contentLimit(text)}
              </p>
            </div>
              <div className={styles.link}>
                <Link to={topicOverview}>
                  <FontAwesomeIcon className={styles.playbutton} icon="play-circle" />
                </Link >
              </div>
        </section>
     );
  }
}
export default TopicCard;
