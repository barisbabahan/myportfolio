import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import ExperiencesSection from "./components/ExperiencesSection/ExperiencesSection";
import Container from "@material-ui/core/Container";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import EducationSection from "./components/EducationSection/EducationSection";
import HobbiesSection from "./components/HobbiesSection/HobbiesSection";
import "./App.css";
function App() {
  return (
    <Container maxWidth="lg" component="section">
      <HeroSection />
      <ExperiencesSection />
      <SkillsSection />
      <EducationSection />
      <HobbiesSection />
    </Container>
  );
}

export default App;
