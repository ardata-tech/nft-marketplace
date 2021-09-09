import Web3 from "web3";
import { signinUser, signupUser } from "../services/userService";
const web3 = new Web3(Web3.givenProvider);

export const signIn = async (address) => {
    const msg = `I would like to Sign in for user with address: ${address}`;
    
    let JSONBody = {
        address
    }

    await web3.eth.personal.sign(msg, address, (err, signature) => {
      JSONBody.signature = signature;
    });
    
    try{
        const response = await signinUser(JSONBody);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        return {
            user: response.data.user,
            success: true
        };
    } catch (err) {
        return {
            success: false
        }       
    }
}

export const signUp = async (address,formData) => {
    const msg = `I would like to Sign Up for user with address: ${address}`;
    
    let JSONBody = {
        address,
        ...formData
    }

    await web3.eth.personal.sign(msg, address, (err, signature) => {
      JSONBody.signature = signature;
    });
    
    try{
        const response = await signupUser(JSONBody);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        return {
            user: response.data.user,
            success: true
        };
    } catch (err) {
        return {
            success: false
        }       
    }
}
