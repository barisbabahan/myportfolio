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
              Learning each programming language fundamental. 
            </li>
            <li>
              Learning data Structure and analysis of the algorithms. 
            </li>
            <li>Learning how to find the requirements for software Projects.</li>
            <li>Improving analytical Mindset.</li>
            <li>Improving communication and collaboration</li>
          </ul>
        </Grid>
      </div>
    </Grid>
  );
};

export default EducationSection;
