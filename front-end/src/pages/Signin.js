import React from "react";
import { Link } from "react-router-dom";
import { getCurrentWalletConnected } from "../utils/blockchainInteractor";

function Signin({ handleSignIn }) {
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
                <h1 className="text-white mb-2 mt-5">Welcome Back!</h1>
                <p className="text-lead text-white">You’ve been signed out. Click the button to sign back in.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-lg-n10 mt-md-n11 mt-n10">
            <div className="col-lg-5 col-md-7 mx-auto mb-30">
              <div className="card z-index-0">
                <div className="card-header text-center gray-bg pt-4">
                  <h5>Sign in Now</h5>
                </div>
                <div className="card-body">
                  <div>
                    <div className="mb-3 mt-10p" />
                    <div className="mb-3">
                      <input
                        type="text"
                        disabled
                        name="walletAddress"
                        value={getCurrentWalletConnected()}
                        className="form-control"
                        placeholder="Wallet Address"
                        aria-label="WalletAddress"
                      />
                    </div>
                    <div className="text-center">
                      <button onClick={handleSignIn} className="btn bg-gradient-dark w-100 my-4 mb-2">
                        sign in
                      </button>
                    </div>
                    <p className="text-sm mt-3 mb-0">
                      Create New account?{" "}
                      <Link to="/sign-up" className="text-dark font-weight-bolder">
                        Sign up
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

export default Signin;
