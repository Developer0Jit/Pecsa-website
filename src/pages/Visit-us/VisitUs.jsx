import "./VisitUs.css";
// import pecsaLogo from "../assets/pecsaLogo.png";

function VisitUs() {
  return (
    <main className="visit-container container-fluid min-vh-100 d-flex flex-column align-items-center justify-content-center">
      {/* Top Logo Section */}
      <div className="logo-section text-center">
        <div className="logo-circle">
          <img src="https://static.wixstatic.com/media/a8af9e_4b6602d7f8794a2f878c0322fb473dc8~mv2.jpg/v1/fit/w_350,h_170,al_c/a8af9e_4b6602d7f8794a2f878c0322fb473dc8~mv2.jpg"
             alt="PECSA Logo" className="logo-img" />
        </div>
      </div>

      {/* Thank You Text */}
      <h1 className="fw-bold display-4 thank-text mt-4 fade-in">Thank You</h1>

      {/* "Visit us on" Heading */}
      <h1 className="visit-heading mt-5 pt-5">visit us on</h1>

      {/* Contact Card */}
      <div className="contact-card mt-4 fade-up text-center">
        <ul className="contact-list list-unstyled mt-3">
          <li>
            <i className="fa-solid fa-phone"></i>
            <span>+91-9420422613</span>
          </li>
          <li>
            <i className="fa-solid fa-globe"></i>
            <span>www.pecsa.co.in</span>
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>
            <span>pecsaitsolutions@gmail.com</span>
          </li>
          <li>
            <i className="fa-solid fa-location-dot"></i>
            <span>
              Wing B Incubation Center, Priyadarshini College of Engineering,
              Lokmanya Nagar, Nagpur
            </span>
          </li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className="social-section text-center d-flex mt-5">
        <a href="#" className="social-icon">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>

      <p className="social-handle pt-4">@pecsaitsolutions</p>
    </main>
  );
}

export default VisitUs;
