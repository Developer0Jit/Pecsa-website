export default function VisionMission() {
  return (
    <main
      className="container-fluid px-5 py-4"
      style={{ backgroundColor: "#312e43", color: "#dfdfdf" }}
    >
      {/* Title Section */}
      <div className="">
        <div
          className="text-white rounded-start-pill"
          style={{
            backgroundColor: "#ffffff",
            position: "relative",
            width: "500px",
            padding:"5px",
            transform: "rotate(-90deg)",
            transformOrigin: "center",
          }}
        >
          <div className="my-4">
            <div style={{ height: "160px" }}></div>
          </div>
        </div>

        {/* vison mission */}
        <div className=" d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="fw-bold display-4 mb-2">VISION</h1>
          <h1 className="fw-bold display-4 mb-3">MISSION</h1>
          <hr
            className="w-25 mb-0"
            style={{ borderTop: "4px solid #ffffff" }}
          />
        </div>
      </div>

      {/* Vision Section */}
      <div className="row my-5 py-4 container">
        <div className="col-12 col-md-10 mx-auto">
          <div className="d-flex align-items-center gap-4 mb-4 text-light">
            <i className="fa-solid fa-paper-plane fa-3x"></i>
            <h4 className="mb-0 fw-semibold fs-3">Vision</h4>
          </div>
          <p className="fs-5 lh-lg" style={{ color: "#9996a7" }}>
            To be the go-to technology partner for businesses seeking to
            innovate, grow, and lead in the digital era through solutions that
            are not only powerful but also intuitive and user friendly.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="row my-5 py-4">
        <div className="col-12 col-md-10 mx-auto">
          <div className="d-flex align-items-center gap-4 mb-4 text-light">
            <i className="fa-solid fa-user-secret fa-3x"></i>
            <h4 className="mb-0 fw-semibold fs-3">Mission</h4>
          </div>
          <ul className="fs-5 lh-lg" style={{ color: "#9996a7" }}>
            <li className="m-4">
              <strong>Empower Businesses:</strong> Provide tools that help
              organizations work smarter, faster, and more efficiently.
            </li>
            <li className="m-4">
              <strong>Simplify Complexity:</strong> Transform complicated
              processes into simple, automated workflows.
            </li>
            <li className="m-4">
              <strong>Deliver Excellence:</strong> Maintain high standards of
              quality in both product and service delivery.
            </li>
            <li className="m-4">
              <strong>Build Partnerships:</strong> Foster relationships built on
              trust, transparency, and shared goals.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
