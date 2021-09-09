import React from "react";
import Grid from "@material-ui/core/Grid";
import "../../App.css";
import "./ExperiencesSection.css";

const ExperiencesSection = () => {
  return (
    <Grid
      container
      direction="column"
      className="experience-section-root-container"
    >
      <h1 className="section-title">My Experience</h1>
      <Grid container className="experience-card-container">
        <Grid item className="experience-logo-container">
          <img src="./assets/logos/archis.png" alt="Archi's Academy" />
        </Grid>
        <Grid item className="experience-content-container">
          <h1 className="experience-content-title">
            Title: Front-end developer intern
          </h1>
          <p className="experience-content-tools">
            Tools: Reactjs, Jira, Bitbucket, Git, Figma, Strapi, Docker, SASS, TS, Nextjs
          </p>
          <div className="experince-content-description">
            <ul>
              <li>
                Working with a team that has members from all over the world.
              </li>
              <li>Improved my communication.</li>
              <li>Get a chance to work on real projects.</li>
              <li>Understand the concept of working remotely.</li>
              <li>Real job experience.</li>
            </ul>
          </div>
          <span className="experience-date">June 2020 - Present</span>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExperiencesSection;
