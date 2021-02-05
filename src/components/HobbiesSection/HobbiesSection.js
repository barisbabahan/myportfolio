import React from "react";
import Grid from "@material-ui/core/Grid";
import "../../App.css";
import "./HobbiesSection.css";

const hobbiesImages = [
  {
    src: "./assets/hobbies/chess.png",
  },
  {
    src: "./assets/hobbies/basketball.png",
  },
  {
    src: "./assets/hobbies/coding.png",
  },
];

const HobbiesSection = () => {
  return (
    <Grid
      container
      direction="column"
      className="hobbies-section-container-root"
    >
      <h1 className="section-title">Hobbies</h1>
      <div className="hobbies-section-hobbies-container">
        {hobbiesImages.map((img) => {
          return (
            <Grid key={img.src} item md={3}>
              <img
                className="hobbies-section-image"
                src={img.src}
                alt="baris babahan hobbies"
              />
            </Grid>
          );
        })}
      </div>
    </Grid>
  );
};

export default HobbiesSection;
