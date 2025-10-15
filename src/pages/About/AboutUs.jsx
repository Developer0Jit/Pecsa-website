import "./AboutUs.css";

export default function AboutUs() {
  return (
    <main className="about-page container-fluid d-flex flex-column justify-content-center align-items-center min-vh-100 py-5 px-3">
      <div className="row w-100 align-items-center px-md-5">
        {/* LEFT CONTENT */}
        <div className="col-lg-6 col-md-12 mb-5 text-center text-lg-start fade-in">
          <h1 className="display-4 mb-0 text-gradient">ABOUT</h1>
          <h1 className="fw-bold display-4 mb-3 text-gradient">US</h1>
          <div className="underline mb-4 mx-auto mx-lg-0"></div>

          {/* Quote Box */}
          <article className="quote-box position-relative mt-md-5 mt-4 p-4 p-md-5">
            <i className="fa-solid fa-quote-left quote-icon quote-left"></i>
            <p className="mb-0 fs-5">
              Innovate. Create. Grow. That's the spirit of{" "}
              <strong>PECSA IT Solutions</strong> — your trusted partner in
              building secure and scalable digital solutions that drive
              measurable impact.
            </p>
            <i className="fa-solid fa-quote-right quote-icon quote-right"></i>
          </article>
        </div>

        {/* RIGHT DECORATIVE ELEMENT */}
        <div className="col-lg-6 col-md-12 d-none d-lg-flex justify-content-center justify-content-lg-end fade-in-delayed">
          <div className="decorative-bar rounded-start-pill"></div>
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="row mt-5 w-100 justify-content-center fade-in-slow">
        <div className="col-lg-8 col-md-10 text-center text-lg-start about-text">
          <p className="fs-5">
            <strong>PECSA IT Solutions</strong> is a forward-thinking technology
            company dedicated to helping businesses harness the power of
            innovation. We create smart, scalable, and secure digital solutions
            designed to make operations smoother, compliance simpler, and growth
            faster.
          </p>
          <p className="fs-5">
            Founded with the belief that technology should work for people, not
            the other way around, PECSA has grown into a trusted partner for
            over <strong>250 organizations</strong> across Maharashtra. We focus
            on understanding your challenges deeply, then tailoring our
            solutions to fit your exact needs.
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
