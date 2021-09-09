import React, {useContext, useEffect, useState} from 'react';
import {uploadFile} from "../services/utilService";
import {saveMeta} from "../services/metaService";
import {toast} from "react-toastify";
import {Form, Formik} from "formik";
import {useHistory} from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { Spinner } from 'reactstrap';
import {mintNFT, getMintFees} from "../utils/marketPlaceInteractor";
import {getTokenIdFromTxn} from "../utils/blockchainInteractor";
import useLoader from "../hooks/useLoader";
import * as Yup from 'yup';
const re = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
const NFT_VALIDATION_SCHEMA = Yup.object().shape({
    name: Yup.string()
        .max(120, 'Too Long!')
        .required('Title is Required'),
    description: Yup.string()
        .required('Description is Required'),
    category: Yup.string()
        .required('Category is Required'),
    image: Yup.string()
        .required('Image is  Required'),
    external_url: Yup.string().matches(re,'External Link is not valid'),
});
function MintPage(props) {
    const history = useHistory();
    const userContext = useContext(UserContext);
    const {handleStart,state}=userContext;
    const {user}= state;
    const [loader, showLoader, hideLoader] = useLoader();
    const[isLoading,setIsLoading] = useState(false);
    const[mintFees, setMintFees] = useState('0');

    const init  =  async ()=>{
        if (!user) await handleStart();
        setMintFees(await getMintFees());
    }

    useEffect(()=> {
        init()
    },[user])

    let newNFT = {
        name: '',
        description: '',
        external_url: '',
        category: '',
        image: '',
    };
    const onSubmit = async (values, {resetForm, setSubmitting}) => {
        await submit(values);
        setSubmitting(false)
        resetForm()
    };

    const setFileChange = async (files, setFieldValue) => {
        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append('file', files[0]);
            const {data} = await uploadFile(formData);
            const url = data.Location;
            if (url) {
                setFieldValue('image', url);
            }
        }catch (e) {
            toast.error('Something went wrong!')
        }finally {
            setIsLoading(false);
        }
    };

    const submit = async (values) => {
        showLoader();
        try {
            const tx = await mintNFT();
            const tokenID = getTokenIdFromTxn(tx);
            await saveMeta({...values, tokenID});
            history.push(`/nft/${tokenID}`)
            toast.success(`NFT minted with ${tokenID}`);
        } catch (err) {
            toast.error('Something went wrong!');
        } finally {
            hideLoader();
        }
    };

    return (
        <>
            {
                loader
            }
            <section className="gasless-area page-paddings" style={{marginTop: '50px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="section-title text-center">
                                <h2 data-watermark="Sale">Create NFT</h2>
                            </div>
                        </div>
                    </div>
                    <Formik initialValues={newNFT} validationSchema={NFT_VALIDATION_SCHEMA} onSubmit={onSubmit}>
                        {({isSubmitting, values, setFieldValue,errors,touched, handleChange}) => (
                            <Form autoComplete="random_string">
                                <div className="row">
                                    <div
                                        className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 offset-xl-2 offset-lg-2 offset-md-2">
                                        <div className="mint-item-main-box">
                                            <div className="easy-box">
                                                <div className="mint-item-form">
                                                    <div className="theme-input-box">
                                                        <label>Title</label>
                                                        <input className="theme-input" value={values.name}
                                                               onChange={handleChange} type="text" name="name" autoComplete="off"/>
                                                        {errors.title && touched.title ? (
                                                            <div className="text-danger mt-2">{errors.title}</div>
                                                        ) : null}
                                                    </div>
                                                    <div className="theme-input-box">
                                                        <label>Category</label>
                                                        <select className="theme-input" value={values.category}
                                                                onChange={handleChange} name="category">
                                                            <option disabled value="">Select Category</option>
                                                            <option value="ART">Art</option>
                                                            <option value="PHOTO">Photo</option>
                                                            <option value="GIF">Gif</option>
                                                        </select>
                                                        {errors.category && touched.category ? (
                                                            <div className="text-danger mt-2">{errors.category}</div>
                                                        ) : null}
                                                    </div>
                                                    <div className="theme-input-box">
                                                        <label>External Link</label>
                                                        <input className="theme-input" value={values.external_url}
                                                               onChange={handleChange} type="text" name="external_url" autoComplete="off"/>
                                                        {errors.external_url && touched.external_url ? (
                                                            <div className="text-danger mt-2">{errors.external_url}</div>
                                                        ) : null}
                                                    </div>
                                                    <div className="theme-input-box">
                                                        <label style={{margin: '0px'}}>Upload NFT image.</label>

                                                        <div className="upload-images-box clearfix">
                                                            {isLoading ?
                                                                <div className="text-center">
                                                                <Spinner style={{width: '6rem', height: '6rem'}}
                                                                         size="lg" color="primary"/>
                                                                </div>
                                                                :
                                                                    values.image ?
                                                                        <div className="upload-images-preview">
                                                                            <div onClick={()=>setFieldValue('image','')} className="d-flex mb-2"><i className="fas fa-times ml-auto" /></div>
                                                                            <img alt="image"
                                                                                 src={values.image}/>
                                                                        </div> :
                                                                        <div className="upload-images-item">
                                                                            <label htmlFor="file-upload">
                                                                                <i className="fas fa-plus"/>
                                                                                <p className="theme-description">Add
                                                                                    Image</p>
                                                                            </label>
                                                                            <input id="file-upload"
                                                                                   type="file"
                                                                                   className="d-none"
                                                                                   name="nftImage"
                                                                                   onChange={({currentTarget}) => {
                                                                                       setFileChange(currentTarget.files, setFieldValue)
                                                                                       currentTarget.value = null;
                                                                                   }}
                                                                                   accept="image/*"/>
                                                                        </div>

                                                            }

                                                        </div>
                                                        {errors.image && touched.image ? (
                                                            <div className="text-danger mt-2">{errors.image}</div>
                                                        ) : null}
                                                    </div>
                                                    <div className="theme-input-box">
                                                        <label>Description</label>
                                                        <textarea value={values.description} style={{resize:'none'}} onChange={handleChange}
                                                                  name="description" className="theme-input" id="editor"
                                                                  rows="6" placeholder="Enter Description..."/>
                                                        {errors.description && touched.description ? (
                                                            <div className="text-danger mt-2">{errors.description}</div>
                                                        ) : null}
                                                    </div>

                                                    <div className="theme-input-box text-center">
                                                        <button disabled={isSubmitting}
                                                                type="submit" className="theme-btn">Create
                                                        </button>
                                                        <p className="text-center text-muted mt-2">Mint Fee of {mintFees} eth will be charged.</p>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </section>
        </>
    );
}

export default MintPage;
