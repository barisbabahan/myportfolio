import React from "react";
import Grid from "@material-ui/core/Grid";
import ToolCard from "./component/ToolCard";
import "../../App.css";
import "./SkillSection.css";

const toolsObj = [
  {
    toolName: "ReactJs",
    percentage: "60%",
    knowledge: [
      "The Component Lifecycle",
      "React Hooks",
      "React Context Learning",
      "High Order Components Learning",
      "Lazyloding, Code Splitting",
    ],
    src: "./assets/tools/react.png",
  },
  {
    toolName: "Git",
    percentage: "60%",
    knowledge: ["Collaborate With Teammates", "Create and Work Repository"],
    src: "./assets/tools/git.png",
  },
  {
    toolName: "Jira",
    percentage: "20%",
    knowledge: ["Create and Work on Ticket", "Sprint planing"],
    src: "./assets/tools/jira.png",
  },
  {
    toolName: "Figma",
    percentage: "10%",
    knowledge: ["check design and CSS code", "export files"],
    src: "./assets/tools/figma.png",
  },
  {
    toolName: "NodeJS",
    percentage: "5%",
    knowledge: ["Learning Back-end"],
    src: "./assets/tools/nodejs.png",
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
