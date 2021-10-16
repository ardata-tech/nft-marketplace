import React from "react";
import { web3 } from "../utils/blockchainInteractor";
import * as moment from "moment";
const BasicItemDetails = ({ nftDetails, ercSymbol }) => {
  return (
    <div className="col-12 mb-30 mt-s">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex flex-column h-100">
                {/* <p className="mb-1">3 of 5 In Stock</p> */}
                <h4 className="font-weight-bolder">{nftDetails.title || nftDetails.name}</h4>
                <p>{nftDetails.description}</p>
                <p className="text-bold mb-30">
                  {nftDetails.price && (
                    <>
                      Price :{" "}
                      <span className="gradient-text text-lg">
                        {nftDetails.priceType === "1"
                          ? `${web3.utils.fromWei(nftDetails.price.toString(),"ether")} ${ercSymbol}`
                          : `${web3.utils.fromWei(nftDetails.price.toString(), "ether")} BNB`}
                      </span>
                    </>
                  )}
                  {nftDetails.currentPrice && (
                    <>
                      Current Price :{" "}
                      <span className="gradient-text text-lg">
                        {web3.utils.fromWei(nftDetails.currentPrice.toString(), "ether")} BNB
                      </span>
                    </>
                  )}
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-group">
                      <li className="list-group-item border-0 ps-0 pt-0 text-sm">
                        <strong className="text-dark mr-10">Item Artist: </strong>
                        {nftDetails.owner}
                      </li>
                      <li className="list-group-item border-0 ps-0 text-sm">
                        <strong className="text-dark mr-10">Created:</strong>{" "}
                        {moment(nftDetails.createdAt).utcOffset(0).format("DD MMM YYYY")}
                      </li>
                      {nftDetails.startingPrice && (
                        <li className="list-group-item border-0 ps-0 text-sm">
                          <strong className="text-dark">Starting Price:</strong> $
                          {web3.utils.fromWei(nftDetails.startingPrice.toString(), "ether")} BNB
                        </li>
                      )}
                      {nftDetails.endingPrice && (
                        <li className="list-group-item border-0 ps-0 text-sm">
                          <strong className="text-dark">Ending Price:</strong> $
                          {web3.utils.fromWei(nftDetails.endingPrice.toString(), "ether")} BNB
                        </li>
                      )}

                      <li className="list-group-item border-0 ps-0 text-sm">
                        <strong className="text-dark">Item Category:</strong> {nftDetails.category}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicItemDetails;
