/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getMetaByTokenId } from "../services/metaService";
import { toast } from "react-toastify";
import { ListingType } from "../utils/blockchainInteractor";
import UserContext from "../contexts/UserContext";
import { getTokenInfo } from "../utils/commonInteractor";
import { buyToken, listTokenMarketplace, unListTokenMarketplace } from "../utils/marketPlaceInteractor";
import { bidByTokenId, cancelAuctionByTokenId, createAuction } from "../utils/auctionInteractor";
import useLoader from "../hooks/useLoader";
import BasicItemDetails from "./BasicItemDetails";
import ItemOptions from "./ItemOptions";
import { Modal, Spinner } from "reactstrap";
import { approveToken } from "../utils/erc721Interactor";
import { getUrlExtension } from "../services/utilService";
const NftDetails = ({ match }) => {
  const { state } = useContext(UserContext);
  const [loader, showLoader, hideLoader] = useLoader();
  const [isModalLoading, setIsModalLoading] = useState(false);
  const history = useHistory();
  const [nftDetails, setNftDetails] = useState(null);
  const [tokenId] = useState(match.params.id);
  const [openModal, setOpenModal] = useState(false);
  const [isApproving, setIsApproving] = useState(true);
  const [optionType, setOptionType] = useState("");

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    if (match && match.params && match.params.id) {
      match.params.id && (await fetchNFT(tokenId));
    } else {
      toast.error("NFT not Found!");
      history.replace("/");
    }
  };

  const fetchNFT = async (id) => {
    try {
      showLoader();
      const { data: nft } = await getMetaByTokenId(id);
      const res = await getTokenInfo(id);
      await setNftDetails({ ...nft, ...res });
    } catch (e) {
      toast.error("Something went wrong!");
      history.replace("/");
    } finally {
      hideLoader();
    }
  };

  const showModalLoader = () => {
    setIsModalLoading(true);
  };

  const listItem = async () => {
    setOpenModal(true);
    setOptionType("sell");
    try {
      setIsApproving(true);
      await approveToken(tokenId, showModalLoader);
      setIsApproving(false);
    } catch (e) {
      toast.error("Please Approve Token!");
    } finally {
      setOpenModal(false);
      setIsModalLoading(false);
    }
  };
  const handleListForSaleClick = async (price) => {
    try {
      showLoader();
      await listTokenMarketplace(tokenId, price, 0);
      setOptionType("");
    } catch (e) {
      toast.error("Something went wrong!");
    } finally {
      fetchNFT(tokenId);
      setOpenModal(false);
      hideLoader();
    }
  };

  const initiateCreateAuction = async () => {
    setOpenModal(true);
    setOptionType("auction");
    try {
      setIsApproving(true);
      await approveToken(tokenId, showModalLoader, false);
      setIsApproving(false);
    } catch (e) {
      toast.error("Please Approve Token!");
    } finally {
      setOpenModal(false);
      setIsModalLoading(false);
    }
  };
  const handleCreateAuctionClick = async (auctionForm) => {
    const { startPrice, endPrice, duration } = auctionForm;
    showLoader();
    try {
      await createAuction(tokenId, startPrice, endPrice, duration);
      setOptionType("");
    } catch (e) {
      toast.error("Something went wrong!");
    } finally {
      fetchNFT(tokenId);
      setOpenModal(false);
      hideLoader();
    }
  };

  const unListItem = async () => {
    try {
      showLoader();
      await unListTokenMarketplace(tokenId);
    } catch (e) {
      toast.error("Something went wrong!");
    } finally {
      hideLoader();
      fetchNFT(tokenId);
    }
  };

  const cancelAuction = async () => {
    try {
      showLoader();
      await cancelAuctionByTokenId(tokenId);
    } catch (e) {
      toast.error("Something went wrong!");
    } finally {
      hideLoader();
      fetchNFT(tokenId);
    }
  };

  const handleBuy = async () => {
    try {
      showLoader();
      await buyToken(tokenId, nftDetails?.price);
    } catch (e) {
      toast.error("Something went wrong!");
    } finally {
      hideLoader();
      fetchNFT(tokenId);
    }
  };

  const handleBid = async () => {
    try {
      showLoader();
      await bidByTokenId(tokenId);
    } catch (e) {
      toast.error("Something went wrong!");
    } finally {
      hideLoader();
      fetchNFT(tokenId);
    }
  };
  const getFilePreview = () => {
    const url = nftDetails.NFTImage || nftDetails.image || "/assets/img/art/1.png";
    const type = getUrlExtension(url).toLowerCase();
    if (["mp4", "ogv", "ogg", "webm"].includes(type)) {
      return (
        <video class="w-100 border-radius-lg" controls style={{ maxHeight: "600px", objectFit: "contain" }}>
          <source src={url} type={`video/${type}`} />
        </video>
      );
    }
    if (["mp3", "ogv"].includes(type)) {
      return (
        <audio class="w-100 border-radius-lg" controls style={{ maxHeight: "600px", objectFit: "contain" }}>
          <source src={url} type={`audio/${type}`} />
        </audio>
      );
    }
    return (
      <object
        alt="Uploaded file"
        data={url}
        class="w-100 border-radius-lg"
        style={{ height: "600px", objectFit: "cover" }}
        height="600"
      />
    );
  };

  return (
    <>
      {loader}
      {nftDetails && (
        <main className="main-content mt-1 border-radius-lg">
          <div class="container-fluid">
            <div
              class="page-header breadcrumb-header min-height-300 border-radius-xl mt-4 mb-30"
              style={{ "background-image": "url('/assets/img/curved-images/curved6.jpg')", "background-size": "cover" }}
            >
              <span class="mask bg-gradient-primary opacity-6"></span>
              <div class="con-wrapper">
                <h2>Item Details</h2>
                <p>
                  Home / <span>Item Details</span>
                </p>
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-5 me-auto mt-lg-0">
                <div class="card">
                  <div class="card-body p-3">{getFilePreview()}</div>
                </div>
                {state?.user?.address && nftDetails?.owner.toLowerCase() === state.user.address.toLowerCase() && (
                  <div className="mb-4">
                    {ListingType[nftDetails?.listingType] === ListingType.NOT_LISTED && (
                      <>
                        <div class="text-center mt-4" onClick={() => !optionType && listItem()}>
                          <button disabled={optionType} class="btn bg-gradient-primary w-80 mb-0">
                            Sell Item
                          </button>
                        </div>
                        <div class="text-center mt-4" onClick={() => !optionType && initiateCreateAuction()}>
                          <button disabled={optionType} class="btn bg-gradient-primary w-80 mb-0">
                            Create Auction
                          </button>
                        </div>
                      </>
                    )}

                    {ListingType[nftDetails?.listingType] === ListingType.AUCTION && (
                      <>
                        <div class="text-center mt-4" onClick={() => cancelAuction()}>
                          <span class="btn bg-gradient-primary w-70 mb-0">Cancel Auction</span>
                        </div>
                      </>
                    )}

                    {ListingType[nftDetails?.listingType] === ListingType.MARKETPLACE && (
                      <>
                        <div class="text-center mt-4" onClick={() => unListItem()}>
                          <span class="btn bg-gradient-primary w-70 mb-0">UnList Item</span>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
              <div class="col-lg-7">
                <BasicItemDetails nftDetails={nftDetails} />
                {((!isApproving && optionType) ||
                  !state?.user?.address ||
                  nftDetails?.owner.toLowerCase() !== state.user.address.toLowerCase()) && (
                  <ItemOptions
                    nftDetails={nftDetails}
                    handleBuy={handleBuy}
                    handleBid={handleBid}
                    optionType={optionType}
                    handleListForSaleClick={handleListForSaleClick}
                    handleCreateAuctionClick={handleCreateAuctionClick}
                    clearOptionType={() => setOptionType("")}
                  />
                )}
              </div>
            </div>
          </div>
        </main>
      )}
      <Modal isOpen={openModal} toggle={() => setOpenModal(!openModal)} backdrop={true} keyboard={false}>
        <div className="wallet-detected-box" style={{ background: "none" }}>
          <div className="wallet-detected-item">
            {isModalLoading ? (
              <div className="text-center mb-4 max-width-160">
                <Spinner style={{ width: "6rem", height: "6rem" }} size="lg" color="primary" />
              </div>
            ) : (
              <>
                <div onClick={() => setOpenModal(!openModal)} className="wallet-close-btn">
                  <i className="fas fa-times" />
                </div>
                <div className="wallet-detected-media">
                  <img src="/assets/img/marketplace-mockup.png" alt="" width="200px" height="150px" />
                </div>
                <div className="wallet-detected-info">
                  <h3 className="theme-title">
                    Approve Your NFT for {optionType === "sell" ? "Marketplace" : "Auction"}
                  </h3>
                </div>
              </>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NftDetails;
