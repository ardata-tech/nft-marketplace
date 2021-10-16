import React, { useContext, useEffect, useState } from "react";
import NftCard from "../components/NftCard";
import { paginate } from "../services/utilService";
import { getAllNFTs } from "../utils/commonInteractor";
import useLoader from "../hooks/useLoader";
import { ListingType, web3 } from "../utils/blockchainInteractor";
import { toast } from "react-toastify";
import HomePageSkeleton from "../components/HomePageSkeleton";
import UserContext from "../contexts/UserContext";
import { getSymbolERC20 } from "../utils/erc20Interactor";

let allNFTs = [];
let totalCount = 0;
let ercSymbol = "TKN";
function Home(props) {
  const { state } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [showBanner, setShowBanner] = useState(false);
  const [totalPage, setTotalPage] = useState(1);
  const [filters, setFilters] = useState([]);
  const [catFilters, setCatFilters] = useState([]);
  const [sellItems, setSellItems] = useState([]);
  const [auctionItems, setAuctionItems] = useState([]);
  const [cardDisplayDetails, setCardDisplayDetails] = useState({
    sell: 4,
    aution: 4,
  });

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    let NFTs = [...allNFTs];
    if (filters.length) NFTs = NFTs.filter((nft) => filters.includes(nft.listingType));
    if (catFilters.length) NFTs = NFTs.filter((nft) => catFilters.includes(nft.category));
    getPageData(NFTs);
  }, [filters, catFilters, currPage]);

  const handleChange = (filterType) => {
    const idx = filters.indexOf(filterType);
    if (idx > -1) {
      filters.splice(idx, 1);
      setFilters([...filters]);
    } else {
      setFilters([...filters, filterType]);
    }
    setCurrPage(1);
  };

  const handleChangeCategory = (filterType) => {
    const idx = catFilters.indexOf(filterType);
    if (idx > -1) {
      catFilters.splice(idx, 1);
      setCatFilters([...catFilters]);
    } else {
      setCatFilters([...catFilters, filterType]);
    }
    setCurrPage(1);
  };
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredNFTs = allNFTs.filter(item => 
      item.category?.toLowerCase().indexOf(value) > -1 ||
      item.description?.toLowerCase().indexOf(value) > -1 ||
      item.name?.toLowerCase().indexOf(value) > -1
    )
    getPageData(filteredNFTs)

  }

  function getPageData(NFTs) {
    const sellNfts = [];
    const auctionNfts = [];
    if (NFTs.length) {
      NFTs.forEach((obj) => {
        if (obj.listingType === ListingType.AUCTION) {
          const createdTime = new Date(obj.createdAt).getTime();
          const duration = Number(obj.duration) * 1000
          const currentTime = new Date().getTime()
          if(currentTime < (createdTime + duration))auctionNfts.push(obj);
        } else {
          sellNfts.push(obj);
        }
      });
    }
    console.log(`autionNfts`, auctionNfts)
    setAuctionItems(auctionNfts);
    setSellItems(sellNfts);
  }

  const init = async () => {
    setLoading(true);
    const NFTs = await getAllNFTs(null, setShowBanner);
    allNFTs = [...NFTs];
    setData(allNFTs);
    getPageData(allNFTs);
    setLoading(false);
    web3.eth.getAccounts(function (err, accounts) {
      if (err != null) console.error("An error occurred: " + err);
      else if (accounts.length === 0) toast.info("Please connect to your metamask");
    });
    ercSymbol = await getSymbolERC20();
  };
  return (
    <>
      {}
      {!showBanner && loading ? (
        <HomePageSkeleton />
      ) : (
        <main className="main-content mt-1 border-radius-lg">
          {/* Navbar */}
          <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur">
            <div className="container-fluid py-1 px-3">
              <nav aria-label="breadcrumb">
                <h6 className="font-weight-bolder mb-0">Home</h6>
                </nav>
                <div class="ms-md-auto pe-md-3 d-flex align-items-center">
            <div class="input-group">
              <span class="input-group-text text-body"><i class="fas fa-search" aria-hidden="true"></i></span>
                    <input type="text" class="form-control" placeholder="Type here..." onChange={handleSearchChange}/>
            </div>
          </div>
            </div>
          </nav>
          {/* End Navbar */}
          <div className="container-fluid py-4">
            <div className="main-header">
              <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                  <div className="header-content">
                    <h1>Largest Marketplace To Collect , Buy and Sell Creative NFTs Digital Assets</h1>
                    <p>
                    </p>
                    {/* <a href="explore.html" className="btn btn-white mb-0">
                    Explore
                  </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showBanner && loading ? (
            <HomePageSkeleton hideBanner={true} />
          ) : (
            <>
              <div className="container-fluid">
                <div className="section-heading d-flex justify-content-between flex-wrap">
                  <div className="d-flex">
                    <div className="img-div mr-10">
                      <img src="/assets/img/icons/2.png" alt="" />
                    </div>
                    <div className="d-flex flex-column h-100">
                      <p className="mb-1 pt-2 text-bold">Latest Items</p>
                      <h5 className="font-weight-bolder">New Listed Items</h5>
                    </div>
                  </div>
                  <div className="d-flex mx-4 justify-content-center my-auto flex-wrap">
                    <h5>Filters: </h5>
                    <span
                      className={`mx-2 btn-outline-primary cursor-pointer ${
                        catFilters.includes("ART") ? "fw-bolder text-decoration-underline" : ""
                      }`}
                      onClick={() => handleChangeCategory("ART")}
                    >
                      Art
                    </span>
                    <span
                      className={`mx-2 btn-outline-primary cursor-pointer ${
                        catFilters.includes("PHOTO") ? "fw-bolder text-decoration-underline" : ""
                      }`}
                      onClick={() => handleChangeCategory("PHOTO")}
                    >
                      Photo
                    </span>
                    <span
                      className={`mx-2 btn-outline-primary cursor-pointer ${
                        catFilters.includes("GIF") ? "fw-bolder text-decoration-underline" : ""
                      }`}
                      onClick={() => handleChangeCategory("GIF")}
                    >
                      Gif
                    </span>
                    <span
                      className={`mx-2 btn-outline-primary cursor-pointer ${
                        catFilters.includes("VIDEO") ? "fw-bolder text-decoration-underline" : ""
                      }`}
                      onClick={() => handleChangeCategory("VIDEO")}
                    >
                      Video
                    </span>
                    <span
                      className={`mx-2 btn-outline-primary cursor-pointer ${
                        catFilters.includes("AUDIO") ? "fw-bolder text-decoration-underline" : ""
                      }`}
                      onClick={() => handleChangeCategory("AUDIO")}
                    >
                      Audio
                    </span>
                    <span
                      className={`mx-2 btn-outline-primary cursor-pointer ${
                        catFilters.includes("PDF") ? "fw-bolder text-decoration-underline" : ""
                      }`}
                      onClick={() => handleChangeCategory("PDF")}
                    >
                      Pdf
                    </span>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="col-12 py-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        {sellItems.slice(0, cardDisplayDetails.sell).map((obj) => (
                          <NftCard nft={obj} ercSymbol={ercSymbol} />
                        ))}
                        {sellItems.length > cardDisplayDetails.sell && (
                          <div
                            className="col-md-12 text-center"
                            onClick={() =>
                              setCardDisplayDetails({ ...cardDisplayDetails, sell: cardDisplayDetails.sell + 4 })
                            }
                          >
                            <span className="btn bg-gradient-dark mb-0">
                              <i className="fas fa-plus mr-10" aria-hidden="true" />
                              Load More
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                  {!!auctionItems.length && <><div className="container-fluid">
                    <div className="section-heading d-flex mt-10p">
                      <div className="img-div mr-10">
                        <img src="/assets/img/icons/3.png" alt="" />
                      </div>
                      <div className="d-flex flex-column h-100">
                        <p className="mb-1 pt-2 text-bold">Hot Auctions</p>
                        <h5 className="font-weight-bolder">Live Auctions</h5>
                      </div>
                    </div>
                  </div>
                    <div className="container-fluid">
                      <div className="col-12 py-4">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              {auctionItems.slice(0, cardDisplayDetails.aution).map((obj) => (
                                <NftCard nft={obj} isAuction />
                              ))}
                              {auctionItems.length > cardDisplayDetails.aution && (
                                <div
                                  className="col-md-12 text-center"
                                  onClick={() =>
                                    setCardDisplayDetails({ ...cardDisplayDetails, aution: cardDisplayDetails.aution + 4 })
                                  }
                                >
                                  <span className="btn bg-gradient-dark mb-0">
                                    <i className="fas fa-plus mr-10" aria-hidden="true" />
                                    Load More
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></>}
            </>
          )}
        </main>
      )}
    </>
  );
}

export default Home;
