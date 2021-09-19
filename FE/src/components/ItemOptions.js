import React, { useState } from "react";
import AuctionForm from "../pages/auctionForm";
import { ListingType, web3 } from "../utils/blockchainInteractor";
const ItemOptions = ({
  nftDetails,
  handleBuy,
  handleBid,
  optionType,
  handleListForSaleClick,
  handleCreateAuctionClick,
  clearOptionType,
}) => {
  const isAuction = ListingType[nftDetails?.listingType] === ListingType.AUCTION;
  const [amount, setAmount] = useState("");
  const [amtInpErr, setAmtInpErr] = useState("");
  const getButtonText = () => {
    let str = "";
    if (isAuction) str = "Place Bid";
    else if (optionType === "sell") str = "List for sale";
    else str = "Buy Now";
    return str;
  };
  const handleButtonCick = () => {
    if (isAuction) {
      !amount ? setAmtInpErr("Bid Amount is required") : handleBid();
    } else if (optionType === "sell") {
      !amount ? setAmtInpErr("Price is required") : handleListForSaleClick(amount);
    } else handleBuy();
  };
  const getSectionLabelStr = () => {
    let str = "";
    if (isAuction) str = "Bid Amount";
    else if (optionType === "sell") str = "Price (ETH)";
    else str = `Amount: ${web3.utils.fromWei(nftDetails.price.toString(), "ether")} ETH`;
    return str;
  };
  const getSectionHeading = () => {
    let str = "";
    if (isAuction) str = "Place a Bid";
    else if (optionType === "sell") str = "Fill Item Details";
    else if (optionType === "auction") str = "Fill Auction Details";
    else str = "Place Order";
    return str;
  };
  return (
    <div class="col-12 mb-30">
      <div class="col-lg-6 card">
        <div class="card-body p-3">
          <div class="row align-items-center">
            {/* <div class="col-lg-6 mt-lg-0">
              <div class="card card-background shadow-none card-background-mask-primary">
                <div
                  class="full-background"
                  style={{ "background-image": "url('assets/img/curved-images/white-curved.jpeg')" }}
                ></div>
                <div class="card-body text-center p-3 w-100">
                  <div class="icon icon-shape icon-sm bg-white shadow mx-auto mb-3 d-flex align-items-center justify-content-center border-radius-md">
                    <i class="ni ni-diamond gradient-text text-lg top-0" aria-hidden="true"></i>
                  </div>
                  <h5 class="text-white up mb-10p">Highest Bid</h5>
                  <p>From colors, cards, typography to complex, you will find the.</p>
                  <ul class="list-group mt-15p">
                    <li class="list-group-item border-0 d-flex align-items-center px-2">
                      <a href="profile.html" class="avatar v2 mr-10">
                        <img
                          src="assets/img/kal-visuals-square.jpg"
                          alt="kal"
                          width="40"
                          class="border-radius-lg shadow"
                        />
                      </a>
                      <div class="d-flex align-items-start flex-column justify-content-center">
                        <a href="profile.html">
                          <h6 class="author-name">Thomp</h6>
                        </a>
                        <a class="btn btn-link autho-link" href="profile.html">
                          @Mthomp
                        </a>
                      </div>
                      <div class="d-flex align-items-start ms-auto flex-column justify-content-center">
                        <h6 class="author-name gradient-text mb-0">0.82 ETH</h6>
                        <p class="mb-0 text-dark">$563.34</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div class="mt-s">
              <div class="d-flex flex-column h-100">
                <h5 class="font-weight-bolder">{getSectionHeading()}</h5>
                <p>From colors, cards, typography to complex elements, you will find the.</p>
                {optionType === "auction" ? (
                  <AuctionForm makeAuction={handleCreateAuctionClick} clearOptionType={clearOptionType} />
                ) : (
                  <div>
                    <label>{getSectionLabelStr()}</label>
                    {(isAuction || optionType === "sell") && (
                      <>
                        <div class="mb-3">
                          <input
                            type="number"
                            class="form-control"
                            placeholder={optionType === "sell" ? "Item price" : "Your Bid"}
                            value={amount}
                            onChange={(e) => {
                              setAmtInpErr("");
                              setAmount(e.target.value);
                            }}
                          />
                        </div>
                        {amtInpErr ? <div className="text-danger my-1">{amtInpErr}</div> : null}
                      </>
                    )}
                    <div className="d-flex justify-content-between">
                      <div class={`text-center ${optionType === "sell" ? "w-45" : ""}`} onClick={handleButtonCick}>
                        <button disabled={!isAuction && !amount} class="btn bg-gradient-primary w-100 mb-0">
                          {getButtonText()}
                        </button>
                      </div>
                      {optionType === "sell" && (
                        <div class="text-center w-45" onClick={clearOptionType}>
                          <button class="btn bg-gradient-dark w-100 mb-0">Cancel</button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemOptions;
