import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {getMetaByTokenId} from "../services/metaService";
import {toast} from "react-toastify";
import {
    ListingType, web3,
} from "../utils/blockchainInteractor";
import {Modal, Spinner} from "reactstrap";
import ListForm from "./listForm";
import AuctionForm from "./auctionForm";
import UserContext from "../contexts/UserContext";
import {getTokenInfo} from "../utils/commonInteractor";
import {buyToken, unListTokenMarketplace} from "../utils/marketPlaceInteractor";
import {bidByTokenId, cancelAuctionByTokenId, getCurrentPriceByTokenId} from "../utils/auctionInteractor";
import useLoader from "../hooks/useLoader";
import { toInteger } from 'lodash';
import Countdown from './countdown';
import * as moment from 'moment'

function NftDetail({match}) {
    const {state} = useContext(UserContext);
    const [loader, showLoader, hideLoader] = useLoader();
    const history = useHistory();
    const [nftDetails, setNftDetails] = useState(null);
    const [tokenId, setTokenId] = useState(match.params.id);
    const [openListModal, setOpenListModal] = useState(false);
    const [openAuctionModal, setOpenAuctionModal] = useState(false);

    useEffect(() => {
        init();
    }, [])

    const init = async ()=>{
        if(match && match.params && match.params.id ){
            match.params.id && await fetchNFT(tokenId);
        }else{
            toast.error('NFT not Found!');
            history.replace('/');
        }
    }

    const fetchNFT = async id  => {
        try {

            showLoader();
            const {data: nft} = await getMetaByTokenId(id);
            const res = await getTokenInfo(id);
            await setNftDetails({...nft, ...res});
        } catch (e) {
            toast.error('Something went wrong!');
            history.replace('/');
        }finally {
            hideLoader();
        }
    };

    const listItem = async () => {
        setOpenListModal(true);
    }

    const createAuction = async () => {
        setOpenAuctionModal(true);
    }

    const unListItem = async () => {
        try {
            showLoader();
            const res =  await  unListTokenMarketplace(tokenId);
        }catch (e) {
            toast.error('Something went wrong!');
        } finally {
            hideLoader();
            fetchNFT(tokenId);
        }
    }

    const cancelAuction = async () => {
        try {
            showLoader();
            const res =  await  cancelAuctionByTokenId(tokenId);
        }catch (e) {
            toast.error('Something went wrong!');
        } finally {
            hideLoader();
            fetchNFT(tokenId);
        }
    }
    
    const handleBuy = async ()=>{
        try {
            showLoader();
            const res = await buyToken(tokenId, nftDetails?.price);
        }catch (e) {
            toast.error('Something went wrong!');
        } finally {
            hideLoader();
            fetchNFT(tokenId);
        }
    }
        
    const handleBid = async ()=>{
        try {
            showLoader();
            const res = await bidByTokenId(tokenId);
        }catch (e) {
            toast.error('Something went wrong!');
        } finally {
            hideLoader();
            fetchNFT(tokenId);
        }
    }


    return (
        <>
            {
                loader
            }
            nftDetails &&  <section className="browse-detail-area page-paddings" style={{paddingTop:'65px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="browse-detail-images text-center">
                                <div className="browse-detail-large">
                                    <img src={nftDetails?.image || '/assets/images/preloader.png'} alt=""/>
                                </div>
                                { nftDetails?.owner.toLowerCase() === state?.user?.address.toLowerCase() && <>
                                    {
                                        ListingType[nftDetails?.listingType] === ListingType.NOT_LISTED
                                        &&
                                        <>
                                            <div className="browse-vote-btn mt-4">
                                                <button onClick={() => listItem()} className="theme-btn">Sell Item <i
                                                    className="fas fa-arrow-right"/></button>
                                            </div>
                                            <div className="browse-vote-btn mt-4">
                                                <button onClick={() => createAuction()} className="theme-btn">Create
                                                    Auction <i className="fas fa-arrow-right"/></button>
                                            </div>
                                        </>
                                    }

                                    {
                                        ListingType[nftDetails?.listingType] === ListingType.AUCTION
                                        &&
                                        <>
                                            <div className="browse-vote-btn mt-4">
                                                <button onClick={() => cancelAuction()} className="theme-btn">Cancel
                                                    Auction <i className="fas fa-arrow-right"/></button>
                                            </div>
                                        </>
                                    }

                                    {
                                        ListingType[nftDetails?.listingType] === ListingType.MARKETPLACE
                                        &&
                                        <>
                                            <div className="browse-vote-btn mt-4">
                                                <button onClick={() => unListItem()} className="theme-btn">UnList Item <i
                                                    className="fas fa-arrow-right"/></button>
                                            </div>
                                        </>
                                    }
                                </> }

                            </div>

                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            {/*<pre>{JSON.stringify(nftDetails,null,4)}</pre>*/}
                            <div className="browse-detail-info">
                                <h1 className="theme-title">{nftDetails?.name}</h1>
                                <p className="theme-description">{nftDetails?.description}</p>
                                <div className="starting-bid">
                                    <ul>
                                        <li>Token ID: <span>{tokenId}</span></li>
                                        <li>Category: <span>{nftDetails?.category}</span></li>
                                        <li>Owner: <span><img src="https://d2alktbws33m8c.cloudfront.net/badges.svg"
                                                              alt=""/></span>{nftDetails?.owner}</li>
                                        {nftDetails?.external_url && <li>External Link: <a href={nftDetails?.external_url} target="_blank"
                                                            style={{color: '#008000'}}>{nftDetails?.external_url}</a>
                                        </li>}
                                        <li>
                                            {nftDetails?.listingType === ListingType.NOT_LISTED && <span>This NFT is not listed</span>}
                                            {nftDetails?.listingType === ListingType.AUCTION && <span>This NFT is listed for Auction</span>}
                                            {nftDetails?.listingType === ListingType.MARKETPLACE && <span>This NFT is listed for Sale on Marketplace</span>}
                                        </li>
                                        {nftDetails?.listingType === ListingType.AUCTION && <>
                                            <li>Auction Started On: <span>{moment(toInteger(nftDetails?.startedAt)*1000).format('MM/DD/YYYY hh:mm:ss a')}</span></li>
                                            <li>Started At Price: <span>{`${Number(web3.utils.fromWei(nftDetails?.startingPrice)).toString()} ETH`}</span></li>
                                            <li>Ending At Price: <span>{`${Number(web3.utils.fromWei(nftDetails?.endingPrice)).toString()} ETH`}</span></li>
                                            <li>Duration: <span>{Math.round(toInteger(nftDetails?.duration) / 3600)} Hours</span></li>
                                        </>  }
                                    </ul>
                                </div>
                                {
                                    ListingType.NOT_LISTED !== nftDetails?.listingType && <div className="browse-bid-detail">
                                        <div className="browse-bid-box">
                                            {
                                                ListingType[nftDetails?.listingType] === ListingType.MARKETPLACE &&
                                                <h2>Price: <span>{web3.utils.fromWei(nftDetails?.price, 'ether')} ETH</span></h2>
                                            }

                                            {
                                                ListingType[nftDetails?.listingType] === ListingType.AUCTION &&
                                                <h2>Current Price: <span>{Number(web3.utils.fromWei(nftDetails?.currentPrice)).toFixed(5)} ETH</span></h2>
                                            }
                                            {
                                                ListingType[nftDetails?.listingType] === ListingType.AUCTION &&
                                                <>
                                                    { 
                                                        nftDetails?.owner.toLowerCase() !== state?.user?.address.toLowerCase() && 
                                                        <div className="browse-buy-btn mb-2 text-center">
                                                            <button className="theme-btn" onClick={handleBid}>Place Bid and Buy</button>
                                                        </div>
                                                    }
                                                    <Countdown deadline={new Date((toInteger(nftDetails?.startedAt) + toInteger(nftDetails?.duration))*1000)}></Countdown>
                                                </>
                                            }

                                        </div>

                                        {
                                            nftDetails?.owner.toLowerCase() !== state?.user?.address.toLowerCase() &&  ListingType[nftDetails?.listingType] === ListingType.MARKETPLACE &&
                                            <>
                                                <div className="browse-buy-btn">
                                                    <button onClick={handleBuy} className="theme-btn">Buy Now - {web3.utils.fromWei(nftDetails?.price,'ether')} ETH</button>
                                                </div>
                                            </>
                                        }

                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Modal isOpen={openListModal} toggle={() => setOpenListModal(!openListModal)} backdrop={true}
                   keyboard={false}>
                <div className="wallet-detected-box" style={{background: 'none'}}>
                    <div className="wallet-detected-item">
                        <div onClick={() => setOpenListModal(!openListModal)} className="wallet-close-btn">
                            <i className="fas fa-times"/>
                        </div>
                        <div className="wallet-detected-media">
                            <img src="assets/images/marketplace-mockup.png" alt=""/>
                        </div>
                        <ListForm reset={()=>{fetchNFT(tokenId);setOpenListModal(false)}} tokenId={tokenId}/>
                    </div>
                </div>
            </Modal>

            <Modal isOpen={openAuctionModal} toggle={() => setOpenAuctionModal(!openAuctionModal)} backdrop={true}
                   keyboard={false}>
                <div className="wallet-detected-box" style={{background: 'none'}}>
                    <div className="wallet-detected-item">
                        <div onClick={() => setOpenAuctionModal(!openAuctionModal)} className="wallet-close-btn">
                            <i className="fas fa-times"/>
                        </div>
                        <div className="wallet-detected-media">
                            <img src="assets/images/marketplace-mockup.png" alt=""/>
                        </div>
                        <AuctionForm reset={()=>{fetchNFT(tokenId);setOpenAuctionModal(false)}} tokenId={tokenId}/>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default NftDetail;
