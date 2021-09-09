import { isValidAddress } from "ethereumjs-util";
import UserModel from "../models/user.js";

export const getUser = async (req, res) => {
  var { address } = req.params;

  if (!isValidAddress(address)) {
    return res.status(400).json({ message: "Invalid Address" });
  }

  address = address.toLowerCase();

  console.log("GET request for user: " + address);

  try {
    const user = await UserModel.findOne({ address }, { _id: 0, __v: 0 });
    if (!user) return res.status(404).json({ error: "user not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateUser = async (req, res) => {
  const address = req.address;
  const updatedFields = req.body;

  try {
    let {email, username, bio, pic} = await UserModel.findOne({ address }, { _id: 0, __v: 0 });

    const updatedUser = {
      email: updatedFields.email ? updatedFields.email : email ? email : '',
      username: updatedFields.username ? updatedFields.username : username ? username : '',
      bio: updatedFields.bio ? updatedFields.bio : bio ? bio : '',
      pic: updatedFields.pic ? updatedFields.pic : pic ? pic : '',
    }

    await UserModel.findOneAndUpdate(
      { address },
      updatedUser,
      { upsert: true },
      (err, doc) => {
        if (err)
          return res.send(500, {
            error: "Could not update profile at the moment",
          });
        return res.status(200).json(updatedUser);
      }
    );
    
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};
