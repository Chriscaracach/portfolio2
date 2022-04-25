import React from "react";
import { otherProjects } from "../data/Data";

const OtherProjects = ({ inEnglish }) => {
  const map = otherProjects.map((project) => {
    return (
      <tr>
        <td>{project.name}</td>
        <td>
          <a
            class="nes-btn"
            href={project.repository}
            rel="noreferrer"
            target="_blank"
          >
            <i class="nes-icon github is-medium"></i>
          </a>
        </td>
      </tr>
    );
  });
  return (
    <div className="nes-container is-centered with-title otherprojectscontainer">
      <div
        class="nes-table-responsive"
        className="otherprojectscontainer__tablecontainer"
      >
        <h1 className="title">
          {!inEnglish ? "Otros proyectos" : "Other projects"}
        </h1>
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
