import { toInteger } from 'lodash';
import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import { getCurrentPriceByTokenId } from '../utils/auctionInteractor';
import {ListingType, web3} from '../utils/blockchainInteractor';
import classNames from "classnames";

function NftCard({isMyNft=false,nft}) {
    const history = useHistory();
    const [auctionDetails, setAuctionDetails] = useState(null);

    useEffect(()=>{
        setAuctionDetailsForNFT(nft.tokenId)
    },[nft])

    const setAuctionDetailsForNFT = async (id)=>{
        if(nft.listingType === ListingType.AUCTION){
            setAuctionDetails({
                currentPrice: Number(web3.utils.fromWei(await getCurrentPriceByTokenId(id))).toFixed(5),
                timeRemaining: getTimeRemaining(nft),
            })
        }
    }

    const getTimeObj = (totalSeconds) => {
        let secondsRemaining = totalSeconds;
        const days = Math.floor(secondsRemaining / (60 * 60 * 24));
        secondsRemaining = secondsRemaining - days*24*60*60;
        const hours = Math.floor(secondsRemaining / (60 * 60));
        secondsRemaining = secondsRemaining - hours*60*60;
        const minutes = Math.floor(secondsRemaining / (60));
        secondsRemaining = secondsRemaining - minutes*60;
        const seconds = Math.floor(secondsRemaining);
        return {days, hours, minutes, seconds, totalSeconds};
    }

    const getTimeRemaining = (res) => {
        const today = new Date();
        const endDate = new Date((toInteger(res.startedAt) + toInteger(res.duration))*1000);
        if(endDate <= today)
            return getTimeObj(0);
        let secondsRemaining = Math.floor(Math.abs(endDate - today)/1000);
        return getTimeObj(secondsRemaining);
    }
    
    return (
        <div onClick={()=>history.push(`/nft/${nft.tokenId}`)} className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12" >
            <div className={classNames({'item-group':true,'card-min-ht':!isMyNft})} >
                <span className="store-label">{nft?.category || 'N/A'}</span>
                <div className="item-group-content">
                    <div className="item-group-avtar">
                        <img src={nft?.image || '/assets/images/preloader.png'} alt="Nft-image" />
                    </div>
                    <h3 className="theme-title"><span>{nft?.name || 'Demo Name'}</span></h3>
                    {
                        !isMyNft &&  ( nft?.price || nft?.startingPrice ) &&  nft.listingType === ListingType.AUCTION ? <p className="theme-description">Current Price <span className="item-price">{`${auctionDetails?.currentPrice} ETH`}</span></p>: <h2 className="item-price">{nft?.price && `${web3.utils.fromWei(nft?.price, 'ether')} ETH`}</h2>
                    }
                    {
                        !isMyNft &&  nft.listingType === ListingType.AUCTION && <div className="item-group-timer p-0">
                            <ul className="clearfix p-0">
                                <li><span>{auctionDetails?.timeRemaining?.days}</span> Days</li>
                                <li><span>{auctionDetails?.timeRemaining?.hours}</span> Hours</li>
                                <li><span>{auctionDetails?.timeRemaining?.minutes}</span> Minutes</li>
                            </ul>
                        </div>
                    }
                    {
                      !isMyNft && ( nft?.price || nft?.startingPrice ) &&
                       <div className="item-group-btn">
                           <button className="theme-btn">{nft.listingType === ListingType.AUCTION?'Place Bid':'Buy Now'}</button>
                       </div>
                    }
                    {
                        isMyNft &&  <div className="item-group-btn">
                            <button className="theme-btn">View Details</button>
                        </div>

                    }
                </div>
            </div>
        </div>
    );
}

export default NftCard;
