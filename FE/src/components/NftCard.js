/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { toInteger } from "lodash";
import { getCurrentPriceByTokenId } from "../utils/auctionInteractor";
import { web3 } from "../utils/blockchainInteractor";
import { Link } from "react-router-dom";
import { getUrlExtension } from "../services/utilService";

const intervalHash = null;
const NftCard = ({ nft, isAuction, isProfileCard }) => {
  const [auctionDetails, setAuctionDetails] = useState(null);

  useEffect(() => {
    setAuctionDetailsForNFT(nft.tokenId);
  }, [nft]);

  useEffect(() => {
    if (auctionDetails?.timeRemaining.minutes) {
      if (!intervalHash)
        setInterval(() => {
          setAuctionDetails({
            ...auctionDetails,
            timeRemaining: getTimeObj(auctionDetails?.timeRemaining.totalSeconds - 60),
          });
        }, 60000);
      else clearInterval(intervalHash);
    }
  }, [auctionDetails]);

  const setAuctionDetailsForNFT = async (id) => {
    if (isAuction) {
      setAuctionDetails({
        currentPrice: Number(web3.utils.fromWei(await getCurrentPriceByTokenId(id))).toFixed(5),
        timeRemaining: getTimeRemaining(nft),
      });
    }
  };

  const getTimeObj = (totalSeconds) => {
    let secondsRemaining = totalSeconds;
    const days = Math.floor(secondsRemaining / (60 * 60 * 24));
    secondsRemaining = secondsRemaining - days * 24 * 60 * 60;
    const hours = Math.floor(secondsRemaining / (60 * 60));
    secondsRemaining = secondsRemaining - hours * 60 * 60;
    const minutes = Math.floor(secondsRemaining / 60);
    secondsRemaining = secondsRemaining - minutes * 60;
    const seconds = Math.floor(secondsRemaining);
    return { days, hours, minutes, seconds, totalSeconds };
  };

  const getTimeRemaining = (res) => {
    const today = new Date();
    const endDate = new Date((toInteger(res.startedAt) + toInteger(res.duration)) * 1000);
    if (endDate <= today) return getTimeObj(0);
    let secondsRemaining = Math.floor(Math.abs(endDate - today) / 1000);
    return getTimeObj(secondsRemaining);
  };
  const getFilePreview = () => {
    const url = nft.NFTImage || nft.image || "/assets/img/art/1.png";
    const type = getUrlExtension(url).toLowerCase();
    if (["mp4", "ogv", "ogg", "webm"].includes(type)) {
      return (
        <video class="w-100 border-radius-lg" controls style={{ height: "240px", objectFit: "cover" }}>
          <source src={url} type={`video/${type}`} />
        </video>
      );
    }
    if (["mp3", "ogv"].includes(type)) {
      return (
        <audio class="w-100 border-radius-lg" controls style={{ height: "240px", objectFit: "cover" }}>
          <source src={url} type={`audio/${type}`} />
        </audio>
      );
    }
    return (
      <object
        alt="Uploaded file"
        data={url}
        class="w-100 border-radius-lg"
        style={{ width: "100%", height: "240px", objectFit: "cover" }}
        height="240px"
      />
    );
  };
  const { days, hours, minutes, totalSeconds } = auctionDetails?.timeRemaining || {};
  return (
    <div className="col-xl-3 col-md-6 mb-xl-0">
      <div className="card card-blog card-plain">
        <div className="position-relative">
          <a className="d-block border-radius-xl">{getFilePreview()}</a>
        </div>
        {isAuction && (
          <div className="auction-timer">
            <img src="/assets/img/icons/fire.png" width={30} alt="" />
            <p>
              {totalSeconds > 0
                ? `${days ? days + " Days, " : ""} ${hours ? hours + " Hours" : ""} ${
                    minutes ? " and " + minutes + " Minutes" : ""
                  }`
                : "0 Minutes"}{" "}
              Left
            </p>
          </div>
        )}
        <div className="item-cont card-body px-1 pb-0">
          <Link to={`/nft/${nft.tokenId}`}>
            <h5>{nft?.title || nft.name || "Demo Name"}</h5>
          </Link>
          {!isProfileCard && isAuction ? (
            <p className="mb-4 text-sm">
              Currenct Price : <span className="gradient-text">{auctionDetails?.currentPrice} ETH</span>
            </p>
          ) : (
            !isProfileCard && (
              <p className="mb-4 text-sm">
                Price :{" "}
                <span className="gradient-text">{nft?.price && `${web3.utils.fromWei(nft?.price, "ether")} ETH`}</span>
              </p>
            )
          )}
          <div className="d-flex align-items-center justify-content-between">
            <Link to={`/nft/${nft.tokenId}`} className="btn btn-outline-primary btn-sm mb-0">
              {isProfileCard ? "View Details" : isAuction ? "Place Bid" : "Buy Now"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
