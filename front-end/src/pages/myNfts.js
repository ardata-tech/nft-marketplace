import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import NftCard from "./nftCard";
import UserContext from "../contexts/UserContext";
import {paginate} from "../services/utilService";
import {getAllNFTs} from "../utils/commonInteractor";
import {ListingType} from "../utils/blockchainInteractor";
import useLoader from "../hooks/useLoader";

let allNFTs = [];
let totalCount = 0;
function MyNfts(props) {

    const {state} = useContext(UserContext);
    const [loader, showLoader, hideLoader] = useLoader();
    const [data,setData] = useState([]);
    const [currPage,setCurrPage] = useState(1);
    const [totalPage,setTotalPage] = useState(1);
    const [filters,setFilters] = useState([]);
    const [catFilters,setCatFilters] = useState([]);

    useEffect(()=>{
        init();
    },[])
    useEffect(()=>{
        let NFTs = [...allNFTs];
        if(filters.length) NFTs = NFTs.filter(nft=>filters.includes(nft.listingType));
        if(catFilters.length) NFTs = NFTs.filter(nft=>catFilters.includes(nft.category));
        getPageData(NFTs)
    },[filters,catFilters,currPage])

    const handleChange = (filterType)=>{
        const  idx =   filters.indexOf(filterType);
        if(idx > -1){
            filters.splice(idx,1)
            setFilters([...filters])
        }else{
            setFilters([...filters,filterType])
        }
        setCurrPage(1);
    }

    const handleChangeCategory = (filterType)=>{
        const  idx =   catFilters.indexOf(filterType);
        if(idx > -1){
            catFilters.splice(idx,1)
            setCatFilters([...catFilters])
        }else{
            setCatFilters([...catFilters,filterType])
        }
        setCurrPage(1);
    }

    function getPageData(NFTs) {
        if (NFTs.length) {
            totalCount = NFTs.length;
            setTotalPage(Math.ceil(totalCount / 9));
            const pagedData = paginate(NFTs, currPage, 9);
            setData(pagedData);
        } else {
            totalCount = 0;
            setTotalPage(0);
            setData([]);
        }
    }

    const init = async () =>{
        showLoader();
        const NFTs = await getAllNFTs(state?.user?.address);
        allNFTs = [...NFTs];
        getPageData(allNFTs);
        hideLoader();
    }


    return  (
        <>
            {loader}
            <section className="browse-product-area page-paddings" style={{paddingTop: '70px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="browse-product-filter">
                                <div className="browse-product-filter">
                                    <div className="filter-box">
                                        <h3 className="theme-title">Listing type</h3>
                                        <div className="filter-menu">
                                            <ul>
                                                <li>
                                                    <input onChange={()=>handleChange(ListingType.AUCTION)} className="styled-checkbox" id="styled-checkbox-8"
                                                           type="checkbox"/>
                                                    <label htmlFor="styled-checkbox-8"><span>Auction</span></label>
                                                </li>
                                                <li>
                                                    <input onChange={()=>handleChange(ListingType.MARKETPLACE)}  className="styled-checkbox" id="styled-checkbox-9"
                                                           type="checkbox"/>
                                                    <label htmlFor="styled-checkbox-9"><span>Fixed Price</span></label>
                                                </li>
                                                <li>
                                                    <input onChange={()=>handleChange(ListingType.NOT_LISTED)}  className="styled-checkbox" id="styled-checkbox-7"
                                                           type="checkbox"/>
                                                    <label htmlFor="styled-checkbox-7"><span>Others</span></label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="filter-box">
                                        <h3 className="theme-title">Categories</h3>
                                        <div className="filter-menu">
                                            <ul>
                                                <li>
                                                    <input onChange={()=>handleChangeCategory('ART')} className="styled-checkbox" id="styled-checkbox-1" type="checkbox" />
                                                    <label htmlFor="styled-checkbox-1"><span>Art</span></label>
                                                </li>
                                                <li>
                                                    <input onChange={()=>handleChangeCategory('PHOTO')} className="styled-checkbox" id="styled-checkbox-2" type="checkbox"  />
                                                    <label htmlFor="styled-checkbox-2"><span>Photo</span></label>
                                                </li>
                                                <li>
                                                    <input onChange={()=>handleChangeCategory('GIF')} className="styled-checkbox" id="styled-checkbox-3" type="checkbox"  />
                                                    <label htmlFor="styled-checkbox-3"><span>Gif</span></label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
                            <div className="browse-product-top">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="browse-product-left">
                                            <p>Showing {data.length}/{totalCount} Items</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="browse-product-right clearfix">
                                            <ul className="nav nav-tabs" role="tablist">
                                                <li className="nav-item"><Link to="/store-front" className="browse-list"
                                                                               data-toggle="tooltip" data-placement="top"
                                                                               title="Store"><i
                                                    className="fas fa-store"/></Link></li>
                                                <li className="nav-item"><a className="browse-list nav-link active"
                                                                            data-toggle="tab" href="#item-grid"
                                                                            role="tab"><i className="fas fa-th-large"/></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="browse-product-box">
                                <div className="tab-content">
                                    <div className="tab-pane active" id="item-grid" role="tabpanel">
                                        <div className="row">
                                            {

                                                data.map(card=>(
                                                    <NftCard isMyNft={true} nft={card}  key={card.tokenId}/>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="pagination-box text-center">
                                            <ul className="clearfix">
                                                {
                                                    currPage !== 1 && <li onClick={()=>setCurrPage(currPage-1)} style={{cursor:'pointer'}}><a><i
                                                        className="fas fa-long-arrow-alt-left"/></a>Prev</li>
                                                }
                                                <li className="current"><span>{currPage}</span></li>
                                                {
                                                    currPage+1 <= totalPage &&  <li onClick={()=>setCurrPage(currPage+1)} style={{cursor:'pointer'}}><a>Next <i
                                                        className="fas fa-long-arrow-alt-right"/></a></li>
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MyNfts;
