import React from "react";
import { otherProjects } from "../data/Data";

const OtherProjects = ({ inEnglish }) => {
  const map = otherProjects.map((project) => {
    return (
      <tr>
        <td>{project.name}</td>
        <td>
          <a class="nes-btn" href={project.repository}>
            Link
          </a>
        </td>
      </tr>
    );
  });
  return (
    <div className="nes-container is-centered with-title otherprojectscontainer">
      <h1 className="title">
        {!inEnglish ? "Otros proyectos" : "Other projects"}
      </h1>
      <div class="nes-table-responsive">
        <table class="nes-table is-bordered is-centered otherprojectscontainer__table">
          <thead>
            <tr>
              <th>{!inEnglish ? "Proyecto" : "Project"}</th>
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
