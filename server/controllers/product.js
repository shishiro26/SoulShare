// import Product from "../models/products.js";
// import User from "../models/users.js";

// /*Creating the Post */
// export const createProduct = async (req, res) => {
//   const { userId, productName, image, productType } = req.body;
//   console.log(userId);
//   console.log(req.body);
//   const user = await User.findById(userId);

//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   // // Convert image to base64
//   // let base64Image = null;
//   // if (image) {
//   //   try {
//   //     const imageBuffer = Deno.readFileSync(image); // Assuming 'image' is the path to the image file
//   //     base64Image = imageBuffer.toString("base64");
//   //   } catch (error) {
//   //     console.error("Error converting image to base64:", error);
//   //   }
//   // }

//   const newProduct = new Product({
//     userId,
//     userName: user.firstName || "...",
//     productName,
//     latitude: user.latitude || "...",
//     longitude: user.latitude || "...",
//     productType: productType,
//     // image: base64Image, // Save the base64 representation of the image
//     image: req.file.filename,
//     likes: {},
//     comments: [],
//   });

//   await newProduct.save();

//   res.status(201).json({
//     message: `Post created successfully: ${newProduct}`,
//   });
// };
