import React, { useState, useEffect } from "react";
import Card from "./Card";
import { data } from "../data/Data";

const Grid = ({ inEnglish }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data);
  }, []);

  const map = projects.map((project) => {
    return (
      <Card
        key={project.id}
        name={project.name}
        enDescription={project.enDescription}
        esDescription={project.esDescription}
        url={project.url}
        repository={project.repository}
        tech={project.tech}
        inEnglish={inEnglish}
      ></Card>
    );
  });

  return (
    <div className="nes-container is-centered with-title grid-container">
      <h1 className="title">{!inEnglish ? "Proyectos" : "Projects"}</h1>
      <div className="grid">{map}</div>
    </div>
  );
};

export default Grid;
