import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import MintPage from "./pages/mintPage";
import React, {Component} from 'react';
import Storefront from "./pages/storefront";
import Home from "./pages/home";
import NftDetail from "./pages/nftDetail";
import Header from "./pages/header";
import Footer from "./pages/footer";
import Profile from "./pages/profile";
import MyNfts from "./pages/myNfts";
import {connectWallet, getCurrentWalletConnected} from "./utils/blockchainInteractor";
import {Modal} from "reactstrap";
import {getUserByAddress} from "./services/userService";
import {signIn, signUp} from "./utils/authInteractor";
import SignUpForm from "./pages/signUpForm";
import ProtectedRoute from "./shared/ProtectedRoute";
import UserContext from "./contexts/UserContext";



class App extends Component {

    state = {
        openDownloadMetaMask:false,
        openSignUp:false,
        openSignIn:false,
        user: null
    }

    componentDidMount() {
        this.init();
    }

    init() {
        if (window.ethereum) {
            this.walletListener();
            this.handleChangeState({user: JSON.parse(localStorage.getItem('user'))});
        } else {
            this.handleChangeState({user:null,openDownloadMetaMask:true})
            this.logout();
        }
    }

    walletListener =  () =>{
        window.ethereum.on('accountsChanged', async accounts => {
            this.logout();
            if (accounts.length > 0) {
                this.openAuthFlow(getCurrentWalletConnected());
            }else{
                this.handleChangeState({
                    openDownloadMetaMask:false,
                    openSignUp:false,
                    openSignIn:false,
                    user: null
                })
            }
        });
    }

    handleChangeState = (updatedState)=>{
        this.setState({...this.state,...updatedState});
    }

    toggleModal = (modalKey) => {
        this.handleChangeState({[modalKey]:!this.state[modalKey]})
    }

    
    logout = () =>{
        localStorage.clear();
        this.handleChangeState({
            openDownloadMetaMask:false,
            openSignUp:false,
            openSignIn:false,
            user: null
        })
    }

    openAuthFlow = async (address)=>{
        if (address) {
            try {
                const userResponse = await getUserByAddress(address);
                if (userResponse.status === 200) {
                    if (!window.localStorage.getItem('token')) {
                        this.toggleAuthState('openSignIn',null);
                    }
                } else if (userResponse.status === 404) {
                    this.toggleAuthState('openSignUp',null);
                }
            } catch (err) {
                toast.error(err);
            }
        }
    }

    handleStart =  async () =>{
        if(this.isMetaMaskInstalled()){
            connectWallet();
            await this.openAuthFlow(getCurrentWalletConnected());
        }
        else this.handleChangeState({
            openDownloadMetaMask:true,
            openSignUp:false,
            openSignIn:false,
            user: null
        });
    }

    isMetaMaskInstalled = ()=>!!window.ethereum;

    handleSignIn= async ()=>{
        const { user } = await signIn(getCurrentWalletConnected());
        this.toggleAuthState('openSignIn',user);
    }
    handleSignUp= async (val)=>{
        const { user } = await signUp(getCurrentWalletConnected(),val);
        this.toggleAuthState('openSignUp',user);
    }

    toggleAuthState(modalKey,user){
        this.handleChangeState({[modalKey]: !this.state[modalKey],user })
    }

    render() {
        return <>
            <BrowserRouter>
                <UserContext.Provider value={{state:this.state,changeState:(state)=>this.handleChangeState(state),handleStart:this.handleStart}}>
                <div>

                        {/*<Header logout={()=>this.logout()} onStart={this.handleStart}/>*/}
                        <ToastContainer
                            autoClose={3000}
                            hideProgressBar={false}
                            closeOnClick={true}
                        />
                        <Switch>
                            <Route exact path="/create" component={MintPage}/>
                            <Route exact path="/store-front" component={Storefront}/>
                            <Route exact path="/nft/:id" component={NftDetail}/>
                            <ProtectedRoute exact path="/profile" component={Profile}/>
                            <ProtectedRoute exact path="/my-nfts" component={MyNfts}/>
                            <Route exact path="/" component={Home}/>
                        </Switch>
                        {/*<Footer/>*/}
                    </div>
                <Modal isOpen={this.state.openDownloadMetaMask} toggle={()=> this.toggleModal('openDownloadMetaMask')} backdrop={true} keyboard={false}>
                    <div className="wallet-detected-box" style={{background:'none'}}>
                        <div className="wallet-detected-item">
                            <div className="wallet-detected-media">
                                <img src="/assets/images/marketplace-mockup.png" alt="" />
                            </div>
                            <div className="wallet-detected-info">
                                <h3 className="theme-title">No Web3 wallet detected</h3>
                                <p className="theme-description">You need MetaMask a browser extension. MetaMask will let you use our blockchain features, like buying crypto collectibles</p>
                                <div className="wallet-detected-btn">
                                    <a href="https://metamask.io/download" rel="noreferrer" role="button" className="theme-btn" target="_blank">Get MetaMask Wallet</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
                <Modal isOpen={this.state.openSignIn} toggle={()=>this.toggleModal('openSignIn')} backdrop={true} keyboard={false}>
                    <div className="wallet-detected-box" style={{background:'none'}}>
                        <div className="wallet-detected-item">
                            <div onClick={()=>this.toggleModal('openSignIn')} className="wallet-close-btn">
                                <i className="fas fa-times" />
                            </div>
                            <div className="wallet-detected-media">
                                <img src="/assets/images/marketplace-mockup.png" alt="" />
                            </div>
                            <div className="wallet-detected-info">
                                <h3 className="theme-title">Sign In</h3>
                                <p className="theme-description">You’ve been signed out. Click the button to sign back in.</p>
                                <div className="theme-input-box">
                                <input className="theme-input" type="text" disabled name="walletAddress" value={getCurrentWalletConnected()}/>
                                </div>
                                <div className="wallet-detected-btn mt-2">
                                    <button onClick={this.handleSignIn} className="theme-btn" target="_blank">Sign In</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
                <Modal isOpen={this.state.openSignUp} toggle={()=>this.toggleModal('openSignUp')} backdrop={true} keyboard={false}>
                    <div className="wallet-detected-box" style={{background:'none'}}>
                        <div className="wallet-detected-item">
                            <div onClick={()=>this.toggleModal('openSignUp')} className="wallet-close-btn">
                                <i className="fas fa-times" />
                            </div>
                            <div className="wallet-detected-media">
                                <img src="/assets/images/marketplace-mockup.png" alt="" />
                            </div>
                            <SignUpForm onSignUp={(val)=>this.handleSignUp(val)} />
                        </div>
                    </div>
                </Modal>
                </UserContext.Provider>
            </BrowserRouter>
              </>
    }
}

export default App;
