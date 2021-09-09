import React, {useEffect, useState} from 'react';
import {toast} from "react-toastify";
import {approveToken} from "../utils/erc721Interactor";
import {listTokenMarketplace} from "../utils/marketPlaceInteractor";
import useLoader from "../hooks/useLoader";

function ListForm({tokenId, reset}) {

    const [isApproving, setIsApproving] = useState(true);
    const [loader, showLoader, hideLoader] = useLoader();
    const [price, setPrice] = useState(0);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        try {
            setIsApproving(true);
            const res = await approveToken(tokenId, confirmationCallback);
            setIsApproving(false);
        } catch (e) {
            toast.error('Please Approve Token!');
        } finally {
            hideLoader();
        }
    }

    const confirmationCallback = async () => {
        showLoader();
    }

    const list = async () => {
        try {
            showLoader();
            const res = await listTokenMarketplace(tokenId, price, 0);
        } catch (e) {
            toast.error('Something went wrong!')
        } finally {
            reset();
            hideLoader();
        }
    }

    return (<>
        {loader}
        <div className="wallet-detected-media">
            <img src="/assets/images/marketplace-mockup.png" alt=""/>
        </div>
        <div className="wallet-detected-info">
            {
                isApproving ? <h3 className="theme-title">Approve Your NFT for Marketplace</h3> :
                    <>
                        <h3 className="theme-title">Fill Item Details</h3>
                        <div className="theme-input-box">
                            <label>Price (ETH)</label>
                            <input className="theme-input" type="text" name="walletAddress" value={price}
                                   onChange={({currentTarget}) => setPrice(currentTarget.value)}/>
                        </div>
                        <div className="wallet-detected-btn mt-2">
                            <button onClick={list} className="theme-btn" target="_blank">List for Sale</button>
                        </div>
                    </>
            }
        </div>
    </>);
}

export default ListForm;
