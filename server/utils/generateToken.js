import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign(
    {
      userId,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "7d",
    }
  );
  res.cookie("jwt", token, {
    //using the HttpOnly attribute to prevent access to cookie values via javascript
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
