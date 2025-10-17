import "../../App.css";
import "./fetaureProject.css";

export default function FutureProjects() {
  return (
    <main className="future-projects-container container-fluid min-vh-100 py-5 px-3">
      {/* Title Section */}
      <section className="title-section text-center text-md-start d-flex justify-content-center">
        <div className="title-content">
          <h1 className="fw-bold display-2 fade-in-text">FUTURE</h1>
          <h1 className="fw-bold display-2 fade-in-text delay">PROJECTS</h1>
          <div className="title-underline"></div>
        </div>
      </section>

      {/* Projects Section */}
      <div className="container text-center text-md-start px-4 px-md-5 mt-5">
        {/* Project 1 */}
        <div className="project-section mb-5 mx-4 p-4 rounded-4 shadow-lg bg-dark-gradient">
          <h1 className="fw-bold mb-3 project-title">
            Society Management System <span>(Flagship Project - Under Development)</span>
          </h1>
          <p className="lead text-light">
            An all-in-one platform for managing residential societies efficiently.
          </p>
          <h5 className="text-accent">Key Features:</h5>
          <ul className="text-start mx-auto" style={{ maxWidth: "800px" }}>
            <li>Automated maintenance billing and payment tracking</li>
            <li>Digital notice boards and resident communication</li>
            <li>Facility booking management</li>
            <li>Visitor and security tracking</li>
          </ul>
          <p className="mt-3 text-light">
            <strong>Benefit To You:</strong> Save administrative time and
            improve resident satisfaction with seamless operations.
          </p>
        </div>

        {/* Project 2 */}
        <div className="project-section mb-5 mx-4 p-4 rounded-4 shadow-lg bg-dark-gradient">
          <h1 className="fw-bold mb-3 project-title">
            Ezydocs <span>(Under Development)</span>
          </h1>
          <p className="lead text-light">
            Ezydocs simplifies applying for official documents like PAN,
            licenses, and certificates with guided digital forms, smart
            validation, and multi-language support — making the process quick
            and hassle-free.
          </p>
          <p className="text-light">
            It ensures easy, reliable, and accessible documentation for
            individuals and institutions.
          </p>
        </div>

        {/* Project 3 */}
        <div className="project-section mb-5 mx-4 p-4 rounded-4 shadow-lg bg-dark-gradient">
          <h1 className="fw-bold mb-3 project-title">
            School ERP <span>(Under Development)</span>
          </h1>
          <p className="lead text-light">
            Bridging Teachers, Students & Parents for True Growth.
          </p>
          <p className="text-light">
            Our School ERP goes beyond just record-keeping and administration.
            It acts as a bridge between teachers, students, and parents —
            fostering communication and collaboration.
          </p>
          <p className="text-light">
            It focuses on student development, not just paperwork. From academic
            tracking to performance insights and parent-teacher engagement, this
            ERP helps schools provide a holistic learning environment while
            simplifying administrative tasks.
          </p>
        </div>
      </div>
    </main>
  );
}
