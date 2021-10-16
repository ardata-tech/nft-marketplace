import React, { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
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
  currencyType,
  setCurrencyType,
  ercSymbol,
}) => {
  const isAuction = ListingType[nftDetails?.listingType] === ListingType.AUCTION;
  const [amount, setAmount] = useState("");
  const [amtInpErr, setAmtInpErr] = useState("");
  const userContext = useContext(UserContext);
  const { handleStart, state } = userContext;
  const { user } = state;

  const getButtonText = () => {
    let str = "";
    if (isAuction) str = "Place Bid";
    else if (optionType === "sell") str = "List for sale";
    else str = "Buy Now";
    return str;
  };
  const handleButtonCick = async () => {
    if (!user) {
      await handleStart();
      return;
    }
    if (isAuction) {
      !amount ? setAmtInpErr("Bid Amount is required") : handleBid();
    } else if (optionType === "sell") {
      !amount ? setAmtInpErr("Price is required") : handleListForSaleClick(amount);
    } else handleBuy();
  };
  const getSectionLabelStr = () => {
    let str = "";
    if (isAuction) str = "Bid Amount";
    else if (optionType === "sell") str = `Price (${currencyType === "ERC20" ? ercSymbol : currencyType})`;
    else
      str =
        "Amount: " +
        (nftDetails.priceType === "1"
          ? `${web3.utils.fromWei(nftDetails.price.toString(),"ether")} ${ercSymbol}`
          : `${web3.utils.fromWei(nftDetails.price.toString(), "ether")} BNB`);
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
    <div className="col-12 mb-30">
      <div className="col-lg-6 card">
        <div className="card-body p-3">
          <div className="row align-items-center">
            {/* <div className="col-lg-6 mt-lg-0">
              <div className="card card-background shadow-none card-background-mask-primary">
                <div
                  className="full-background"
                  style={{ "background-image": "url('assets/img/curved-images/white-curved.jpeg')" }}
                ></div>
                <div className="card-body text-center p-3 w-100">
                  <div className="icon icon-shape icon-sm bg-white shadow mx-auto mb-3 d-flex align-items-center justify-content-center border-radius-md">
                    <i className="ni ni-diamond gradient-text text-lg top-0" aria-hidden="true"></i>
                  </div>
                  <h5 className="text-white up mb-10p">Highest Bid</h5>
                  <p>From colors, cards, typography to complex, you will find the.</p>
                  <ul className="list-group mt-15p">
                    <li className="list-group-item border-0 d-flex align-items-center px-2">
                      <a href="profile.html" className="avatar v2 mr-10">
                        <img
                          src="assets/img/kal-visuals-square.jpg"
                          alt="kal"
                          width="40"
                          className="border-radius-lg shadow"
                        />
                      </a>
                      <div className="d-flex align-items-start flex-column justify-content-center">
                        <a href="profile.html">
                          <h6 className="author-name">Thomp</h6>
                        </a>
                        <a className="btn btn-link autho-link" href="profile.html">
                          @Mthomp
                        </a>
                      </div>
                      <div className="d-flex align-items-start ms-auto flex-column justify-content-center">
                        <h6 className="author-name gradient-text mb-0">0.82 ETH</h6>
                        <p className="mb-0 text-dark">$563.34</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className="mt-s">
              <div className="d-flex flex-column h-100">
                <h5 className="font-weight-bolder">{getSectionHeading()}</h5>
                <p>From colors, cards, typography to complex elements, you will find the.</p>
                {optionType === "auction" ? (
                  <AuctionForm makeAuction={handleCreateAuctionClick} clearOptionType={clearOptionType} />
                ) : (
                  <div>
                    {optionType === "sell" && (
                      <>
                        <h6 className="text-uppercase text-body text-xs font-weight-bolder mt-4">Select Currency</h6>
                        <ul className="list-group flex-row">
                          <li className="list-group-item border-0 px-2">
                            <div className="form-check form-check-info text-left">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="currency"
                                value="ETH"
                                id="curr_eth"
                                onChange={() => setCurrencyType("ETH")}
                                defaultChecked
                              />
                              <label className="form-check-label" htmlFor="curr_eth">
                                BNB
                              </label>
                            </div>
                          </li>
                          <li className="list-group-item border-0 px-2">
                            <div className="form-check form-check-info text-left">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="currency"
                                value="ERC20"
                                id="curr_erc"
                                onChange={() => setCurrencyType("ERC20")}
                              />
                              <label className="form-check-label" htmlFor="curr_erc">
                                {ercSymbol}
                              </label>
                            </div>
                          </li>
                        </ul>
                      </>
                    )}
                    <label>{getSectionLabelStr()}</label>
                    {(isAuction || optionType === "sell") && (
                      <>
                        <div className="mb-3">
                          <input
                            type="number"
                            className="form-control"
                            placeholder={optionType === "sell" ? "Item price" : "Your Bid"}
                            value={amount}
                            onChange={(e) => {
                              let val = e.target.value;
                              val = val.replace("-", "");
                              setAmtInpErr("");
                              setAmount(val);
                            }}
                          />
                        </div>
                        {amtInpErr ? <div className="text-danger my-1">{amtInpErr}</div> : null}
                      </>
                    )}
                    <div className="d-flex justify-content-between">
                      <div className={`text-center ${optionType === "sell" ? "w-45" : ""}`} onClick={handleButtonCick}>
                        <button disabled={!isAuction && !amount} className="btn bg-gradient-primary w-100 mb-0">
                          {getButtonText()}
                        </button>
                      </div>
                      {optionType === "sell" && (
                        <div className="text-center w-45" onClick={clearOptionType}>
                          <button className="btn bg-gradient-dark w-100 mb-0">Cancel</button>
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
