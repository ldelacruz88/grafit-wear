import React from "react";

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-6 col-sm-3 text-center">
            <h5>Social</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="https://www.instagram.com/grafitwear/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-twitter" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-youtube" />
            </a>
          </div>
          <div className="col"></div>
          <div className="col-sm-4 text-center">
            <a role="button" className="btn btn-link" href="tel:+18299851817">
              <i className="fa fa-phone" /> 1-829-985-1817
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:grafitweartattoo015@gmail.com"
            >
              <i className="fa fa-envelope-o" /> grafitweartattoo015@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
