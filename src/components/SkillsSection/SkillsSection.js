import React from "react";
import Grid from "@material-ui/core/Grid";
import ToolCard from "./component/ToolCard";
import "../../App.css";
import "./SkillSection.css";

const toolsObj = [
  {
    toolName: "ReactJs",
    percentage: "75%",
    knowledge: [
      "The Component Lifecycle",
      "React Hooks",
      "React Context",
      "High Order Components",
      "Lazyloding, Code Splitting",
    ],
    src: "./assets/tools/react.png",
  },
    {
    toolName: "Typescript",
    percentage: "70%",
    knowledge: ["Interfaces","Components types","State types","Types packages"],
    src: "./assets/tools/ts.png",
  },
    {
    toolName: "SASS",
    percentage: "80%",
    knowledge: ["Create 7-1 pattern","placeholders","mixins","variables","@use / @forward"],
    src: "./assets/tools/sass.png",
  },
  {
    toolName: "Git",
    percentage: "75%",
    knowledge: ["Push & Pull", "Resolve conflicts","Raise PR","Create Branches & Sub branches",],
    src: "./assets/tools/git.png",
  },
  {
    toolName: "NodeJS",
    percentage: "30%",
    knowledge: ["Create basic CRUD operations", "Learning NodeJs"],
    src: "./assets/tools/nodejs.png",
  },
  {
    toolName: "Postgre",
    percentage: "50%",
    knowledge: ["Create DB design","JOIN","SORTING", "Learning postgreSQL"],
    src: "./assets/tools/sql.png",
  },
  {
    toolName: "MongoDB",
    percentage: "20%",
    knowledge: ["Create schema", "Learning MongoDB"],
    src: "./assets/tools/mongoDb.png",
  },
  {
    toolName: "Figma",
    percentage: "20%",
    knowledge: ["check design and CSS code", "export files"],
    src: "./assets/tools/figma.png",
  },
];

const SkillsSection = () => {
  return (
    <Grid
      container
      direction="column"
      className="skills-section-root-container"
    >
      <h1 className="section-title">Skills</h1>
      {toolsObj.map((tool) => {
        return (
          <ToolCard
            key={tool.toolName}
            toolName={tool.toolName}
            percentage={tool.percentage}
            knowledges={tool.knowledge}
            toolSrc={tool.src}
          />
        );
      })}
    </Grid>
  );
};

export default SkillsSection;
