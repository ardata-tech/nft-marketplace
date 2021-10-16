import { generateAccessToken } from "./utils.js";
import { isValidAddress } from "ethereumjs-util";
import UserModel from "../models/user.js";
import { recoverPersonalSignature } from "eth-sig-util";

const signup = async (req, res) => {
    
    const { address, signature,email,username } = req.body;

    try {
        if(!address || !signature){
            return res.status(400).json({ message: "Address or Signature missing" });
        }

        if(!isValidAddress(address)){
            return res.status(400).json({ message: "Invalid Address" });
        }

        const user = await UserModel.findOne({ address }, { _id: 0, __v: 0 });
        
        if (user) return res.status(401).json({ error: "User already exists, Please sign in." });

        const msg = `I would like to Sign Up for user with address: ${address}`;
        
        const signedAddress = recoverPersonalSignature({
            data: msg,
            sig: signature,
        });
        
        if (signedAddress.toLowerCase() === address.toLowerCase()) {

            await UserModel.create({ address,username,email });

            const token = generateAccessToken(address);
            
            const user = await UserModel.findOne({ address }, { _id: 0, __v: 0 });
        
            res.status(200).json({ token, user });

        } else {
            res.status(401).send({
                error: 'Signature verification failed',
            });
        }

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
}

export default signup;
