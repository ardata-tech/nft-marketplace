import React, { useContext, useEffect, useState } from "react";
import { uploadFile } from "../services/utilService";
import { saveMeta } from "../services/metaService";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import { useHistory } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { Spinner } from "reactstrap";
import { mintNFT, getMintFees } from "../utils/marketPlaceInteractor";
import { getTokenIdFromTxn } from "../utils/blockchainInteractor";
import useLoader from "../hooks/useLoader";
import * as Yup from "yup";
import { approveSpenderERC20, getSymbolERC20 } from "../utils/erc20Interactor";
const re =
  /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
const NFT_VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().max(120, "Too Long!").required("Title is Required"),
  description: Yup.string().required("Description is Required"),
  category: Yup.string().required("Category is Required"),
  image: Yup.string().required("File is  Required"),
  external_url: Yup.string().matches(re, "External Link is not valid"),
});
let ercSymbol = "TKN";
function MintPage(props) {
  const history = useHistory();
  const userContext = useContext(UserContext);
  const { handleStart, state } = userContext;
  const { user } = state;
  const [loader, showLoader, hideLoader] = useLoader();
  const [isLoading, setIsLoading] = useState(false);
  const [mintFees, setMintFees] = useState("0");
  const [fileData, setFileData] = useState(null);
  const [currencyType, setCurrencyType] = useState("ETH"); //erc20

  const init = async () => {
    if (!user) await handleStart();
    _getMintFee();
    ercSymbol = await getSymbolERC20();
  };

  const _getMintFee = async (isErc) => {
    setMintFees(await getMintFees(isErc));
  };

  useEffect(() => {
    if (currencyType === "ERC") _getMintFee(true);
    else _getMintFee();
  }, [currencyType]);

  useEffect(() => {
    init();
  }, [user]);

  let newNFT = {
    name: "",
    description: "",
    external_url: "",
    category: "",
    image: "",
  };
  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    await submit(values);
    setSubmitting(false);
    resetForm();
  };

  const setFileChange = async (files, setFieldValue) => {
    setIsLoading(true);
    try {
      setFileData({ name: files[0]?.name, size: files[0]?.size, type: files[0]?.type });
      const formData = new FormData();
      formData.append("file", files[0]);
      const { data } = await uploadFile(formData);
      const url = data.Location;
      if (url) {
        setFieldValue("image", url);
      }
    } catch (e) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const submit = async (values) => {
    showLoader();
    try {
      if (currencyType === "ERC") {
        await approveSpenderERC20();
      }
      const tx = await mintNFT(currencyType);
      const tokenID = getTokenIdFromTxn(tx, currencyType === "ERC");
      await saveMeta({ ...values, tokenID });
      history.push(`/nft/${tokenID}`);
      toast.success(`NFT minted with ${tokenID}`);
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      hideLoader();
    }
  };
  const getFilePreview = (values) => {
    if (fileData.type.toLowerCase().includes("video")) {
      return (
        <video height="400" controls style={{ width: "90%", objectFit: "contain" }}>
          <source src={values.image} type={fileData.type} />
        </video>
      );
    }
    if (fileData.type.toLowerCase().includes("audio")) {
      return (
        <audio height="400" controls style={{ width: "90%", objectFit: "contain" }}>
          <source src={values.image} type={fileData.type} />
        </audio>
      );
    }
    return (
      <object
        alt="Uploaded file"
        data={values.image}
        className="max-height-400"
        style={{ width: "90%", objectFit: "contain" }}
        height="400"
      />
    );
  };
  return (
    <>
      {loader}
      <main className="main-content mt-1 border-radius-lg">
        {/* Navbar */}
        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur">
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb"></nav>
          </div>
        </nav>
        <Formik initialValues={newNFT} validationSchema={NFT_VALIDATION_SCHEMA} onSubmit={onSubmit}>
          {({ isSubmitting, values, setFieldValue, errors, touched, handleChange }) => {
            return (
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="section-heading d-flex mb-20">
                      <div className="img-div mr-10">
                        <img src="/assets/img/icons/2.png" alt="" />
                      </div>
                      <div className="d-flex flex-column h-100">
                        <h5 className="font-weight-bolder">Create New NFT</h5>
                        <p className="mb-1 text-bold">
                          Mint Fee of {mintFees} {currencyType === "ERC" ? ercSymbol : "BNB"} will be charged.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 mb-30">
                      <div className="card z-index-0">
                        <div className="card-body">
                          <Form autoComplete="random_string">
                            {isLoading ? (
                              <div className="text-center">
                                <Spinner style={{ width: "6rem", height: "6rem" }} size="lg" color="primary" />
                              </div>
                            ) : (
                              <>
                                <div className="mt-2 position-relative">
                                  <p className="text-sm font-weight-bold mb-15 text-secondary text-border d-inline z-index-2 bg-white">
                                    Upload File
                                  </p>
                                </div>
                                <div className="upload-div max-height-600">
                                  {values.image ? (
                                    <div className="">
                                      <div
                                        onClick={() => {
                                          setFieldValue("image", "");
                                          setFileData(null);
                                        }}
                                        className="d-flex mb-2"
                                      >
                                        <i className="fas fa-times ml-auto" />
                                      </div>
                                      {getFilePreview(values)}
                                    </div>
                                  ) : (
                                    <>
                                      <label htmlFor="file-upload">
                                        <span className="btn btn-outline-primary btn-sm mb-0">Upload Item File</span>
                                      </label>
                                      <input
                                        id="file-upload"
                                        type="file"
                                        className="d-none"
                                        name="image"
                                        onChange={({ currentTarget }) => {
                                          setFileChange(currentTarget.files, setFieldValue);
                                          currentTarget.value = null;
                                        }}
                                        accept=".pdf,image/*,.mp4,.ogv,.ogg,.webm,.mp3"
                                      />
                                    </>
                                  )}
                                  {errors.image && touched.image ? (
                                    <div className="text-danger mt-2">{errors.image}</div>
                                  ) : null}
                                </div>
                              </>
                            )}
                            <div className="mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Item Title"
                                aria-label="Title"
                                value={values.name}
                                onChange={handleChange}
                                name="name"
                                autoComplete="off"
                              />
                              {errors.name && touched.name ? (
                                <div className="text-danger mt-2">{errors.name}</div>
                              ) : null}
                            </div>
                            <div className="mb-3">
                              <textarea
                                name="description"
                                id="desc"
                                value={values.description}
                                style={{ resize: "none" }}
                                onChange={handleChange}
                                cols={30}
                                className="form-control"
                                placeholder="Item Description"
                                rows={6}
                                defaultValue={""}
                              />
                              {errors.description && touched.description ? (
                                <div className="text-danger mt-2">{errors.description}</div>
                              ) : null}
                            </div>
                            <div className="mb-3">
                              <input
                                value={values.external_url}
                                onChange={handleChange}
                                type="text"
                                name="external_url"
                                autoComplete="off"
                                className="form-control"
                                placeholder="External Link"
                                aria-label="External Link"
                              />
                              {errors.external_url && touched.external_url ? (
                                <div className="text-danger mt-2">{errors.external_url}</div>
                              ) : null}
                            </div>
                            <div className="text-center">
                              <button
                                disabled={isSubmitting}
                                type="submit"
                                className="btn bg-gradient-dark w-100 my-4 mb-2"
                              >
                                List Item Now
                              </button>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="section-heading d-flex mb-20" style={{ visibility: "hidden" }}>
                      <div className="img-div mr-10">
                        <img src="/assets/img/icons/2.png" alt="" />
                      </div>
                      <div className="d-flex flex-column h-100">
                        <h5 className="font-weight-bolder">Create New NFT</h5>
                        <p className="mb-1 text-bold">
                          Mint Fee of {mintFees} {currencyType === "ERC" ? ercSymbol : "BNB"} will be charged.
                        </p>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="card h-100 mb-30">
                        <div className="card-header pb-0 p-3">
                          <h6 className="mb-0">Category Settings</h6>
                        </div>
                        <div className="card-body p-3">
                          <h6 className="text-uppercase text-body text-xs font-weight-bolder mt-3">Item Category</h6>
                          <ul className="list-group">
                            <li className="list-group-item border-0 px-0">
                              <div className="form-check form-check-info text-left">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="category"
                                  value="ART"
                                  id="cat_art"
                                  onChange={handleChange}
                                  checked={values.category === "ART"}
                                />
                                <label className="form-check-label" htmlFor="cat_art">
                                  Art
                                </label>
                              </div>
                            </li>
                            <li className="list-group-item border-0 px-0">
                              <div className="form-check form-check-info text-left">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="category"
                                  value="PHOTO"
                                  id="cat_photo"
                                  onChange={handleChange}
                                  checked={values.category === "PHOTO"}
                                />
                                <label className="form-check-label" htmlFor="cat_photo">
                                  Photo
                                </label>
                              </div>
                            </li>
                            <li className="list-group-item border-0 px-0 pb-0">
                              <div className="form-check form-check-info text-left">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="category"
                                  value="GIF"
                                  id="cat_gif"
                                  onChange={handleChange}
                                  checked={values.category === "GIF"}
                                />
                                <label className="form-check-label" htmlFor="cat_gif">
                                  Gif
                                </label>
                              </div>
                            </li>
                            <li className="list-group-item border-0 px-0 pb-0">
                              <div className="form-check form-check-info text-left">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="category"
                                  value="VIDEO"
                                  id="cat_vid"
                                  onChange={handleChange}
                                  checked={values.category === "VIDEO"}
                                />
                                <label className="form-check-label" htmlFor="cat_vid">
                                  Video
                                </label>
                              </div>
                            </li>
                            <li className="list-group-item border-0 px-0 pb-0">
                              <div className="form-check form-check-info text-left">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="category"
                                  value="AUDIO"
                                  id="cat_aud"
                                  onChange={handleChange}
                                  checked={values.category === "AUDIO"}
                                />
                                <label className="form-check-label" htmlFor="cat_aud">
                                  Audio
                                </label>
                              </div>
                            </li>
                            <li className="list-group-item border-0 px-0 pb-0">
                              <div className="form-check form-check-info text-left">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="category"
                                  value="PDF"
                                  id="cat_pdf"
                                  onChange={handleChange}
                                  checked={values.category === "PDF"}
                                />
                                <label className="form-check-label" htmlFor="cat_pdf">
                                  PDF
                                </label>
                              </div>
                            </li>
                            {errors.category && touched.category ? (
                              <div className="text-danger mt-2">Category is Required</div>
                            ) : null}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="card h-100 mb-30">
                        <div className="card-header pb-0 p-3">
                          <h6 className="mb-0">Select Currency</h6>
                        </div>
                        <div className="card-body p-3">
                          <ul className="list-group">
                            <li className="list-group-item border-0 px-0">
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
                            <li className="list-group-item border-0 px-0">
                              <div className="form-check form-check-info text-left">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="currency"
                                  value="ERC"
                                  id="curr_erc"
                                  onChange={() => setCurrencyType("ERC")}
                                />
                                <label className="form-check-label" htmlFor="curr_erc">
                                  {ercSymbol}
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </Formik>
      </main>
    </>
  );
}

export default MintPage;
