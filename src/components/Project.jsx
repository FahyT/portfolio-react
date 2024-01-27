export default function Project({ project }) {
  return (
    <div className="col-sm-6 col-md-3 col-lg-3 m-2">
      <div className="card h-100">
        <img
          src={project.screenshot}
          className="card-img-top h-50"
          alt={project.title}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>
          <a href={project.url_deployed} className="btn btn-primary m-2">
            View Site
          </a>
          <a href={project.url_github} className="card-link m-2">
            Github repo
          </a>
        </div>
      </div>
    </div>
  );
}
