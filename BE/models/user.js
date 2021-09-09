import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  address: { 
    type: String, 
    required:  true,
    unique: true,
  },
  username: { type: String},
  email: { type: String},
  pic: { type: String},
  bio: { type: String},
});

export default mongoose.model("User", userSchema);
