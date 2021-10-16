/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { toast } from "react-toastify";
import { updateUser } from "../services/userService";
import { uploadFile } from "../services/utilService";
import NftCard from "../components/NftCard";
import { getAllNFTs } from "../utils/commonInteractor";
import { Spinner } from "reactstrap";
import { ListingType } from "../utils/blockchainInteractor";
import { getSymbolERC20 } from "../utils/erc20Interactor";

let allNFTs = [];
let ercSymbol = "TKN";
function Profile(props) {
  const { state, changeState } = useContext(UserContext);
  const { user } = state;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [listToDisplay, setListTodisplay] = useState([]);
  const [totalVisibleItem, setTotalVisibleItems] = useState(8);
  const [currPage, setCurrPage] = useState(1);
  const [catFilters, setCatFilters] = useState([]);

  const [profileForm, setProfileForm] = useState({
    pic: "",
    username: "",
    email: "",
    address: "",
    bio: "",
  });

  const [editableFields, setEditableFields] = useState({
    email: false,
    username: false,
    bio: false,
    pic: false,
  });

  useEffect(() => {
    setProfileForm({
      pic: user?.pic || "",
      username: user?.username || "",
      email: user?.email || "",
      address: user?.address || "",
      bio: user?.bio || "",
    });
  }, [user]);

  const handleChange = (e) => {
    setProfileForm({ ...profileForm, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const { data: returnedUser } = await updateUser(profileForm);
      if (returnedUser) {
        const updatedUser = { ...state.user, ...returnedUser };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        changeState({ user: updatedUser });
        toast.success("Profile Updated!");
        setEditableFields({});
      }
    } catch (e) {
      toast.error("Something went wrong!");
    }
  };

  const setFileChange = async (files) => {
    try {
      const formData = new FormData();
      formData.append("file", files[0]);
      const { data } = await uploadFile(formData);
      const url = data.Location;
      if (url) {
        setProfileForm({ ...profileForm, pic: url });
        setEditableFields({ ...editableFields, pic: true });
      }
    } catch (e) {
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    init();
  }, []);
  useEffect(() => {
    let NFTs = [...allNFTs];
    if (catFilters.length) NFTs = NFTs.filter((nft) => catFilters.includes(nft.category));
    getPageData(NFTs);
  }, [catFilters, currPage]);

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

  function getPageData(NFTs) {
    if (NFTs.length) {
      const temp = NFTs.filter((obj) => obj.tokenID);
      setListTodisplay(temp);
    } else {
      setListTodisplay([]);
    }
  }

  const init = async () => {
    const NFTs = await getAllNFTs(state?.user?.address);
    allNFTs = [...NFTs];
    setData(allNFTs);
    getPageData(allNFTs);
    setIsLoading(false);
    ercSymbol = await getSymbolERC20();
  };
  console.log(data, profileForm);
  return (
    <>
      <main className="main-content mt-1 border-radius-lg">
        <div className="container-fluid">
          <div
            className="page-header min-height-300 border-radius-xl mt-4"
            style={{
              "background-image": "url('/assets/img/curved-images/curved0.jpg')",
              "background-position-y": "50%",
            }}
          >
            <span className="mask bg-gradient-primary opacity-6"></span>
          </div>
          <div className="card card-body blur shadow-blur mx-4 mt-n6">
            <div className="row gx-4 justify-content-between">
              <div className="d-flex w-85">
                <div className="col-auto">
                  <div className="avatar avatar-xl position-relative">
                    <img
                      src={profileForm.pic || "/assets/img/bruce-mars.jpg"}
                      alt="..."
                      className="w-100 border-radius-lg shadow-sm"
                      style={{ height: "100%", objectFit: "cover" }}
                    />
                    <label htmlFor="file-upload">
                      <span className="btn btn-sm btn-icon-only bg-gradient-light position-absolute bottom-0 end-0 mb-n2 me-n2">
                        <i
                          className="fa fa-pen top-0"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Edit Image"
                        ></i>
                      </span>
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      className="d-none"
                      name="nftImage"
                      onChange={({ currentTarget }) => {
                        setFileChange(currentTarget.files);
                        currentTarget.value = null;
                      }}
                      accept="image/*"
                    />
                  </div>
                </div>
                <div className="col-auto my-auto mx-2">
                  <div className="h-100">
                    <h5 className="mb-1">{profileForm.username}</h5>
                  </div>
                </div>
              </div>
              <div className="my-2 d-flex justify-content-center align-items-center w-15">
                <span className="my-2 btn btn-outline-primary btn-sm mb-0" onClick={() => props.logout()}>
                  Sign out
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid py-4 pb-0">
          <div className="row">
            <div className="col-12 col-xl-4 col-lg-6 mt-s">
              <div className="card h-100">
                <div className="card-header pb-0 p-3">
                  <div className="row">
                    <div className="col-md-8 d-flex align-items-center">
                      <h6 className="mb-0">Profile Information</h6>
                    </div>
                  </div>
                </div>
                <div className="card-body p-3">
                  {editableFields.bio ? (
                    <textarea
                      type="text"
                      className="form-control mt-2"
                      placeholder="Bio"
                      aria-label="bio"
                      value={profileForm.bio}
                      onChange={handleChange}
                      name="bio"
                      autoComplete="off"
                    />
                  ) : (
                    <p className="text-sm">
                      {profileForm.bio}{" "}
                      <span
                        className="mx-4 btn-outline-primary cursor-pointer"
                        onClick={() => setEditableFields({ ...editableFields, bio: true })}
                      >
                        edit
                      </span>
                    </p>
                  )}
                  <hr className="horizontal gray-light my-2" />
                  <ul className="list-group">
                    <li className="list-group-item border-0 ps-0 pt-0 text-sm">
                      <strong className="text-dark">Username:</strong>
                      {editableFields.username ? (
                        <input
                          type="text"
                          className="form-control mt-2"
                          placeholder="Username"
                          aria-label="username"
                          value={profileForm.username}
                          onChange={handleChange}
                          name="username"
                          autoComplete="off"
                        />
                      ) : (
                        <>
                          &nbsp; {profileForm.username}
                          <span
                            className="mx-4 btn-outline-primary cursor-pointer"
                            onClick={() => setEditableFields({ ...editableFields, username: true })}
                          >
                            edit
                          </span>
                        </>
                      )}
                    </li>
                    <li className="list-group-item border-0 ps-0 text-sm ">
                      <strong className="text-dark">Email:</strong>
                      {editableFields.email ? (
                        <input
                          type="text"
                          className="form-control mt-2"
                          placeholder="Email"
                          aria-label="Email"
                          value={profileForm.email}
                          onChange={handleChange}
                          name="email"
                          autoComplete="off"
                        />
                      ) : (
                        <>
                          &nbsp; {profileForm.email}
                          <span
                            className="mx-4 btn-outline-primary cursor-pointer"
                            onClick={() => setEditableFields({ ...editableFields, email: true })}
                          >
                            edit
                          </span>
                        </>
                      )}
                    </li>
                    <li className="list-group-item border-0 ps-0 text-sm">
                      <strong className="text-dark">Wallet Address:</strong> &nbsp; {profileForm.address}
                    </li>
                    {Object.values(editableFields).includes(true) && (
                      <div className="text-center">
                        <button onClick={handleSave} className="btn bg-gradient-dark w-100 my-4 mb-2">
                          Save
                        </button>
                      </div>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            {isLoading ? (
              <div className="col-12 mt-4">
                <div className="card mb-4">
                  <div className="card-header pb-0 p-3" id="projects">
                    <h6 className="mb-1">Author Projects</h6>
                    <p className="text-sm">Architects Crypto Assets</p>
                  </div>
                  <div className="text-center mb-4">
                    <Spinner style={{ width: "6rem", height: "6rem" }} size="lg" color="primary" />
                  </div>
                </div>
              </div>
            ) : (
              !!data.length && (
                <div className="col-12 mt-4">
                  <div className="card mb-4">
                    <div className="card-header pb-0 p-3" id="projects">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h6 className="mb-1">Author Projects</h6>
                          <p className="text-sm">Architects Crypto Assets</p>
                        </div>
                        <div className="d-flex mx-4 justify-content-center my-auto">
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
                    <div className="card-body p-3">
                      <div className="row">
                        {listToDisplay.slice(0, totalVisibleItem).map((obj) => (
                          <NftCard
                            nft={obj}
                            isAuction={obj.listingType === ListingType.AUCTION}
                            ercSymbol={ercSymbol}
                            isProfileCard
                          />
                        ))}
                        {listToDisplay.length > totalVisibleItem && (
                          <div
                            className="col-md-12 text-center"
                            onClick={() => setTotalVisibleItems(totalVisibleItem + 4)}
                          >
                            <span className="btn bg-gradient-dark mb-0">
                              <i className="fas fa-plus mr-10" aria-hidden="true"></i>Load More
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
