import React, {useState} from 'react';

function SignUpForm({onSignUp}) {

   const [signUpForm,setSignUpForm] = useState({
        email:'',
        username:''
    })

    const handleChange = e =>{
       const updated = {[e.target.name]:e.target.value}
       setSignUpForm({...signUpForm,...updated});
    }

    return (
        <div className="wallet-detected-info">
            <h3 className="theme-title">Create Account</h3>
            <p className="theme-description">Your email address is only used to send you important updates.<br/> Your username is how other users will identify you.</p>
            <div>
                <div className="theme-input-box mt-2">
                    <label>Email</label>
                    <input value={signUpForm.email} onChange={handleChange} className="theme-input" type="text"  name="email" />
                </div>
                <div  className="theme-input-box mt-2">
                    <label>UserName</label>
                    <input value={signUpForm.username} onChange={handleChange} className="theme-input" type="text"  name="username"/>
                </div>
            </div>
            <div className="wallet-detected-btn mt-2">
                <button disabled={!signUpForm.email || !signUpForm.username} onClick={()=>onSignUp(signUpForm)} className="theme-btn" target="_blank">Continue</button>
            </div>
        </div>
    );
}

export default SignUpForm;
