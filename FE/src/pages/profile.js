import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import UserContext from "../contexts/UserContext";
import {toast} from "react-toastify";
import {updateUser} from "../services/userService";
import {uploadFile} from "../services/utilService";

function Profile(props) {
    const {state,changeState}  = useContext(UserContext);
    const {user} = state;

    const [profileForm,setProfileForm] = useState({
        pic:'',
        username:'',
        email:'',
        address:'',
        bio:'',
    })

    useEffect(()=>{
        setProfileForm({
            pic:user?.pic || '',
            username:user?.username||'',
            email:user?.email||'',
            address:user?.address||'',
            bio:user?.bio || '',
        })
    },[user])

    const handleChange = e => {
        setProfileForm({...profileForm,[e.target.name]:e.target.value})
    }

    const handleSave = async()=>{
        try{
           const {data:returnedUser} = await updateUser(profileForm);
           if(returnedUser){
               const updatedUser = {...state.user, ...returnedUser};
               localStorage.setItem('user', JSON.stringify(updatedUser));
               changeState({user:updatedUser});
               toast.success('Profile Updated!');
           }
        }catch (e){
            toast.error('Something went wrong!');
        }
    }

    const setFileChange = async (files) => {
        try {
            const formData = new FormData();
            formData.append('file', files[0]);
            const {data} = await uploadFile(formData);
            const url = data.Location;
            if (url) {
                setProfileForm({...profileForm, pic: url});
            }
        }catch (e) {
            toast.error('Something went wrong!')
        }
    };

    return (
        <>
            <section className="user-panel-main-box" style={{marginTop:'75px',marginBottom:'50px'}}>
                <div className="container">
                    <div className="row">
                        {/* <pre>{JSON.stringify(profileForm,null,4)}</pre> */}
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="user-panel-main">
                                <div className="user-panel-breadcrumb">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="user-panel-breadcrumb-left">
                                                <h1>My Profile</h1>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="user-panel-breadcrumb-right clearfix">
                                                <ul className="clearfix">
                                                    <li>
                                                        <div className="user-setting-box">
                                                            <Link to="/create">
                                                                <i className="fas fa-plus"/>
                                                                <h4>Create item</h4>
                                                            </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="user-store-area">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="user-setting-box-area">
                                                <div className="row user-setting-box-top">
                                                    <div
                                                        className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 user-setting-left">
                                                        <div className="setting-change-profile text-center">
                                                            <div className="change-profile-icon">
                                                                {profileForm.pic ? 
                                                                <a target='_blank' href={profileForm.pic} rel='noreferrer'>
                                                                    <img alt='profile pic' src={profileForm.pic} className="change-profile-icon" ></img>
                                                                </a>
                                                                : <span>{profileForm.username.toUpperCase()[0]}</span> }
                                                                <label role="button" for="profile-pic-upload">
                                                                <i  className="fas fa-camera"></i>
                                                                </label>
                                                                <input id="profile-pic-upload"
                                                                    type="file"
                                                                    className="d-none"
                                                                    name="profilePic"
                                                                    onChange={({currentTarget}) => {
                                                                        setFileChange(currentTarget.files)
                                                                        currentTarget.value = null;
                                                                    }}
                                                                    accept="image/*"/>
                                                            </div>
                                                            <h3 className="user-title">Change Image</h3>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 user-setting-right">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                                <div className="theme-input-box">
                                                                    <label>User Name</label>
                                                                    <input className="theme-input" type="text"
                                                                           name="username"
                                                                           onChange={handleChange}
                                                                           value={profileForm?.username}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                                <div className="theme-input-box">
                                                                    <label>Wallet Address</label>
                                                                    <input className="theme-input" type="text"
                                                                           name="address"
                                                                           onChange={handleChange}
                                                                           value={profileForm?.address}
                                                                           disabled/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                                <div className="theme-input-box">
                                                                    <label>Email</label>
                                                                    <input className="theme-input" type="email"
                                                                           name="email"
                                                                           onChange={handleChange}
                                                                           value={profileForm?.email}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div
                                                                className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                                <div className="theme-input-box">
                                                                    <p className="theme-description">To update your
                                                                        address just change your account in your
                                                                        wallet.</p>
                                                                    <textarea
                                                                                name="bio"
                                                                                onChange={handleChange}
                                                                                value={profileForm?.bio}
                                                                                className="theme-input" rows={4}
                                                                               placeholder="Enter your Bio..."/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="theme-input-box text-center">
                                                    <button onClick={handleSave} type="button" className="theme-btn">Update Profile</button>
                                                </div>
                                            </div>
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

export default Profile;
