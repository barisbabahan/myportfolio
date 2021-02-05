import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import GetAppIcon from "@material-ui/icons/GetApp";
import "./HeroSection.css";

const HeroSection = () => {
  const socialMediaAccounts = [
    {
      accountLink: "https://www.linkedin.com/in/barisbabahan/",
      iconPath: "./assets/socialMediaIcons/linkedin.png",
      alt: "baris babahan linkedin",
    },
    {
      accountLink: "https://www.instagram.com/learning_everyday99/",
      iconPath: "./assets/socialMediaIcons/instagram.png",
      alt: "baris babahan instagram",
    },
    {
      accountLink: "https://github.com/barisbabahan",
      iconPath: "./assets/socialMediaIcons/github.png",
      alt: "baris babahan github",
    },
  ];

  return (
    <Grid container className="hero-section-container">
      <Grid item xs={12} lg={6} className="hero-section-content-container">
        <h1 className="hero-section-greeting">
          Hello, <span className="highlight">Fellas</span>
        </h1>
        <p className="hero-section-content">
          I hope you are well and safe, I'm an intern front-end developer at
          Archis academy. My job is bringing awesome designs into reality.
          Besides my internship, I'm also a third-year student at Eastern
          Mediterranean University. Reactjs, Jira, Bitbucket are some tools and
          technology that I'm using in my internship. They are the most popular
          things in the software industry therefore my experience with these
          technologies will help me in my future jobs.I would like to meet new
          people. I always have a passion to improve my self. If you want to
          talk with me about the job, opportunities even just daily life go
          ahead add me to your social media list :)
        </p>
        <Grid className="content-get-in-touch-section">
          <h1 className="get-in-touch-title">
            Let'<span className="highlight">s</span> Get in touch
            <span className="highlight"> on</span>
          </h1>
          <div className="social-media-icons-container">
            {socialMediaAccounts.map((account) => {
              return (
                <a
                  href={account.accountLink}
                  rel="noreferrer noopener"
                  target="_blank"
                  key={account.accountLink}
                >
                  <img
                    src={account.iconPath}
                    className="social-media-icon"
                    alt={account.alt}
                  ></img>
                </a>
              );
            })}
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={6} className="hero-section-hero-image-container">
        <img
          src={"./assets/heroSection/main-image.png"}
          alt="baris babahan"
          className="hero-section-main-image"
        />
      </Grid>
      <Button
        variant="contained"
        className="download-cv-button"
        endIcon={<GetAppIcon />}
      >
        <a
          href="./assets/CV/baris-babahan.pdf"
          rel="noreferrer noopener"
          target="_blank"
        >
          Download my CV
        </a>
      </Button>
    </Grid>
  );
};

export default HeroSection;
