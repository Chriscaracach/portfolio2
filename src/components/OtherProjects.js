import React from "react";
import { otherProjects } from "../data/Data";
import GitHubIcon from "@mui/icons-material/GitHub";

const OtherProjects = ({ lang }) => {
  const map = otherProjects.map((project) => {
    return (
      <tr>
        <td>{project.name}</td>
        <td>
          <a href={project.repository} rel="noreferrer" target="_blank">
            <GitHubIcon fontSize="large" />
          </a>
        </td>
      </tr>
    );
  });
  return (
    <div className="otherprojectscontainer">
      <div className="otherprojectscontainer__tablecontainer">
        <h1 className="title">
          {lang === "spanish" ? "Otros proyectos" : "Other projects"}
        </h1>
        <table class="otherprojectscontainer__table">
          <thead>
            <tr>
              <th>{lang === "spanish" ? "Proyecto" : "Project"}</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>{map}</tbody>
        </table>
      </div>
    </div>
  );
};

export default OtherProjects;
