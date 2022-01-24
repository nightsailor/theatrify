import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import passwordStrengthChecker from "../../common/passwordstrengthcheck";
import { ProgressBarFlexible } from "../../common/progresscomponent";
import img from './1.png';

const SignInFormContainer = () => {
  const [percentage, setpercentage] = useState(0);
  const [successMsg, setsuccessMsg] = useState();

  // For Handling Eye-shield of two password-field
  const handleEyeOnOff = (inputClass, eyeClass) => {
    const input = document.getElementsByTagName("input");
    const eye = document.getElementsByTagName("i");

    if (input[inputClass].type === "password") {
      input[inputClass].type = "text";
      eye[eyeClass].classList.remove("fa-eye-slash");
      eye[eyeClass].classList.add("fa-eye");
    } else {
      input[inputClass].type = "password";
      eye[eyeClass].classList.remove("fa-eye");
      eye[eyeClass].classList.add("fa-eye-slash");
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let email = document.getElementById("form2Example17").value;
    let password = document.getElementById("form2Example27").value;
    console.log(email, password)
    if (email && password) {

      try {
        const res = await axios.post("/api/auth/login", {
          email,
          password,
        });
        res.data && navigate("/");
      } catch (err) {
        console.log(err);
        setsuccessMsg("Invalid username or password!");
      }
    }
  };

  return (
    <div className="container py-5 h-100 background-container">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div
            className="card card-manual-style"
            style={{ borderRadius: "1rem" }}
          >
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block left-side-img">
                <img
                  src={img}
                  alt="login form"
                  className="img-fluid h-100"
                  style={{ borderRadius: "1rem 0 0 1rem" }}
                />
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
                {successMsg && (
                    <div
                      className="p-3 mb-3 text-center text-white"
                      style={{ background: "#B4161B" }}
                    >
                      <h4>{successMsg}</h4>
                    </div>
                  )}
                  <form>
                    {/* Heading */}
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <span className="h1 fw-bold mb-0 text-white card-name">
                        Signin
                      </span>
                    </div>

                    {/* Email  */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example17"
                        className="form-control form-control-lg input-field"
                        placeholder="Email"
                        name="email"
                        required
                      />
                    </div>

                    {/* Password */}
                    <div className="form-outline mb-4 input-group">
                      <input
                        type="password"
                        id="form2Example27"
                        className="form-control form-control-lg input-field password-field"
                        placeholder="Password"
                        name="password"
                        required
                        onChange={(e) => {
                          setpercentage(
                            passwordStrengthChecker(e.target.value)
                          );
                        }}
                      />

                      <div className="input-group-addon d-flex align-items-center justify-content-center px-2">
                        <a href="#here">
                          <i
                            className="fa fa-eye-slash"
                            aria-hidden="true"
                            style={{ color: "#CAD5E2" }}
                            name="password-eye"
                            onClick={() =>
                              handleEyeOnOff("password", "password-eye")
                            }
                          ></i>
                        </a>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-1 mb-4">
                      <button
                        className="btn mb-2 mb-md-0 btn-block w-100 submit-btn text-white fs-5"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Signin
                      </button>
                    </div>

                    {/* For Switch to LogIn Page */}
                    <p className="text-center text-white fs-6">
                      Don't have an account?{" "}
                      <div
                        href="/signup"
                        className="fw-bold d-inline"
                        style={{ color: "yellow", cursor: "pointer" }}
                        onClick={() => {
                          navigate("/signup");
                        }}
                      >
                        Signup
                      </div>
                    </p>

                    <div className="form-outline mt-5 mb-4">
                      <div
                        className="form-label fw-bold text-white"
                        style={{ letterSpacing: "1px" }}
                      >
                        Password Strength
                      </div>
                      <ProgressBarFlexible value={percentage} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInFormContainer;
