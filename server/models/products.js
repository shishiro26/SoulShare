import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    userName: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true,
    },
    productImage: {
        type: String,
    },
    productType: {
        type: String,
        enum: ['Food', 'Medicine', 'Pickle', 'Clothes', 'Other'],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    likes: {
        type: Map,
        of: Number,
        default: {},
    },
    comments: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
            },
            text: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    latitude: String,
    longitude: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timeseries: true });

const Product = mongoose.model('Product', productSchema);

export default Product;
