import mongoose from 'mongoose';

const metaSchema = mongoose.Schema({
    tokenID: {
        type: String,
        required: true,
        unique: true,
    },
    name: String,
    description: String,
    external_url: String,
    category: String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var metaDataNFT = mongoose.model('metaDataNFT', metaSchema);

export default metaDataNFT;