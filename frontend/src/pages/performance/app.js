import { useState } from "react";
import { useNavigate } from "react-router";
import { ProgressBarFlexible } from "../../common/progresscomponent";
import './style.css'
// import './all.min.css'
import './bootstrap.min.css'
import './responsive-style.css'

export default function Performance() {
  return (
    <body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="75" style={{backgroundColor: "#091020"}} >
      <header className="header-wrapper">
        <nav className="navbar navbar-expand-lg fixed-top header-scrolled">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img className="home-image img-fluid" src="https://raw.githubusercontent.com/nightsailor/theatrify/master/frontend/achintya-page/assets/icons8-home.svg" alt="Logo" style={{height: "45px", width: "auto"}} />
            </a>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
              aria-label="Toggle navigation">
              <i className="fas fa-stream navbar-toggler-icon"></i>
            </button>
            <div className="navbar-collapse justify-content-end collapse" id="navbarNav">
              <ul className="navbar-nav menu-navbar-nav">
                <li className="nav-item mt-3 mt-lg-0">
                  <a className="main-btn" href="#contact">EVENT ENTRY FORM</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <center>
        <section className="banner-wrapper" id="home">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center text-md-start">
                <center>
                  <h1 className="headtitle" style={{ fontSize: "54px" }}>WELCOME TO THE RENOSANCE OF THEATER</h1>
                  <h2>A mission to bring back THEATER<br />
                    <br />
                    <span style={{color: "yellow"}}> Just fill the form below and your <br />
                      Event will me made available on our website <br />
                      for the whole world!
                                    </span>
                  </h2>
                </center>
              </div>
            </div>
          </div>
        </section>
      </center>

      <section className="contact-wrapper" id="contact">
        <br />
        <br />
        <br />
        
        <div className="container">
          <div className="row justify-content-between align-items-center text-lg-start text-center">
            <div className="col-lg-6 order-2 order-lg-1 pe-lg-5">
              <h2 className="headtitle">FILL THE FORM HERE</h2>

              <form action="" method="POST">
                <div className="mb-4">
                  <input type="text" name="name" className="form-control" placeholder="Your Name..." autocomplete="off" />
                </div>
                <div className="mb-4">
                  <input type="email" name="email" className="form-control" placeholder="Your Email..." autocomplete="off" />
                  <input type="hidden" name="_captcha" value="false" />
                </div>
                <div className="mb-4">
                  <input type="number" name="crew number" className="form-control" placeholder="Your Total Crew..." autocomplete="off" />
                </div>
                <div className="mb-4">
                  <textarea id="address" name="text" cols="48" rows="4" className="form-control" placeholder="Write the address of your Event..."
                    autocomplete="off"></textarea>
                </div>
                <div className="mb-4">
                  <textarea id="Theme" name="text" cols="48" rows="4" className="form-control"
                    placeholder="Write the Theme or the Message of your performance..." autocomplete="off"></textarea>
                </div>
                <button className="main-btn" type="submit">Submit</button>
              </form>
            </div>
            <div className="col-lg-6 order-1 order-lg-1 mb-4 mb-lg-0">
              <img src="https://raw.githubusercontent.com/nightsailor/theatrify/master/frontend/achintya-page/assets/kyle-head-p6rNTdAPbuk-unsplash.jpg" alt="Contact" className="img-fluid" style={{height: "500px", width: "auto"} } />
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        <center>

          <div className="container">
            <p className="headtitle">
              Subscribe to our NewsLetter here!
                </p>
            <div className="mb-4">
              <textarea id="Theme" name="text" cols="20" rows="1" className="form-control"
                placeholder="Enter your email address....." autocomplete="off"></textarea>
            </div>
            <button className="main-btn" type="subscribe">Subscribe</button>
          </div>
        </center>

      </section>

    </body>
  );
}