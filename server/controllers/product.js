import User from "../models/Users.js";
import Product from "../models/products.js";
import Email from "../models/Email.js";
import { LikeEmail } from "../utils/LikeTemplate.js";

export const createProduct = async (req, res) => {
    try {
        const { productName, productType, description, comments, likes, latitude, longitude } = req.body;
        const userId = req.params.id;
        const user = await User.findById(userId);
        const userName = user.UserName;

        if (!user) {
            return res.status(400).json({ message: "User doesn't exist" });
        }

        if (user.isVerified) {
            const base64Image = req?.file?.buffer.toString("base64");
            const newProduct = new Product({
                userId,
                userName,
                productName,
                productType,
                description,
                comments,
                likes,
                latitude,
                longitude,
                productImage: base64Image,
            });
            const savedProduct = await newProduct.save();
            if (!savedProduct) {
                return res.status(500).json({ message: "Error while saving the product" });
            }

            var likedEmails = await Email.find();
            const likedUserEmails = likedEmails.map((likedEmail) => likedEmail.email)
            let likedUsers = await Promise.all(likedUserEmails.map((likedMail) => User.findOne({ email: likedMail })))
            likedUsers.map((likedUserName) => LikeEmail(likedUserName.email, likedUserName.UserName, user.UserName, productName))

            if (productType === 'food') {
                setTimeout(async () => {
                    await Product.deleteMany({ userId: userId, productType: 'food' })
                    console.log({ Message: `${productName} has been deleted` });
                }, 1000 * 60 * 60 * 24)
            }
            return res.status(201).json({ message: `New Product Created: ${productName}` });
        } else {
            return res.status(401).json({ message: `User is not verified` });
        }

    } catch (error) {
        console.error("Error creating product:", error.message);
        return res.status(500).json({ message: `Internal server error: ${error.message}` });
    }
};


export const getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const products = await Product.findById({ userId: id }).sort({ createdAt: -1 }).lean().exec();

        if (products.length === 0) {
            return res.status(404).json({ error: "No products found for this user." });
        }

        return res.status(200).json(products);
    } catch (error) {
        console.error(`Error getting products: ${error.message}`);
        return res.status(500).json({ error: "Internal server error." });
    }
};

export const getsingleProduct = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        const products = await Product.findById(id);

        if (products.length === 0) {
            return res.status(404).json({ error: "No products found." });
        }

        return res.status(200).json(products);
    } catch (error) {
        console.error(`Error getting products: ${error.message}`);
        return res.status(500).json({ error: "Internal server error." });
    }
}



export const likeProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        const userId = req.params.userId;

        const user = await User.findById(userId)
        const product = await Product.findById(productId)
        const email = user.email

        if (user.isVerified === true) {
            if (!user || !product) {
                return res.json({ message: `User or product is invalid` })
            }
            if (product.likes.has(userId)) {
                product.likes.delete(`${userId}`)
                await Product.updateOne({ _id: productId }, { likes: product.likes })
                return res.status(200).json({ message: `DisLiked the post` })
            }
            product.likes.set(`${userId}`, 1);
            await Email.create({ email })

            await Product.updateOne({ _id: productId }, { likes: product.likes });
            return res.status(200).json({ message: `Liked the post` })
        } else {
            return res.status(401).json({ message: `User is not verified` })

        }
    } catch (err) {
        console.log(`Error getting the product :${err.message}`)
        return res.status(500).json({ message: `Internal server Error ${err}` })
    }
}

export const addComment = async (req, res) => {
    try {
        const productId = req.params.productId;
        const userId = req.params.userId;
        const { comment } = req.body;

        if (!comment || comment.length === 0) {
            return res.status(400).json({ error: 'Comment comment cannot be empty.' });
        }

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: 'Product not found.' });
        }

        const newComment = { userId, comment };
        await Product.updateOne({ _id: productId }, { $addToSet: { comments: newComment } });

        return res.status(201).json({ message: 'Comment added successfully.' });
    } catch (error) {
        console.error(`Error adding the comment: ${error.message}`);
        return res.status(500).json({ error: 'Internal server error.' });
    }
};


export const category = async (req, res) => {
    try {
        const productType = req.query.productType;

        const query = {};
        if (productType) {
            query.productType = productType;
        }

        const products = await Product.find(query).sort({ createdAt: -1 }).lean().exec();
        if (products.length === 0) {
            return res.status(404).json({ message: "No products found for this user" });
        }
        return res.status(200).send(products);
    } catch (error) {
        console.log(`Error retrieving products: ${error.message}`);
        return res.status(500).json({ message: `Internal server error: ${error}` });
    }
};


export const carouselImage = async (req, res) => {
    try {
        const productImages = await Product.find().limit(10).select('productImage');
        if (!productImages || productImages.length === 0) {
            return res.status(200).json([]);
        }
        res.status(200).json(productImages);
    } catch (error) {
        console.error(`Error fetching product images: ${error.message}`);
        res.status(500).json({ message: `Internal server error: ${error.message}` });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();

        if (!products || products.length === 0) {
            return res.status(404).json("No products found");
        }

        return res.status(200).json(products);
    } catch (error) {
        console.error(`Error fetching products: ${error.message}`);
        return res.status(500).json({ message: `Internal server error: ${error.message}` });
    }
}
