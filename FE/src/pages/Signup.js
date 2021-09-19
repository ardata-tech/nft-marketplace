import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup({ onSignUp }) {
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    username: "",
  });

  const handleChange = (e) => {
    const updated = { [e.target.name]: e.target.value };
    setSignUpForm({ ...signUpForm, ...updated });
  };

  return (
    <main className="main-content mt-1 border-radius-lg">
      <section className="h-100-vh mb-8">
        <div
          className="page-header align-items-start section-height-50 pt-5 pb-11 m-3 border-radius-lg"
          style={{ backgroundImage: 'url("/assets/img/curved-images/curved14.jpg")' }}
        >
          <span className="mask bg-gradient-dark opacity-6" />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 text-center mx-auto">
                <h1 className="text-white mb-2 mt-5">Welcome!</h1>
                <p className="text-lead text-white">
                  Your email address is only used to send you important updates.
                  <br /> Your username is how other users will identify you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-lg-n10 mt-md-n11 mt-n10">
            <div className="col-lg-5 col-md-7 mx-auto mb-30">
              <div className="card z-index-0">
                <div className="card-header gray-bg text-center pt-4">
                  <h5>Register</h5>
                </div>
                <div className="card-body">
                  <div>
                    <div className="mb-3">
                      <input
                        type="email"
                        name="email"
                        value={signUpForm.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Email"
                        aria-label="Email"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        name="username"
                        value={signUpForm.username}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                    <div className="text-center">
                      <button
                        disabled={!signUpForm.email || !signUpForm.username}
                        onClick={() => onSignUp(signUpForm)}
                        className="btn bg-gradient-dark w-100 my-4 mb-2"
                      >
                        Sign up
                      </button>
                    </div>
                    <p className="text-sm mt-3 mb-0">
                      Already have an account?{" "}
                      <Link to="/sign-in" className="text-dark font-weight-bolder">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Signup;
