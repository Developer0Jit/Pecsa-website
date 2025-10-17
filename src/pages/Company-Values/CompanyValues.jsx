import React from "react";
import "./CompanyValues.css"; // Import the custom CSS

export default function CompanyValues() {
  const values = [
    {
      icon: "fa-regular fa-chess-queen",
      title: "Innovation",
      desc: "Staying ahead of trends to ensure our clients are always future ready.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Integrity",
      desc: "Conducting business with honesty and ethical responsibility.",
    },
    {
      icon: "fa-solid fa-users-line",
      title: "Customer Support",
      desc: "Delivering exceptional service and building long-term relationships.",
    },
    {
      icon: "fa-solid fa-medal",
      title: "Excellence",
      desc: "Striving for quality in every interaction, feature, and deliverable.",
    },
  ];

  return (
    <main className="company-values container-fluid min-vh-100 py-5 px-3">
      {/* Title Section */}
      <div className="header-section text-center text-md-start">
        <div>
          <h1 className="display-3">Company</h1>
          <h1 className="fw-bold display-2">Values</h1>
          <div className="underline m-auto"></div>
        </div>
      </div>

      {/* Values Section */}
      <div className="values-container mt-5">
        {values.map((value, index) => (
          <div key={index} className="value-card row align-items-center py-4">
            <div className="col-12 col-md-3 text-center mb-3 mb-md-0">
              <div className="icon-wrapper">
                <i className={`${value.icon} value-icon`}></i>
              </div>
            </div>
            <div className="col-12 col-md-9 text-center text-md-start">
              <h2 className="value-title">{value.title}</h2>
              <p className="value-desc">{value.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
