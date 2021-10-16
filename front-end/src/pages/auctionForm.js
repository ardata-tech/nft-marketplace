import React, { useState } from "react";

function AuctionForm({ tokenId, reset, makeAuction, clearOptionType }) {
  const [auctionForm, setAuctionForm] = useState({
    startPrice: 0,
    endPrice: 0,
    duration: 0,
  });

  const handleChange = (e) => {
    const updated = { [e.target.name]: e.target.value };
    setAuctionForm({ ...auctionForm, ...updated });
  };

  return (
    <>
      <div className="wallet-detected-info">
        <>
          <div>
            <div className="theme-input-box mt-2">
              <label>Start price (BNB)</label>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  value={auctionForm.startPrice}
                  onChange={handleChange}
                  name="startPrice"
                />
              </div>
            </div>
            <div className="theme-input-box mt-2">
              <label>End Price (BNB)</label>
              <div className="mb-3">
                <input
                  value={auctionForm.endPrice}
                  onChange={handleChange}
                  className="form-control"
                  type="number"
                  name="endPrice"
                />
              </div>
            </div>
            <div className="theme-input-box mt-2">
              <label>Duration (hours)</label>
              <div className="mb-3">
                <input
                  value={auctionForm.duration}
                  onChange={handleChange}
                  className="form-control"
                  type="number"
                  name="duration"
                />
              </div>
            </div>
          </div>
          <div className="wallet-detected-btn mt-2 d-flex justify-content-between">
            <button
              disabled={!auctionForm.startPrice || !auctionForm.endPrice || !auctionForm.duration}
              onClick={() => makeAuction(auctionForm)}
              className="btn bg-gradient-primary w-45 mb-0"
              target="_blank"
            >
              Create Auction
            </button>
            <div className="text-center w-45" onClick={clearOptionType}>
              <button className="btn bg-gradient-dark w-100 mb-0">Cancel</button>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default AuctionForm;
