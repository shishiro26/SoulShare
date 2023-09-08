import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  userLocation: {
    type: String,
  },
  picturePath: {
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
    enum: ["food", "clothes", "other"],
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
