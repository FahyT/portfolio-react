import Project from "../Project";
import projectData from "../../assets/projects.json";

export default function Projects() {
  const dataArr = Object.values(projectData);

  return (
    <div className="container-fluid">
      <div className="row">
        {dataArr.map((p) => (
          <Project project={p} key={p.id} />
        ))}
      </div>
    </div>
  );
}
