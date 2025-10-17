import "./OurLeaders.css"; // component-specific styles
import himanshuImg from "../../assets/Gemini_Generated_Image.png";
import companyImage from "../../assets/company_image.jpg"


function OurLeaders() {
  return (
    <main className="leaders-section container-fluid py-5 px-3"  style={{ backgroundImage: `url(${companyImage})` }}>
      {/* Header Section */}
      <div className="row justify-content-center align-items-center mb-5">
        <div className="col-md-6 text-center text-md-start">
          <h2 className="display-4 fade-in-text">Our</h2>
          <h1 className="fw-bold display-4 fade-in-text">Leaders</h1>
          <div className="leder-underline"></div>
        </div>

        <div className="col-md-4 text-center text-md-end fade-in-text">
          <p className="fw-semibold text-uppercase">Pecsa.co.in</p>
          {/* <div className="circle-logo mx-auto mx-md-0"></div> */}
        </div>
      </div>
      {/* Leader Cards */}
      <div className="row justify-content-center g-4 mt-4 pt-4">
        {/* Himanshu Card */}
        <div className="col-12 col-md-6 col-lg-5 fade-in-card">
          <div className="leader-img-wrapper">
            <img
              src={himanshuImg}
              alt="Himanshu Ahake"
              className="leader-img"
            />
          </div>
          <div className="leader-card p-4 text-center shadow-lg">
            <h3 className="fw-bold mt-3">Himanshu Ahake</h3>
            <p className="fst-italic text-light">Founder & CEO</p>
            <p className="leader-desc mt-3">
              <span className="quote">❝</span> As Founder and CEO of PITS,
              Himanshu drives the company with a vision of innovation,
              excellence, and impact. With a strong focus on technology-driven
              solutions, he leads the team in transforming ideas into scalable
              products that empower businesses and communities. His mission is
              to position PITS as a trusted partner in digital transformation
              while fostering a culture of growth, creativity, and purpose.
              <span className="quote">❞</span>
            </p>
          </div>
        </div>

        {/* Prajwal Card */}
        <div className="col-12 col-md-6 col-lg-5 fade-in-card">
          <div className="leader-img-wrapper">
            <img
              src={himanshuImg}
              alt="Prajwal Dongarwar"
              className="leader-img"
            />
          </div>
          <div className="leader-card p-4 text-center shadow-lg">
            <h3 className="fw-bold mt-3">Prajwal Dongarwar</h3>
            <p className="fst-italic text-light">Co-founder & CFO</p>
            <p className="leader-desc mt-3">
              <span className="quote">❝</span> As Co-Founder and CFO of Pecsa IT
              Solutions, Prajwal brings financial wisdom, strategic insight, and
              a commitment to transparency, ensuring the company’s stability and
              growth. His goal is to build trust through disciplined finance
              while guiding PITS to create innovative solutions that make a
              meaningful difference in the world.
              <span className="quote">❞</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default OurLeaders;
