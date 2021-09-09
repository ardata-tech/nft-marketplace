import React, {useEffect, useState} from 'react';
import NftCard from "./nftCard";
import {ListingType} from "../utils/blockchainInteractor";
import {paginate} from "../services/utilService";
import {getAllNFTs} from "../utils/commonInteractor";
import useLoader from "../hooks/useLoader";

let allNFTs = [];
let totalCount = 0;
function Storefront(props) {
    const [loader, showLoader, hideLoader] = useLoader();
    const [data,setData] = useState([]);
    const [currPage,setCurrPage] = useState(1);
    const [totalPage,setTotalPage] = useState(1);
    const [filters,setFilters] = useState([]);
    const [catFilters,setCatFilters] = useState([]);


    useEffect(()=>{
        init();
    },[]);

    useEffect(()=>{
        let NFTs = [...allNFTs];
        if(filters.length) NFTs = NFTs.filter(nft=>filters.includes(nft.listingType));
        if(catFilters.length) NFTs = NFTs.filter(nft=>catFilters.includes(nft.category));
        getPageData(NFTs)
    },[filters,catFilters,currPage])

    const handleChange = (filterType)=>{
        const  idx = filters.indexOf(filterType);
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
      showLoader()
      const NFTs = await getAllNFTs();
      allNFTs = [...NFTs]
      getPageData(allNFTs);
      hideLoader()
    }

    return (
        <>
            {loader}
            <section className="browse-product-area page-paddings" style={{paddingTop: '70px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="browse-product-filter">
                                <div className="filter-box">
                                    <h3 className="theme-title">Listing type</h3>
                                    <div className="filter-menu">
                                        <ul>
                                            <li>
                                                <input onChange={()=>handleChange(ListingType.AUCTION)} className="styled-checkbox" id="styled-checkbox-8"
                                                       type="checkbox" defaultValue="value1"/>
                                                <label htmlFor="styled-checkbox-8"><span>Auction</span></label>
                                            </li>
                                            <li>
                                                <input onChange={()=>handleChange(ListingType.MARKETPLACE)} className="styled-checkbox" id="styled-checkbox-9"
                                                       type="checkbox" defaultValue="value1"/>
                                                <label htmlFor="styled-checkbox-9"><span>Fixed Price</span></label>
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
                                                <li className="nav-item"><a className="browse-list nav-link active"
                                                                            data-toggle="tab" href="#view-store-grid"
                                                                            role="tab" data-placement="top"
                                                                            title="View Stores"><i
                                                    className="fas fa-th-large"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="browse-product-box">
                                {/*<pre>{JSON.stringify(data,null,4)}</pre>*/}
                                <div className="tab-content">
                                    <div className="tab-pane active" id="view-store-grid" role="tabpanel">
                                        <div className="row">
                                            {

                                                data.map(card => (
                                                    <NftCard nft={card} key={card.tokenId}/>
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
                                                    currPage !== 1 &&
                                                    <li onClick={() => setCurrPage(currPage - 1)} style={{cursor:'pointer'}}><a><i
                                                        className="fas fa-long-arrow-alt-left"/></a>Prev</li>
                                                }
                                                <li className="current"><span>{currPage}</span></li>
                                                {
                                                    currPage + 1 <= totalPage &&
                                                    <li onClick={() => setCurrPage(currPage + 1)} style={{cursor:'pointer'}}><a>Next <i
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

export default Storefront;
