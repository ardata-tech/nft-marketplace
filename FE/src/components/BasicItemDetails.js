import React from "react";
import { web3 } from "../utils/blockchainInteractor";
import * as moment from "moment";
const BasicItemDetails = ({ nftDetails }) => {
  return (
    <div class="col-12 mb-30 mt-s">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="d-flex flex-column h-100">
                {/* <p class="mb-1">3 of 5 In Stock</p> */}
                <h4 class="font-weight-bolder">{nftDetails.title || nftDetails.name}</h4>
                <p>{nftDetails.description}</p>
                <p class="text-bold mb-30">
                  {nftDetails.price && (
                    <>
                      Price :{" "}
                      <span class="gradient-text text-lg">
                        {web3.utils.fromWei(nftDetails.price.toString(), "ether")} ETH
                      </span>
                    </>
                  )}
                  {nftDetails.currentPrice && (
                    <>
                      Current Price :{" "}
                      <span class="gradient-text text-lg">
                        {web3.utils.fromWei(nftDetails.currentPrice.toString(), "ether")} ETH
                      </span>
                    </>
                  )}
                </p>
                <div class="row">
                  <div class="col-md-6">
                    <ul class="list-group">
                      <li class="list-group-item border-0 ps-0 pt-0 text-sm">
                        <strong class="text-dark mr-10">Item Artist: </strong>
                        {nftDetails.owner}
                      </li>
                      <li class="list-group-item border-0 ps-0 text-sm">
                        <strong class="text-dark mr-10">Created:</strong>{" "}
                        {moment(nftDetails.createdAt).utcOffset(0).format("DD MMM YYYY")}
                      </li>
                      {nftDetails.startingPrice && (
                        <li class="list-group-item border-0 ps-0 text-sm">
                          <strong class="text-dark">Starting Price:</strong> $
                          {web3.utils.fromWei(nftDetails.startingPrice.toString(), "ether")} ETH
                        </li>
                      )}
                      {nftDetails.endingPrice && (
                        <li class="list-group-item border-0 ps-0 text-sm">
                          <strong class="text-dark">Ending Price:</strong> $
                          {web3.utils.fromWei(nftDetails.endingPrice.toString(), "ether")} ETH
                        </li>
                      )}

                      <li class="list-group-item border-0 ps-0 text-sm">
                        <strong class="text-dark">Item Category:</strong> {nftDetails.category}
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
