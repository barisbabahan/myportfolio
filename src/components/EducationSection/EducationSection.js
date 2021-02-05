import React from "react";
import Grid from "@material-ui/core/Grid";
import "./EducationSection.css";
import "../../App.css";

const EducationSection = () => {
  return (
    <Grid container className="education-section-root-container">
      <h1 className="section-title">Education</h1>
      <div className="education-section-content-container">
        <Grid
          item
          xs={12}
          md={4}
          lg={3}
          className="education-section-image-container"
        >
          <div className="education-section-image-inner-container">
            <img
              className="education-section-school-logo"
              src="./assets/school/emu.png"
              alt="dogu akdeniz universitesi,eastern mediterranean university"
            />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          lg={9}
          className="education-section-school-knowledge"
        >
          <ul>
            <li>
              Working with a team that has members from all over the world.
            </li>
            <li>Improved my communication.</li>
            <li>Get a chance to work on real projects.</li>
            <li>Understand the concept of working remotely.</li>
            <li>Understand the concept of working remotely.</li>
            <li>Real job experience.</li>
          </ul>
        </Grid>
      </div>
    </Grid>
  );
};

export default EducationSection;
