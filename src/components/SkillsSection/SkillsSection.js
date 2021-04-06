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
      "React Context Learning",
      "High Order Components Learning",
      "Lazyloding, Code Splitting",
    ],
    src: "./assets/tools/react.png",
  },
  {
    toolName: "Git",
    percentage: "75%",
    knowledge: ["Collaborate With Teammates", "Create and Work Repository"],
    src: "./assets/tools/git.png",
  },
  {
    toolName: "NodeJS",
    percentage: "25%",
    knowledge: ["Create basic CRUD operations", "Learning NodeJs"],
    src: "./assets/tools/nodejs.png",
  },
  {
    toolName: "MongoDB",
    percentage: "20%",
    knowledge: ["Create schema", "Learning MongoDB"],
    src: "./assets/tools/mongoDb.png",
  },
  {
    toolName: "Docker",
    percentage: "15%",
    knowledge: ["Run docker", "Prune docker volume, images and system"],
    src: "./assets/tools/docker.png",
  },
  {
    toolName: "Jira",
    percentage: "40%",
    knowledge: [
      "Create and Work on Ticket",
      "Sprint planing",
      "Agile methodology",
    ],
    src: "./assets/tools/jira.png",
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
