import mongoose from "npm:mongoose@^6.7";

const productSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: {
      type: Array,
      default: [],
    },
    productType: {
      type: String,
      required: true,
      enum: ["food", "clothes", "snacks", "medicines", "other"],
    },

    latitude: String,
    longitude: String,
  },

  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
