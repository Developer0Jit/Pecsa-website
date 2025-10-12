import React from "react";

function Footer() {
  return (
    <footer
      className="bg-gray-900 text-white text-center py-4 position-relative"
      style={{ backgroundColor: "#312e43", color: "#dfdfdf" }}
    >
      © {new Date().getFullYear()} Pecsa IT Solution. All rights reserved.
    </footer>
  );
}

export default Footer;
