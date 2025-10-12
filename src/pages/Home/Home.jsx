import { Link } from "react-router-dom";
import "./home.css";
import "../../App.css"

export default function Home() {

  return (
    <main className="d-flex flex-column" style={{ background: "#dfdfdf" }}>
      <div className="row align-items-center text-center text-md-start px-3 px-md-5">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <div class="wave-top"></div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
          <span className="p-md-5 fs-4">Pecsa.co.in</span>
        </div>
      </div>

      {/* Company Profile Section */}
      <div className="row mt-5 px-3 px-md-5 text-center text-md-start">
        <div className="col-12">
          <Link to="/" className="navbar-brand fw-bold fs-3">
            Pecsa IT Solution
          </Link>
        </div>

        <div className="col-12 mt-3">
          <h1 className="display-4 text-dark">PROFILE</h1>
          <h1 className="fw-bold display-4  text-dark">PROFILE</h1>
          <h1 className="fw-bold display-4 mb-3 border-line" />
        </div>

        <div className="col-12">
          <p className="fs-1">Innovating Business Through Technology.</p>
        </div>
      </div>

      <div className="row my-4 py-4">
        <div className="col-2"></div>
        <div
          className="col-10 text-white rounded-start-pill"
          style={{
            backgroundColor: "#312e43",
            position: "relative",
            right: "12px",
          }}
        >
          <div className="row my-4">
            <div
              className="col-4 d-flex justify-content-center"
              style={{ position: "relative", left: "30px" }}
            >
              <img
                src="https://static.wixstatic.com/media/a8af9e_4b6602d7f8794a2f878c0322fb473dc8~mv2.jpg/v1/fit/w_350,h_170,al_c/a8af9e_4b6602d7f8794a2f878c0322fb473dc8~mv2.jpg"
                alt=""
                className="rounded-circle border p-3 bg-secondary border-secondary"
              />
            </div>
            <div className="col-8">
              <div
                className="d-flex flex-column justify-content-center ps-5 ms-5"
                style={{ height: "350px" }}
              >
                <h2>2</h2>
                <h2>0</h2>
                <h2>2</h2>
                <h2>5</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-end me-4">
        <div className="">
          <h1 className="m-4">
            Welcome To Our Company{" "}
            <span>
              <i class="fa-solid fa-code"></i>
            </span>
          </h1>
          <div className="my-4">
            <div class="wave-bottom"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
