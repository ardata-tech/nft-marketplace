import React, {useEffect, useState} from 'react';
import {toast} from "react-toastify";
import {approveToken} from "../utils/erc721Interactor";
import {createAuction} from "../utils/auctionInteractor";
import useLoader from "../hooks/useLoader";

function AuctionForm({tokenId,reset}) {

    const [isApproving,setIsApproving] = useState(true);
    const [loader, showLoader, hideLoader] = useLoader();

    const [auctionForm,setAuctionForm] = useState({
        startPrice:0,
        endPrice:0,
        duration:0
    })

    const handleChange = e =>{
        const updated = {[e.target.name]:e.target.value}
        setAuctionForm({...auctionForm,...updated});
    }

    useEffect(()=>{
        init();
    },[]);

    const init =  async ()=>{
        try{
            setIsApproving(true);
            const res = await approveToken(tokenId, confirmationCallback, false);
            setIsApproving(false);
        }catch (e){
            toast.error('Please Approve Token!')
        } finally {
            hideLoader();
        }

    }
    
    const confirmationCallback = async () => {
        showLoader();
    }

    const makeAuction = async ()=>{
        const {startPrice,endPrice,duration} = auctionForm;
        showLoader()
        try {
            const res = await createAuction(tokenId,startPrice,endPrice,duration);
        } catch (e) {
            toast.error('Something went wrong!')
        } finally {
            hideLoader()
            reset();
        }
    }

    return(<>
        {
            loader
        }
        <div className="wallet-detected-media">
            <img src="/assets/images/marketplace-mockup.png" alt="" />
        </div>
        <div className="wallet-detected-info">
            {
                isApproving ? <h3 className="theme-title">Approve Your NFT for Auction</h3> :
                    <>
                        <h3 className="theme-title">Fill Auction Details</h3>
                        <div>
                            <div className="theme-input-box mt-2">
                                <label>Start price (ETH)</label>
                                <input value={auctionForm.startPrice} onChange={handleChange} className="theme-input"
                                       type="text" name="startPrice"/>
                            </div>
                            <div className="theme-input-box mt-2">
                                <label>End Price (ETH)</label>
                                <input value={auctionForm.endPrice} onChange={handleChange} className="theme-input"
                                       type="text" name="endPrice"/>
                            </div>
                            <div className="theme-input-box mt-2">
                                <label>Duration (hours)</label>
                                <input value={auctionForm.duration} onChange={handleChange} className="theme-input"
                                       type="text" name="duration"/>
                            </div>
                        </div>
                        <div className="wallet-detected-btn mt-2">
                            <button disabled={!auctionForm.startPrice || !auctionForm.endPrice || !auctionForm.duration}
                                    onClick={makeAuction} className="theme-btn" target="_blank">Create Auction
                            </button>
                        </div>
                    </>
            }
        </div>
    </>);
}

export default AuctionForm;
