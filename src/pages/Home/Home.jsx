import { Link } from "react-router-dom";
import "./home.css";
import "../../App.css";

export default function Home() {
  return (
    <main className="home-container d-flex flex-column">
      {/* Top Section */}
      <section className="row align-items-center text-center text-md-start px-3 px-md-5 py-3 top-banner">
        <div className="col-12 col-md-6 mb-3 mb-md-0 wave-container">
          <div className="wave-top"></div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
          <span className="brand-subtitle">Pecsa.co.in</span>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="company-profile row mt-5 px-3 px-md-5 text-center text-md-start">
        <div className="col-12">
          <Link to="/" className="navbar-brand fs-2 fw-bold text-accent">
            PECSA IT Solutions
          </Link>
        </div>

        <div className="col-12 mt-4 fade-in">
          <h1 className="display-2 fw-bold text-dark">PROFILE</h1>
          <div className="underline"></div>
        </div>

        <div className="col-12 mt-3">
          <p className="tagline fs-2 text-secondary">
            Innovating Business Through Technology.
          </p>
        </div>
      </section>

      {/* Year & Logo Section */}
      <section className="row my-5 py-4 year-section align-items-center justify-content-center">
        <div className="col-11 col-md-10 rounded-pill text-white d-flex flex-column flex-md-row align-items-center justify-content-center py-5 year-content">
          <div className="logo-container mb-4 mb-md-0">
            <img
              src="https://static.wixstatic.com/media/a8af9e_4b6602d7f8794a2f878c0322fb473dc8~mv2.jpg/v1/fit/w_350,h_170,al_c/a8af9e_4b6602d7f8794a2f878c0322fb473dc8~mv2.jpg"
              alt="Logo"
              className="company-logo rounded-circle border p-3 bg-secondary border-secondary"
            />
          </div>
          <div className="year-numbers d-flex flex-column align-items-center justify-content-center">
            <h2>2</h2>
            <h2>0</h2>
            <h2>2</h2>
            <h2>5</h2>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section text-end px-4 px-md-5">
        <h1 className="welcome-title">
          Welcome To Our Company{" "}
          <span>
            <i className="fa-solid fa-code text-accent"></i>
          </span>
        </h1>
        <div className="wave-bottom mt-4"></div>
      </section>
    </main>
  );
}
