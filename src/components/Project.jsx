export default function Project({ project }) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-4">
      <div className="card m-2">
        <img src="" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text</p>
          <a href="#" className="btn btn-primary m-2">
            View Site
          </a>
          <a href="#" className="card-link m-2">
            Github repo
          </a>
        </div>
      </div>
    </div>
  );
}
