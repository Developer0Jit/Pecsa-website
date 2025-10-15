import "./VisionMission.css";

export default function VisionMission() {
  return (
    <main className="vision-mission-page container-fluid px-4 py-5">
      {/* Title Section */}
      <div className="title-section text-center mb-5">
        <h1 className="fw-bold display-4 text-gradient mb-1">VISION</h1>
        <h1 className="fw-bold display-4 text-gradient mb-3">MISSION</h1>
        <div className="title-underline mx-auto"></div>
      </div>

      {/* Vision Section */}
      <div className="content-section container my-5 py-4">
        <div className="row align-items-center">
          <div className="col-12 col-md-10 mx-auto">
            <div className="section-header d-flex align-items-center gap-3 mb-4">
              <div className="icon-circle">
                <i className="fa-solid fa-paper-plane fa-2x"></i>
              </div>
              <h3 className="mb-0 fw-bold">Vision</h3>
            </div>
            <p className="section-text">
              To be the go-to technology partner for businesses seeking to
              innovate, grow, and lead in the digital era through solutions that
              are not only powerful but also intuitive and user friendly.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="content-section container my-5 py-4">
        <div className="row align-items-center">
          <div className="col-12 col-md-10 mx-auto">
            <div className="section-header d-flex align-items-center gap-3 mb-4">
              <div className="icon-circle">
                <i className="fa-solid fa-user-secret fa-2x"></i>
              </div>
              <h3 className="mb-0 fw-bold">Mission</h3>
            </div>
            <ul className="section-list">
              <li>
                <strong>Empower Businesses:</strong> Provide tools that help
                organizations work smarter, faster, and more efficiently.
              </li>
              <li>
                <strong>Simplify Complexity:</strong> Transform complicated
                processes into simple, automated workflows.
              </li>
              <li>
                <strong>Deliver Excellence:</strong> Maintain high standards of
                quality in both product and service delivery.
              </li>
              <li>
                <strong>Build Partnerships:</strong> Foster relationships built
                on trust, transparency, and shared goals.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
