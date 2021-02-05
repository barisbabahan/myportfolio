import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import "./ToolCard.css";

const ToolCard = ({ toolName, percentage, knowledges, toolSrc }) => {
  const [showMore, setShowMore] = useState(false);

  const showMoreToolContent = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="tool-card-root-contianer">
      <Grid item container className="tool-card-container">
        <Grid item xs={12} sm={12} lg={3} className="tool-card-tool-container">
          <div className="tool-card-titlle">{toolName}</div>
          <div className="tool-card-tool-img-container">
            <img src={toolSrc} className="tool-card-tool-image" alt="reactjs" />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} lg={9} className="tool-card-bar-container">
          <div className="tool-card-tool-knowledge">
            <div className="tool-card-knowledge-bar-outer">
              <div
                className="tool-card-knowledge-bar-inner"
                style={{ width: percentage }}
              ></div>
            </div>
          </div>
          <div className="tool-knowledge-bar-percentage">{percentage}</div>
        </Grid>
        {showMore && (
          <div className="tool-card-content-list">
            <ul>
              {knowledges.map((knowledge) => (
                <li key={knowledge}>{knowledge}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="tool-card-show-more-button">
          <span
            onClick={showMoreToolContent}
            className="tool-card-show-more-button-label"
          >
            Show {showMore ? "less" : "more"}
            <span className="tool-card-show-more-button-icon">
              {showMore ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
            </span>
          </span>
        </div>
      </Grid>
    </div>
  );
};

export default ToolCard;
