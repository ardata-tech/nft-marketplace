import "react-toastify/dist/ReactToastify.css";
import { Route, Switch, withRouter } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import MintPage from "./pages/mintPage";
import React, { Component } from "react";
import Storefront from "./pages/storefront";
import Home from "./pages/home";
import NftDetail from "./components/NftDetails";
import Profile from "./pages/profile";
import MyNfts from "./pages/myNfts";
import { connectWallet, getCurrentWalletConnected } from "./utils/blockchainInteractor";
import { Modal } from "reactstrap";
import { getUserByAddress } from "./services/userService";
import { signIn, signUp } from "./utils/authInteractor";
import ProtectedRoute from "./shared/ProtectedRoute";
import UserContext from "./contexts/UserContext";
import Sidebar from "./pages/Sidebar";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Loader from "./pages/Loader";

class App extends Component {
  state = {
    openDownloadMetaMask: false,
    user: null,
    errMsg: "",
    isLoading: false,
  };
  componentDidMount() {
    this.init();
  }

  init = () => {
    if (window.ethereum) {
      this.walletListener();
      this.handleChangeState({ user: JSON.parse(localStorage.getItem("user")) });
    } else {
      this.handleChangeState({ user: null, openDownloadMetaMask: true });
      localStorage.clear();
    }
  };

  walletListener = () => {
    window.ethereum.on("accountsChanged", async (accounts) => {
      this.logout();
      if (accounts.length > 0) {
        await this.openAuthFlow(getCurrentWalletConnected());
      } else {
        this.handleChangeState({
          openDownloadMetaMask: false,
          user: null,
        });
      }
    });
  };

  handleChangeState = (updatedState) => {
    this.setState({ ...this.state, ...updatedState });
  };

  toggleModal = (modalKey) => {
    this.handleChangeState({ [modalKey]: !this.state[modalKey] });
  };

  logout = () => {
    localStorage.clear();
    this.handleChangeState({
      openDownloadMetaMask: false,
      user: null,
    });
  };

  openAuthFlow = async (address) => {
    if (address) {
      try {
        const userResponse = await getUserByAddress(address);
        if (userResponse.status === 200) {
          if (!window.localStorage.getItem("token")) {
            console.log("in sign-in");
            this.props.history.push("/sign-in");
          }
        } else if (userResponse.status === 404) {
          this.props.history.push("/sign-up");
        }
      } catch (err) {
        toast.error(err);
      }
    }
  };

  handleStart = async () => {
    if (this.isMetaMaskInstalled()) {
      connectWallet();
      await this.openAuthFlow(getCurrentWalletConnected());
    } else
      this.handleChangeState({
        openDownloadMetaMask: true,
        user: null,
      });
  };

  isMetaMaskInstalled = () => !!window.ethereum;

  handleSignIn = async () => {
    this.handleChangeState({ isLoading: true });
    const { user, success, error } = await signIn(getCurrentWalletConnected());
    this.handleChangeState({ user });
    if (user && success) {
      //   toast.success("Signed in redirecting...");
      window.location.href = "/";
    } else {
      this.handleChangeState({ isLoading: false });
      toast.error(typeof error === "string" ? error : "Somthing went worng");
    }
  };
  handleSignUp = async (val) => {
    this.handleChangeState({ isLoading: true });
    const { user, success, error } = await signUp(getCurrentWalletConnected(), val);
    this.handleChangeState({ user });
    if (user && success) {
      //   toast.success("Signed in redirecting...");
      window.location.href = "/";
    } else {
      this.handleChangeState({ isLoading: false });
      toast.error(typeof error === "string" ? error : "Somthing went worng");
    }
  };

  render() {
    return (
      <>
        <UserContext.Provider
          value={{
            state: this.state,
            changeState: (state) => this.handleChangeState(state),
            handleStart: this.handleStart,
          }}
        >
          <div>
            {this.state.isLoading && <Loader />}
            <ToastContainer autoClose={3000} hideProgressBar={false} closeOnClick={true} />
            <Sidebar onStart={this.handleStart} appInit={this.init} />

            <Switch>
              <Route exact path="/create" component={MintPage} />
              <Route exact path="/store-front" component={Storefront} />
              <Route exact path="/nft/:id" component={NftDetail} />
              <ProtectedRoute exact path="/profile" component={() => <Profile logout={() => this.logout()} />} />
              <ProtectedRoute exact path="/my-nfts" component={MyNfts} />
              <Route exact path="/sign-up" render={() => <Signup onSignUp={(val) => this.handleSignUp(val)} />} />
              <Route exact path="/sign-in" render={() => <Signin handleSignIn={this.handleSignIn} />} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
          <Modal
            isOpen={this.state.openDownloadMetaMask}
            toggle={() => this.toggleModal("openDownloadMetaMask")}
            backdrop={true}
            keyboard={false}
          >
            <div className="wallet-detected-box" style={{ background: "none" }}>
              <div className="wallet-detected-item">
                <div className="wallet-detected-media">
                  <img src="/assets/img/marketplace-mockup.png" alt="" />
                </div>
                <div className="wallet-detected-info">
                  <h3 className="theme-title">No Web3 wallet detected</h3>
                  <p className="theme-description">
                    You need MetaMask a browser extension. MetaMask will let you use our blockchain features, like
                    buying crypto collectibles
                  </p>
                  <div className="wallet-detected-btn">
                    <a
                      href="https://metamask.io/download"
                      rel="noreferrer"
                      role="button"
                      className="btn bg-gradient-primary w-100 mb-0"
                      target="_blank"
                    >
                      Get MetaMask Wallet
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </UserContext.Provider>
      </>
    );
  }
}

export default withRouter(App);
