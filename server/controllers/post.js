import Post from "../models/posts";
import User from "../models/users";

/*Creating the Post */
export const createPost = async (req, res) => {
  const { userId, description, picturePath } = req.body;

  const user = await User.findById(userId);

  const newPost=new Post({
    userId,
    
  })
};
