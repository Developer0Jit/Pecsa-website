import "../../App.css";

export default function AboutUs() {
  return (
    <main className="container-fluid d-flex flex-column justify-content-center align-items-center min-vh-100 py-5 px-3">
      <div className="row w-100 align-items-center px-md-5">
        {/* LEFT CONTENT */}
        <div className="col-lg-6 col-md-12 mb-5 text-center text-lg-start">
          <h1 className="display-4 mb-0">ABOUT</h1>
          <h1 className="fw-bold display-4 mb-3">US</h1>
          <h1 className="fw-bold display-4 border-line" />

          {/* Border highlight box */}
          <article className="position-relative border border-5 border-black rounded-5 mt-md-5 p-4 mt-4 py-md-5 shadow-sm bg-transparent">
            <i
              className="fa-solid fa-quote-left position-absolute"
              style={{
                top: "-10px",
                left: "-10px",
                fontSize: "2rem",
                background: " rgb(223, 223, 223)",
                color: "#000",
                padding: "10px",
                borderRadius: "50%",
              }}
            ></i>
            <p className="mb-0 fs-5">
              Innovate. Create. Grow. That's the spirit of PECSA IT Solutions
              your trusted partner in building secure and scalable digital
              solutions that drive measurable impact.
            </p>
            {/* Bottom-right quote icon */}
            <i
              className="fa-solid fa-quote-right position-absolute"
              style={{
                bottom: "-10px",
                right: "-10px",
                fontSize: "2rem",
                background: " rgb(223, 223, 223)",
                color: "#000",
                padding: "10px",
                borderRadius: "50%",
              }}
            ></i>
          </article>
        </div>

        {/* RIGHT SIDE DECORATIVE ELEMENT */}
        <div className="col-lg-6 col-md-12 d-sm-none d-md-flex justify-content-center justify-content-lg-end">
          <div
            className="text-white rounded-start-pill"
            style={{
              backgroundColor: "rgb(49, 46, 67)",
              position: "relative",
              width: "550px",
              padding: "5px",
              transform: "rotate(-90deg)",
              transformOrigin: "center",
            }}
          >
            <div className="my-4">
              <div style={{ height: "160px" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="row mt-5 w-100 justify-content-center">
        <div className="col-lg-8 col-md-10 text-center text-lg-start">
          <p className="fs-5">
            PECSA IT Solutions is a forward-thinking technology company
            dedicated to helping businesses harness the power of innovation. We
            create smart, scalable, and secure digital solutions designed to
            make operations smoother, compliance simpler, and growth faster.
          </p>
          <p className="fs-5">
            Founded with the belief that technology should work for people, not
            the other way around, PECSA has grown into a trusted partner for
            over 250 organizations across Maharashtra. We focus on understanding
            your challenges deeply, then tailoring our solutions to fit your
            exact needs.
          </p>
          <p className="fs-5">
            Our approach blends industry expertise, cutting-edge technology, and
            a commitment to long-term relationships — ensuring that you don’t
            just adopt software but achieve measurable business success.
          </p>
        </div>
      </div>
    </main>
  );
}
